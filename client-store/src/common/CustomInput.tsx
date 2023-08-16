import React from 'react';
import {InputProps} from "../types/customTags/Input.ts";


const CustomInput:React.FC<InputProps> = (props) => {
    const {register} = props
    return (
        <input {...register} type="text" {...props}/>
    );
};

export {CustomInput};