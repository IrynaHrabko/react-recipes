import { NavLink } from "react-router-dom"

const RecipeCard = ({title, imgUrl, id}) => {
  return (
    <article className="'recipe-card">
      <img src={imgUrl} alt={title} />
      <h2>
        {title}
      </h2>
      <a href="#">
        More 
      </a>
    </article>
  )
}

export default RecipeCard