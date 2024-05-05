//npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

//css
import './StarshipDetails.css'

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
    <div className="starship-container">
      <div className="details-container">
        <div className="details-card">
          <div className='model'>Model: &nbsp;
          {starshipDetails.model} </div> 
          <div className="name">Name: &nbsp;
          {starshipDetails.name}
          </div>
        </div>
      </div>
      <div className="link-back-container">
        <div className="link-back">
          <Link to='/'>Back To The Ship Hanger</Link>
          </div>
        </div>
    </div>
  )
}

export default StarshipDetails 