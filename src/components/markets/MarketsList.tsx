import { useState } from "react";
import { MarketChip } from "./MarketChip";

const MARKETS = [
  "Singapore",
  "Indonesia",
  "Taiwan",
  "China",
  "Australia",
  "South Korea",
  "Thailand",
  "Hong Kong",
  "Malaysia",
  "India",
  "Philippines",
  "Japan",
];

export const MarketsList = () => {
  const [selectedMarkets, setSelectedMarkets] = useState<Set<string>>(
    new Set(["Singapore", "Malaysia", "Japan"]),
  );

  const toggleMarket = (market: string) => {
    const newSelected = new Set(selectedMarkets);
    if (newSelected.has(market)) {
      newSelected.delete(market);
    } else {
      newSelected.add(market);
    }
    setSelectedMarkets(newSelected);
  };

  return (
    <div className="flex w-[552px] max-w-full gap-[12px_8px] flex-wrap mt-[60px] max-md:mt-10">
      {MARKETS.map((market) => (
        <MarketChip
          key={market}
          name={market}
          selected={selectedMarkets.has(market)}
          onClick={() => toggleMarket(market)}
        />
      ))}
    </div>
  );
};
