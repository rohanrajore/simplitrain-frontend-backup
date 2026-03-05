
const fetchCourses= async (category,subCategory,search,pageNum,pageSize,filter,price,level,
        language,rating,duration,courseDate,sort,location,venueType,distance) =>{
          console.log(courseDate)
          console.log(filter)
    let url = process.env.REACT_APP_API_URL + (search!==""?`/courses/search?searchText=${search}&`:"/courses/search?")
     + (category!==undefined?`categoryID=${category}&`:"")
     + (subCategory!==undefined?`subCategoryID=${subCategory}&`:"")
     +`pageNum=${pageNum}&pageSize=${pageSize}&startPrice=${price[0]}&endPrice=${price[1]}&courseLevel=${level}&courseBatchVenueTypeFilter=${venueType}&`
     +(language ==="allLanguages"?"":`courseLanguage=${language}&`)
     +(rating === "ZERO"?"" :`averageLearnerReviewFilter=${rating}&`)
     +(`durationStartMinutes=${duration[0]}&durationEndMinutes=${duration[1]}&`)
     +((courseDate[0]==="" || courseDate[0]=== undefined || courseDate[1]==="" || courseDate[1]==="")?""
       :`startDate=${courseDate[0]}&endDate=${courseDate[1]}&`)
     +(filter===""?"":`startDateFilter=${filter}&`)
     +`browseCourseSortBy=${sort}`
     +((location.latitude==="" || location.longitude==="")?"":`&userLatitude=${location.latitude}&userLongitude=${location.longitude}`)
     +((distance===""?"":`&distance=${distance}`))

      console.log(url, price[0],price[1])
    let requestOptions = {
      method: 'GET',
      headers: {"content-type": "application/json"},
      redirect: 'follow'
    }

  const response = await fetch(url, requestOptions)
  const data = await response.json()
  return data

}
export default fetchCourses;
