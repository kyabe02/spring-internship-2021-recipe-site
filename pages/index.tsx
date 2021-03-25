/** @jsxImportSource @emotion/react */
import { FC, useEffect, useState } from "react";
import { getRecipes, Recipes } from "../lib/getRecipe";
import { RecipeList } from "../components/recipeList";
import { Header } from "../components/header";
import Link from "next/link";
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'


const TopPage: FC = () => {
    const [recipes, setRecipes] = useState<Recipes | null>(null);
    const [page, setPage] = useState<number>(1);


    const hoverStyle = css({
        padding: '32px',
        backgroundColor: 'hotpink',
        fontSize: '24px',
        borderRadius: '4px',
        "&:hover": {
            color: 'white'
        },
    });    

    const Body = styled.div({
        'padding-top': '50px',
    });

    useEffect(() => {
        (async() => {
            const recipes = await getRecipes(page);
            setRecipes(recipes);
        })(); 
    }, [page]);

    function handlePrev() {
        setPage(page - 1);
    }

    function handleNext(){
        setPage(page + 1);
    }




    if (recipes === null) return <div>loading...</div>;

  return(
    <div>
        <Header />
        <Body>
            <RecipeList recipes={recipes.recipes} />
            <div css={hoverStyle}>ホバーで色変更</div>
            
        </Body>
        {recipes.links.prev && <button onClick={handlePrev}>prev</button>}
        {recipes.links.next && <button onClick={handleNext}>next</button>}
    </div>
  );
};

export default TopPage;
