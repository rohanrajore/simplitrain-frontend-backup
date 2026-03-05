const fetchSettings= async (userID) =>{

    let url = process.env.REACT_APP_API_URL + (`/user/${userID}/settings`)

    let requestOptions = {
      method: 'GET',
      headers: {"content-type": "application/json"},
      redirect: 'follow'
    }

  const response = await fetch(url, requestOptions)
  const data = await response.json()
  console.log(data)
  return data

}
export default fetchSettings;
