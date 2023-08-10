import React from 'react';
import Slider from "react-slick";
import{settingsGeneric} from "../../utils/slick.ts";
import banner1 from '../../assets/imgBanners/banner1.webp'
import banner2 from '../../assets/imgBanners/banner2.webp'
import banner3 from '../../assets/imgBanners/banner3.webp'
import {CustomArrow} from "../../common/CustomArrow.tsx";

const settings = {
    ...settingsGeneric,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <CustomArrow text="next" />,
    prevArrow: <CustomArrow text="back"/>
}
const Banner:React.FC = () => {
    return (
        <div className="border-4 relative">
            <Slider {...settings}>
                <img className="p3" src={banner1} alt="banner-1"/>
                <img className="p3" src={banner2} alt="banner-2"/>
                <img className="p3" src={banner3} alt="banner-3"/>
            </Slider>
        </div>
    );
};

export {Banner};