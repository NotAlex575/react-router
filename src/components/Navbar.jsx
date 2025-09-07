import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
      <div className='container row px-4 text-center'>
        <h1>Questa è la Navbar!</h1>
        <div className='row'>
          <p>
            <NavLink to="/">Homepage</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </p>
        </div>
      </div>
    </header>
  )
}

export default Navbar