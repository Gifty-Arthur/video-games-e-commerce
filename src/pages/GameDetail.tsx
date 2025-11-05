import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import type { Store, GameDetails } from "@/types";
import { ArrowLeft } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

// API functions
import { fetchStores, fetchGameDetails } from "../lib/api";

export function GameDetailPage() {
  const { gameID } = useParams<{ gameID: string }>();
  const navigate = useNavigate();
  //TanStack
  const { data: storesData, isLoading: isLoadingStores } = useQuery<Store[]>({
    queryKey: ["stores"],
    queryFn: fetchStores,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const { data: gameData, isLoading: isLoadingGame } = useQuery<GameDetails>({
    queryKey: ["game", gameID],
    queryFn: () => fetchGameDetails(gameID!),
    enabled: !!gameID,
  });

  if (isLoadingStores || isLoadingGame) {
    return <div className="text-center p-10">Loading price details...</div>;
  }

  if (!gameData || !storesData) {
    return (
      <div className="text-center p-10">Game or store data not found.</div>
    );
  }

  const storeMap = new Map<string, Store>();
  storesData.forEach((store) => {
    if (store.isActive) {
      storeMap.set(store.storeID, store);
    }
  });

  const { info, deals, cheapestPriceEver } = gameData;

  return (
    <div className="max-w-4xl mx-auto">
      <Button
        variant="outline"
        size="icon"
        onClick={() => navigate("/games")}
        className="mb-4"
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Go back</span>
      </Button>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <img
          src={info.thumb}
          alt={info.title}
          className="w-full md:w-1/3 rounded-md object-cover aspect-square"
        />

        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{info.title}</h1>
          <p className="text-lg text-gray-600">
            Cheapest price ever:
            <span className="text-2xl font-bold text-green-500 ml-2">
              ${cheapestPriceEver.price}
            </span>
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Price Comparison</h2>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Store</TableHead>
              <TableHead>Current Price</TableHead>
              <TableHead>Retail Price</TableHead>
              <TableHead>Savings</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deals.map((deal) => {
              const storeInfo = storeMap.get(deal.storeID);
              if (!storeInfo) return null;

              const isCheapest = deal.price === cheapestPriceEver.price;

              return (
                <TableRow
                  key={deal.dealID}
                  className={isCheapest ? "border-2 border-fuchsia-500" : ""}
                >
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://www.cheapshark.com${storeInfo.images.icon}`}
                        alt={storeInfo.storeName}
                        className="w-6 h-6"
                      />
                      {storeInfo.storeName}
                    </div>
                  </TableCell>
                  <TableCell className="font-bold text-lg text-green-500">
                    ${deal.price}
                  </TableCell>
                  <TableCell className="line-through text-gray-500">
                    ${deal.retailPrice}
                  </TableCell>
                  <TableCell className="text-green-600 font-medium">
                    {Math.floor(parseFloat(deal.savings))}%
                  </TableCell>
                  <TableCell className="text-right">
                    <Button asChild>
                      <a
                        href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-cyan-500 hover:bg-cyan-600"
                      >
                        Buy Now
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
