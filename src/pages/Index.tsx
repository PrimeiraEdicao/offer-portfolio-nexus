// src/pages/Index.tsx
// Remova useState se activeTab não for mais usado para renderização condicional aqui
// import { useState } from "react"; 
import { ServiceCategories } from "@/components/ServiceCategories";
import { ProfessionalProfiles } from "@/components/ProfessionalProfiles"; // Estes seriam movidos para suas próprias páginas
import { JobRequests } from "@/components/JobRequests";         // Estes seriam movidos para suas próprias páginas
import { TopBar } from "@/components/TopBar";
import { BottomNavigation } from "@/components/BottomNavigation";
import { PopularServices } from "@/components/PopularServices";
import { FeaturedProfessionals } from "@/components/FeaturedProfessionals";

const Index = () => {
  // O estado activeTab pode não ser mais necessário aqui se a navegação
  // por abas agora é feita por rotas distintas.
  // const [activeTab, setActiveTab] = useState("inicio");

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-200">
      <TopBar />
      
      <main className="container mx-auto px-4 py-6 space-y-6 pb-20">
        {/* Index.tsx agora só renderiza o conteúdo da rota "/" (Início) */}
        <ServiceCategories />
        <PopularServices />
        <FeaturedProfessionals />
        
        {/* O conteúdo abaixo seria movido para suas próprias páginas/rotas:
        {activeTab === "buscar" && <ServiceCategories />} 
        {activeTab === "profissionais" && <ProfessionalProfiles />}
        {activeTab === "trabalhos" && <JobRequests />}
        */}
      </main>

      {/* Chame BottomNavigation sem as props, assumindo que ele foi atualizado */}
      <BottomNavigation />
    </div>
  );
};

export default Index;