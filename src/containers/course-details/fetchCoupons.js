const fetchCoupons= async (batchID) =>{
  let url = process.env.REACT_APP_API_URL + `/coupons/${batchID}`
    const response = await fetch(url,{
      method: 'GET',
      headers: { 'Content-Type': 'application/json'}
      });
    const result= await response.json();
    console.log(result)
    return result
}
export default fetchCoupons;
