export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  description: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    description: "Bubbly crust, sweet tomato, and fresh basil.",
  },
  {
    id: "avocado-toast",
    title: "Avocado Toast",
    emoji: "🥑",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Breakfast",
    description: "Creamy avocado with a little crunch and chili.",
  },
  {
    id: "ramen-bowl",
    title: "Miso Ramen Bowl",
    emoji: "🍜",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Japanese",
    description: "A cozy, savory broth piled high with toppings.",
  },
  {
    id: "berry-pancakes",
    title: "Berry Pancakes",
    emoji: "🥞",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "Breakfast",
    description: "Fluffy golden pancakes with a berry-bright finish.",
  },
  {
    id: "green-goddess-salad",
    title: "Green Goddess Salad",
    emoji: "🥗",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "Fresh & light",
    description: "Crisp greens tossed in a herby, creamy dressing.",
  },
  {
    id: "veggie-tacos",
    title: "Roasted Veggie Tacos",
    emoji: "🌮",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Mexican",
    description: "Smoky vegetables, lime, and all the good toppings.",
  },
  {
    id: "chocolate-lava-cake",
    title: "Chocolate Lava Cake",
    emoji: "🍫",
    minutes: 40,
    difficulty: "Hard",
    cuisine: "Dessert",
    description: "A rich little cake with a molten chocolate middle.",
  },
  {
    id: "strawberry-smoothie",
    title: "Strawberry Smoothie",
    emoji: "🍓",
    minutes: 5,
    difficulty: "Easy",
    cuisine: "Drinks",
    description: "A cool, creamy blend for busy mornings.",
  },
];
