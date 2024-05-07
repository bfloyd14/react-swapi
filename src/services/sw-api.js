const baseUrl = 'https://swapi.dev/api'

export async function getAllStarships(){
  const res = await fetch(`${baseUrl}/starships/`)
  return await res.json()
}

export async function getStarshipDetails(starshipId){
  const res = await fetch(`${baseUrl}/starships/${starshipId}/`)
  return await res.json()
}

