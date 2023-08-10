import {ButtonHTMLAttributes} from "react";

export interface ButtonProps {
    ButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>,
    text: string,
    className?:string
}