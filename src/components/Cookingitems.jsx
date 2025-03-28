import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Cookingitems = ({handlecookbutton }) => {

    const[recipes,setrecipes] = useState([]);

    useEffect(() => {
        fetch('/public/data.json')
            .then(res => res.json())
            .then(data => setrecipes(data))
    } ,[])

  return (
    <div className="md:w-2/3 grid lg:grid-cols-3 md:grid-cols-2 gap-3">
      {
        recipes.map((recipe) => (<Recipe key={recipe.recipe_id} recipe={recipe} handlecookbutton={handlecookbutton }></Recipe>))
      }
    </div>
  );
};

export default Cookingitems;
