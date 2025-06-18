import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Recipes from '../Recipes'
import About from '../About'
import CreateRecipe from '../CreateRecipe'

const MainRoutes = () => {
  return (<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/recipes' element={<Recipes/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/create-recipe' element={<CreateRecipe/>}/>


  </Routes>
  )
}

export default MainRoutes