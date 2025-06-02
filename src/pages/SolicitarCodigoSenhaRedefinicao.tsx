// src/pages/SolicitarCodigoSenhaPage.tsx
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TopBar } from "@/components/TopBar";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";

// Mock do email do usuário - em um app real, viria do estado de autenticação
const userEmail = "d*******@gmail.com"; 

const formSchema = z.object({
  codigo: z.string().length(6, "O código deve ter 6 dígitos.").regex(/^\d+$/, "Apenas números são permitidos."),
});

type SolicitarCodigoFormData = z.infer<typeof formSchema>;

export default function SolicitarCodigoSenhaPage() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<SolicitarCodigoFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      codigo: "",
    },
  });

  const onSubmit = (data: SolicitarCodigoFormData) => {
    console.log("Código enviado:", data.codigo);
    // Aqui você faria a validação do código com seu backend
    // Se o código for válido:
    toast({
      title: "Código Verificado!",
      description: "Prossiga para alterar sua senha.",
    });
    navigate("/nova-senha"); // Navega para a próxima etapa
    // Se inválido:
    // form.setError("codigo", { type: "manual", message: "Código inválido." });
    // toast({ title: "Erro", description: "Código inválido.", variant: "destructive" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-200">
      <TopBar />
      <main className="container mx-auto px-4 py-6 flex flex-col items-center">
        <div className="w-full max-w-md">
            <Button variant="outline" onClick={() => navigate(-1)} className="mb-4 self-start">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
            </Button>

            <Card className="bg-white/90 backdrop-blur-sm border-white/60 shadow-lg w-full">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Verificar E-mail</CardTitle>
                <CardDescription>
                Enviamos um código de verificação para {userEmail}. Por favor, insira-o abaixo.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                    control={form.control}
                    name="codigo"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Código de Verificação</FormLabel>
                        <FormControl>
                            <Input placeholder="_ _ _ _ _ _" {...field} maxLength={6} />
                        </FormControl>
                        <FormDescription>
                            O código expira em 10 minutos.
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                    Verificar Código e Continuar
                    </Button>
                </form>
                </Form>
                <Button variant="link" className="mt-4 w-full text-orange-600">
                Não recebeu o código? Reenviar.
                </Button>
            </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
}