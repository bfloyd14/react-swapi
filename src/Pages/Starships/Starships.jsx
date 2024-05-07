//npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

//css 
import './Starships.css'

//services
import { getAllStarships } from "../../services/sw-api.js"

const Starships = () => {
  const[starshipsList, setStarshipsList] = useState([])

  useEffect(() => {
    //API Call
    const fetchStarshipsList = async () =>{
      const starshipsData = await getAllStarships()
      //Put data in state
      setStarshipsList(starshipsData.results)
    }
      fetchStarshipsList()
  }, [])

if(!starshipsList.length) return <h1> Please wait...ships are refueling</h1>

  return (  
    <div className='starship-container'>
      <div className="card-container">
      {starshipsList.map(starship =>
        <div className="starship-card" key={starship.url.substring(32, starship.url.length -1)} >
          <Link to={`/starships/${starship.url.substring(32, starship.url.length -1)}`}> {starship.name}</Link>
        </div>
      )}
      </div>
    </div>
  )
}
export default Starships