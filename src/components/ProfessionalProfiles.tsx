
import { User, MapPin, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProfessionalProfiles = () => {
  const professionals = [
    {
      id: 1,
      name: "Carlos Silva",
      specialty: "Construção Geral",
      location: "Área Central",
      rating: 4.9,
      completedJobs: 127,
      hourlyRate: "R$ 75/hora",
      verified: true,
      description: "Mais de 20 anos de experiência em construção residencial e comercial.",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Maria Santos",
      specialty: "Reforma de Interiores",
      location: "Zona Sul",
      rating: 4.8,
      completedJobs: 89,
      hourlyRate: "R$ 65/hora",
      verified: true,
      description: "Especialista em reformas de cozinha e banheiro com designs modernos.",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "João Oliveira",
      specialty: "Serviços Elétricos",
      location: "Centro da Cidade",
      rating: 4.9,
      completedJobs: 156,
      hourlyRate: "R$ 80/hora",
      verified: true,
      description: "Eletricista licenciado com expertise em instalações de casa inteligente.",
      avatar: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Pedro Costa",
      specialty: "Encanamento & HVAC",
      location: "Zona Norte",
      rating: 4.7,
      completedJobs: 98,
      hourlyRate: "R$ 70/hora",
      verified: true,
      description: "Reparos de emergência e instalações de sistemas disponíveis 24/7.",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Profissionais em Destaque</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {professionals.map((professional) => (
          <div
            key={professional.id}
            className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img 
                    src={professional.avatar} 
                    alt={professional.name}
                    className="w-16 h-16 rounded-full bg-gray-200 object-cover"
                  />
                  {professional.verified && (
                    <Check className="absolute -top-1 -right-1 h-5 w-5 text-green-500 bg-white rounded-full p-1" />
                  )}
                </div>
                <div>
                  <h3 className="text-gray-800 font-bold text-lg">{professional.name}</h3>
                  <p className="text-orange-600 font-medium">{professional.specialty}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-gray-800 font-semibold">{professional.rating}</span>
                </div>
                <p className="text-gray-600 text-sm">{professional.completedJobs} trabalhos</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-sm mb-4">{professional.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600 text-sm">{professional.location}</span>
                </div>
                <span className="text-green-600 font-bold">{professional.hourlyRate}</span>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Contatar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
