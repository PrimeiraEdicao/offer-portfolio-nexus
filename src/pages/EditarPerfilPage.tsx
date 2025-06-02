// src/pages/EditarPerfilPage.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TopBar } from "@/components/TopBar";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { validarCpf } from "@/lib/validators"; // 1. IMPORTE A FUNÇÃO DE VALIDAÇÃO

interface Banco {
  ispb: string;
  name: string;
  code: number | null;
  fullName: string | null;
}

// 2. ATUALIZE O SCHEMA DE VALIDAÇÃO
const formSchema = z.object({
  banco: z.string().min(1, "Selecione um banco."),
  agencia: z.string().min(3, "Agência inválida.").max(6, "Agência inválida."),
  conta: z.string().min(3, "Conta inválida.").max(15, "Conta inválida."),
  tipoChavePix: z.enum(["cpf", "email", "telefone", "aleatoria"], {
    required_error: "Selecione o tipo da chave Pix.",
  }),
  chavePix: z.string().min(1, "Chave Pix é obrigatória."),
}).refine(data => {
  if (data.tipoChavePix === "cpf") {
    return validarCpf(data.chavePix); // USA A NOVA FUNÇÃO AQUI
  }
  return true;
}, {
  message: "CPF informado como chave Pix é inválido.", // MENSAGEM DE ERRO ATUALIZADA
  path: ["chavePix"], 
});

type EditarPerfilFormData = z.infer<typeof formSchema>;

export default function EditarPerfilPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [bancos, setBancos] = useState<Banco[]>([]);
  const [isLoadingBancos, setIsLoadingBancos] = useState(true);

  useEffect(() => {
    fetch("https://brasilapi.com.br/api/banks/v1")
      .then((res) => res.json())
      .then((data: Banco[]) => {
        setBancos(data.filter(banco => banco.code !== null).sort((a, b) => (a.code!) - (b.code!)));
        setIsLoadingBancos(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar bancos:", error);
        toast({
          title: "Erro ao carregar bancos",
          description: "Não foi possível buscar a lista de bancos.",
          variant: "destructive",
        });
        setIsLoadingBancos(false);
      });
  }, [toast]);

  const form = useForm<EditarPerfilFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      banco: "",
      agencia: "",
      conta: "",
      tipoChavePix: undefined,
      chavePix: "",
    },
  });

  const onSubmit = (data: EditarPerfilFormData) => {
    console.log("Dados do formulário:", data);
    toast({
      title: "Dados Salvos!",
      description: "Suas informações bancárias foram atualizadas com sucesso.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-200">
      <TopBar />
      <main className="container mx-auto px-4 py-6 space-y-6 pb-20">
        <Button variant="outline" onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
        </Button>

        <Card className="bg-white/90 backdrop-blur-sm border-white/60 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-800">Editar Dados Bancários</CardTitle>
            <CardDescription>Atualize suas informações para recebimento.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="banco"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome do Banco</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isLoadingBancos}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={isLoadingBancos ? "Carregando bancos..." : "Selecione o banco"} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {!isLoadingBancos && bancos.map((banco) => (
                            <SelectItem key={banco.code} value={`${banco.code} - ${banco.name}`}>
                              {banco.code} - {banco.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="agencia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Agência (com dígito, se houver)</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: 0001 ou 0001-X" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="conta"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Conta Corrente (com dígito)</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: 0012345-6" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="tipoChavePix"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Tipo da Chave Pix</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1 md:flex-row md:space-y-0 md:space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="cpf" />
                            </FormControl>
                            <FormLabel className="font-normal">CPF</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="email" />
                            </FormControl>
                            <FormLabel className="font-normal">E-mail</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="telefone" />
                            </FormControl>
                            <FormLabel className="font-normal">Telefone</FormLabel>
                          </FormItem>
                           <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="aleatoria" />
                            </FormControl>
                            <FormLabel className="font-normal">Chave Aleatória</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="chavePix"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Chave Pix</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Digite sua chave Pix" 
                          {...field} 
                          onChange={(e) => {
                            if (form.getValues("tipoChavePix") === "cpf") {
                              field.onChange(e.target.value.replace(/\D/g, ''));
                            } else {
                              field.onChange(e.target.value);
                            }
                          }}
                        />
                      </FormControl>
                       {form.watch("tipoChavePix") === "cpf" && (
                        <FormDescription>
                          Digite apenas os 11 números do CPF.
                        </FormDescription>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full md:w-auto bg-orange-500 hover:bg-orange-600">
                  Salvar Alterações
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}