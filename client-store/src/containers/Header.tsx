import React from 'react';
import {IconHeader} from "../components/atoms/IconHeader.tsx";
import {NavBarLeft} from "../components/organisms/NavBarLeft.tsx";
import {NavBarRight} from "../components/organisms/NavBarRight.tsx";

const Header:React.FC = () => {
    return (
        <header className="grid grid-cols-3 bg-denim-blue">
            <IconHeader />
            <NavBarLeft />
            <NavBarRight />
        </header>
    );
};

export {Header};