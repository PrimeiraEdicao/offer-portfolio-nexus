
import { Hammer, Wrench, PaintBucket, Zap } from "lucide-react";

export const ServiceCategories = () => {
  const categories = [
    {
      name: "Construction",
      description: "Building, extensions, structural work",
      icon: Hammer,
      jobCount: 45,
      avgPrice: "$2,500 - $15,000"
    },
    {
      name: "Maintenance",
      description: "Repairs, upkeep, preventive care",
      icon: Wrench,
      jobCount: 78,
      avgPrice: "$150 - $800"
    },
    {
      name: "Renovation",
      description: "Kitchen, bathroom, room makeovers",
      icon: PaintBucket,
      jobCount: 32,
      avgPrice: "$1,200 - $8,500"
    },
    {
      name: "Electrical",
      description: "Wiring, installations, repairs",
      icon: Zap,
      jobCount: 56,
      avgPrice: "$200 - $1,500"
    }
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Service Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-slate-900/50 rounded-lg p-4 border border-slate-600 hover:border-slate-500 transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <category.icon className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold">{category.name}</h3>
            </div>
            <p className="text-slate-400 text-sm mb-3">{category.description}</p>
            <div className="space-y-1">
              <p className="text-green-400 text-sm">{category.jobCount} active jobs</p>
              <p className="text-slate-300 text-sm font-medium">{category.avgPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
