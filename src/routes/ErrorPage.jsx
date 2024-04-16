import { useNavigate } from "react-router-dom"


 
const ErrorPage = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return(
    <main className="not-found">
    <h1>
    404 ErrorPage
    </h1>
    <button onClick={() => goBack()}>
      {"<< Back"}
    </button>
    </main>
  )
}

export default ErrorPage