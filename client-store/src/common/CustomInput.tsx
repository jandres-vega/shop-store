import React from 'react';
import {InputProps} from "../types/customTags/Input.ts";


const CustomInput:React.FC<InputProps> = (props) => {
    return (
        <input type="text" {...props}/>
    );
};

export {CustomInput};