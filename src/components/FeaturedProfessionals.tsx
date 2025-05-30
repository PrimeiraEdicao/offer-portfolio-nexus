
import { Star, Check } from "lucide-react";

export const FeaturedProfessionals = () => {
  const professionals = [
    {
      id: 1,
      name: "Carlos Silva",
      specialty: "Construção Geral",
      rating: 4.9,
      tag: "Mais Avaliado",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Maria Santos",
      specialty: "Design de Interiores",
      rating: 4.8,
      tag: "Resposta Rápida",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "João Oliveira",
      specialty: "Serviços Elétricos",
      rating: 4.9,
      tag: "Profissional Licenciado",
      avatar: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Ana Costa",
      specialty: "Especialista em Encanamento",
      rating: 4.7,
      tag: "Serviço 24h",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-6 shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Profissionais em Destaque</h2>
      
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {professionals.map((professional) => (
          <div
            key={professional.id}
            className="flex-shrink-0 w-40 bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer text-center"
          >
            <div className="relative mb-3">
              <img 
                src={professional.avatar} 
                alt={professional.name}
                className="w-16 h-16 rounded-full mx-auto bg-gray-200 object-cover"
              />
              <Check className="absolute -top-1 -right-1 h-5 w-5 text-green-500 bg-white rounded-full p-1" />
            </div>
            
            <h3 className="font-semibold text-gray-800 text-sm mb-1">{professional.name}</h3>
            <p className="text-orange-600 text-xs mb-2">{professional.specialty}</p>
            
            <div className="flex items-center justify-center space-x-1 mb-2">
              <Star className="h-3 w-3 text-yellow-400 fill-current" />
              <span className="text-xs text-gray-600">{professional.rating}</span>
            </div>
            
            <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
              {professional.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
