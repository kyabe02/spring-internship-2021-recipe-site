import { FC } from "react";
import { Recipe } from "../lib/recipe";
import Link from "next/link";

type Props = {
    recipe: Recipe;
}

export const RecipeBox: FC<Props> = (props) => {
    return (
        <div className='recipe-container'>
            <img src={props.recipe.image_url} alt="" width='300' />
            <Link href={"./recipes/" + props.recipe.id}>{props.recipe.title}</Link>
            <br />
        </div>
    );
};