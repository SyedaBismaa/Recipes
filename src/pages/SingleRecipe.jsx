import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SingleRecipe = () => {
  const navigate = useNavigate()
  const { data, setdata } = useContext(recipecontext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe.title,
      chef: recipe.chef,
      image: recipe.image,
      desc: recipe.desc,
      instractions: recipe.instractions,
      ingrediants: recipe.ingrediants,

    },
  });


  const SubmitHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe }
    setdata(copydata);
    toast.success("Recipe Updated!")

  }

  const Deletehandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    toast.success("Recipe Deleted");
    navigate("/recipes")
  }



  return recipe ?
    <div className="w-full max-h-screen overflow-y-auto">
      <div className="flex flex-col md:flex-row bg-white/30 backdrop-blur-md rounded-lg shadow-lg m-4">

        <div className="left w-full md:w-1/2 p-4 space-y-3">
          <h1 className="text-3xl font-bold text-black">{recipe.title}</h1>
          <img
            className="object-cover position-center h-48 w-full md:w-[70%] rounded-lg"
            src={recipe.image}
            alt={recipe.title}
          />
          <p className="text-base text-red-500 font-medium">{recipe.chef}</p>
          <p className="text-xl text-black">{recipe.desc}</p>
          <p className="text-xl text-black">
            <span className="font-semibold">Ingredients:</span> {recipe.ingrediants}
          </p>
          <p className="text-xl text-black">
            <span className="font-semibold">Instructions:</span> {recipe.instractions}
          </p>
          <p className="text-xl text-black">
            <span className="font-semibold">Category:</span> {recipe.category}
          </p>
        </div>

        <form
          className="w-full md:w-1/2 p-4 space-y-3 text-xl"
          onSubmit={handleSubmit(SubmitHandler)}
        >
          <input
            className="w-full border-b border-gray-300 focus:border-black outline-none p-2 bg-transparent text-black placeholder-gray-500 text-xl transition-all duration-300"
            {...register("image")}
            type="url"
            placeholder="Enter image URL"
          />
          <input
            className="w-full border-b border-gray-300 focus:border-black outline-none p-2 bg-transparent text-black placeholder-gray-500 text-xl transition-all duration-300"
            {...register("title")}
            type="text"
            placeholder="Recipe Title"
          />
          <input
            className="w-full border-b border-gray-300 focus:border-black outline-none p-2 bg-transparent text-black placeholder-gray-500 text-xl transition-all duration-300"
            {...register("chef")}
            type="text"
            placeholder="Chef name"
          />
          <textarea
            className="w-full border-b border-gray-300 focus:border-black outline-none p-2 bg-transparent text-black placeholder-gray-500 text-xl transition-all duration-300 resize-none h-20"
            {...register("desc")}
            placeholder="Description"
          ></textarea>
          <textarea
            className="w-full border-b border-gray-300 focus:border-black outline-none p-2 bg-transparent text-black placeholder-gray-500 text-xl transition-all duration-300 resize-none h-20"
            {...register("ingrediants")}
            placeholder="Write your ingredients here, separated by commas"
          ></textarea>
          <textarea
            className="w-full border-b border-gray-300 focus:border-black outline-none p-2 bg-transparent text-black placeholder-gray-500 text-xl transition-all duration-300 resize-none h-20"
            {...register("instractions")}
            placeholder="Write your instructions here, separated by commas"
          ></textarea>
          <select
            className="w-full border-b border-gray-300 focus:border-black outline-none p-2 bg-transparent text-black text-xl transition-all duration-300"
            {...register("category")}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Supper">Supper</option>
            <option value="Dinner">Dinner</option>
          </select>
          <div className="flex justify-center space-x-3 pt-2">
            <button
              type="submit"
              className="px-7 py-2 bg-black text-white rounded hover:bg-gray-800 text-xl transition-all duration-300"
            >
              Update
            </button>
            <button
              type="button"
              onClick={Deletehandler}
              className="px-7 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-xl transition-all duration-300"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div> : "Loading..."
}

export default SingleRecipe