//css
import './Nav.css'

//npm modules
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return ( 
      <nav>
        <h1>STAR WARS STARSHIPS</h1>
        <NavLink to='/'>Ships </NavLink>
      </nav>
    
  )
}

export default NavBar