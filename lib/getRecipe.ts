import { Recipe } from "./recipe";

export type Recipes = {
    recipes: Recipe[];
    links: {
        next?: string;
        prev?: string;
      };
}

export async function getRecipes(pages: number): Promise<Recipes>{
    const response = await fetch(`https://internship-recipe-api.ckpd.co/recipes?page=${pages}`, {
        headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY }
      });
    const recipes = await response.json();
    console.log(recipes);
    return recipes;
}

export async function getRecipesByLink(link: string): Promise<Recipes>{
    const response = await fetch(link, {
        headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY }
      });
    const recipes = await response.json();
    console.log(recipes);
    return recipes;
}

export async function getRecipe(id :Number): Promise<Recipe>{
    const response = await fetch(`https://internship-recipe-api.ckpd.co/recipes/${id}`, {
        headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY }
      });
    const recipes = await response.json();
    console.log(response);
    return recipes;
}

export async function getRecipesByWord(word :string | string[], pages: number): Promise<Recipes>{
    const response = await fetch(`https://internship-recipe-api.ckpd.co/search?keyword=${encodeURI(word)}&page=${pages}`, {
        headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY }
      });
    const recipes = await response.json();
    console.log(response);
    return recipes;
}