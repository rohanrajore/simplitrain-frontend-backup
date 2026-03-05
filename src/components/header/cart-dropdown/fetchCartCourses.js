const fetchCartCourses = async function (loggedInUserID, anonymousUserID) {
  let checkedAnonymousID = !anonymousUserID ? "" : anonymousUserID;
  let checkedLoggedInUserID = !loggedInUserID ? "" : loggedInUserID;
  if (!checkedAnonymousID && !checkedLoggedInUserID) return;
  let url = "";

  if (checkedLoggedInUserID)
    url =
      process.env.REACT_APP_API_URL +
      `/cart?loggedInUserID=${checkedLoggedInUserID}`;
  else if (checkedAnonymousID)
    url =
      process.env.REACT_APP_API_URL +
      `/cart?anonymousUserID=${checkedAnonymousID}`;
  else return;

  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  console.log(loggedInUserID, !anonymousUserID);
  console.log(data);
  if (data.cart === null) {
    return [];
  } else {
    return data.cart;
  }
};
export default fetchCartCourses;
