import React from 'react';
import Slider from 'react-slick'
import {settingsGeneric as settings} from "../utils/slick.ts";
import {CardFavourite} from "../components/organisms/CardFavourite.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Favourites:React.FC = () => {
    return (
        <div className="px-16 mt-3">
            <h1 className="font-bold text-goldenrod text-3xl">Favorites</h1>
            <Slider {...settings}>
                <CardFavourite />
                <CardFavourite />
                <CardFavourite />
                <CardFavourite />
                <CardFavourite />
                <CardFavourite />
                <CardFavourite />
            </Slider>
        </div>
    );
};

export {Favourites};