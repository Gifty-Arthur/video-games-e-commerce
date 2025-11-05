
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


export interface GameSearchResult {
  gameID: string;
  steamAppID: string;
  cheapest: string;
  cheapestDealID: string;
  external: string; 
  internalName: string;
  thumb: string;
}


export interface GameCardData {
  gameID: string;
  title: string;
  thumb: string;
  salePrice: string;
  normalPrice: string;
  uniqueKey: string; 
}


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