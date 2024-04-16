import { useEffect } from "react";
import { useState } from "react";
import SearchForm from "../components/SearchForm";
import RecipeCard from "../components/cards/RecipeCard";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const API_BASEURL = 'https://api.edamam.com/api/recipes/v2';
  const APP_ID = 'eaafc3f9';
  const APP_KEY = '68254fb25e1c15f4fa4cbcac2ff1ab16';
  const navigate = useNavigate()
  let [query, setQuery] = useState('')
  let [search, setSearch] = useState('')
  let [result, setResult] = useState([])

  const getRecipes = async () => {
    const response = 
      await fetch(`${API_BASEURL}?app_id=${APP_ID}&app_key=${APP_KEY}&type=public&q=${search}`)
    const data = await response.json()
    setResult(result = [...data.hits])
  }
  const submitHandler = () => {
    event.preventDefault()
    setSearch(search = query)
    event.target.reset()
  }
  
  const inputHandler = () => {
    setQuery(query = event.target.value)
  }

  useEffect(() => {
    getRecipes()
    }, [search])


  const getIdFromURI = (uri) => uri.split('recipe_')[1]
  
  return (
    <>
      <SearchForm submitHandler={submitHandler} inputHandler={inputHandler}/>

      <section>
        {result.map(item => (
          <RecipeCard key={item.recipe.uri} title={item.recipe.label} imgUrl={item.recipe.image} id={getIdFromURI(item.recipe.uri)}/>
        ))}
      </section>


    </>
  )
}

export default Home