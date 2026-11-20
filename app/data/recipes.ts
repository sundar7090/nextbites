export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  description: string;
  ingredients: string[];
  steps: string[];
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
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Fresh basil", "Olive oil"],
    steps: [
      "Stretch the dough into a round base.",
      "Spread the sauce and add torn mozzarella.",
      "Bake hot until the crust blisters, then finish with basil.",
    ],
  },
  {
    id: "avocado-toast",
    title: "Avocado Toast",
    emoji: "🥑",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Breakfast",
    description: "Creamy avocado with a little crunch and chili.",
    ingredients: ["Sourdough bread", "Ripe avocado", "Fresh lemon", "Chili flakes", "Sea salt"],
    steps: [
      "Toast the sourdough until golden.",
      "Mash the avocado with lemon juice and salt.",
      "Pile it onto the toast and finish with chili flakes.",
    ],
  },
  {
    id: "ramen-bowl",
    title: "Miso Ramen Bowl",
    emoji: "🍜",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Japanese",
    description: "A cozy, savory broth piled high with toppings.",
    ingredients: ["Ramen noodles", "Miso paste", "Vegetable broth", "Egg", "Scallions"],
    steps: [
      "Warm the broth and whisk in the miso.",
      "Cook the noodles until tender.",
      "Add the noodles, broth, egg, and scallions to a bowl.",
    ],
  },
  {
    id: "berry-pancakes",
    title: "Berry Pancakes",
    emoji: "🥞",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "Breakfast",
    description: "Fluffy golden pancakes with a berry-bright finish.",
    ingredients: ["Flour", "Milk", "Egg", "Baking powder", "Mixed berries", "Maple syrup"],
    steps: [
      "Whisk the dry ingredients together.",
      "Fold in the milk and egg to make a smooth batter.",
      "Cook small rounds in a pan and serve with berries and syrup.",
    ],
  },
  {
    id: "green-goddess-salad",
    title: "Green Goddess Salad",
    emoji: "🥗",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "Fresh & light",
    description: "Crisp greens tossed in a herby, creamy dressing.",
    ingredients: ["Mixed greens", "Cucumber", "Avocado", "Fresh herbs", "Greek yogurt"],
    steps: [
      "Chop the greens, cucumber, and avocado.",
      "Blend the herbs with yogurt and a squeeze of lemon.",
      "Toss everything together and serve chilled.",
    ],
  },
  {
    id: "veggie-tacos",
    title: "Roasted Veggie Tacos",
    emoji: "🌮",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Mexican",
    description: "Smoky vegetables, lime, and all the good toppings.",
    ingredients: ["Corn tortillas", "Bell pepper", "Zucchini", "Red onion", "Lime", "Avocado"],
    steps: [
      "Slice the vegetables and toss them with oil and spices.",
      "Roast until tender and lightly charred.",
      "Fill warm tortillas and finish with lime and avocado.",
    ],
  },
  {
    id: "chocolate-lava-cake",
    title: "Chocolate Lava Cake",
    emoji: "🍫",
    minutes: 40,
    difficulty: "Hard",
    cuisine: "Dessert",
    description: "A rich little cake with a molten chocolate middle.",
    ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Flour"],
    steps: [
      "Melt the chocolate and butter together.",
      "Whisk with eggs and sugar, then fold in flour.",
      "Bake briefly until the edges set and the center stays soft.",
    ],
  },
  {
    id: "strawberry-smoothie",
    title: "Strawberry Smoothie",
    emoji: "🍓",
    minutes: 5,
    difficulty: "Easy",
    cuisine: "Drinks",
    description: "A cool, creamy blend for busy mornings.",
    ingredients: ["Fresh strawberries", "Milk", "Greek yogurt", "Honey", "Ice"],
    steps: [
      "Hull and slice the strawberries.",
      "Add all ingredients to a blender.",
      "Blend until smooth and pour into a chilled glass.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
