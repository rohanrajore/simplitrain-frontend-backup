import React, { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import "./venue-card.scss";
import Hotel1 from "../../styles/images/MMT/Hotel1.jpeg";
import Hotel2 from "../../styles/images/MMT/Hotel2.jpeg";



class VenueCard extends Component {
    render() {
        const images = [
            { url: Hotel1 },
            { url: Hotel2 }
        ];
        return (
            <div className="listRowOuter">
                <div className="listingRow bdr">
                    <div className="makeFlex flexOne padding20 relative">
                        <div className="imgGalleryCont">
                            <div className="imgCont">
                                <SimpleImageSlider
                                    width={300}
                                    height={190}
                                    images={images}
                                />
                            </div>
                        </div>
                        <div className="flexOne appendLeft120">
                            <div className="makeFlex top appendBottom10">
                                <img alt=""></img>
                            </div>
                            <div className="makeFlex spaceBetween">
                                <div>
                                    <p className="latoBlack font22 blackText appendBottom12">Hotel Name</p>
                                    <p className="font12 grayText latoBold appendBottom5">Address</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="priceDetails textRight">
                        <div className="priceDetailsTop">
                        </div>
                        <div>
                            <div className="padding20 makeFlex column"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VenueCard