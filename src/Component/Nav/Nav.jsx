//css
import './Nav.css'

//npm modules
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return ( 
    <>
      <nav>
        <div className="nav-container">
        <div className="link-container">
          <NavLink to='/'>STAR WARS STARSHIPS </NavLink>
        </div>
        <div className="image-container">
          <img src="../src/assets/images/droid.png" alt="droid logo" />
        </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar