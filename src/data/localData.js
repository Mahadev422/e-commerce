import { MdAddShoppingCart } from "react-icons/md";
import { 
  FiHome, 
  FiGrid, 
  FiHeart,
  FiSettings,
} from 'react-icons/fi';
import { BsBag } from "react-icons/bs";

export const menuItems = [
    { name: 'Home', icon: FiHome, link: 'home'},
    { name: 'Product', icon: BsBag , link: 'product'},
    { name: 'Categories', icon: FiGrid, link: 'category'},
    { name: 'Favorites', icon: FiHeart, link: 'favourite' },
    { name: 'Cart', icon: MdAddShoppingCart , link: 'cart'},
    { name: 'Settings', icon: FiSettings, link: 'setting' }
  ];
export const categories = [
    {
      id: 1,
      name: 'Electronics',
      count: 128,
      description: 'Latest gadgets and devices',
      image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03',
    },
    {
      id: 2,
      name: 'Fashion',
      count: 128,
      description: 'Trendy clothing and accessories',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f',
    },
    {
      id: 3,
      name: 'Home & Living',
      count: 128,
      description: 'Furniture and decor items',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba',
    },
    {
      id: 4,
      name: 'Beauty',
      count: 128,
      description: 'Skincare and cosmetics',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348',
    },
    {
      id: 5,
      name: 'Sports',
      count: 128,
      description: 'Equipment and activewear',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
    },
    {
      id: 6,
      name: 'Books',
      count: 128,
      description: 'Bestsellers and new releases',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
    }
  ];
export const featureProduct = [
    {
      title: "New Arrivals",
      description: "Fresh products just landed",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      buttonText: "Shop New"
    },
    {
      title: "Best Sellers",
      description: "Customer favorites",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a",
      buttonText: "Shop Popular"
    },
    {
      title: "Summer Sale",
      description: "Up to 50% off",
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
      buttonText: "Shop Deals"
    }
  ];

