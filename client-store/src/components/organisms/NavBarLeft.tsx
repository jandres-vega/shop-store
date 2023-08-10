import React from 'react';
import {Search} from "../molecules/Search.tsx";

const NavBarLeft:React.FC = () => {
    return (
        <nav className="flex flex-col justify-between items-center">
            <div className='w-full relative pt-4'>
                <Search />
            </div>
            <div className="pb-3">
                <ul className="flex gap-9 text-2xl text-cornsilk">
                    <li>Categorias</li>
                    <li>Productos</li>
                    <li>Ofertas</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export {NavBarLeft};