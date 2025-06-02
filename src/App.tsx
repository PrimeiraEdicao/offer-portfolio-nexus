// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PerfilPage from "./pages/PerfilPage"; 
import EditarPerfilPage from "./pages/EditarPerfilPage"; 
import SegurancaPage from "./pages/segurancaPage";
import SolicitarCodigoSenhaPage from "./pages/SolicitarCodigoSenhaRedefinicao";
import NovaSenhaPage from "./pages/NovaSenhaPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/editar-perfil" element={<EditarPerfilPage />} />
          <Route path="/seguranca" element={<SegurancaPage />} /> {/* Nova Rota */}
          <Route path="/solicitar-codigo-senha" element={<SolicitarCodigoSenhaPage />} /> {/* Nova Rota */}
          <Route path="/nova-senha" element={<NovaSenhaPage />} /> {/* Nova Rota */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;