const Recipe = ({ recipe,handlecookbutton  }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div className="card bg-base-100 border-2 border-gray-200">
        <figure className=" p-3.5">
          <img
            className="w-full lg:h-72 md:h-48  h-56 my-5 rounded-3xl"
            src={recipe_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font">{recipe_name}</h2>
          <p className="text-[#878787]">{short_description}</p>
          <div className="divider"></div>
          <div>
            <h3 className="font-semibold text-lg">Ingredients: {ingredients.length}</h3>
            <ul className="list-disc list-inside text-gray-600">
              {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="divider"></div>
          <div className="flex items-center justify-between  text-gray-500 mt-2">
            <span>⏳ {preparing_time}</span>
            <span> 🔥{calories}</span>
          </div>
          <div className="card-actions justify-start mt-3">
            <button className="btn btn-success text-black rounded-full font-semibold bg-[#0BE58A]" onClick={()=>handlecookbutton (recipe)}>Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
