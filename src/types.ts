export interface LaptopProduct {
  id: string;
  name: string;
  brand: 'HP' | 'Lenovo' | 'Dell' | 'Apple' | 'Other';
  processor: string;
  ram: string;
  storage: string;
  graphics: string;
  display: string;
  price: number;
  originalPrice?: number;
  condition: 'Grade A++ (Like New)' | 'Grade A (Excellent)' | 'Grade A- (Minor Marks)';
  image: string;
  batteryHealth: string;
  description: string;
  featured?: boolean;
  inStock: boolean;
  warranty: string;
}

export interface FilterState {
  searchQuery: string;
  brand: string;
  maxPrice: number;
  minPrice: number;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'name';
}
