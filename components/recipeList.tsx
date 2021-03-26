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
        backgroundColor: '#ffda71',
    })

    if(props.recipes === null){
        return(
            <RecipeList>
            <RecipeBox recipe={null} />
            <RecipeBox recipe={null} />
            <RecipeBox recipe={null} />
            <RecipeBox recipe={null} />
            <RecipeBox recipe={null} />
        ))
        </RecipeList>
        )
    }

    return (
        <RecipeList>
            {props.recipes.map((recipe) => (
            <RecipeBox key={recipe.id} recipe={recipe} />
        ))}
        </RecipeList>
    );
};