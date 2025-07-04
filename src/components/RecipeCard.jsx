import { Link } from "react-router-dom";

const RecipeCard = (props) => {
    const {id,image,title,desc,chef}=props.recipe;
  return (
    <Link 
    to={`/recipes/details/${id}`} 

    className= "mr-3 mb-3 block w-[23vw] roundedd overflow-hidden">
    <img className="object-cover w-full h-[20vh]" src={image} alt="" />
    <h1 className="text-3xl font-bold mt-2">{title}</h1>
    <small className="px-2  text-red-300 text-2xl">{chef}</small>
    <p className="px-2 pb-3">
        {desc.slice(0,100)}...{" "}
        <small className="text-blue-500">more</small>
    </p>
    </Link>
  )
}

export default RecipeCard