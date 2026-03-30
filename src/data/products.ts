import { Product } from "@/types";

export const products: Product[] = [
  // Electronics
  {
    id: "prod-001",
    slug: "wireless-noise-cancelling-headphones",
    name: "Wireless Noise-Cancelling Headphones",
    description:
      "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and crystal-clear audio. Perfect for commuting, working, or relaxing.",
    price: 19999,
    compareAtPrice: 24999,
    images: [
      "https://picsum.photos/seed/headphones1/600/600",
      "https://picsum.photos/seed/headphones2/600/600",
    ],
    categoryId: "electronics",
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    tags: ["bestseller", "sale"],
    features: ["Active Noise Cancellation", "30hr Battery", "Bluetooth 5.3", "Foldable Design"],
  },
  {
    id: "prod-002",
    slug: "smart-fitness-watch",
    name: "Smart Fitness Watch",
    description:
      "Track your health and fitness with this advanced smartwatch featuring heart rate monitoring, GPS, sleep tracking, and 7-day battery life.",
    price: 14999,
    images: [
      "https://picsum.photos/seed/watch1/600/600",
      "https://picsum.photos/seed/watch2/600/600",
    ],
    categoryId: "electronics",
    rating: 4.3,
    reviewCount: 95,
    inStock: true,
    tags: ["new"],
    features: ["Heart Rate Monitor", "Built-in GPS", "Sleep Tracking", "Water Resistant 50m"],
  },
  {
    id: "prod-003",
    slug: "portable-bluetooth-speaker",
    name: "Portable Bluetooth Speaker",
    description:
      "Powerful 360-degree sound in a compact, waterproof design. Take your music anywhere with 20 hours of battery life.",
    price: 7999,
    compareAtPrice: 9999,
    images: [
      "https://picsum.photos/seed/speaker1/600/600",
      "https://picsum.photos/seed/speaker2/600/600",
    ],
    categoryId: "electronics",
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    tags: ["bestseller", "sale"],
    features: ["360° Sound", "IPX7 Waterproof", "20hr Battery", "USB-C Charging"],
  },
  {
    id: "prod-004",
    slug: "mechanical-keyboard",
    name: "Mechanical Gaming Keyboard",
    description:
      "Premium mechanical keyboard with RGB backlighting, hot-swappable switches, and a durable aluminum frame for the ultimate typing experience.",
    price: 12999,
    images: [
      "https://picsum.photos/seed/keyboard1/600/600",
      "https://picsum.photos/seed/keyboard2/600/600",
    ],
    categoryId: "electronics",
    rating: 4.6,
    reviewCount: 167,
    inStock: true,
    tags: [],
    features: ["Hot-Swappable Switches", "RGB Backlighting", "Aluminum Frame", "USB-C"],
  },
  {
    id: "prod-005",
    slug: "wireless-earbuds-pro",
    name: "Wireless Earbuds Pro",
    description:
      "True wireless earbuds with premium sound quality, active noise cancellation, and a compact charging case with 24-hour total battery life.",
    price: 9999,
    images: [
      "https://picsum.photos/seed/earbuds1/600/600",
      "https://picsum.photos/seed/earbuds2/600/600",
    ],
    categoryId: "electronics",
    rating: 4.4,
    reviewCount: 312,
    inStock: true,
    tags: ["bestseller"],
    features: ["Active Noise Cancellation", "24hr Total Battery", "Wireless Charging Case", "IPX5"],
  },

  // Clothing
  {
    id: "prod-006",
    slug: "classic-denim-jacket",
    name: "Classic Denim Jacket",
    description:
      "Timeless denim jacket crafted from premium cotton with a comfortable relaxed fit. Features button closure and chest pockets.",
    price: 8999,
    compareAtPrice: 11999,
    images: [
      "https://picsum.photos/seed/denim1/600/600",
      "https://picsum.photos/seed/denim2/600/600",
    ],
    categoryId: "clothing",
    rating: 4.2,
    reviewCount: 78,
    inStock: true,
    tags: ["sale"],
    features: ["100% Premium Cotton", "Relaxed Fit", "Button Closure", "Machine Washable"],
  },
  {
    id: "prod-007",
    slug: "merino-wool-sweater",
    name: "Merino Wool Sweater",
    description:
      "Ultra-soft merino wool sweater that regulates temperature naturally. Lightweight yet warm, perfect for layering.",
    price: 7499,
    images: [
      "https://picsum.photos/seed/sweater1/600/600",
      "https://picsum.photos/seed/sweater2/600/600",
    ],
    categoryId: "clothing",
    rating: 4.8,
    reviewCount: 56,
    inStock: true,
    tags: ["new"],
    features: ["100% Merino Wool", "Temperature Regulating", "Lightweight", "Anti-Odor"],
  },
  {
    id: "prod-008",
    slug: "athletic-running-shoes",
    name: "Athletic Running Shoes",
    description:
      "Engineered for performance with responsive cushioning, breathable mesh upper, and durable rubber outsole for all terrains.",
    price: 11999,
    images: [
      "https://picsum.photos/seed/shoes1/600/600",
      "https://picsum.photos/seed/shoes2/600/600",
    ],
    categoryId: "clothing",
    rating: 4.5,
    reviewCount: 189,
    inStock: true,
    tags: ["bestseller"],
    features: ["Responsive Cushioning", "Breathable Mesh", "Rubber Outsole", "Lightweight"],
  },
  {
    id: "prod-009",
    slug: "slim-fit-chinos",
    name: "Slim Fit Chinos",
    description:
      "Versatile slim-fit chinos made from stretch cotton blend. Perfect for both casual and smart-casual occasions.",
    price: 5999,
    images: [
      "https://picsum.photos/seed/chinos1/600/600",
      "https://picsum.photos/seed/chinos2/600/600",
    ],
    categoryId: "clothing",
    rating: 4.1,
    reviewCount: 142,
    inStock: true,
    tags: [],
    features: ["Stretch Cotton Blend", "Slim Fit", "Wrinkle Resistant", "Multiple Colors"],
  },

  // Home & Living
  {
    id: "prod-010",
    slug: "ceramic-pour-over-set",
    name: "Ceramic Pour-Over Coffee Set",
    description:
      "Handcrafted ceramic pour-over coffee maker with matching mug. Brew the perfect cup of coffee every morning.",
    price: 4999,
    images: [
      "https://picsum.photos/seed/coffee1/600/600",
      "https://picsum.photos/seed/coffee2/600/600",
    ],
    categoryId: "home",
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
    tags: ["bestseller"],
    features: ["Handcrafted Ceramic", "Includes Mug", "Dishwasher Safe", "Stainless Steel Filter"],
  },
  {
    id: "prod-011",
    slug: "minimalist-desk-lamp",
    name: "Minimalist LED Desk Lamp",
    description:
      "Sleek desk lamp with adjustable brightness, color temperature control, and USB charging port. Modern design fits any workspace.",
    price: 5999,
    compareAtPrice: 7999,
    images: [
      "https://picsum.photos/seed/lamp1/600/600",
      "https://picsum.photos/seed/lamp2/600/600",
    ],
    categoryId: "home",
    rating: 4.6,
    reviewCount: 93,
    inStock: true,
    tags: ["sale"],
    features: ["Adjustable Brightness", "Color Temperature Control", "USB Charging Port", "Touch Controls"],
  },
  {
    id: "prod-012",
    slug: "scented-candle-collection",
    name: "Luxury Scented Candle Collection",
    description:
      "Set of three hand-poured soy candles in curated scents: Lavender Fields, Cedar & Sage, and Vanilla Bean.",
    price: 3999,
    images: [
      "https://picsum.photos/seed/candle1/600/600",
      "https://picsum.photos/seed/candle2/600/600",
    ],
    categoryId: "home",
    rating: 4.7,
    reviewCount: 215,
    inStock: true,
    tags: ["bestseller"],
    features: ["100% Soy Wax", "3 Unique Scents", "40hr Burn Time Each", "Cotton Wicks"],
  },
  {
    id: "prod-013",
    slug: "woven-throw-blanket",
    name: "Woven Throw Blanket",
    description:
      "Cozy herringbone throw blanket made from recycled cotton. Adds warmth and style to any living space.",
    price: 4499,
    images: [
      "https://picsum.photos/seed/blanket1/600/600",
      "https://picsum.photos/seed/blanket2/600/600",
    ],
    categoryId: "home",
    rating: 4.4,
    reviewCount: 88,
    inStock: true,
    tags: ["new"],
    features: ["Recycled Cotton", "Herringbone Pattern", "Machine Washable", "50x60 inches"],
  },

  // Accessories
  {
    id: "prod-014",
    slug: "leather-crossbody-bag",
    name: "Leather Crossbody Bag",
    description:
      "Handcrafted genuine leather crossbody bag with adjustable strap. Features multiple compartments for organization.",
    price: 8999,
    compareAtPrice: 12999,
    images: [
      "https://picsum.photos/seed/bag1/600/600",
      "https://picsum.photos/seed/bag2/600/600",
    ],
    categoryId: "accessories",
    rating: 4.6,
    reviewCount: 74,
    inStock: true,
    tags: ["sale"],
    features: ["Genuine Leather", "Adjustable Strap", "Multiple Compartments", "YKK Zippers"],
  },
  {
    id: "prod-015",
    slug: "polarized-sunglasses",
    name: "Polarized Sunglasses",
    description:
      "Classic aviator-style sunglasses with polarized lenses for UV400 protection. Lightweight titanium frame.",
    price: 6999,
    images: [
      "https://picsum.photos/seed/sunglasses1/600/600",
      "https://picsum.photos/seed/sunglasses2/600/600",
    ],
    categoryId: "accessories",
    rating: 4.3,
    reviewCount: 156,
    inStock: true,
    tags: [],
    features: ["Polarized Lenses", "UV400 Protection", "Titanium Frame", "Includes Case"],
  },
  {
    id: "prod-016",
    slug: "minimalist-leather-wallet",
    name: "Minimalist Leather Wallet",
    description:
      "Slim bifold wallet crafted from full-grain leather. Holds up to 8 cards with RFID blocking technology.",
    price: 3999,
    images: [
      "https://picsum.photos/seed/wallet1/600/600",
      "https://picsum.photos/seed/wallet2/600/600",
    ],
    categoryId: "accessories",
    rating: 4.5,
    reviewCount: 201,
    inStock: true,
    tags: ["bestseller"],
    features: ["Full-Grain Leather", "RFID Blocking", "Slim Profile", "8 Card Slots"],
  },
  {
    id: "prod-017",
    slug: "canvas-backpack",
    name: "Canvas Travel Backpack",
    description:
      "Durable waxed canvas backpack with padded laptop compartment. Water-resistant and built for daily adventures.",
    price: 7499,
    images: [
      "https://picsum.photos/seed/backpack1/600/600",
      "https://picsum.photos/seed/backpack2/600/600",
    ],
    categoryId: "accessories",
    rating: 4.4,
    reviewCount: 112,
    inStock: true,
    tags: ["new"],
    features: ["Waxed Canvas", "Laptop Compartment", "Water Resistant", "Leather Accents"],
  },
  {
    id: "prod-018",
    slug: "stainless-steel-water-bottle",
    name: "Insulated Water Bottle",
    description:
      "Double-wall vacuum insulated stainless steel bottle. Keeps drinks cold for 24 hours or hot for 12 hours.",
    price: 2999,
    images: [
      "https://picsum.photos/seed/bottle1/600/600",
      "https://picsum.photos/seed/bottle2/600/600",
    ],
    categoryId: "accessories",
    rating: 4.8,
    reviewCount: 347,
    inStock: true,
    tags: ["bestseller"],
    features: ["Vacuum Insulated", "24hr Cold / 12hr Hot", "BPA Free", "32oz Capacity"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.tags.includes("bestseller"));
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
}
