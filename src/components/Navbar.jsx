import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex items-center justify-center text-xl font-[400] gap-x-10 mb-10  Helvatica ">
        <NavLink className= {(e)=>e.isActive ? "text-red-500" : "text-black hover:border-b-2"} to='/' >Home</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-500" : "text-black hover:border-b-2"} to='/about' >About</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-500" : "text-black hover:border-b-2"} to='/create-recipe' >Create Recipe</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-500" : "text-black hover:border-b-2"} to='/recipes' >Recipes</NavLink>


    </div>
  )
}

export default Navbar