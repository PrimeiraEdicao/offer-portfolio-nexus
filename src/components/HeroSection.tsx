
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const HeroSection = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        Find Trusted Professionals for Your Home Projects
      </h2>
      <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
        Connect with verified construction, maintenance, and renovation experts. 
        Get quotes, compare services, and hire with confidence.
      </p>
      
      <div className="flex max-w-md mx-auto space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
          <Input 
            placeholder="What service do you need?" 
            className="pl-10 bg-slate-900/50 border-slate-600 text-white placeholder-slate-400"
          />
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Search
        </Button>
      </div>
    </div>
  );
};
