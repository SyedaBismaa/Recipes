import { nanoid } from 'nanoid';
import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateRecipe = () => {
  const navigate = useNavigate()
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    setdata([...data, recipe])
    toast.success("New Recipe Added!")
    reset();
    navigate("/recipes")
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
      <input
        className=' block border-b outline-0 mb-1 p-2 '
        {...register("chef")}
        type="text"
        placeholder='Chef name'
      />

      <textarea
        className=' block border-b outline-0 mb-1 p-2 '
        {...register("desc")}
        placeholder='Description '
      ></textarea>

      <textarea
        className=' block border-b outline-0 mb-1 p-2 '
        {...register("ingrediants")}
        placeholder='Write your recipes here separated by comma '
      ></textarea>

      <textarea
        className=' block border-b outline-0 mb-1 p-2 '
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

      <button className='px-4 py-2 bg-gray-900 rounded  mt-5'>Save Recipee</button>
    </form>



  )
}

export default CreateRecipe