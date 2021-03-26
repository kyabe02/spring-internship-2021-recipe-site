/** @jsxImportSource @emotion/react */
import { FC, useEffect, useState } from "react";
import { getRecipesByWord, getRecipes, Recipes } from "../lib/getRecipe";
import { RecipeList } from "../components/recipeList";
import { Header } from "../components/header";
import Link from "next/link";
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { useRouter } from "next/router";
import { type } from "node:os";
import { Footer } from "../components/footer";
import React from "react";

type Props = {
}

const SearchPage: FC<Props> = (props) => {
    const [recipes, setRecipes] = useState<Recipes | null>(null);
    const [page, setPage] = useState<number>(1);
    const [keyword, setKeyword] = useState<string | null>(undefined);

    const ref = React.createRef<HTMLDivElement>()
    const scrollToBottomOfList = React.useCallback(() => {
        ref!.current!.scrollIntoView({
          behavior: 'auto',
          block: 'end',
        })
      }, [ ref ])

    const router = useRouter();

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
            if(router.query.q !== undefined && typeof router.query.q === 'string'){
                console.log(router.query.q);
                const recipes = await getRecipesByWord(router.query.q ,page);
                setRecipes(recipes);
            }
        })(); 
    }, [page, router.query.q]);

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
            <h2>検索結果: {router.query.q}</h2>
            <RecipeList recipes={recipes.recipes} />
            
        </Body>
        {recipes.links.prev && <button onClick={handlePrev}>prev</button>}
        {recipes.links.next && <button onClick={handleNext}>next</button>}
        <Footer />
    </div>
  );
};

export default SearchPage;