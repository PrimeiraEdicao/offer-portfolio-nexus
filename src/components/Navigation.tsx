
import { Wallet, TrendingUp } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  return (
    <nav className="bg-slate-900/90 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">TradePro</h1>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab("portfolio")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                activeTab === "portfolio"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Wallet className="h-4 w-4" />
              <span>Portfolio</span>
            </button>
            
            <button
              onClick={() => setActiveTab("trading")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                activeTab === "trading"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              <TrendingUp className="h-4 w-4" />
              <span>Trading</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
