
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
      case "High": return "text-red-600 bg-red-100";
      case "Medium": return "text-yellow-600 bg-yellow-100";
      case "Low": return "text-green-600 bg-green-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-6 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Active Job Requests</h2>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          Post New Job
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
                {job.urgency} Priority
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
                Submit Proposal
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
