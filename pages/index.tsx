import { FC, useEffect, useState } from "react";
import { getRecipe, Recipes } from "../lib/getRecipe";
import { RecipeBox } from "../components/recipeBox";

const TopPage: FC = () => {
    const [recipes, setRecipes] = useState<Recipes | null>(null);

    useEffect(() => {
        (async() => {
            const recipes = await getRecipe();
            setRecipes(recipes);
        })(); 
    }, []);
    console.log(recipes);

    if (recipes === null) return <div>loading...</div>;

  return(
    <div>
        {recipes.recipes.map((recipe) => (
            <RecipeBox recipe={recipe} />
        ))}
    </div>
  );
};

export default TopPage;
