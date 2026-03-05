import React, { useState } from "react";
import { Slide } from "react-slideshow-image"
import 'react-slideshow-image/dist/styles.css'
import { Container } from "react-bootstrap";
import pic3 from '../../assets/background-image1.jpeg';
import { HomeBanner, HomeBannerContent } from "../../contexts/homeContext";
import { ImageSlides, ImageSlideshowCards, ImageSlideshowItem } from "./imageSlides.style.jsx";
import { useMatchBreakpoints } from "../../hooks";

const ImageSlideshow = () => {
  const { isMd, isLg, isXl } = useMatchBreakpoints();
  const isMobie  = !isLg && !isXl;
  const pic1= "https://www.glassdoor.com/blog/app/uploads/sites/2/iStock-667849954-1024x450.jpg";
  const pic2= "https://assets.entrepreneur.com/content/3x2/2000/20180606191756-GettyImages-900914464.jpeg";

  const style = {
    textAlign: "center",
    height:"100%",
    padding: isMobie?"5.5rem 0":"15rem 0",
    fontSize: "30px",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat"
  }

  return (
    <ImageSlides>
      <div key={`item`} style={{...style,backgroundImage:`url(${HomeBanner})`}}></div>
      <ImageSlideshowCards>
        <Container>
        {
          isMobie?
            <ImageSlideshowItem key={`item-${'1'}`}>
                <img src={HomeBannerContent[0].icon} />
                <div>  
                  <h3>{HomeBannerContent[0].title}</h3>
                  <p>{HomeBannerContent[0].pera}</p>
                </div>
              {/* <p>{HomeBannerContent[0].pera}</p> */}
            </ImageSlideshowItem>
          :
          HomeBannerContent.map((item, index)=>(
            <ImageSlideshowItem key={`item-${index}`}>
              <img src={item.icon} />
              <div>  
                <h3>{item.title}</h3>
                <p>{item.pera}</p>
              </div>
            </ImageSlideshowItem>
          ))
        }
        </Container>
      </ImageSlideshowCards>
        {/* <Slide pauseOnHover={false} arrows={false}>
          {
            HomeBanner.map((pic, index)=>(
              <div key={`item-${index}`} style={{...style,backgroundImage:`url(${pic})`}}></div>
            ))
          }
        </Slide>

        <ImageSlideshowCards>
          <Container>
          {
            isMobie?
              <ImageSlideshowItem key={`item-${'1'}`}>
                <div>
                  {HomeBannerContent[0].mobileIcon}
                  <h3>{HomeBannerContent[0].title}</h3>
                </div>
                <p>{HomeBannerContent[0].pera}</p>
              </ImageSlideshowItem>
            :
            HomeBannerContent.map((item, index)=>(
              <ImageSlideshowItem key={`item-${index}`}>
                <img src={item.icon} />
                <div>  
                  <h3>{item.title}</h3>
                  <p>{item.pera}</p>
                </div>
              </ImageSlideshowItem>
            ))
          }
          </Container>
        </ImageSlideshowCards> */}
    </ImageSlides>
  );
};

export default ImageSlideshow;
