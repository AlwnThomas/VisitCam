export interface Store {
  name: string;
  type: 'restaurant' | 'supermarket';
  category: 'dine-in' | 'fastfood' | 'convenience';
  lat: number;
  lng: number;
  image?: string;
}

export const stores: Store[] = [
  // 🍽️ DINE-IN
  { name: "Pizza Pilgrims Cambridge", type: "restaurant", category: "dine-in", lat: 52.2062, lng: 0.1218 },
  { name: "Midsummer House", type: "restaurant", category: "dine-in", lat: 52.2135, lng: 0.1244 },
  { name: "Zhonghua Traditional Snacks", type: "restaurant", category: "dine-in", lat: 52.2031, lng: 0.1381 },
  { name: "Eko Kitchen", type: "restaurant", category: "dine-in", lat: 52.2030, lng: 0.1380 },
  { name: "Savino's", type: "restaurant", category: "dine-in", lat: 52.2046, lng: 0.1237 },
  { name: "Pint Shop", type: "restaurant", category: "dine-in", lat: 52.2053, lng: 0.1196 },
  { name: "The Tiffin Truck", type: "restaurant", category: "dine-in", lat: 52.2045, lng: 0.1205 },
  { name: "Stem + Glory", type: "restaurant", category: "dine-in", lat: 52.2101, lng: 0.1253 },
  { name: "Restaurant Twenty-Two", type: "restaurant", category: "dine-in", lat: 52.2132, lng: 0.1239 },
  { name: "The Oak Bistro", type: "restaurant", category: "dine-in", lat: 52.1989, lng: 0.1232 },
  { name: "Charlie Chan", type: "restaurant", category: "dine-in", lat: 52.2050, lng: 0.1230 },
  { name: "Carluccio's - Cambridge", type: "restaurant", category: "dine-in", lat: 52.2058, lng: 0.1207 },

  // 🛒 CONVENIENCE
  { name: "Asda Cambridge Superstore", type: "supermarket", category: "convenience", lat: 52.2022, lng: 0.1580 },
  { name: "Tesco Superstore (Newmarket Rd)", type: "supermarket", category: "convenience", lat: 52.2070, lng: 0.1460 },
  { name: "Sainsbury's (Sidney Street)", type: "supermarket", category: "convenience", lat: 52.2065, lng: 0.1228 },
  { name: "Little Waitrose (Fitzroy Street)", type: "supermarket", category: "convenience", lat: 52.2060, lng: 0.1315 },
  { name: "ALDI Cambridge (Histon Road)", type: "supermarket", category: "convenience", lat: 52.2190, lng: 0.1218 },
  { name: "Ocean Supermarket", type: "supermarket", category: "convenience", lat: 52.2026, lng: 0.1380 },
  { name: "Cho Mee Supermarket", type: "supermarket", category: "convenience", lat: 52.2025, lng: 0.1395 },
  { name: "Co-op Food - Green End Road", type: "supermarket", category: "convenience", lat: 52.2250, lng: 0.1450 },

  // 🍔 FASTFOOD
  { name: "McDonald's", type: "restaurant", category: "fastfood", lat: 52.2059, lng: 0.1186 },
  { name: "Wendy's", type: "restaurant", category: "fastfood", lat: 52.2049, lng: 0.1226 },
  { name: "Popeyes", type: "restaurant", category: "fastfood", lat: 52.2055, lng: 0.1194 },
  { name: "KFC", type: "restaurant", category: "fastfood", lat: 52.2055, lng: 0.1194 },
  { name: "Taco Bell", type: "restaurant", category: "fastfood", lat: 52.2055, lng: 0.1194 },
  { name: "Subway", type: "restaurant", category: "fastfood", lat: 52.2050, lng: 0.1223 },
  { name: "Five Guys", type: "restaurant", category: "fastfood", lat: 52.2055, lng: 0.1194 },
  { name: "itsu", type: "restaurant", category: "fastfood", lat: 52.2050, lng: 0.1223 },
  { name: "Nando's", type: "restaurant", category: "fastfood", lat: 52.2044, lng: 0.1240 },
  { name: "Steak & Honour", type: "restaurant", category: "fastfood", lat: 52.2053, lng: 0.1186 },
  { name: "Gardenia", type: "restaurant", category: "fastfood", lat: 52.2059, lng: 0.1186 },
  { name: "The Trailer of Life", type: "restaurant", category: "fastfood", lat: 52.2055, lng: 0.1194 },
  { name: "Benets Café", type: "restaurant", category: "fastfood", lat: 52.2045, lng: 0.1189 },
  { name: "Aromi", type: "restaurant", category: "fastfood", lat: 52.2049, lng: 0.1185 },
  { name: "Chai Walla", type: "restaurant", category: "fastfood", lat: 52.2047, lng: 0.1221 },
  { name: "Guerrilla Kitchen", type: "restaurant", category: "fastfood", lat: 52.2050, lng: 0.1210 },
  { name: "Nanna Mexico", type: "restaurant", category: "fastfood", lat: 52.2055, lng: 0.1208 },
  { name: "Butch Annie’s", type: "restaurant", category: "fastfood", lat: 52.2056, lng: 0.1202 },
  { name: "Ed’s Easy Diner", type: "restaurant", category: "fastfood", lat: 52.2046, lng: 0.1220 },
  { name: "Africfood", type: "restaurant", category: "fastfood", lat: 52.2055, lng: 0.1194 },
  { name: "The Cook's Nest", type: "restaurant", category: "fastfood", lat: 52.2055, lng: 0.1194 },
  { name: "Arepa's Station", type: "restaurant", category: "fastfood", lat: 52.2055, lng: 0.1194 },
  { name: "Just Greek Gyros", type: "restaurant", category: "fastfood", lat: 52.2055, lng: 0.1194 },
];
