// src/pages/NovaSenhaPage.tsx
import { useState } from "react";
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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TopBar } from "@/components/TopBar";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

// Schema de validação para nova senha
const passwordValidation = z
  .string()
  .min(6, "A senha deve ter no mínimo 6 caracteres.")
  .regex(/(?=.*[a-z])/, "Deve conter ao menos uma letra minúscula.")
  .regex(/(?=.*[A-Z])/, "Deve conter ao menos uma letra maiúscula.")
  .regex(/(?=.*\d)/, "Deve conter ao menos um número.")
  .regex(/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/, "Deve conter ao menos um caractere especial.");
  // A validação de "não ser números em sequência" é complexa para Zod puro e geralmente
  // requer uma função .refine com lógica customizada mais elaborada.
  // Exemplo simples para bloquear "123" ou "abc" (pode ser expandido):
  // .refine(val => !/(123|234|345|456|567|678|789|abc|bcd)/i.test(val), "A senha não deve conter sequências óbvias.");


const formSchema = z.object({
  novaSenha: passwordValidation,
  confirmarSenha: passwordValidation,
}).refine((data) => data.novaSenha === data.confirmarSenha, {
  message: "As senhas não coincidem.",
  path: ["confirmarSenha"], // Erro aplicado ao campo de confirmação
});

type NovaSenhaFormData = z.infer<typeof formSchema>;

export default function NovaSenhaPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showNovaSenha, setShowNovaSenha] = useState(false);
  const [showConfirmarSenha, setShowConfirmarSenha] = useState(false);

  const form = useForm<NovaSenhaFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      novaSenha: "",
      confirmarSenha: "",
    },
  });

  const onSubmit = (data: NovaSenhaFormData) => {
    console.log("Nova senha:", data.novaSenha);
    // Aqui você faria a chamada para sua API para alterar a senha
    toast({
      title: "Senha Alterada!",
      description: "Sua senha foi atualizada com sucesso.",
    });
    navigate("/perfil"); // Ou para a página de login
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
                <CardTitle className="text-2xl font-bold text-gray-800">Definir Nova Senha</CardTitle>
                <CardDescription>Escolha uma senha forte e segura.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                    control={form.control}
                    name="novaSenha"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Nova Senha</FormLabel>
                        <FormControl>
                            <div className="relative">
                            <Input
                                type={showNovaSenha ? "text" : "password"}
                                placeholder="********"
                                {...field}
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                                onClick={() => setShowNovaSenha(!showNovaSenha)}
                            >
                                {showNovaSenha ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                            </div>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="confirmarSenha"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Confirmar Nova Senha</FormLabel>
                         <FormControl>
                            <div className="relative">
                            <Input
                                type={showConfirmarSenha ? "text" : "password"}
                                placeholder="********"
                                {...field}
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                                onClick={() => setShowConfirmarSenha(!showConfirmarSenha)}
                            >
                                {showConfirmarSenha ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                            </div>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                    Salvar Nova Senha
                    </Button>
                </form>
                </Form>
            </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
}