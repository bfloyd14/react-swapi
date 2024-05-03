//npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

//services
import { getStarshipDetails } from "../../services/sw-api"

const StarshipDetails = () => {

  const[starshipDetails, setStarshipDetails] = useState({})
  const {starshipId} = useParams()

  useEffect(() =>{
    const fetchDetails = async () => {
      //API Call
      const starshipData = await getStarshipDetails(starshipId)
      // set state
      setStarshipDetails(starshipData)
      console.log(starshipDetails)
    }
    fetchDetails()
    console.log('component has loaded')
  }, [starshipId])

if (!starshipDetails.name) return <h1>Rebooting weapons systems....</h1>

  return ( 
    <div>
      <h1>Model: {starshipDetails.model}</h1>
      <h1>Name: {starshipDetails.name}</h1>
      <Link to='/'>Back To The Ship Hanger</Link>
      
    </div>
  )
}

export default StarshipDetails 