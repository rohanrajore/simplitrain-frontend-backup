const fetchCategories= async () =>{
  let url = process.env.REACT_APP_API_URL + "/courses/meta/categories";
  console.log('url', url);
    const response = await fetch(url,{
      method: 'GET',
      headers: { 'Content-Type': 'application/json'}
      });
    const result= await response.json();
    return result
}
export default fetchCategories;
