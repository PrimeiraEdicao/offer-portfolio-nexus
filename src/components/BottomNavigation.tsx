// src/components/BottomNavigation.tsx
import { Home, Search, ClipboardList, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // Importar Link e useLocation
import { cn } from "@/lib/utils"; // Se você usar cn para classes condicionales

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  path: string;
}

export const BottomNavigation = () => {
  const location = useLocation(); // Para saber a rota ativa

  const navItems: NavItem[] = [
    { id: "inicio", label: "Início", icon: Home, path: "/" },
    { id: "buscar", label: "Buscar", icon: Search, path: "/buscar" }, // Exemplo de nova rota
    { id: "trabalhos", label: "Trabalhos", icon: ClipboardList, path: "/trabalhos" }, // Exemplo
    { id: "perfil", label: "Perfil", icon: User, path: "/perfil" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-slate-800 to-slate-900 border-t border-slate-700 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-around py-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                to={item.path}
                key={item.id}
                className={cn(
                  "flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-all duration-200",
                  isActive
                    ? "bg-orange-500 text-white shadow-lg"
                    : "text-slate-300 hover:text-white hover:bg-slate-700"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};