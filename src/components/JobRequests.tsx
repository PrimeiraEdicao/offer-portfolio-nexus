
import { Clock, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export const JobRequests = () => {
  const jobRequests = [
    {
      id: 1,
      title: "Kitchen Renovation",
      description: "Complete kitchen remodel including cabinets, countertops, and appliances.",
      budget: "$8,000 - $12,000",
      location: "Downtown",
      postedTime: "2 hours ago",
      urgency: "Medium",
      category: "Renovation"
    },
    {
      id: 2,
      title: "Bathroom Plumbing Repair",
      description: "Fix leaking pipes under the sink and replace faucet.",
      budget: "$300 - $500",
      location: "Suburbs",
      postedTime: "4 hours ago",
      urgency: "High",
      category: "Maintenance"
    },
    {
      id: 3,
      title: "Deck Construction",
      description: "Build a 12x16 wooden deck with railing in backyard.",
      budget: "$3,500 - $5,000",
      location: "North District",
      postedTime: "1 day ago",
      urgency: "Low",
      category: "Construction"
    },
    {
      id: 4,
      title: "Electrical Panel Upgrade",
      description: "Replace old electrical panel with modern 200-amp service.",
      budget: "$1,200 - $1,800",
      location: "City Center",
      postedTime: "6 hours ago",
      urgency: "Medium",
      category: "Electrical"
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "High": return "text-red-400 bg-red-500/20";
      case "Medium": return "text-yellow-400 bg-yellow-500/20";
      case "Low": return "text-green-400 bg-green-500/20";
      default: return "text-slate-400 bg-slate-500/20";
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Active Job Requests</h2>
        <Button className="bg-green-600 hover:bg-green-700">
          Post New Job
        </Button>
      </div>
      
      <div className="space-y-4">
        {jobRequests.map((job) => (
          <div
            key={job.id}
            className="bg-slate-900/50 rounded-lg p-4 border border-slate-600 hover:border-slate-500 transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-white font-semibold text-lg">{job.title}</h3>
                <span className="text-blue-400 text-sm">{job.category}</span>
              </div>
              <span className={`px-2 py-1 rounded text-xs font-medium ${getUrgencyColor(job.urgency)}`}>
                {job.urgency} Priority
              </span>
            </div>
            
            <p className="text-slate-300 text-sm mb-4">{job.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-green-400" />
                  <span className="text-green-400 font-semibold">{job.budget}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-400 text-sm">{job.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-400 text-sm">{job.postedTime}</span>
                </div>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Submit Proposal
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
