import { createContext, useState } from "react"


export const recipecontext = createContext(null);

const RecipeContext = (props) => {
 const [data, setdata] = useState([
  {
    id:1,
    title:"pasta ",
    ingredients:[
      "masala",
      "tomato0",
      "Ginger",
    ],
    instructions:[
      "boil",
      "add ingre",
        "boil",
      "add ingre",  "boil",
      "add ingre",  "boil",
      "add ingre",

    ],

    image: "https://centslessdeals.com/wp-content/uploads/2022/09/Skillet-Pasta-With-Ground-Beef-TheShortcutKitchen-9-1024x1536.jpg",
    chef:"bismah",
    category:"Dinner",
    desc:" essome random dessome random dessome random dessome random des"
  }
 ]);

 console.log(data);
 
 
  return (
    <recipecontext.Provider value={{data,setdata}}>
       {props.children}
    </recipecontext.Provider>
  )
}

export default RecipeContext