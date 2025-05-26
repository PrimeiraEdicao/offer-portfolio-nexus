
import { useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface TradingOffer {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
  recommendation: "BUY" | "SELL" | "HOLD";
  analyst: string;
  targetPrice: number;
  confidence: number;
}

export const TradingOffers = () => {
  const { toast } = useToast();
  const [selectedOffer, setSelectedOffer] = useState<TradingOffer | null>(null);
  const [quantity, setQuantity] = useState("");
  const [orderType, setOrderType] = useState<"market" | "limit">("market");

  const [offers] = useState<TradingOffer[]>([
    {
      id: "1",
      symbol: "NVDA",
      name: "NVIDIA Corporation",
      price: 456.78,
      change: 12.45,
      changePercent: 2.8,
      volume: "45.2M",
      recommendation: "BUY",
      analyst: "Goldman Sachs",
      targetPrice: 520.00,
      confidence: 92
    },
    {
      id: "2",
      symbol: "META",
      name: "Meta Platforms Inc.",
      price: 298.34,
      change: -5.67,
      changePercent: -1.9,
      volume: "23.1M",
      recommendation: "HOLD",
      analyst: "Morgan Stanley",
      targetPrice: 310.00,
      confidence: 78
    },
    {
      id: "3",
      symbol: "AMD",
      name: "Advanced Micro Devices",
      price: 124.56,
      change: 8.23,
      changePercent: 7.1,
      volume: "67.8M",
      recommendation: "BUY",
      analyst: "JPMorgan",
      targetPrice: 150.00,
      confidence: 89
    },
    {
      id: "4",
      symbol: "INTC",
      name: "Intel Corporation",
      price: 48.92,
      change: -2.34,
      changePercent: -4.6,
      volume: "34.5M",
      recommendation: "SELL",
      analyst: "Credit Suisse",
      targetPrice: 42.00,
      confidence: 85
    }
  ]);

  const handleTrade = (action: "buy" | "sell") => {
    if (!selectedOffer || !quantity) {
      toast({
        title: "Error",
        description: "Please select an offer and enter quantity",
        variant: "destructive",
      });
      return;
    }

    const totalValue = parseFloat(quantity) * selectedOffer.price;
    
    toast({
      title: "Order Submitted",
      description: `${action.toUpperCase()} order for ${quantity} shares of ${selectedOffer.symbol} (${orderType} order) - Total: $${totalValue.toLocaleString()}`,
    });

    setSelectedOffer(null);
    setQuantity("");
  };

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case "BUY":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "SELL":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "HOLD":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Professional Trading Offers</h2>
        <p className="text-slate-400 mb-6">
          Curated investment opportunities from top financial institutions
        </p>

        <div className="grid gap-4">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              className={`bg-slate-900/50 border-slate-600 hover:border-slate-500 transition-all cursor-pointer ${
                selectedOffer?.id === offer.id ? 'border-blue-500 bg-blue-500/10' : ''
              }`}
              onClick={() => setSelectedOffer(offer)}
            >
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="flex items-center space-x-3">
                      <div>
                        <h3 className="font-semibold text-white text-lg">{offer.symbol}</h3>
                        <p className="text-slate-400 text-sm">{offer.name}</p>
                      </div>
                      <Badge className={getRecommendationColor(offer.recommendation)}>
                        {offer.recommendation}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">${offer.price.toFixed(2)}</p>
                    <div className={`flex items-center space-x-1 ${
                      offer.change >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {offer.change >= 0 ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span>${Math.abs(offer.change).toFixed(2)} ({offer.changePercent >= 0 ? '+' : ''}{offer.changePercent.toFixed(1)}%)</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-slate-400">Volume</p>
                    <p className="text-white font-medium">{offer.volume}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Analyst</p>
                    <p className="text-white font-medium">{offer.analyst}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Target Price</p>
                    <p className="text-white font-medium">${offer.targetPrice.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Confidence</p>
                    <p className="text-white font-medium">{offer.confidence}%</p>
                  </div>
                </div>

                {selectedOffer?.id === offer.id && (
                  <div className="mt-4 pt-4 border-t border-slate-600">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-slate-400 mb-2">
                          Quantity
                        </label>
                        <Input
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          placeholder="Enter shares"
                          className="bg-slate-800 border-slate-600 text-white"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-slate-400 mb-2">
                          Order Type
                        </label>
                        <select
                          value={orderType}
                          onChange={(e) => setOrderType(e.target.value as "market" | "limit")}
                          className="w-full p-2 bg-slate-800 border border-slate-600 rounded-md text-white"
                        >
                          <option value="market">Market Order</option>
                          <option value="limit">Limit Order</option>
                        </select>
                      </div>
                      <div className="flex gap-2 md:items-end">
                        <Button
                          onClick={() => handleTrade("buy")}
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          Buy
                        </Button>
                        <Button
                          onClick={() => handleTrade("sell")}
                          variant="outline"
                          className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                        >
                          Sell
                        </Button>
                      </div>
                    </div>
                    {quantity && (
                      <div className="mt-3 text-right">
                        <p className="text-slate-400 text-sm">
                          Total: <span className="text-white font-semibold">
                            ${(parseFloat(quantity) * offer.price).toLocaleString()}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
