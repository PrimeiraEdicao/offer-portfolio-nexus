
import { Hammer, Wrench, PaintBucket, Zap, Building, Users, HardHat } from "lucide-react";

export const ServiceCategories = () => {
  const categories = [
    {
      name: "Bricklayer",
      icon: Building,
      jobCount: 45,
      color: "bg-red-100 border-red-300",
      iconColor: "text-red-600"
    },
    {
      name: "Architect",
      icon: Users,
      jobCount: 23,
      color: "bg-blue-100 border-blue-300",
      iconColor: "text-blue-600"
    },
    {
      name: "Engineer",
      icon: HardHat,
      jobCount: 34,
      color: "bg-green-100 border-green-300",
      iconColor: "text-green-600"
    },
    {
      name: "Plumber",
      icon: Wrench,
      jobCount: 78,
      color: "bg-cyan-100 border-cyan-300",
      iconColor: "text-cyan-600"
    },
    {
      name: "Electrician",
      icon: Zap,
      jobCount: 56,
      color: "bg-yellow-100 border-yellow-300",
      iconColor: "text-yellow-600"
    },
    {
      name: "Painter",
      icon: PaintBucket,
      jobCount: 32,
      color: "bg-purple-100 border-purple-300",
      iconColor: "text-purple-600"
    },
    {
      name: "Construction",
      icon: Hammer,
      jobCount: 67,
      color: "bg-orange-100 border-orange-300",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Service Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center space-y-3 cursor-pointer group"
          >
            <div className={`w-20 h-20 rounded-full ${category.color} border-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-md`}>
              <category.icon className={`h-8 w-8 ${category.iconColor}`} />
            </div>
            <div className="text-center">
              <h3 className="text-gray-800 font-semibold text-sm">{category.name}</h3>
              <p className="text-orange-600 text-xs font-medium">{category.jobCount} active jobs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
