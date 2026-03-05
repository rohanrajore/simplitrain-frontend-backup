import React,{useState, useEffect} from 'react';
// import './trending.css';
import Course from '../course/course.jsx';
import fetchCategories from './fetchCategories';
import fetchCoursesByCategory from './coursesByCategory';
import { Container, Dropdown } from 'react-bootstrap';
import detectElementOverflow from 'detect-element-overflow';
import MoreCategories from "./moreCategories/moreCategories.jsx";
import { useResizeDetector } from 'react-resize-detector';
import LoaderGif from '../../../styles/images/loading_spinner.gif';
import { TrendingContainer, TrendingHeader, TrendingCourses, TrendingCategory, TrendingCategoryItem } from '../home.style.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import useMatchBreakpoints from '../../../hooks/useMatchBreakpoints.js';

const Trending = props => {

    const [bestCourses, setBestCourses] = useState([])
    const [learnersSeeCourses, setLearnersSeeCourses] = useState([])
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
    const [firstCarouselPostion, setFirstCarouselPosition] = useState(0)
    const [loading, setLoading] = useState(true)
    const { isLg, isXl } = useMatchBreakpoints();
    const isMobie = !isLg && !isXl;
      // This will help us detect resizing
    const { width, ref } = useResizeDetector();

    const handleOverflowCategoriesFirst= ()=>{
        let checkArray =[]
      for(let i=0; i<categories.length; i++){
        if(detectElementOverflow(document.getElementById(categories[i].id), document.getElementById("trendingCategories")).collidedBottom){
          checkArray.push(categories[i])
        }
      }
      setOverflowCategories(checkArray)
      setOverflowFirstCat(!overflowFirstCat)
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
           var ctg=await fetchCategories()
           setCategories(ctg)
           setActiveFirstCategory(ctg[0].id)
       }
         else{
           const responseTrending = await fetchCoursesByCategory(activeFirstCategory===""?ctg[0].id: activeFirstCategory, "NEW_COURSES")
           setBestCourses(responseTrending.courses.content)
           setLoading(false)
       }

       }
       fetch()
    },[activeFirstCategory])


  //  useEffect(()=>{
    //   async function fetch(){
              // This will just fetchAllCategories for the first time, every other time it will skip this part.
    //     if(activeSecondCategory===""){
    //       var ctgSecond= await fetchCategories()

    //       ctgSecond.forEach(cat => cat.id=cat.id+"second")
    //       setCategoriesSecond(ctgSecond)
    //       setActiveSecondCategory(ctgSecond[0].id)
    //   }
    //    else{
    //      const responseNew = await fetchCoursesByCategory(activeSecondCategory===""?ctgSecond[0].id.replace("second",""): activeSecondCategory.replace("second",""), "TRENDING_COURSES")
      //    setLearnersSeeCourses(responseNew.courses.content)
      //    setLoading(false)
      //   }
    //   }
    //   fetch()
  //  },[activeSecondCategory])

    useEffect(()=>{
              // This useEffect will prevent activeCategory to overflow
            let checkArray =categories
            let checkArraySecond = categoriesSecond

            let activeIndex = checkArray.findIndex(cat => cat.id===activeFirstCategory)
            let activeIndexSecond = checkArraySecond.findIndex(cat => cat.id===activeSecondCategory)
            if(activeFirstCategory!==""){
                if(detectElementOverflow(document.getElementById(checkArray[activeIndex].id), document.getElementById("trendingCategories")).collidedBottom){
                      let tmp= checkArray[activeIndex]
                      checkArray[activeIndex]=checkArray[activeIndex-1]
                      checkArray[activeIndex-1]=tmp
                      setCategories(checkArray)
                }
            }
            // Uncoment when trending courses will be added
        //    if(activeSecondCategory!==""){
          //      if(detectElementOverflow(document.getElementById(checkArraySecond[activeIndexSecond].id), document.getElementById("trendingCategoriesSecond")).collidedBottom){
          //            let tmp= checkArraySecond[activeIndexSecond]
          //            checkArraySecond[activeIndexSecond]=checkArraySecond[activeIndexSecond-1]
            //          checkArraySecond[activeIndexSecond-1]=tmp
              //        setCategoriesSecond(checkArraySecond)
              //  }
          //  }

    },[width])

    const categoryFirstHandler= e =>{
       setActiveFirstCategory(e.target.id)
       setFirstCarouselPosition(0)
    }
    const categorySecondHandler= e =>{
       setActiveSecondCategory(e.target.id)
    }

    const buttonPrevHandler= arrayName =>{
          let slide = 300;
          if(isMobie){
            slide = 290;
          }
          let newPosition = firstCarouselPostion+slide;
          if(newPosition>0){
            newPosition=0
          }
          setFirstCarouselPosition(newPosition)
    }
    const buttonNextHandler= arrayName =>{

          let parentWidth = document.getElementById("bestCourses-wrapper").offsetWidth
          let lastElementWidth = document.getElementById(bestCourses[bestCourses.length-1].id).offsetWidth
          let lastElementOffset = document.getElementById(bestCourses[bestCourses.length-1].id).offsetLeft
          let offsetRight = (lastElementWidth+lastElementOffset)-parentWidth
          let totalElementsWidth=0;
          let inc=0;
          let newPosition;

          do {
              totalElementsWidth = totalElementsWidth + lastElementWidth;
              inc=inc+1
            } while (totalElementsWidth < parentWidth && inc< bestCourses.length)

            if(lastElementOffset-parentWidth<0){
                if(totalElementsWidth< parentWidth){
                  newPosition = firstCarouselPostion
                }
                else{
                                    //Adding -10 for padding
                  newPosition = firstCarouselPostion -(lastElementOffset-parentWidth+lastElementWidth)-10
                }
            }
            else{
              let slide = 300;
              if(isMobie){
                slide = 290;
              }
              newPosition = firstCarouselPostion-slide
            }

          setFirstCarouselPosition(newPosition)
    }
  return(
    <TrendingContainer className="page-section" onMouseLeave={()=>{setOverflowFirstCat(false); setOverflowSecondCat(false)}} ref={ref}>
      <Container>
      {/* <TrendingHeader>
        <h3 className="trending-title">New Courses</h3>
        <TrendingCategory>
          <div className="trending-category-container category-list" id="trendingCategories">
                {categories.map(category=>(
                  <TrendingCategoryItem
                    key={category.id}
                    id={category.id}
                    className={`trending-category ${activeFirstCategory===category.id?"activeCategory":""}`}
                    onClick={categoryFirstHandler}>{category.name}
                  </TrendingCategoryItem>
                ))}
                  <FontAwesomeIcon icon={faEllipsisV} className="category-moreIcon" onClick={handleOverflowCategoriesFirst}/>
          </div>
          { overflowFirstCat &&
            <MoreCategories overflowCategories={overflowCategories}
              activeCategory={activeFirstCategory}
              categoryHandler={categoryFirstHandler}
              closeMoreCat={setOverflowFirstCat}
              categories={categories}
              setCategories={setCategories}
              setActiveCategory={setActiveFirstCategory}
            />
          }
        </TrendingCategory>
      </TrendingHeader> */}
        <TrendingHeader>
          <h3 className="trending-title">New Courses</h3>
          <TrendingCategory>
                <div className="category-list" id="trendingCategories">

                        {categories.map(category=>(
                            <TrendingCategoryItem
                            key={category.id}
                            id={category.id}
                            className={`trending-category ${activeFirstCategory===category.id?"activeCategory":""}`}
                            onClick={categoryFirstHandler}>{category.name}
                          </TrendingCategoryItem>
                        ))}
                        <FontAwesomeIcon icon={faEllipsisV} className="category-moreIcon" onClick={handleOverflowCategoriesFirst}/>
                </div>
              { overflowFirstCat && <MoreCategories overflowCategories={overflowCategories}
                                                    activeCategory={activeFirstCategory}
                                                    categoryHandler={categoryFirstHandler}
                                                    closeMoreCat={setOverflowFirstCat}
                                                    categories={categories}
                                                    setCategories={setCategories}/> }
          </TrendingCategory>
        </TrendingHeader>

        {/* <div className="trending-second">
                <div className="trending-courses">
                {bestCourses.length>0 &&   <div className="trending-button tbLeft" onClick={()=>buttonPrevHandler("bestSeller")}><FontAwesomeIcon icon='chevron-left'/></div>}
                    {loading===true? <img className="loadingImgCenter" src={LoaderGif} alt='' />
                        :bestCourses.length<1 ? <div className="trending-noCourses">Launching new courses soon</div>
                        :bestCourses.map(course=>(
                        <Course key={course.id} id={course.id} img={course.img} title={course.title} price={course.price}
                        date={course.date} location={course.location} author={course.author} seatsLeft={course.seatsLeft}
                        authorID={course.authorID} actualPrice={course.actualPrice}/>
                    ))}
                {bestCourses.length>0 &&   <div className="trending-button tbRight" onClick={()=>buttonNextHandler("bestSeller")}><FontAwesomeIcon icon='chevron-right'/></div>}
                </div>
        </div> */}
        <TrendingCourses>
            {
              bestCourses.length>0 &&
              <div className="trending-button tbLeft" onClick={()=>buttonPrevHandler("bestSeller")}>
                <FontAwesomeIcon icon={faAngleLeft} />
              </div>
            }
            <div className="trending-courses" id="bestCourses-wrapper">

                  {
                    loading===true?
                      <div className="trending-noCourses">
                        <img className="loadingImgCenter" src={LoaderGif} alt='' />
                      </div>
                    :bestCourses.length<1 ? <div className="trending-noCourses">Launching new courses soon</div>
                  :bestCourses.map(course=>(
                      <Course key={course.id} id={course.id} img={course.img} title={course.title} price={course.price}
                        date={course.date} location={course.location} author={course.author} seatsLeft={course.seatsLeft}
                        authorID={course.authorID} actualPrice={course.actualPrice} position={firstCarouselPostion}/>
                    ))
                  }

            </div>
            {
              bestCourses.length>0 &&
              <div className="trending-button tbRight" onClick={()=>buttonNextHandler("bestSeller")}>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            }
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
                {learnersSeeCourses.length>0 &&  <div className="trending-button tbLeft" onClick={()=>buttonPrevHandler("learnersSeeCourses")}><FontAwesomeIcon icon='chevron-left'/></div>}
                    {learnersSeeCourses.length<1 ?<div className="trending-noCourses">Launching new courses soon</div>
                        :learnersSeeCourses.map(course=>(
                        <Course key={course.id} id={course.id} img={course.img} title={course.title} price={course.price}
                        date={course.date} location={course.location} author={course.author} seatsLeft={course.seatsLeft}
                        authorID={course.authorID} actualPrice={course.actualPrice}/>
                    ))}
                  {learnersSeeCourses.length>0 && <div className="trending-button tbRight" onClick={()=>buttonNextHandler("learnersSeeCourses")}><FontAwesomeIcon icon='chevron-right'/></div>}
                </div>
        </div>*/}
    </Container>
  </TrendingContainer>
);}

export default Trending;
