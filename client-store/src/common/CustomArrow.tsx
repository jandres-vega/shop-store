import React from 'react';
import {Arrow} from "../types/customTags/Arrow.ts";
import {CustomIcon} from "./CustomIcon.tsx";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

const CustomArrow:React.FC<Arrow> = (props) => {
    const {onClick, text} = props
    if (text === 'next') {
        return (
            <div onClick={onClick} className="absolute right-0 bottom-1/3 cursor-pointer">
                <CustomIcon className="text-7xl text-goldenrod relative bottom-0 right-0" icon={faChevronRight}/>
            </div>
        );
    }else {
        return (
            <div onClick={onClick} className="absolute z-10 bottom-24 cursor-pointer">
                <CustomIcon className="text-7xl text-goldenrod relative" icon={faChevronLeft} />
            </div>
        );
    }
};

export {CustomArrow};