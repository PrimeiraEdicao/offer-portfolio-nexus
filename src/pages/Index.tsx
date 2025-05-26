
import { useState } from "react";
import { ServiceCategories } from "@/components/ServiceCategories";
import { ProfessionalProfiles } from "@/components/ProfessionalProfiles";
import { JobRequests } from "@/components/JobRequests";
import { TopBar } from "@/components/TopBar";
import { BottomNavigation } from "@/components/BottomNavigation";
import { PopularServices } from "@/components/PopularServices";
import { FeaturedProfessionals } from "@/components/FeaturedProfessionals";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-200">
      <TopBar />
      
      <main className="container mx-auto px-4 py-6 space-y-6 pb-20">
        {activeTab === "home" && (
          <>
            <ServiceCategories />
            <PopularServices />
            <FeaturedProfessionals />
          </>
        )}
        {activeTab === "search" && <ServiceCategories />}
        {activeTab === "professionals" && <ProfessionalProfiles />}
        {activeTab === "jobs" && <JobRequests />}
      </main>

      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Index;
