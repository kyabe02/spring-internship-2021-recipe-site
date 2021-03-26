/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FC } from "react";
import { Recipe } from "../lib/recipe";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

type Props = {
    recipe?: Recipe;
}

export const RecipeBox: FC<Props> = (props) => {
    const RecipeImg = styled.img({
        verticalAlign: 'middle',
        width: '100%',
        maxWidth: '100%',
    })

    const RecipeImgContainer = styled.div({
        width: '95%',
        minHeight: '150px',
        maxHeight: '300px',
        margin: '0 auto',
        borderRadius: '10px',
        overflow: 'hidden',
        textAlign: 'center',
        backgroundColor: '#bbb',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    })

    const RecipeContainer = styled.div({
        margin: '0 auto',
        padding: '10px 0',
        borderBottom: 'solid 2px gray',
        width: '90%',
        backgroundColor: '#ffe',
        maxWidth: '500px',
    })

    const RecipeDescription = styled.div({
        margin: '10px',
    })

    const iconStyle: React.CSSProperties = {
        padding: 10, 
        fontSize: 50,
    };

    if(props.recipe !== null){
        return (
            <RecipeContainer>
                <RecipeImgContainer>
                    {props.recipe.image_url 
                    ? <RecipeImg src={props.recipe.image_url} alt="" /> 
                    : <FontAwesomeIcon style={iconStyle} icon={faEyeSlash} />}
                </RecipeImgContainer>
                <RecipeDescription>
                <Link href={"./recipes/" + props.recipe.id}>{props.recipe.title}</Link>
                <br />
                {props.recipe.description}
                </RecipeDescription>
    
            </RecipeContainer>
        );
    }else{
        return (
            <RecipeContainer>
                <RecipeImg src={props.recipe.image_url} alt="" />
                <br />
                <RecipeDescription>
                <Link href={"./recipes/" + props.recipe.id}>{props.recipe.title}</Link>
                <br />
                {props.recipe.description}
                </RecipeDescription>
    
            </RecipeContainer>
        );
    }

};