//css
import './Nav.css'

//npm modules
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return ( 
      <nav>
        <NavLink to='/'>Ships </NavLink>
      </nav>
    
  )
}

export default NavBar