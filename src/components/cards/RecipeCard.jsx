
import { Link } from "react-router-dom"

const RecipeCard = ({title, imgUrl, id}) => {
  return (
    <article className="'recipe-card">
      <img src={imgUrl} alt={title} />
      <h2>
        {title}
      </h2>
      <Link to={`/recipe/${id}`}>
        {"More >"}
      </Link>
    </article>
  )
}

export default RecipeCard