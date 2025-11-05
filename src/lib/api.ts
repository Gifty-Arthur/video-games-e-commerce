import type { 
  GameCardData, 
  GameDeal, 
  GameSearchResult, 
  Store, 
  GameDetails 
} from "@/types"; 

const API_BASE = "https://www.cheapshark.com/api/1.0";

//fetch deals function
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

// Search for games by title.
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


//store fetch 
export const fetchStores = async (): Promise<Store[]> => {
  const res = await fetch(`${API_BASE}/stores`);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

//game details fetch
export const fetchGameDetails = async (gameID: string): Promise<GameDetails> => {
  const res = await fetch(`${API_BASE}/games?id=${gameID}`);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};