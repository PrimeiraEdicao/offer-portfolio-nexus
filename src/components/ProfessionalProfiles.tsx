
import { User, MapPin, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProfessionalProfiles = () => {
  const professionals = [
    {
      id: 1,
      name: "Mike Thompson",
      specialty: "General Construction",
      location: "Downtown Area",
      rating: 4.9,
      completedJobs: 127,
      hourlyRate: "$75/hr",
      verified: true,
      description: "20+ years experience in residential and commercial construction.",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      specialty: "Interior Renovation",
      location: "Suburbs",
      rating: 4.8,
      completedJobs: 89,
      hourlyRate: "$65/hr",
      verified: true,
      description: "Specializing in kitchen and bathroom renovations with modern designs.",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Carlos Rodriguez",
      specialty: "Electrical Services",
      location: "City Center",
      rating: 4.9,
      completedJobs: 156,
      hourlyRate: "$80/hr",
      verified: true,
      description: "Licensed electrician with expertise in smart home installations.",
      avatar: "/placeholder.svg"
    },
    {
      id: 4,
      name: "David Chen",
      specialty: "Plumbing & HVAC",
      location: "North District",
      rating: 4.7,
      completedJobs: 98,
      hourlyRate: "$70/hr",
      verified: true,
      description: "Emergency repairs and system installations available 24/7.",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Professionals</h2>
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
                <p className="text-gray-600 text-sm">{professional.completedJobs} jobs</p>
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
                Contact
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
