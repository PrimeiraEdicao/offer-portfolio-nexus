// src/pages/SegurancaPage.tsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TopBar } from "@/components/TopBar";
import { BottomNavigation } from "@/components/BottomNavigation"; // Ou outra navegação se preferir
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ChevronRight, KeyRound, ShieldCheck, Smartphone, FileText, ArrowLeft } from "lucide-react";

// Mock simples para verificar se o login foi com Google
// Em um app real, isso viria do seu estado de autenticação global
const useIsGoogleLogin = () => {
  // Defina como 'true' para simular login com Google, 'false' para login com email/senha
  const [isGoogleSession] = useState(false); 
  return isGoogleSession;
};

export default function SegurancaPage() {
  const navigate = useNavigate();
  const isGoogleLoggedIn = useIsGoogleLogin();
  const [biometriaAtiva, setBiometriaAtiva] = useState(true); // Botão on-off já ativo

  const menuOptions = [
    { 
      id: "dispositivos", 
      label: "Dispositivos Conectados", 
      icon: Smartphone, 
      action: () => console.log("Navegar para Dispositivos Conectados") // Placeholder
    },
    // A opção "Alterar Senha" será adicionada condicionalmente
    { 
      id: "documentos", 
      label: "Enviar Documentos de Verificação", 
      icon: FileText, 
      action: () => console.log("Navegar para Envio de Documentos") // Placeholder
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-200">
      <TopBar />
      <main className="container mx-auto px-4 py-6 space-y-6 pb-20">
        <Button variant="outline" onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
        </Button>

        <Card className="bg-white/90 backdrop-blur-sm border-white/60 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-800">Segurança</CardTitle>
            <CardDescription>Gerencie suas configurações de segurança e privacidade.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Opção de Biometria */}
            <div className="flex items-center justify-between p-4 rounded-lg border bg-white">
              <div className="flex items-center">
                <ShieldCheck className="mr-3 h-6 w-6 text-orange-500" />
                <Label htmlFor="biometria-switch" className="text-base text-gray-700">
                  Usar biometria para compras
                </Label>
              </div>
              <Switch
                id="biometria-switch"
                checked={biometriaAtiva}
                onCheckedChange={setBiometriaAtiva}
                aria-label="Usar biometria para compras"
              />
            </div>

            {/* Outras Opções de Menu */}
            <div className="space-y-2">
              {menuOptions.map((option) => (
                <Button
                  key={option.id}
                  variant="ghost"
                  className="w-full justify-between p-4 h-auto text-base text-gray-700 hover:bg-orange-50"
                  onClick={option.action}
                >
                  <div className="flex items-center">
                    <option.icon className="mr-3 h-5 w-5 text-orange-500" />
                    {option.label}
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Button>
              ))}

              {/* Alterar Senha - Condicional */}
              {!isGoogleLoggedIn && (
                <Button
                  variant="ghost"
                  className="w-full justify-between p-4 h-auto text-base text-gray-700 hover:bg-orange-50"
                  asChild
                >
                  <Link to="/solicitar-codigo-senha">
                    <div className="flex items-center">
                      <KeyRound className="mr-3 h-5 w-5 text-orange-500" />
                      Alterar Senha
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </Link>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
      {/* Considere se a BottomNavigation faz sentido aqui ou se uma navegação mais simples é melhor */}
      <BottomNavigation /> 
    </div>
  );
}