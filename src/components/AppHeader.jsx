import { NavLink } from "react-router-dom"
const AppHeader = () => {
  const routes = [
    {label: 'Home', link: '/'},
    {label: 'Contacts', link: '/contacts'}
  ]
  return (
    <header>
      <nav className={"nav"}>
        <ul className={"nav__list"}>
          {
            routes.map((route, index) => (
              <li className={"nav__item"} key={index}>
                <NavLink className={"nav_link"} to={route.link}>{route.label}</NavLink>
              </li>
            ))
          }

        </ul>
      </nav>
    </header>
  )
}

export default AppHeader