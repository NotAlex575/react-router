import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
        <h1>Questa è la Navbar!</h1>
        <nav>
          <ul className="list-unstyled d-flex">
            <li className="me-3">
              <NavLink to="/">Homepage</NavLink>
            </li>
            <li className="me-3">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="me-3">
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Navbar