import React,{useState, useEffect} from 'react';
// import './trending.css';
import Course from '../course/course.jsx';
import { Container, Dropdown } from 'react-bootstrap';
import fetchCategories from './fetchCategories';
import fetchCoursesByCategory from './coursesByCategory';
import ItemsCarousel from 'react-items-carousel';
import detectElementOverflow from 'detect-element-overflow';
import MoreCategories from "./moreCategories/moreCategories.jsx";
import { useResizeDetector } from 'react-resize-detector';
import LoaderGif from '../../../styles/images/loading_spinner.gif';
import { TrendingContainer, TrendingHeader, TrendingCourses, TrendingCategory, TrendingCategoryItem } from '../home.style.jsx';
import useMatchBreakpoints from '../../../hooks/useMatchBreakpoints';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


const Trending = props => {

    const [bestCourses, setBestCourses] = useState([])
    const [noOfItems, setNoOfItems] = useState(5);
    const [numberOfCards, setNumberOfCards] = useState(4);
    const { isLg, isMd, isXl, isSm, isXs } = useMatchBreakpoints();
    const isMobie  = !isLg && !isXl;
    const [activeItemIndex, setActiveItemIndex] = useState(0)
    const [learnersSeeCourses, setLearnersSeeCourses] = useState([])
    const [currentBestCourses, setCurrentBestCourses] = useState([])
    const [currentLearnersSee, setCurrentLearnersSee] = useState([])
    const [bestCoursesIndex, setBestCoursesIndex] = useState(5)
    const [learnersSeeIndex, setLearnersSeeIndex] = useState(5)
    const [categories, setCategories] = useState([])
    const [categoriesSecond,setCategoriesSecond] = useState([])
    const [overflowCategories, setOverflowCategories] = useState([])
    const [overflowCategoriesSecond, setOverflowCategoriesSecond] = useState([])
    const [overflowFirstCat, setOverflowFirstCat] = useState(false)
    const [overflowSecondCat, setOverflowSecondCat] = useState(false)
    const [activeFirstCategory, setActiveFirstCategory] = useState("")
    const [activeSecondCategory, setActiveSecondCategory] = useState("")
    const [loading, setLoading] = useState(true)
      // This will help us detect resizing
    const { width, ref } = useResizeDetector();

    const handleOverflowCategoriesFirst= ()=>{
      let checkArray =[];
      categories.forEach((element, index) => {
        if(index >= noOfItems){
          checkArray.push(element);
        }
      });
      // for(let i=0; i<categories.length; i++){
      //   // if(detectElementOverflow(document.getElementById(categories[i].id), document.getElementById("trendingCategories")).collidedBottom){
      //   //   checkArray.push(categories[i])
      //   // }
      // }
      setOverflowCategories(checkArray)
      setOverflowFirstCat(true)
    }
    const handleOverflowCategoriesSecond= ()=>{
        let checkArray =[]
      for(let i=0; i<categories.length; i++){
        if(detectElementOverflow(document.getElementById(categoriesSecond[i].id), document.getElementById("trendingCategoriesSecond")).collidedBottom){
          checkArray.push(categoriesSecond[i])
        }
      }
      setOverflowCategoriesSecond(checkArray)
      setOverflowSecondCat(true)
    }

    useEffect(()=>{
       async function fetch(){
          // This will just fetchAllCategories for the first time, every other time it will skip this part.
         if(activeFirstCategory===""){
           var ctg=await fetchCategories();
           console.log('ctg', ctg);
           setCategories(ctg)
           setActiveFirstCategory(ctg[0].id)
       }
         else{
           const responseTrending = await fetchCoursesByCategory(activeFirstCategory===""?ctg[0].id: activeFirstCategory, "NEW_COURSES")
           setBestCourses(responseTrending.courses.content)
           setCurrentBestCourses(responseTrending.courses.content.slice(0,5))
           setLoading(false)
       }

       }
       fetch()
    },[activeFirstCategory])


    useEffect(()=>{
       async function fetch(){
              // This will just fetchAllCategories for the first time, every other time it will skip this part.
         if(activeSecondCategory===""){
           var ctgSecond= await fetchCategories()

           ctgSecond.forEach(cat => cat.id=cat.id+"second")
           setCategoriesSecond(ctgSecond)
           setActiveSecondCategory(ctgSecond[0].id)
       }
        else{
          const responseNew = await fetchCoursesByCategory(activeSecondCategory===""?ctgSecond[0].id.replace("second",""): activeSecondCategory.replace("second",""), "TRENDING_COURSES")
          setLearnersSeeCourses(responseNew.courses.content)
          setCurrentLearnersSee(responseNew.courses.content.slice(0,5))
          setLoading(false)
         }
       }
       fetch()
    },[activeSecondCategory])

    
    useEffect(()=>{
      if(isMd || isSm || isXs){
        if(isSm || isXs){
          setNoOfItems(categories.length+1);
          setNumberOfCards(1);
        }else{
          setNoOfItems(categories.length+1);
          setNumberOfCards(2);
        }
      }else{
        setNoOfItems(5);
        setNumberOfCards(4);
      }
    },[categories, isLg, isMd, isXl, isSm, isXs])

    // useEffect(()=>{
    //           // This useEffect will prevent activeCategory to overflow
    //         let checkArray =categories
    //         let checkArraySecond = categoriesSecond

    //         let activeIndex = checkArray.findIndex(cat => cat.id===activeFirstCategory)
    //         let activeIndexSecond = checkArraySecond.findIndex(cat => cat.id===activeSecondCategory)
    //         // if(activeFirstCategory!==""){
    //         //     if(detectElementOverflow(document.getElementById(checkArray[activeIndex].id), document.getElementById("trendingCategories")).collidedBottom){
    //         //           let tmp= checkArray[activeIndex]
    //         //           checkArray[activeIndex]=checkArray[activeIndex-1]
    //         //           checkArray[activeIndex-1]=tmp
    //         //           setCategories(checkArray)
    //         //     }
    //         // }
    //         // Uncoment when trending courses will be added
    //     //    if(activeSecondCategory!==""){
    //       //      if(detectElementOverflow(document.getElementById(checkArraySecond[activeIndexSecond].id), document.getElementById("trendingCategoriesSecond")).collidedBottom){
    //       //            let tmp= checkArraySecond[activeIndexSecond]
    //       //            checkArraySecond[activeIndexSecond]=checkArraySecond[activeIndexSecond-1]
    //         //          checkArraySecond[activeIndexSecond-1]=tmp
    //           //        setCategoriesSecond(checkArraySecond)
    //           //  }
    //       //  }

    // },[width])

    const categoryFirstHandler= e =>{
       setActiveFirstCategory(e.target.id)
    }
    
    const categorySecondHandler= e =>{
       setActiveSecondCategory(e.target.id)
    }

    const buttonPrevHandler= arrayName =>{
          let index= arrayName==="bestSeller"?bestCoursesIndex-1:learnersSeeIndex-1;
          index=index<5?5:index
          let newBestCourses = arrayName==="bestSeller"?bestCourses.slice(index-5,index):learnersSeeCourses.slice(index-5,index)
          arrayName==="bestSeller"?setCurrentBestCourses(newBestCourses):setCurrentLearnersSee(newBestCourses)
          arrayName==="bestSeller"?setBestCoursesIndex(index):setLearnersSeeIndex(index)
    }
    const buttonNextHandler= arrayName =>{
          let index=arrayName==="bestSeller"?bestCoursesIndex+1:learnersSeeIndex+1;

          switch(arrayName){
            case "bestSeller":
                  index=index>bestCourses.length?bestCourses.length:index;
                  break;
            case "learnersSee":
                  index=index>learnersSeeCourses.length?learnersSeeCourses.length:index;
          }

          let newBestCourses=arrayName==="bestSeller"? bestCourses.slice(index-5,index):learnersSeeCourses.slice(index-5,index)
          arrayName==="bestSeller"?setCurrentBestCourses(newBestCourses):setCurrentLearnersSee(newBestCourses)
          arrayName==="bestSeller"?setBestCoursesIndex(index):setLearnersSeeIndex(index)
    }
  return(
    <>
      <TrendingContainer onMouseLeave={()=>{setOverflowFirstCat(false); setOverflowSecondCat(false)}} ref={ref}>
          <Container>
            <TrendingHeader>
              <h3>New Courses</h3>
              <TrendingCategory>
                <div className="category-list">
                  {categories.map((category, index)=>(
                    index < noOfItems?
                      <TrendingCategoryItem
                        key={category.id}
                        id={category.id}
                        className={`trending-category ${activeFirstCategory===category.id?"activeCategory":""}`}
                        onClick={categoryFirstHandler}>{category.name}
                      </TrendingCategoryItem>
                    :null
                  ))}
                </div>
                {
                  categories.length > noOfItems?
                    <MoreCategories
                      noOfItems={noOfItems}
                      activeCategory={activeFirstCategory}
                      categoryHandler={categoryFirstHandler}
                      closeMoreCat={setOverflowFirstCat}
                      categories={categories}
                      setCategories={setCategories}
                      setActiveCategory={setActiveFirstCategory}
                    />
                  :null
                }
               
                {/* <button onClick={handleOverflowCategoriesFirst}>
                  
                </button> */}
               
              </TrendingCategory>
                  {/* {
                    overflowFirstCat && <MoreCategories overflowCategories={overflowCategories}
                      activeCategory={activeFirstCategory}
                      categoryHandler={categoryFirstHandler}
                      closeMoreCat={setOverflowFirstCat}
                      categories={categories}
                      setCategories={setCategories}
                      setActiveCategory={setActiveFirstCategory}/> 
                  } */}
            </TrendingHeader>

              <TrendingCourses>
                <ItemsCarousel
                  requestToChangeActive={setActiveItemIndex}
                  activeItemIndex={activeItemIndex}
                  // numberOfCards={numberOfCards}
                  gutter={20}
                  leftChevron={<button className="carousel carousel-left"> <FontAwesomeIcon icon={faAngleLeft} /> </button>}
                  rightChevron={<button className="carousel carousel-right"> <FontAwesomeIcon icon={faAngleRight} /> </button>}
                  outsideChevron
                  chevronWidth={10}
                >
                  {
                    bestCourses.map(course=>(
                      <Course key={course.id} id={course.id} img={course.img} title={course.title} price={course.price}
                      date={course.date} location={course.location} author={course.author} seatsLeft={course.seatsLeft}
                      authorID={course.authorID} actualPrice={course.actualPrice}/>
                    ))
                  }
                </ItemsCarousel>
                    {/* {currentBestCourses.length>0 &&   <div className="trending-button tbLeft" onClick={()=>buttonPrevHandler("bestSeller")}><FontAwesomeIcon icon='chevron-left'/></div>}
                        {loading===true? <img className="loadingImgCenter" src={LoaderGif} alt='' />
                            :currentBestCourses.length<1 ? <div className="trending-noCourses">Launching new courses soon</div>
                            :currentBestCourses.map(course=>(
                            <Course key={course.id} id={course.id} img={course.img} title={course.title} price={course.price}
                            date={course.date} location={course.location} author={course.author} seatsLeft={course.seatsLeft}
                            authorID={course.authorID} actualPrice={course.actualPrice}/>
                        ))}
                    {currentBestCourses.length>0 &&   <div className="trending-button tbRight" onClick={()=>buttonNextHandler("bestSeller")}><FontAwesomeIcon icon='chevron-right'/></div>} */}
              </TrendingCourses>
              {/*We hide trending courses for now*/}
            {/*<div className="trending-first" style={{marginTop:"25px"}}>
                    <div className="trending-title">Trending Courses</div>
                    <div className="trending-category-container" id="trendingCategoriesSecond">
                      <FontAwesomeIcon icon={faEllipsisV} className="category-moreIcon" onClick={handleOverflowCategoriesSecond}/>
                      {categoriesSecond.map(category=>(
                          <div key={category.id} id={category.id}
                              className={`trending-category ${activeSecondCategory===category.id?"activeCategory":""}`}
                              onClick={categorySecondHandler}>{category.name}</div>
                      ))}
                    </div>
                    { overflowSecondCat && <MoreCategories overflowCategories={overflowCategoriesSecond}
                                                          activeCategory={activeSecondCategory}
                                                          categoryHandler={categorySecondHandler}
                                                          closeMoreCat={setOverflowSecondCat}
                                                          categories={categoriesSecond}
                                                          setCategories={setCategoriesSecond}
                                                          setActiveCategory={setActiveSecondCategory}/> }
            </div>

            <div className="trending-second">
                    <div className="trending-courses">
                    {currentLearnersSee.length>0 &&  <div className="trending-button tbLeft" onClick={()=>buttonPrevHandler("learnersSee")}><FontAwesomeIcon icon='chevron-left'/></div>}
                        {currentLearnersSee.length<1 ?<div className="trending-noCourses">Launching new courses soon</div>
                            :currentLearnersSee.map(course=>(
                            <Course key={course.id} id={course.id} img={course.img} title={course.title} price={course.price}
                            date={course.date} location={course.location} author={course.author} seatsLeft={course.seatsLeft}
                            authorID={course.authorID} actualPrice={course.actualPrice}/>
                        ))}
                      {currentLearnersSee.length>0 && <div className="trending-button tbRight" onClick={()=>buttonNextHandler("learnersSee")}><FontAwesomeIcon icon='chevron-right'/></div>}
                    </div>
            </div>*/}
        </Container>
      </TrendingContainer>
    </>
  
);}

export default Trending;
