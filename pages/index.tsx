import { FC, useEffect, useState } from "react";
import { getRecipes, Recipes } from "../lib/getRecipe";
import { RecipeList } from "../components/recipeList";
import { Header } from "../components/header";
import Link from "next/link";

const TopPage: FC = () => {
    const [recipes, setRecipes] = useState<Recipes | null>(null);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        (async() => {
            const recipes = await getRecipes(page);
            setRecipes(recipes);
        })(); 
    }, [page]);

    function handlePrev() {
        setPage(page - 1);
    }

    function handleNext(){
        setPage(page + 1);
    }


    if (recipes === null) return <div>loading...</div>;

  return(
    <div>
        <Header />
        <RecipeList recipes={recipes.recipes} />
        {recipes.links.prev && <button onClick={handlePrev}>prev</button>}
        {recipes.links.next && <button onClick={handleNext}>next</button>}
    </div>
  );
};

export default TopPage;
