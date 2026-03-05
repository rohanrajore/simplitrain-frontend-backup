const resetPassword = async (userID, oldPassword, newPassword) =>{
  let url = process.env.REACT_APP_API_URL + `/user/resetPassword/${userID}`
    const response = await fetch(url,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ "oldPassword": oldPassword,
                             "newPassword": newPassword
                          })

      });
    const result= await response.json();
    return result
}
export default resetPassword;
