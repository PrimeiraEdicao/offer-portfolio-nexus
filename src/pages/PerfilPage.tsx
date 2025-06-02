// src/pages/PerfilPage.tsx (versão corrigida)

import { TopBar } from "@/components/TopBar";
// Remova o useState se 'activeTab' não for mais usado internamente na PerfilPage
// import { useState } from "react"; 
import { BottomNavigation } from "@/components/BottomNavigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Edit3, LogOut, Shield, Settings } from "lucide-react";

const PerfilPage = () => {
  // Se você não precisa mais de 'activeTab' para outra lógica nesta página,
  // você pode remover a linha abaixo:
  // const [activeTab, setActiveTab] = useState("perfil"); 

  const userData = {
    name: "Usuário Exemplo",
    email: "usuario@example.com",
    avatarUrl: "/placeholder.svg",
    memberSince: "Janeiro de 2024",
    phone: "(11) 98765-4321",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-200">
      <TopBar /> 
      
      <main className="container mx-auto px-4 py-6 space-y-6 pb-20">
        <Card className="bg-white/90 backdrop-blur-sm border-white/60 shadow-lg">
          <CardHeader className="text-center">
            <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-orange-500">
              <AvatarImage src={userData.avatarUrl} alt={userData.name} />
              <AvatarFallback>
                <User className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl font-bold text-gray-800">{userData.name}</CardTitle>
            <p className="text-gray-600">{userData.email}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-700">Telefone:</p>
                <p className="text-gray-600">{userData.phone}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Membro desde:</p>
                <p className="text-gray-600">{userData.memberSince}</p>
              </div>
            </div>

            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Edit3 className="mr-2 h-4 w-4" /> Editar Perfil
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" /> Configurações da Conta
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Shield className="mr-2 h-4 w-4" /> Segurança e Privacidade
              </Button>
              <Button variant="destructive" className="w-full justify-start">
                <LogOut className="mr-2 h-4 w-4" /> Sair
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Chame BottomNavigation sem as props activeTab e setActiveTab */}
      <BottomNavigation />
    </div>
  );
};

export default PerfilPage;