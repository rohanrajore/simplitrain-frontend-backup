const updateSettings= async (userID,language,timezone) =>{

    let url = process.env.REACT_APP_API_URL + (`/user/${userID}/settings`)

    let requestOptions = {
      method: 'PUT',
      headers: {"content-type": "application/json"},
      body: JSON.stringify({
                             "timezone": timezone,
                             "language": language
                          }),
      redirect: 'follow'
    }

  const response = await fetch(url, requestOptions)
  const data = await response.json()
  console.log(data)
  return data

}
export default updateSettings;
