
import { TrendingUp, TrendingDown } from "lucide-react";

export const MarketOverview = () => {
  const marketData = [
    { symbol: "S&P 500", price: "4,567.89", change: "+1.2%", isPositive: true },
    { symbol: "NASDAQ", price: "14,234.56", change: "-0.3%", isPositive: false },
    { symbol: "DOW", price: "34,567.12", change: "+0.8%", isPositive: true },
    { symbol: "GOLD", price: "$1,987.45", change: "+2.1%", isPositive: true },
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Market Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {marketData.map((item) => (
          <div
            key={item.symbol}
            className="bg-slate-900/50 rounded-lg p-4 border border-slate-600 hover:border-slate-500 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-400 text-sm">{item.symbol}</p>
                <p className="text-white font-bold text-lg">{item.price}</p>
              </div>
              <div
                className={`flex items-center space-x-1 px-2 py-1 rounded text-sm ${
                  item.isPositive
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {item.isPositive ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                <span>{item.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
