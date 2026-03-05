const fetchAllCat = async function(){
    let url = process.env.REACT_APP_API_URL + `/all-categories`

    const response = await fetch(url,{
      method:"GET",
      headers: { 'Content-Type': 'application/json'},
    })
    const data = await response.json()
    console.log(data)
    return data
}
export default fetchAllCat;
