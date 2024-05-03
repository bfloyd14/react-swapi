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
      console.log(starshipsData)
    }
      fetchStarshipsList()
      console.log('component has loaded')
  }, [])

if(!starshipsList.length) return <h1> Please wait...ships are refueling</h1>

  return (  
    <div className='startship-container'>
      {starshipsList.map(starship =>
        <div className="starship-list" key={starship.name}>
        <Link to={`/starships/${starship._id}`}> {starship.name}</Link>
        </div>
      )}
    </div>
  )
}
export default Starships