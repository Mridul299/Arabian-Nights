const Recipe = ({ recipe }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    // ingredients,
    // preparing_time,
    // calories,
  } = recipe;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure className=" p-3.5">
          <img className="w-full lg:h-72 md:h-48  h-56 my-5 rounded-3xl"
            src={recipe_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p>
           {short_description}
          </p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
