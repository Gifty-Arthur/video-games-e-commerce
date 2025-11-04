import type { 
  GameCardData, 
  GameDeal, 
  GameSearchResult, 
  Store, 
  GameDetails 
} from "@/types"; // Adjust path as needed

const API_BASE = "https://www.cheapshark.com/api/1.0";

/**
 * Fetches the default list of deals (e.g., Steam deals under $15).
 * Normalizes the data into our standard `GameCardData` shape.
 */
export const fetchDeals = async (): Promise<GameCardData[]> => {
  const res = await fetch(`${API_BASE}/deals?storeID=1&upperPrice=15`);
  if (!res.ok) throw new Error("Network response was not ok");
  const deals: GameDeal[] = await res.json();

  return deals.map((deal) => ({
    gameID: deal.gameID,
    title: deal.title,
    thumb: deal.thumb,
    salePrice: deal.salePrice,
    normalPrice: deal.normalPrice,
    uniqueKey: deal.dealID,
  }));
};

/**
 * Searches for games by title from the /games endpoint.
 * Normalizes the data into our standard `GameCardData` shape.
 */
export const searchGames = async (title: string): Promise<GameCardData[]> => {
  const res = await fetch(`${API_BASE}/games?title=${title}`);
  if (!res.ok) throw new Error("Network response was not ok");
  const games: GameSearchResult[] = await res.json();

  return games.map((game) => ({
    gameID: game.gameID,
    title: game.external,
    thumb: game.thumb,
    salePrice: game.cheapest,
    normalPrice: "N/A",
    uniqueKey: game.gameID,
  }));
};

/**
 * Fetches the master list of all stores.
 */
export const fetchStores = async (): Promise<Store[]> => {
  const res = await fetch(`${API_BASE}/stores`);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

/**
 * Fetches the details for a single game by its ID.
 */
export const fetchGameDetails = async (gameID: string): Promise<GameDetails> => {
  const res = await fetch(`${API_BASE}/games?id=${gameID}`);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};