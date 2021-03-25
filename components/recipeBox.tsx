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
        width: '200px',
        height: '100px',
        margin: 'auto 0',
        marginRight: '10px',
        verticalAlign: 'middle',
        maxWidth: '40%',
    })

    const RecipeContainer = styled.div({
        display: 'flex',
        margin: '10px',
        padding: '10px 0',
        borderBottom: 'solid 2px gray',
        width: '90%',
    })

    const RecipeDescription = styled.div({

    })
    return (
        <RecipeContainer>
            <RecipeImg src={props.recipe.image_url} alt="" />
            <RecipeDescription>
            <Link href={"./recipes/" + props.recipe.id}>{props.recipe.title}</Link>
            <br />
            {props.recipe.description}
            </RecipeDescription>

        </RecipeContainer>
    );
};