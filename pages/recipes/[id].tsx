import { useRouter } from "next/router";
import { FC } from "react";
import { getRecipe } from "../../lib/getRecipe";

type Props = {

}

const RecipePage: FC = (props) => {
    const router = useRouter();
    const recipe = getRecipe().recipes[0];
    return(
        <div>
            <h1>Recipe Page! ID: {router.query.id}</h1>
            <h2>{recipe.title}</h2>
            <img src={recipe.image_url} alt="" width="300"></img>
        </div>
    );
};



export default RecipePage;
