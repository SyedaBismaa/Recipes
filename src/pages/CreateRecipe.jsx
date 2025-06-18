import { nanoid } from 'nanoid';
import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/RecipeContext';

const CreateRecipe = () => {

  const {data,setdata} = useContext(recipecontext);

   const { register, handleSubmit  , reset} = useForm();
  const SubmitHandler =(recipe)=>{
    recipe.id = nanoid();    
    setdata([...data,recipe])
    reset();
  }
  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <input
        className=' block border-b outline-0 mb-1 p-2 '
        {...register("image")}
        type="url"
        placeholder='Enter image url'
      />
      <small className='  text-red-500'>Error Is here</small>
      <input
        className=' block border-b outline-0 mb-1 p-2 '
        {...register("title")}
        type="text"
        placeholder='Recipe Title'
      />
      <small className='  text-red-500'>Error Is here</small>
      <textarea
        className=' block border-b outline-0 mb-1 p-2 '
        {...register("ingrediants")}
        placeholder='Write your recipes here separated by comma '
      ></textarea>
      <small className='  text-red-500'>Error Is here</small>
      <textarea
        className=' block border-b outline-0 mb-1 p-2 '
        {...register("instractions")}
        placeholder='Write your Instructions here separated by comma '
      ></textarea>
      <small className='  text-red-500'>Error Is here</small>

      <select
        className=' block border-b outline-0 mb-1 p-2  '
        {...register("category")}
      >
        <option value="cat-1">Category 1</option>
        <option value="cat-2">Category 2</option>
        <option value="cat-3">Category 3</option>

      </select>

      <button className='px-4 py-2 bg-gray-900 rounded  mt-5'>Save Recipee</button>
    </form>

    

  )
}

export default CreateRecipe