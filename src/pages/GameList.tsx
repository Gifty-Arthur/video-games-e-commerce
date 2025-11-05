import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { GameCardData } from "../types";
import { ArrowLeft } from "lucide-react";

import { fetchDeals, searchGames } from "../lib/api";

export function GameList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const { data, isLoading, error } = useQuery<GameCardData[]>({
    queryKey: searchTerm ? ["search", searchTerm] : ["deals"],
    queryFn: searchTerm ? () => searchGames(searchTerm) : fetchDeals,
  });

  if (isLoading) {
    return <div className="text-center p-10">Loading games...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-10">
        Error: {error.message}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <div className="text-center p-10">No games found.</div>;
  }

  return (
    <div>
      <div className=" px-8">
        <Button
          variant="outline"
          size="icon" // This makes the button small and square
          onClick={() => navigate("/")}
          className="mb-4" // I removed px-8, which conflicts with size="icon"
        >
          <ArrowLeft className="h-4 w-4" />
          {/* Updated text for screen readers */}
          <span className="sr-only">Go to Home Page</span>
        </Button>
      </div>

      <h2 className="text-3xl font-bold mb-9 px-8">
        {searchTerm ? `Results for "${searchTerm}"` : "Top Deals"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.map((game) => (
          <Link to={`/game/${game.gameID}`} key={game.uniqueKey}>
            <Card className="hover:border-fuchsia-500 transition-colors overflow-hidden">
              <CardHeader className="p-0">
                <img
                  src={game.thumb}
                  alt={game.title}
                  className="rounded-t-md w-full aspect-video object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg truncate font-semibold mb-2">
                  {game.title}
                </CardTitle>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-green-500">
                    ${game.salePrice}
                  </span>
                  {game.normalPrice !== "N/A" && (
                    <span className="text-sm line-through text-gray-500">
                      ${game.normalPrice}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
