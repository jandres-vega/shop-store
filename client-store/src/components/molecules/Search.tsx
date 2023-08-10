import React from 'react';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {CustomInput} from "../../common/CustomInput.tsx";
import {CustomIcon} from "../../common/CustomIcon.tsx";

const Search:React.FC = () => {
    return (
        <>
            <CustomInput
                className='w-full rounded-md h-9 border-none'
                placeholder="Buscar productos y mas..."
            />
            <CustomIcon
                className="absolute right-2 text-2xl text-denim-blue top-6 cursor-pointer"
                icon={faMagnifyingGlass}
            />
        </>
    );
};

export {Search};