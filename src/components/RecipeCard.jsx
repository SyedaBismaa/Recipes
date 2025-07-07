import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out block w-[90%] sm:w-[45%] md:w-[30%] lg:w-[23%] rounded overflow-hidden bg-white/60 backdrop-blur-md border border-gray-200 shadow-md"
    >
      <img
        className="object-cover w-full h-[20vh] rounded-t"
        src={image}
        alt={title}
      />
      <div className="p-3">
        <h1 className="text-xl font-bold text-black mb-1">{title}</h1>
        <small className="block text-red-500 text-sm mb-1">{chef}</small>
        <p className="text-gray-700 text-sm">
          {desc.slice(0, 80)}...{" "}
          <span className="text-blue-500 font-medium">more</span>
        </p>
      </div>
    </Link>
  );
};

export default RecipeCard;
