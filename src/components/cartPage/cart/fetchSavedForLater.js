const fetchSavedForLater = async function (loggedInUserID, anonymousUserID) {
  let url = "";
  if (loggedInUserID) {
    url = process.env.REACT_APP_API_URL +
      `/savelater?loggedInUserID=${loggedInUserID}`;
  } else if (anonymousUserID) {
    url = process.env.REACT_APP_API_URL +
      `/savelater?anonymousUserID=${anonymousUserID}`;
  } else return;

  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  console.log(data);
  return data;
};
export default fetchSavedForLater;
