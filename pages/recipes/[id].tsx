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
import { Footer } from "../../components/footer";

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

    function dateFormat(date: string) {
        
    }
    
    const RecipeContainer = styled.div({
        margin: '0 auto',
        padding: '50px 20px 0',
        width: '80%',
    })
    const RecipeImgContainer = styled.div({
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto',
        minHeight: '150px',
        border: 'solid 1px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        overflow: 'hidden',
    })

    const ResipeDetailBox = styled.div({
        margin: '10px auto',
        fontSize: 'small',
        color: '#555',
    })

    const ResipeDescription = styled.div({
        padding: '10px',
    });

    const ResipeTitle = styled.div({
        padding: '10px',
        backgroundColor: '#ffda71',
        fontSize: 'x-large',
        fontWeight: 'bold',
        margin: '20px 0',
    });

    const iconStyle: React.CSSProperties = { padding: 10, fontSize: 50 };

    console.log(recipe);
    if(recipe === null){
        return(
            <div>
                <Header />
                <RecipeContainer>
                <ResipeTitle>------</ResipeTitle>
                    <RecipeImgContainer> </RecipeImgContainer>
                    <ResipeDetailBox>
                        <p>投稿者: ----</p>
                        <p>投稿日時:----</p>
                    </ResipeDetailBox>
                    <ResipeDescription>
                        ------------
                    </ResipeDescription>

                    
                    <Ings ings={null} />
                    
                    <Steps steps={null} />
                </RecipeContainer>
                <Footer />
            </div>
        )
    }

    return(
        <div>
            <Header />
            <RecipeContainer>
            <ResipeTitle>{recipe.title}</ResipeTitle>
                <RecipeImgContainer> 
                    {recipe.image_url 
                ? <img src={recipe.image_url} alt="" width='100%' /> 
                : <FontAwesomeIcon style={iconStyle} icon={faEyeSlash} />}</RecipeImgContainer>
                <ResipeDetailBox>
                    <p>投稿者: {recipe.author.user_name}</p>
                    <p>投稿日時:{recipe.published_at}</p>
                </ResipeDetailBox>
                <ResipeDescription>
                    {recipe.description}
                </ResipeDescription>

                
                <Ings ings={recipe.ingredients} />
                
                <Steps steps={recipe.steps} />
            </RecipeContainer>
            <Footer />
        </div>
    );
};



export default RecipePage;
