import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Recipes from '../Recipes'
import About from '../About'
import CreateRecipe from '../CreateRecipe'
import SingleRecipe from '../SingleRecipe'

const MainRoutes = () => {
  return (<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/recipes' element={<Recipes/>}/>
    <Route path='/recipes/details/:id' element={<SingleRecipe/>}/>

    <Route path='/create-recipe' element={<CreateRecipe/>}/>
 
    <Route path='/about' element={<About/>}/>


  </Routes>
  )
}

export default MainRoutes