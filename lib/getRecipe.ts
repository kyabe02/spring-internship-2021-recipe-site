import { Recipe } from "./recipe";

export type Recipes = {
    recipes: Recipe[];
}

export async function getRecipe(): Promise<Recipes>{
    const response = await fetch('../data/recipes.json');
    const recipes = await response.json();
    console.log(recipes);
    return recipes;
}