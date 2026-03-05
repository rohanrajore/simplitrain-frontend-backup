const reverseGeocoding= async () =>{
  let url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyCTsvCksHumytBoau1YLKMoHBWfsW3zdO8"
    const response = await fetch(url,{
      method: 'GET'
      });
    const result= await response.json();
    console.log(result)
}
export default reverseGeocoding;
