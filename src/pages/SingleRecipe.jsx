import  { useContext } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import  { recipecontext } from '../context/RecipeContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SingleRecipe = () => {
  const navigate = useNavigate()
  const {data,setdata} = useContext(recipecontext);
  const params = useParams();
  const recipe = data.find((recipe)=>params.id== recipe.id);
  
    const { register, handleSubmit } = useForm({
      defaultValues: {
        title: recipe.title,
        chef: recipe.chef,
        image: recipe.image,
        desc : recipe.desc,
        instractions : recipe.instractions,
        ingrediants : recipe.ingrediants,

      },
    });
  

const SubmitHandler = (recipe) => {
    const index = data.findIndex((recipe)=>params.id== recipe.id);
    const copydata = [...data];
    copydata[index] = {...copydata[index],...recipe}
   setdata(copydata);
    toast.success("Recipe Updated!")
      
    }

    const Deletehandler = ()=>{
      const filterdata = data.filter((r)=>r.id!= params.id);
      setdata(filterdata);
       toast.success("Recipe Deleted");
       navigate("/recipes")
    }
  
  
   
  return recipe ? 
   <div className='w-full flex'>
    <div className="left w-1/2 p-2">
     <h1 className='text-4xl font-black mb-2'>{recipe.title}</h1>
     <img className='object-cover w-1/3 rounded pt-2' src={recipe.image} alt="" />
     <small className="px-2  text-red-300 text-2xl">{recipe.chef}</small>
    <p className="px-2 pb-3">{recipe.desc} </p>

     <p className="px-2 pb-3"> {recipe.ingrediants}</p>
     <p className="px-2 pb-3"> {recipe.instractions}</p>

     <p>{recipe.category}</p>

    </div>


        <form className='w-1/2 p-2' onSubmit={handleSubmit(SubmitHandler)}>
      <input
        className=' block border-b outline-0 mb-1 p-2 w-full '
        {...register("image")}
        type="url"
        placeholder='Enter image url'
      />
      
      <input
        className=' block border-b outline-0 mb-1 p-2  w-full'
        {...register("title")}
        type="text"
        placeholder='Recipe Title'
      />
      
      <input
        className=' block border-b outline-0 mb-1 p-2 '
        {...register("chef")}
        type="text"
        placeholder='Chef name'
      />

      <textarea
        className=' block border-b outline-0 mb-1 p-2  w-full'
        {...register("desc")}
        placeholder='Description '
      ></textarea>

      <textarea
        className=' block border-b outline-0 mb-1 p-2 w-full '
        {...register("ingrediants")}
        placeholder='Write your recipes here separated by comma '
      ></textarea>

      <textarea
        className=' block border-b outline-0 mb-1 p-2 w-full '
        {...register("instractions")}
        placeholder='Write your Instructions here separated by comma '
      ></textarea>


      <select
        className=' block border-b outline-0 mb-1 p-2 text-black  '
        {...register("category")}
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">lunch</option>
        <option value="Supper">supper</option>
        <option value="Dinner">Dinner</option>


      </select>

      <button className='px-4 py-2 bg-blue-900 rounded mr-2  mt-5'>Update Recipee</button>
      <button onClick={Deletehandler} className='px-4 py-2 bg-red-900 rounded  mr-5 mt-5'>Delete Recipee</button>

    </form>


  </div> : "Loading..."
}

export default SingleRecipe