export const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 199.99,
      discountPrice: 149.99,
      rating: 4.7,
      reviewCount: 128,
      description: 'Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions for extended listening sessions.',
      features: [
        'Active Noise Cancellation',
        '30-hour battery life',
        'Bluetooth 5.0',
        'Built-in microphone',
        'Foldable design'
      ],
      colors: ['Black', 'Silver', 'Blue'],
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df',
        'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb',
        'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb'
      ],
      category: 'Electronics',
      isNewProduct: true,
      isWishlisted: false,
      stock: 45,
      brand: 'AudioMaster',
      sku: 'HP-X9000-BK'
    },
    {
      id: 2,
      name: 'Smart Watch Pro',
      price: 249.99,
      discountPrice: 199.99,
      rating: 4.5,
      reviewCount: 86,
      description: 'Stay connected with the Smart Watch Pro featuring health monitoring, GPS tracking, and 7-day battery life. Water-resistant and compatible with both iOS and Android.',
      features: [
        'Heart rate monitor',
        'GPS tracking',
        '7-day battery',
        'Water resistant',
        'Touchscreen display'
      ],
      colors: ['Black', 'Rose Gold', 'Midnight Blue'],
      images: [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
        'https://images.unsplash.com/photo-1556740738-b6a63e27c4df',
        'https://images.unsplash.com/photo-1546868871-7041f2a55e12'
      ],
      category: 'Electronics',
      isNewProduct: false,
      isWishlisted: true,
      stock: 32,
      brand: 'TechWear',
      sku: 'SW-PRO-2023'
    },
    {
      id: 3,
      name: 'Performance Running Shoes',
      price: 89.99,
      discountPrice: null,
      rating: 4.3,
      reviewCount: 64,
      description: 'Lightweight running shoes with responsive cushioning and breathable mesh for maximum comfort during your workouts.',
      features: [
        'Breathable mesh upper',
        'Responsive cushioning',
        'Anti-slip sole',
        'Arch support',
        'Lightweight design'
      ],
      colors: ['Black/Red', 'White/Blue', 'Gray/Orange'],
      images: [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
        'https://images.unsplash.com/photo-1600269452121-4f2416e55c28',
        'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519'
      ],
      category: 'Sports',
      isNewProduct: true,
      isWishlisted: false,
      stock: 78,
      brand: 'RunFlex',
      sku: 'RF-5000-RUN'
    },
    {
      id: 4,
      name: 'Genuine Leather Wallet',
      price: 49.99,
      discountPrice: 39.99,
      rating: 4.2,
      reviewCount: 42,
      description: 'Handcrafted genuine leather wallet with multiple card slots and RFID protection to keep your information secure.',
      features: [
        'Genuine leather',
        'RFID protection',
        '6 card slots',
        'ID window',
        'Slim profile'
      ],
      colors: ['Brown', 'Black', 'Tan'],
      images: [
        'https://images.unsplash.com/photo-1591561954555-607968c989ab',
        'https://images.unsplash.com/photo-1527719327859-c6ce80353573',
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3'
      ],
      category: 'Accessories',
      isNew: false,
      isWishlisted: false,
      stock: 56,
      brand: 'LeatherCraft',
      sku: 'LC-WALLET-01'
    },
    {
      id: 5,
      name: 'Premium Yoga Mat',
      price: 29.99,
      discountPrice: null,
      rating: 4.4,
      reviewCount: 37,
      description: 'Eco-friendly yoga mat with superior grip and cushioning for all types of yoga practice. Includes carrying strap.',
      features: [
        'Non-slip surface',
        'Eco-friendly materials',
        '6mm thickness',
        'Includes carrying strap',
        'Easy to clean'
      ],
      colors: ['Purple', 'Teal', 'Lavender'],
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
        'https://images.unsplash.com/photo-1545389336-cf090694435e',
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b'
      ],
      category: 'Sports',
      isNew: false,
      isWishlisted: false,
      stock: 112,
      brand: 'ZenYoga',
      sku: 'ZY-MAT-2023'
    },
    {
      id: 6,
      name: 'Portable Bluetooth Speaker',
      price: 79.99,
      discountPrice: 59.99,
      rating: 4.6,
      reviewCount: 93,
      description: 'Compact yet powerful Bluetooth speaker with 12-hour playtime, waterproof design, and crystal-clear sound quality.',
      features: [
        '12-hour battery',
        'IPX7 waterproof',
        'Bluetooth 5.2',
        'Built-in mic',
        'Compact design'
      ],
      colors: ['Black', 'Red', 'Blue'],
      images: [
        'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb',
        'https://images.unsplash.com/photo-1558379850-823f103f866a',
        'https://images.unsplash.com/photo-1545454675-3531b543be5d'
      ],
      category: 'Electronics',
      isNewProduct: true,
      isWishlisted: false,
      stock: 28,
      brand: 'SoundWave',
      sku: 'SW-SPK-250'
    },
    {
      id: 7,
      name: 'Wireless Earbuds Pro',
      price: 129.99,
      discountPrice: 99.99,
      rating: 4.8,
      reviewCount: 156,
      description: 'True wireless earbuds with active noise cancellation and 24-hour total battery life with charging case.',
      features: [
        'Active noise cancellation',
        '24-hour battery',
        'Wireless charging',
        'IPX4 water resistant',
        'Touch controls'
      ],
      colors: ['White', 'Black', 'Silver'],
      images: [
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df',
        'https://images.unsplash.com/photo-1593784991095-a205069470b6',
        'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb'
      ],
      category: 'Electronics',
      isNewProduct: true,
      isWishlisted: true,
      stock: 41,
      brand: 'AudioMaster',
      sku: 'AM-EARBUDS-PRO'
    },
    {
      id: 8,
      name: 'Fitness Tracker Band',
      price: 59.99,
      discountPrice: 49.99,
      rating: 4.1,
      reviewCount: 72,
      description: 'Track your steps, heart rate, sleep patterns and more with this comfortable fitness tracker band.',
      features: [
        'Heart rate monitor',
        'Sleep tracking',
        'Water resistant',
        '7-day battery',
        'Smart notifications'
      ],
      colors: ['Black', 'Pink', 'Blue'],
      images: [
        'https://images.unsplash.com/photo-1589476993333-f55b84301219',
        'https://images.unsplash.com/photo-1556740738-b6a63e27c4df',
        'https://images.unsplash.com/photo-1546868871-7041f2a55e12'
      ],
      category: 'Electronics',
      isNewProduct: false,
      isWishlisted: false,
      stock: 89,
      brand: 'FitTrack',
      sku: 'FT-BAND-2023'
    }
  ];

export const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    password: "alice123", // Hashed in production
    role: "admin",
    avatar: "/avatars/alice.png",
    createdAt: "2025-04-20T10:15:00Z"
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    password: "bob456",
    role: "user",
    avatar: "/avatars/bob.png",
    createdAt: "2025-04-21T09:00:00Z"
  },
  {
    id: 3,
    name: "Charlie Davis",
    email: "charlie@example.com",
    password: "charlie789",
    role: "moderator",
    avatar: "/avatars/charlie.png",
    createdAt: "2025-04-22T13:30:00Z"
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana@example.com",
    password: "diana456",
    role: "user",
    avatar: "/avatars/diana.png",
    createdAt: "2025-04-23T11:45:00Z"
  }
];
  