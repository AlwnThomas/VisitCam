export interface Store{
    name: string;
    type: 'restaurant' | 'supermarket';
    lat: number;
    lng: number;
    image?: string;
}

export const stores: Store[] =
    [
        {"name": "Pizza Pilgrims Cambridge", "type": "restaurant", "lat": 52.2062, "lng": 0.1218},
        {"name": "Midsummer House", "type": "restaurant", "lat": 52.2135, "lng": 0.1244},
        {"name": "Zhonghua Traditional Snacks", "type": "restaurant", "lat": 52.2031, "lng": 0.1381},
        {"name": "Eko Kitchen", "type": "restaurant", "lat": 52.2030, "lng": 0.1380},
        {"name": "Savino's", "type": "restaurant", "lat": 52.2046, "lng": 0.1237},
        {"name": "Pint Shop", "type": "restaurant", "lat": 52.2053, "lng": 0.1196},
        {"name": "The Tiffin Truck", "type": "restaurant", "lat": 52.2045, "lng": 0.1205},
        {"name": "Stem + Glory", "type": "restaurant", "lat": 52.2101, "lng": 0.1253},
        {"name": "Restaurant Twenty-Two", "type": "restaurant", "lat": 52.2132, "lng": 0.1239},
        {"name": "The Oak Bistro", "type": "restaurant", "lat": 52.1989, "lng": 0.1232},
        {"name": "Charlie Chan", "type": "restaurant", "lat": 52.2050, "lng": 0.1230},
        {"name": "Carluccio's - Cambridge", "type": "restaurant", "lat": 52.2058, "lng": 0.1207},
        {"name": "Asda Cambridge Superstore", "type": "supermarket", "lat": 52.2022, "lng": 0.1580},
        {"name": "Tesco Superstore (Newmarket Rd)", "type": "supermarket", "lat": 52.2070, "lng": 0.1460},
        {"name": "Sainsbury's (Sidney Street)", "type": "supermarket", "lat": 52.2065, "lng": 0.1228},
        {"name": "Little Waitrose (Fitzroy Street)", "type": "supermarket", "lat": 52.2060, "lng": 0.1315},
        {"name": "ALDI Cambridge (Histon Road)", "type": "supermarket", "lat": 52.2190, "lng": 0.1218},
        {"name": "Ocean Supermarket", "type": "supermarket", "lat": 52.2026, "lng": 0.1380},
        {"name": "Cho Mee Supermarket", "type": "supermarket", "lat": 52.2025, "lng": 0.1395},
        {"name": "Co-op Food - Green End Road", "type": "supermarket", "lat": 52.2250, "lng": 0.1450}
      ];