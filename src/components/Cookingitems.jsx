import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Cookingitems = () => {

    const[recipes,setrecipes] = useState([]);

    useEffect(() => {
        fetch('/public/data.json')
            .then(res => res.json())
            .then(data => setrecipes(data))
    } ,[])

  return (
    <div className="md:w-2/3 grid md:grid-cols-2 gap-3">
      {
        recipes.map((recipe) => (<Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>))
      }
    </div>
  );
};

export default Cookingitems;
