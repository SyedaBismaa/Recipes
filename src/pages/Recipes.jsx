import { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard'

const Recipes = () => {

  const {data}= useContext(recipecontext)
  
  const renderrecipe = data.map((recipe)=>(
   <RecipeCard key={recipe.id} recipe={recipe}/>
  ))

  return (
    <div className='flex flex-wrap gap-[2rem] text-black'>
      { data.length > 0 ? renderrecipe : "No Recipe Found"}</div>
  )
}

export default Recipes