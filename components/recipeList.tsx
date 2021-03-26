import { FC } from "react";
import { Recipe } from "../lib/recipe";
import { RecipeBox } from "./recipeBox";

type Props = {
    recipes?: Recipe[];
}

export const RecipeList: FC<Props> = (props) => {
    return (
        <div className='recipe-list'>
            {props.recipes.map((recipe) => (
            <RecipeBox key={recipe.id} recipe={recipe} />
        ))}
        </div>
    );
};