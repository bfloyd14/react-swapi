const baseUrl = 'https://sswapi.dev/api/'

export async function getAllStarships(){
  const res = await fetch(`${baseUrl}/starships`)
  return await res.json()
}