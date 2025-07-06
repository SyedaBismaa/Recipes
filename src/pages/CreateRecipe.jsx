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
 <div className="w-full  p-4">
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="w-full bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-black col-span-1 md:col-span-2">
          Add New Recipe
        </h2>

        <div className="left space-y-4">
          <input
            className="w-full border-b-2 border-gray-300 focus:border-black outline-none p-3 bg-transparent text-black placeholder-gray-500 transition-all duration-300"
            {...register("image")}
            type="url"
            placeholder="Enter image URL"
          />
          <input
            className="w-full border-b-2 border-gray-300 focus:border-black outline-none p-3 bg-transparent text-black placeholder-gray-500 transition-all duration-300"
            {...register("title")}
            type="text"
            placeholder="Recipe Title"
          />
          <input
            className="w-full border-b-2 border-gray-300 focus:border-black outline-none p-3 bg-transparent text-black placeholder-gray-500 transition-all duration-300"
            {...register("chef")}
            type="text"
            placeholder="Chef name"
          />

          <select
            className="w-full border-b-2 border-gray-300 focus:border-black outline-none p-3 bg-transparent text-black transition-all duration-300"
            {...register("category")}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Supper">Supper</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>


        <div className="right space-y-4">
          <textarea
            className="w-full border-b-2 border-gray-300 focus:border-black outline-none p-3 bg-transparent text-black placeholder-gray-500 transition-all duration-300 resize-none h-24"
            {...register("desc")}
            placeholder="Description"
          ></textarea>
          <textarea
            className="w-full border-b-2 border-gray-300 focus:border-black outline-none p-3 bg-transparent text-black placeholder-gray-500 transition-all duration-300 resize-none h-24"
            {...register("ingrediants")}
            placeholder="Write your ingredients here, separated by commas"
          ></textarea>
          <textarea
            className="w-full border-b-2 border-gray-300 focus:border-black outline-none p-3 bg-transparent text-black placeholder-gray-500 transition-all duration-300 resize-none h-24"
            {...register("instractions")}
            placeholder="Write your instructions here, separated by commas"
          ></textarea>
          
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="col-span-1 md:col-span-2 w-1/2 mx-auto bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
        >
          Save Recipe
        </button>
      </form>
    </div>




  )
}

export default CreateRecipe