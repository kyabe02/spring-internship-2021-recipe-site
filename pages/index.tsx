/** @jsxImportSource @emotion/react */
import { FC, useEffect, useState } from "react";
import { getRecipes, Recipes, getRecipesByWord } from "../lib/getRecipe";
import { RecipeList } from "../components/recipeList";
import { Header } from "../components/header";
import Link from "next/link";
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { Footer } from "../components/footer";
import React from "react";


const TopPage: FC = () => {
    const [recipes, setRecipes] = useState<Recipes | null>(null);
    const [page, setPage] = useState<number>(1);
    const [keyword, setKeyword] = useState<string | null>(null);

    const ref = React.createRef<HTMLDivElement>()

    const scrollToBottomOfList = React.useCallback(() => {
        ref!.current!.scrollIntoView({
          behavior: 'auto',
          block: 'end',
        })
      }, [ ref ])


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
        paddingTop: '50px',
    });

    useEffect(() => {
        (async() => {
            const recipes = await getRecipes(page);
            setRecipes(recipes);
        })(); 
    }, [page]);

    if(keyword !== null) {
        useEffect(() => {
            (async() => {
                const recipes = await getRecipesByWord(keyword, page);
                setRecipes(recipes);
            })(); 
        }, [page]);
    }

    function handlePrev() {
        setPage(page - 1);
        scrollToBottomOfList();
        setRecipes(null);
    }

    function handleNext(){
        setPage(page + 1);
        scrollToBottomOfList();
        setRecipes(null);
    }




    if (recipes === null){
        return(
            <div>
            <Header />
            <div ref={ref}></div>
            <Body>
                <RecipeList recipes={null} />            
            </Body>
            <Footer />
            </div>
        )
    }

  return(
    <div>
        <Header />
        <div ref={ref}></div>
        <Body>
            <RecipeList recipes={recipes.recipes} />

            
        </Body>
        {recipes.links.prev && <button onClick={handlePrev}>prev</button>}
        {recipes.links.next && <button onClick={handleNext}>next</button>}
        <Footer />
    </div>
  );
};

export default TopPage;
