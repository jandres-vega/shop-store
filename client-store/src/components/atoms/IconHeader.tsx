import React from 'react';
import logoImage from '../../assets/logo.svg'
import {Link} from "react-router-dom";
const IconHeader:React.FC= () => {
    return (
        <div className="h-28">
            <Link to='/'>
                <img className="h-full w-full" src={logoImage} alt="logo store"/>
            </Link>
        </div>
    );
};

export {IconHeader};