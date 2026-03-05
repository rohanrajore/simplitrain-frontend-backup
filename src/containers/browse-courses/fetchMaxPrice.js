const fetchMaxPrice= async () =>{

    let url = process.env.REACT_APP_API_URL + "/courses/getMaxPrice"
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
export default fetchMaxPrice;
