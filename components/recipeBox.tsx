import { FC } from "react";
import { Recipe } from "../lib/recipe";
import Link from "next/link";

type Props = {
    recipe: Recipe;
}

export const RecipeBox: FC<Props> = (props) => {
    return (
        <div>
            <Link href="#">{props.recipe.title}</Link>
            <br />
        </div>
    );
};