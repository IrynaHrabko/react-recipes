import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Recipe = () => {
  const API_BASEURL = 'https://api.edamam.com/api/recipes/v2/';
  const APP_ID = 'eaafc3f9';
  const APP_KEY = '68254fb25e1c15f4fa4cbcac2ff1ab16';
  const params = useParams()
  let [recipe, setRecipe] = useState({})

  const getRecipes = async () => {
    const response = 
      await fetch(`${API_BASEURL}${params.id}?app_id=${APP_ID}&app_key=${APP_KEY}&type=public`)
    const data = await response.json()
    console.log(data)
    setRecipe(recipe = data.recipe)
    
  }

  useEffect(() => {
    getRecipes()
  })
  return(
    <>
    {
      recipe.label !== '' &&
      <div>
        <h1>
          {recipe?.label}
        </h1>
        <img src={recipe.image} alt={recipe.label} />
        <h2>Ingredients</h2>
        <ul>
          {recipe?.ingredients?.map((ingredient, index) => (
            // eslint-disable-next-line react/jsx-key
            <li key={index}>
              {ingredient.text}
            </li>
          ))}
        </ul>

        {/* <p>
          {recipe.instructions}
        </p> */}
      </div>
    }
    </>
  )
}

export default Recipe