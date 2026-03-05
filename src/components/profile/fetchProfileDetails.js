const fetchProfileDetails = async (userID) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + `/user/${userID}/profile`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const result = await response.json();
  if (!result.userProfileDetails.profileImgId) {
    result.userProfileDetails.profileImgId = "";
    result.userProfileDetails.profileImg = "";
  }
  console.log(result);
  return result;
};
export default fetchProfileDetails;
