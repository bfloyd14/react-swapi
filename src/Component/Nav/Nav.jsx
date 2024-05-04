//css
import './Nav.css'

//npm modules
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return ( 
      <nav>
        <NavLink to='/'>STAR WARS STARSHIPS </NavLink>
      </nav>
    
  )
}

export default NavBar