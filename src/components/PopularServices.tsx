
import { ArrowRight } from "lucide-react";

export const PopularServices = () => {
  const popularServices = [
    {
      id: 1,
      name: "Reforma de Cozinha",
      image: "/placeholder.svg",
      requests: 89,
      avgPrice: "R$ 15.000"
    },
    {
      id: 2,
      name: "Encanamento de Emergência",
      image: "/placeholder.svg",
      requests: 156,
      avgPrice: "R$ 350"
    },
    {
      id: 3,
      name: "Instalação Elétrica",
      image: "/placeholder.svg",
      requests: 67,
      avgPrice: "R$ 850"
    },
    {
      id: 4,
      name: "Pintura Residencial",
      image: "/placeholder.svg",
      requests: 203,
      avgPrice: "R$ 2.400"
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Serviços Populares</h2>
        <ArrowRight className="h-5 w-5 text-orange-500" />
      </div>
      
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {popularServices.map((service) => (
          <div
            key={service.id}
            className="flex-shrink-0 w-48 bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <img 
              src={service.image} 
              alt={service.name}
              className="w-full h-24 object-cover rounded-lg mb-3 bg-gray-100"
            />
            <h3 className="font-semibold text-gray-800 mb-2">{service.name}</h3>
            <div className="space-y-1">
              <p className="text-orange-600 text-sm font-medium">{service.requests} solicitações</p>
              <p className="text-green-600 text-sm font-bold">{service.avgPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
