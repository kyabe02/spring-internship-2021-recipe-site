/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FC } from "react";
import { Recipe } from "../lib/recipe";
import Link from "next/link";

type Props = {
    recipe: Recipe;
}

export const RecipeBox: FC<Props> = (props) => {
    const RecipeImg = styled.img({
        width: '200px'
    })
    return (
        <div className='recipe-container'>
            <RecipeImg src={props.recipe.image_url} alt="" />
            <Link href={"./recipes/" + props.recipe.id}>{props.recipe.title}</Link>
            <br />
        </div>
    );
};