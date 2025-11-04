/**
 * Shape of data from the /deals endpoint.
 */
export interface GameDeal {
  internalName: string;
  title: string;
  metacriticLink: string;
  dealID: string;
  storeID: string;
  gameID: string;
  salePrice: string;
  normalPrice: string;
  isOnSale: string;
  savings: string;
  metacriticScore: string;
  steamRatingText: string;
  steamRatingPercent: string;
  steamRatingCount: string;
  steamAppID: string;
  releaseDate: number;
  lastChange: number;
  dealRating: string;
  thumb: string;
}

/**
 * Shape of data from the /games endpoint (when searching).
 */
export interface GameSearchResult {
  gameID: string;
  steamAppID: string;
  cheapest: string;
  cheapestDealID: string;
  external: string; // This is the game title
  internalName: string;
  thumb: string;
}

/**
 * A normalized, clean shape that our GameList component will use.
 * This combines the relevant fields from both GameDeal and GameSearchResult.
 */
export interface GameCardData {
  gameID: string;
  title: string;
  thumb: string;
  salePrice: string;
  normalPrice: string;
  uniqueKey: string; // dealID or gameID
}

/**
 * Shape of data from the /stores endpoint.
 */
export interface Store {
  storeID: string;
  storeName: string;
  isActive: 1 | 0;
  images: {
    banner: string;
    logo: string;
    icon: string;
  };
}

/**
 * Shape of data from the /games?id=... endpoint (for the detail page).
 */
export interface GameDetails {
  info: {
    title: string;
    steamAppID: string;
    thumb: string;
  };
  cheapestPriceEver: {
    price: string;
    date: number;
  };
  deals: {
    storeID: string;
    dealID: string;
    price: string;
    retailPrice: string;
    savings: string;
  }[];
}