import dress from "../assets/icons/dress.svg";
import shoes from "../assets/icons/shoes.svg";
import jewelry from "../assets/icons/jewelry.svg";
import perfume from "../assets/icons/perfume.svg";
import cosmetics from "../assets/icons/cosmetics.svg";
import glasses from "../assets/icons/glasses.svg";
import bag from "../assets/icons/bag.svg";

export const categories = [
  {
    name: "Clothes",
    icon: dress,
    products: [
      { name: "Shirt", stock: 300 },
      { name: "Shorts & Jeans", stock: 60 },
      { name: "Jacket", stock: 50 },
      { name: "Dress & Frock", stock: 87 },
    ],
  },
  {
    name: "Footwear",
    icon: shoes,
    products: [
      { name: "Sports", stock: 45 },
      { name: "Formal", stock: 75 },
      { name: "Casual", stock: 35 },
      { name: "Safety Shoes", stock: 26 },
    ],
  },
  {
    name: "Jewelry",
    icon: jewelry,
    products: [
      { name: "Earrings", stock: 46 },
      { name: "Couple Rings", stock: 73 },
      { name: "Necklace", stock: 61 },
    ],
  },
  {
    name: "Perfume",
    icon: perfume,
    products: [
      { name: "Clothes Perfume", stock: 12 },
      { name: "Deodorant", stock: 60 },
      { name: "Jacket", stock: 50 },
      { name: "Dress & Frock", stock: 87 },
    ],
  },
  {
    name: "Cosmetics",
    icon: cosmetics,
    products: [
      { name: "Shampoo", stock: 68 },
      { name: "Sunscreen", stock: 46 },
      { name: "Body Wash", stock: 79 },
      { name: "Makeup Kit", stock: 23 },
    ],
  },
  {
    name: "Glasses",
    icon: glasses,
    products: [
      { name: "Sunglasses", stock: 50 },
      { name: "Lenses", stock: 48 },
    ],
  },
  {
    name: "Bags",
    icon: bag,
    products: [
      { name: "Shopping Bag", stock: 62 },
      { name: "Gym Backpack", stock: 35 },
      { name: "Purse", stock: 80 },
      { name: "Wallet", stock: 75 },
    ],
  },
];
