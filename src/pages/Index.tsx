
import { useState } from "react";
import { Portfolio } from "@/components/Portfolio";
import { TradingOffers } from "@/components/TradingOffers";
import { Navigation } from "@/components/Navigation";
import { MarketOverview } from "@/components/MarketOverview";

const Index = () => {
  const [activeTab, setActiveTab] = useState("portfolio");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        <MarketOverview />
        
        {activeTab === "portfolio" && <Portfolio />}
        {activeTab === "trading" && <TradingOffers />}
      </main>
    </div>
  );
};

export default Index;
