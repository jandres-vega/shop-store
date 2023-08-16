import React from 'react';
import {Favourites} from "../containers/Favourites.tsx";
import {Categories} from "../containers/Categories.tsx";
import {Banner} from "../components/molecules/Banner.tsx";


const LandingPage:React.FC = () => {
    return (
        <>
            <Favourites />
            <div className="px-16 py-16 relative mt-3">
                <Banner />
            </div>
            <div className="flex justify-center">
                <Categories />
            </div>
        </>
    );
};

export {LandingPage};