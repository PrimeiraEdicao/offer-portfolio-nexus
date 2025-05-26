
import { useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

export const Portfolio = () => {
  const [holdings] = useState([
    { symbol: "AAPL", name: "Apple Inc.", shares: 50, avgPrice: 175.23, currentPrice: 182.45, value: 9122.50 },
    { symbol: "GOOGL", name: "Alphabet Inc.", shares: 25, avgPrice: 2340.12, currentPrice: 2456.78, value: 61419.50 },
    { symbol: "MSFT", name: "Microsoft Corp.", shares: 75, avgPrice: 285.67, currentPrice: 298.34, value: 22375.50 },
    { symbol: "TSLA", name: "Tesla Inc.", shares: 30, avgPrice: 245.89, currentPrice: 231.56, value: 6946.80 },
  ]);

  const performanceData = [
    { date: "Jan", value: 45000 },
    { date: "Feb", value: 52000 },
    { date: "Mar", value: 48000 },
    { date: "Apr", value: 61000 },
    { date: "May", value: 55000 },
    { date: "Jun", value: 67000 },
    { date: "Jul", value: 72000 },
    { date: "Aug", value: 68000 },
    { date: "Sep", value: 75000 },
    { date: "Oct", value: 82000 },
    { date: "Nov", value: 89000 },
    { date: "Dec", value: 95000 },
  ];

  const totalValue = holdings.reduce((sum, holding) => sum + holding.value, 0);
  const totalGainLoss = holdings.reduce((sum, holding) => {
    const gainLoss = (holding.currentPrice - holding.avgPrice) * holding.shares;
    return sum + gainLoss;
  }, 0);
  const totalGainLossPercentage = ((totalGainLoss / (totalValue - totalGainLoss)) * 100);

  return (
    <div className="space-y-6">
      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
          <h3 className="text-slate-400 text-sm mb-2">Total Portfolio Value</h3>
          <p className="text-3xl font-bold text-white">${totalValue.toLocaleString()}</p>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
          <h3 className="text-slate-400 text-sm mb-2">Total Gain/Loss</h3>
          <div className="flex items-center space-x-2">
            <p className={`text-3xl font-bold ${totalGainLoss >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              ${Math.abs(totalGainLoss).toLocaleString()}
            </p>
            {totalGainLoss >= 0 ? (
              <TrendingUp className="h-6 w-6 text-green-400" />
            ) : (
              <TrendingDown className="h-6 w-6 text-red-400" />
            )}
          </div>
          <p className={`text-sm ${totalGainLoss >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {totalGainLossPercentage >= 0 ? '+' : ''}{totalGainLossPercentage.toFixed(2)}%
          </p>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
          <h3 className="text-slate-400 text-sm mb-2">Available Cash</h3>
          <p className="text-3xl font-bold text-white">$12,450</p>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Portfolio Performance</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={performanceData}>
              <defs>
                <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #475569',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#3B82F6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#portfolioGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Holdings */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Your Holdings</h3>
        <div className="space-y-4">
          {holdings.map((holding) => {
            const gainLoss = (holding.currentPrice - holding.avgPrice) * holding.shares;
            const gainLossPercentage = ((holding.currentPrice - holding.avgPrice) / holding.avgPrice) * 100;
            
            return (
              <div
                key={holding.symbol}
                className="bg-slate-900/50 rounded-lg p-4 border border-slate-600 hover:border-slate-500 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="font-semibold text-white">{holding.symbol}</p>
                        <p className="text-sm text-slate-400">{holding.name}</p>
                      </div>
                    </div>
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-slate-400">Shares</p>
                        <p className="text-white">{holding.shares}</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Avg Price</p>
                        <p className="text-white">${holding.avgPrice.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Current Price</p>
                        <p className="text-white">${holding.currentPrice.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Total Value</p>
                        <p className="text-white">${holding.value.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`flex items-center space-x-1 ${gainLoss >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {gainLoss >= 0 ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span className="font-semibold">
                        ${Math.abs(gainLoss).toFixed(2)}
                      </span>
                    </div>
                    <p className={`text-sm ${gainLoss >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {gainLossPercentage >= 0 ? '+' : ''}{gainLossPercentage.toFixed(2)}%
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
