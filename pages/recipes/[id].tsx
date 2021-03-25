/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useRouter } from "next/router";
import { FC, useState, useEffect } from "react";
import { getRecipe } from "../../lib/getRecipe";
import { Recipe } from "../../lib/recipe";
import { Steps } from "../../components/steps";
import { Ings } from "../../components/ings";
import { Header } from "../../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { css, jsx } from '@emotion/react'

type Props = {
}

const RecipePage: FC<Props> = (props) => {
    const router = useRouter();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    useEffect(() => {
        (async() => {
            if(router.query.id !== undefined){
                const recipe = await getRecipe(Number(router.query.id));
                setRecipe(recipe);
            }
        })(); 
    }, [router.query.id]);
    
    const RecipeContainer = styled.div({
        margin: '10px',
        paddingTop: '50px',
    })
    const RecipeImgContainer = styled.div({
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto',
        minHeight: '300px',
        border: 'solid 1px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    })

    const ResipeDetailBox = styled.div({

    })

    const iconStyle: React.CSSProperties = { padding: 10, fontSize: 50 };

    console.log(recipe);
    if(recipe === null) return <div>loading...</div>;

    return(
        <div>
            <Header />
            <RecipeContainer>
            <h2>{recipe.title}</h2>
                <RecipeImgContainer> 
                    {recipe.image_url 
                ? <img src={recipe.image_url} alt="" width='80%' /> 
                : <FontAwesomeIcon style={iconStyle} icon={faEyeSlash} />}</RecipeImgContainer>
                <ResipeDetailBox>
                    {recipe.author.user_name}{recipe.published_at}
                </ResipeDetailBox>

                <h3>材料</h3>
                <Ings ings={recipe.ingredients} />
                <h3>手順</h3>
                <Steps steps={recipe.steps} />
            </RecipeContainer>
        </div>
    );
};



export default RecipePage;
