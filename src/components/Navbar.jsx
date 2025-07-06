import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex items-center justify-center text-xl font-[400] gap-x-10 mb-10  Helvatica">
        <NavLink className= {(e)=>e.isActive ? "text-red-500" : "text-black"} to='/' >Home</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-500" : "text-black"} to='/recipes' >Recipes</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-500" : "text-black"} to='/about' >About</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-500" : "text-black"} to='/create-recipe' >Create Recipe</NavLink>


    </div>
  )
}

export default Navbar