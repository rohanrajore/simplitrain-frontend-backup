const createCourseAPI = async (
  userId,
  courseID,
  title,
  subTitle,
  description,
  language,
  level,
  category,
  subcategory,
  tags,
  courseImage,
  courseVideo,
  highlights,
  requirements,
  targetAudience,
  courseSections,
  welcomeMessage,
  congratulatoryMessage
) => {
  const response = await fetch(process.env.REACT_APP_API_URL + `/courses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userID: userId,
      courseID: courseID,
      title: title,
      subTitle: subTitle,
      description: description,
      language: language,
      level: level,
      category: {
        id: category,
      },
      subCategory: {
        id: subcategory,
      },
      tags: tags,
      courseImage: courseImage,
      courseVideo: courseVideo,
      highlights: highlights,
      requirements: requirements,
      targetAudience: targetAudience,
      courseSections: courseSections,
      welcomeMessage: welcomeMessage,
      congratulatoryMessage: congratulatoryMessage,
    }),
  });
  const data = await response.json();
  console.log(data);
};
export default createCourseAPI;
