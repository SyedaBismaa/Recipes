import { createContext, useState } from "react"


export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [data, setdata] = useState([
    {
      id: 1,
      title: "Pasta",
      ingredients: [
        "Masala",
        "Tomato",
        "Ginger",
        "Garlic",
        "Olive oil",
        "Cheese"
      ],
      instructions: [
        "Boil pasta in salted water until al dente.",
        "Heat oil, add ginger and garlic, sauté.",
        "Add tomatoes and masala, cook until thick.",
        "Mix boiled pasta into sauce, cook for 2 minutes.",
        "Garnish with cheese and herbs."
      ],
      image: "https://centslessdeals.com/wp-content/uploads/2022/09/Skillet-Pasta-With-Ground-Beef-TheShortcutKitchen-9-1024x1536.jpg",
      chef: "Bismah",
      category: "Dinner",
      desc: "A delicious and comforting pasta dish loaded with aromatic spices and a rich tomato-based sauce. Perfect for family dinners!"
    },
    {
      id: 2,
      title: "Classic Veggie Pizza",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Mozzarella cheese",
        "Bell peppers",
        "Onions",
        "Olives",
        "Oregano"
      ],
      instructions: [
        "Preheat oven to 220°C.",
        "Roll out the pizza dough on a floured surface.",
        "Spread tomato sauce evenly over the base.",
        "Top with cheese, bell peppers, onions, and olives.",
        "Sprinkle oregano and bake for 12-15 minutes.",
        "Slice and serve hot!"
      ],
      image: "https://www.twopeasandtheirpod.com/wp-content/uploads/2021/03/Veggie-Pizza-8.jpg",
      chef: "Chef Aryan",
      category: "Lunch",
      desc: "A crispy, cheesy veggie pizza loaded with fresh toppings and a flavorful tomato sauce. The perfect choice for pizza lovers looking for a vegetarian twist!"
    }
  ]);

  console.log(data);


  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  )
}

export default RecipeContext