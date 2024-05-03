//npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

//services
import { getAllStarships } from "../../services/sw-api"

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
      {starshipsList.map(starship =>
        <div className="starship-list-container" key={starship.url.substring(32, starship.url.length -1)} >
          <Link to={`/starships/${starship.url.substring(32, starship.url.length -1)}`}> {starship.name}</Link>
        </div>
      )}
    </div>
  )
}
export default Starships