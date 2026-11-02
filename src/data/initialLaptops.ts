import { LaptopProduct } from '../types';

export const INITIAL_LAPTOPS: LaptopProduct[] = [
  {
    id: 'hp-pavilion-g6',
    name: 'HP Pavilion G6',
    brand: 'HP',
    processor: 'Intel Core i7 2nd Generation',
    ram: '4GB DDR3 RAM',
    storage: '320GB HDD',
    graphics: '2GB Graphics',
    display: '15.6-inch Display',
    price: 28000,
    originalPrice: 32000,
    condition: 'Grade A (Excellent)',
    image: '/src/assets/images/laptop_hp_pavilion_1793649741810.jpg',
    batteryHealth: '2.5 to 3.5 Hours Backup',
    description: 'A versatile laptop powered by an Intel Core i7 processor and dedicated 2GB graphics. Perfect for office tasks, students, media consumption, and light editing on a spacious 15.6-inch display.',
    featured: true,
    inStock: true,
    warranty: '7-Day Checking & Replacement Warranty'
  },
  {
    id: 'lenovo-thinkpad-t440s',
    name: 'Lenovo ThinkPad T440s',
    brand: 'Lenovo',
    processor: 'Intel Core i5 4th Generation',
    ram: '8GB DDR3 RAM',
    storage: '256GB SSD',
    graphics: 'Intel HD Graphics 4400',
    display: '14-inch Display',
    price: 42000,
    originalPrice: 47000,
    condition: 'Grade A++ (Like New)',
    image: '/src/assets/images/laptop_lenovo_thinkpad_1793649742500.jpg',
    batteryHealth: 'Dual Battery (4+ Hours Backup)',
    description: 'Legendary ThinkPad military-grade durability with an Intel Core i5 processor and lightning-fast 256GB SSD. Comfortable ergonomic keyboard, portable 14-inch form factor, and dual battery architecture.',
    featured: true,
    inStock: true,
    warranty: '7-Day Checking & Replacement Warranty'
  },
  {
    id: 'dell-latitude-7490',
    name: 'Dell Latitude 7490 Ultrabook',
    brand: 'Dell',
    processor: 'Intel Core i5 8th Generation (Quad-Core)',
    ram: '8GB DDR4 RAM',
    storage: '256GB NVMe SSD',
    graphics: 'Intel UHD Graphics 620',
    display: '14.0-inch FHD (1920x1080) Anti-Glare',
    price: 54000,
    originalPrice: 59000,
    condition: 'Grade A++ (Like New)',
    image: '/src/assets/images/laptop_dell_latitude_1793649742085.jpg',
    batteryHealth: '3.5 to 4.5 Hours Backup',
    description: 'Sleek premium business ultrabook with 8th Gen Quad-Core processor, crisp Full HD display, backlit keyboard, and USB Type-C support. Ideal for programmers and corporate professionals.',
    featured: true,
    inStock: true,
    warranty: '7-Day Checking & Replacement Warranty'
  },
  {
    id: 'hp-elitebook-840-g5',
    name: 'HP EliteBook 840 G5 Aluminum',
    brand: 'HP',
    processor: 'Intel Core i5 8th Generation',
    ram: '16GB DDR4 RAM',
    storage: '512GB NVMe M.2 SSD',
    graphics: 'Intel UHD 620 Graphics',
    display: '14.0-inch IPS FHD Slim Bezel',
    price: 68000,
    originalPrice: 75000,
    condition: 'Grade A++ (Like New)',
    image: '/src/assets/images/laptop_hp_pavilion_1793649741810.jpg',
    batteryHealth: '4+ Hours Backup',
    description: 'Full unibody aluminum chassis featuring Bang & Olufsen tuned audio, privacy shutter webcam, fingerprint sensor, and generous 16GB RAM for heavy multitasking.',
    featured: true,
    inStock: true,
    warranty: '7-Day Checking & Replacement Warranty'
  },
  {
    id: 'lenovo-thinkpad-x1-carbon',
    name: 'Lenovo ThinkPad X1 Carbon Gen 6',
    brand: 'Lenovo',
    processor: 'Intel Core i7 8th Generation',
    ram: '16GB LPDDR3 RAM',
    storage: '512GB High-Speed SSD',
    graphics: 'Intel UHD Graphics 620',
    display: '14.0-inch WQHD (2560x1440) IPS',
    price: 82000,
    originalPrice: 89000,
    condition: 'Grade A++ (Like New)',
    image: '/src/assets/images/laptop_lenovo_thinkpad_1793649742500.jpg',
    batteryHealth: 'Rapid Charge (4 to 5 Hours)',
    description: 'Ultra-lightweight carbon fiber chassis weighing only 1.13 kg. High resolution 2K display, backlit ThinkPad keyboard, and powerhouse Core i7 performance.',
    featured: false,
    inStock: true,
    warranty: '7-Day Checking & Replacement Warranty'
  },
  {
    id: 'dell-precision-3520-workstation',
    name: 'Dell Precision 3520 Workstation',
    brand: 'Dell',
    processor: 'Intel Core i7 7th Gen HQ (High Performance)',
    ram: '16GB DDR4 RAM (Upgradable to 32GB)',
    storage: '512GB SSD + 500GB HDD',
    graphics: '2GB Dedicated NVIDIA Quadro M620',
    display: '15.6-inch FHD Anti-Glare IPS',
    price: 76000,
    originalPrice: 83000,
    condition: 'Grade A (Excellent)',
    image: '/src/assets/images/laptop_dell_latitude_1793649742085.jpg',
    batteryHealth: '3 Hours Backup (Heavy Load)',
    description: 'Certified workstation grade laptop engineered for 3D AutoCAD, SolidWorks, graphic design, and video rendering with dedicated NVIDIA Quadro GPU.',
    featured: false,
    inStock: true,
    warranty: '7-Day Checking & Replacement Warranty'
  }
];

export const WHATSAPP_NUMBER = '923001234567';
export const DISPLAY_PHONE = '+92 300 1234567';
export const DISPLAY_PHONE_SECONDARY = '+92 321 7654321';
export const SHOP_LOCATION = 'Techno City Mall, I.I. Chundrigar Road / Saddar, Karachi, Pakistan';

export function formatPricePKR(price: number): string {
  return 'Rs. ' + price.toLocaleString('en-PK');
}

export function generateWhatsAppLink(laptop?: LaptopProduct, customMessage?: string): string {
  let message = '';
  if (customMessage) {
    message = customMessage;
  } else if (laptop) {
    message = `Salam Laptop Hub PK! I am interested in purchasing:\n\n*${laptop.name}*\n• Specs: ${laptop.processor}, ${laptop.ram}, ${laptop.storage}\n• Display: ${laptop.display}\n• Price: ${formatPricePKR(laptop.price)}\n\nPlease confirm availability and delivery charges to my city. Thank you!`;
  } else {
    message = 'Salam Laptop Hub PK! I am visiting your website and want to inquire about available laptops and delivery options.';
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
