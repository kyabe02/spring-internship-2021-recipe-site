/** @jsxImportSource @emotion/react */
import { FC, useEffect, useState } from "react";
import { getRecipesByWord, getRecipes, Recipes } from "../lib/getRecipe";
import { RecipeList } from "../components/recipeList";
import { Header } from "../components/header";
import Link from "next/link";
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { useRouter } from "next/router";

type Props = {
}

const SearchPage: FC<Props> = (props) => {
    const [recipes, setRecipes] = useState<Recipes | null>(null);
    const [page, setPage] = useState<number>(1);
    const [keyword, setKeyword] = useState<string | null>(undefined);

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
            if(router.query.q !== undefined){
                console.log(keyword);
                console.log(router.query.q);
                const recipes = await getRecipesByWord(router.query.q ,page);
                setRecipes(recipes);
            }
        })(); 
    }, [page, router.query.q]);

    function handlePrev() {
        setPage(page - 1);
    }

    function handleNext(){
        setPage(page + 1);
    }




    if (recipes === null) return <div>loading...</div>;
    console.log(recipes);
  return(
    <div>
        <Header />
        <Body>
            <RecipeList recipes={recipes.recipes} />
            
        </Body>
    </div>
  );
};

export default SearchPage;