const fetchWishlistCourses = async function (loggedInUserID) {
  if (!loggedInUserID) return;
  
  let url =
    process.env.REACT_APP_API_URL +
    `/wishlist?loggedInUserID=${loggedInUserID}`;

  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  console.log(data);
  return data.wishList;
};
export default fetchWishlistCourses;
