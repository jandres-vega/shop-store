import React from 'react';
import {ButtonProps} from "../types/customTags/Button.ts";

const CustomButton:React.FC<ButtonProps> = (props) => {
    return (
        <button {...props}>{props.text}</button>
    );
};

export {CustomButton};