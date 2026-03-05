const getAllCategories = async () => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + `/courses/meta/categories`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const result = await response.json();
  return result;
};
export default getAllCategories;
