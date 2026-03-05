const submitProfileDetails = async (userID, profileDetails) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + `/user/${userID}/profile`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profileDetails)
    }
  );
  const result = await response.json();
  console.log(result);
  return result;
};
export default submitProfileDetails;
