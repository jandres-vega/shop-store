import React from 'react';
import {faShirt} from '@fortawesome/free-solid-svg-icons'
import {CustomIcon} from "../../common/CustomIcon.tsx";
const CardCategory:React.FC = () => {
    return (
        <div className="bg-cornsilk flex flex-col h-56 items-center rounded-md justify-center m-2">
            <CustomIcon className="text-5xl" icon={faShirt} />
            <span className="">Camisas</span>
        </div>
    );
};

export {CardCategory};