
import { Clock, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export const JobRequests = () => {
  const jobRequests = [
    {
      id: 1,
      title: "Reforma de Cozinha",
      description: "Reforma completa da cozinha incluindo armários, bancadas e eletrodomésticos.",
      budget: "R$ 20.000 - R$ 30.000",
      location: "Centro",
      postedTime: "2 horas atrás",
      urgency: "Média",
      category: "Reforma"
    },
    {
      id: 2,
      title: "Reparo de Encanamento",
      description: "Consertar vazamento nos canos debaixo da pia e trocar a torneira.",
      budget: "R$ 300 - R$ 500",
      location: "Zona Sul",
      postedTime: "4 horas atrás",
      urgency: "Alta",
      category: "Manutenção"
    },
    {
      id: 3,
      title: "Construção de Deck",
      description: "Construir um deck de madeira 4x5 metros com corrimão no quintal.",
      budget: "R$ 8.000 - R$ 12.000",
      location: "Zona Norte",
      postedTime: "1 dia atrás",
      urgency: "Baixa",
      category: "Construção"
    },
    {
      id: 4,
      title: "Upgrade do Quadro Elétrico",
      description: "Substituir quadro elétrico antigo por serviço moderno de 200 ampères.",
      budget: "R$ 2.500 - R$ 4.000",
      location: "Centro da Cidade",
      postedTime: "6 horas atrás",
      urgency: "Média",
      category: "Elétrica"
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "Alta": return "text-red-600 bg-red-100";
      case "Média": return "text-yellow-600 bg-yellow-100";
      case "Baixa": return "text-green-600 bg-green-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-6 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Solicitações de Trabalho Ativas</h2>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          Publicar Novo Trabalho
        </Button>
      </div>
      
      <div className="space-y-4">
        {jobRequests.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-200"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-gray-800 font-bold text-lg">{job.title}</h3>
                <span className="text-orange-600 font-medium">{job.category}</span>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getUrgencyColor(job.urgency)}`}>
                Prioridade {job.urgency}
              </span>
            </div>
            
            <p className="text-gray-700 mb-4">{job.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <span className="text-green-600 font-bold">{job.budget}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">{job.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">{job.postedTime}</span>
                </div>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Enviar Proposta
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
