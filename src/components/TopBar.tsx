
import { Search, Hammer } from "lucide-react";
import { Input } from "@/components/ui/input";

export const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="bg-white p-2 rounded-full shadow-md">
              <Hammer className="h-6 w-6 text-orange-500" />
            </div>
            <h1 className="text-xl font-bold text-white hidden sm:block">ServiçoPro</h1>
          </div>
          
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              <Input 
                placeholder="Buscar serviços..." 
                className="pl-10 bg-white border-0 shadow-md rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
