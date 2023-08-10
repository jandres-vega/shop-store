import React from 'react';
import Slider from 'react-slick'
import {settingsGeneric} from "../utils/slick.ts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {CardCategory} from "../components/organisms/CardCategory.tsx";

const settings = {
    ...settingsGeneric,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    speed: 2000,
    cssEase: "linear",
    rows: 2,
}

const Categories:React.FC = () => {
    return (
        <div className="w-1/2">
            <h1 className="text-goldenrod text-2xl">Categorias populares</h1>
            <Slider {...settings}>
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
            </Slider>
        </div>
    );
};

export {Categories};