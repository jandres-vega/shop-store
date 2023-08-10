import React from 'react';
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {CustomInput} from "../common/CustomInput.tsx";
import {CustomButton} from "../common/CustomButton.tsx";
import logoGoogle from "../assets/google.svg";
import {CustomIcon} from "../common/CustomIcon.tsx";

const Login:React.FC = () => {
    return (
        <div className="flex justify-center py-16">
            <form className="flex flex-col gap-4 w-1/3">
                <div className="flex justify-between">
                    <h1 className="text-4xl text-cornsilk">Inicia sesion</h1>
                    <CustomIcon className='text-4xl text-cornsilk' icon={faLock} />
                </div>
                <div className="flex flex-col">
                    <label className="text-cornsilk">Email</label>
                    <CustomInput className='h-10 rounded-md' placeholder="Correo electronico" />
                </div>
                <div className="flex flex-col">
                    <label className="text-cornsilk">Password</label>
                    <CustomInput className='h-10 rounded-md' placeholder="contraseña"/>
                </div>
                <CustomButton
                    className="bg-goldenrod rounded-md border-none p-3 hover:bg-denim-blue"
                    text='Ingresar'
                />
                <div className="relative">
                    <CustomButton
                        className="w-full bg-tomato-red rounded-md border-none p-3 hover:bg-denim-blue border"
                        text='Ingresar con Google'
                    />
                    <img className="w-10 absolute ml-2 text-cornsilk bottom-1" src={logoGoogle} alt="logo google"/>
                </div >
                <span className="text-cornsilk text-2xl mt-6 cursor-pointernpm">Olvidaste la contraseña?</span>
            </form>
        </div>
    );
};

export {Login};