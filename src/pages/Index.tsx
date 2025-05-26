
import { useState } from "react";
import { ServiceCategories } from "@/components/ServiceCategories";
import { ProfessionalProfiles } from "@/components/ProfessionalProfiles";
import { JobRequests } from "@/components/JobRequests";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {activeTab === "services" && (
          <>
            <HeroSection />
            <ServiceCategories />
          </>
        )}
        {activeTab === "professionals" && <ProfessionalProfiles />}
        {activeTab === "jobs" && <JobRequests />}
      </main>
    </div>
  );
};

export default Index;
