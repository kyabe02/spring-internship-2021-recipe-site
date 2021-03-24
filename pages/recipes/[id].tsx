import { useRouter } from "next/router";
import { FC, useState, useEffect } from "react";
import { getRecipe } from "../../lib/getRecipe";
import { Recipe } from "../../lib/recipe";

type Props = {
}

const RecipePage: FC<Props> = (props) => {
    const router = useRouter();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    useEffect(() => {
        (async() => {
            const recipe = await getRecipe(Number(router.query.id));
            setRecipe(recipe);
        })(); 
    }, []);

    if(recipe === null) return <div>loading...</div>;

    return(
        <div>
            <h1>Recipe Page! ID: {router.query.id}</h1>
            <h2>{recipe.title}</h2>
            <img src={recipe.image_url} alt="" width="300"></img>
        </div>
    );
};



export default RecipePage;
