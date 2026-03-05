const deleteProfile = async (userID) =>{
  let url = process.env.REACT_APP_API_URL + `/user/${userID}/delete-profile`
    const response = await fetch(url,{
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
      });
    const result= await response.json();
    console.log(result)
    return result
}
export default deleteProfile;
