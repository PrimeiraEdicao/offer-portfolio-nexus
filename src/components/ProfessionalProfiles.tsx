
import { User, MapPin, Check } from "lucide-react";
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
      description: "20+ years experience in residential and commercial construction."
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
      description: "Specializing in kitchen and bathroom renovations with modern designs."
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
      description: "Licensed electrician with expertise in smart home installations."
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
      description: "Emergency repairs and system installations available 24/7."
    }
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Featured Professionals</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {professionals.map((professional) => (
          <div
            key={professional.id}
            className="bg-slate-900/50 rounded-lg p-4 border border-slate-600 hover:border-slate-500 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500/20 p-2 rounded-full">
                  <User className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-white font-semibold">{professional.name}</h3>
                    {professional.verified && (
                      <Check className="h-4 w-4 text-green-400" />
                    )}
                  </div>
                  <p className="text-blue-400 text-sm">{professional.specialty}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-yellow-400 font-semibold">★ {professional.rating}</p>
                <p className="text-slate-400 text-sm">{professional.completedJobs} jobs</p>
              </div>
            </div>
            
            <p className="text-slate-300 text-sm mb-3">{professional.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3 text-slate-400" />
                  <span className="text-slate-400 text-sm">{professional.location}</span>
                </div>
                <span className="text-green-400 font-semibold text-sm">{professional.hourlyRate}</span>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Contact
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
