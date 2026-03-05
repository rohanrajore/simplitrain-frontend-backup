const getSubcategories = async (categoryID) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL +
      `/courses/meta/subcategories?categoryID=${categoryID}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const result = await response.json();
  console.log(result);
  return result;
};
export default getSubcategories;
