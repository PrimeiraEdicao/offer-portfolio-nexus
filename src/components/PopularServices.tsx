
import { ArrowRight } from "lucide-react";

export const PopularServices = () => {
  const popularServices = [
    {
      id: 1,
      name: "Kitchen Renovation",
      image: "/placeholder.svg",
      requests: 89,
      avgPrice: "$3,500"
    },
    {
      id: 2,
      name: "Emergency Plumbing",
      image: "/placeholder.svg",
      requests: 156,
      avgPrice: "$180"
    },
    {
      id: 3,
      name: "Electrical Installation",
      image: "/placeholder.svg",
      requests: 67,
      avgPrice: "$450"
    },
    {
      id: 4,
      name: "House Painting",
      image: "/placeholder.svg",
      requests: 203,
      avgPrice: "$1,200"
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Popular Services</h2>
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
              <p className="text-orange-600 text-sm font-medium">{service.requests} requests</p>
              <p className="text-green-600 text-sm font-bold">{service.avgPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
