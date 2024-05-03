//npm modules
import {Route, Routes} from 'react-router-dom'

// components
import NavBar from './Component/Nav'

//pages
import Starships from './Pages/Starships/Starships'

// css
import './App.css'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Starships/>} />
    </Routes>
    </>
  )
}

export default App
