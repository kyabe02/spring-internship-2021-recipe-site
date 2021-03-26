/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FC } from "react";
import { Recipe } from "../lib/recipe";
import { RecipeBox } from "./recipeBox";

type Props = {
    recipes?: Recipe[];
}

export const RecipeList: FC<Props> = (props) => {

    const RecipeList = styled.div({
        margin: '0 auto',
        width: '90%',
    })

    return (
        <RecipeList>
            {props.recipes.map((recipe) => (
            <RecipeBox key={recipe.id} recipe={recipe} />
        ))}
        </RecipeList>
    );
};