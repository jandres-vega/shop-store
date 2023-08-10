import React from 'react';
import {CustomInput} from "../common/CustomInput.tsx";
import {CustomButton} from "../common/CustomButton.tsx";
import logoGoogle from '../assets/google.svg'

const RegisterUser:React.FC = () => {
    return (
        <div className='flex justify-center py-16'>
            <form className='p-3 flex gap-6 flex-col w-1/2'>
                <div className='flex mb-9 justify-center'>
                    <h1 className='text-3xl text-cornsilk'>Ingresa tus datos</h1>
                </div>
                <div className='flex gap-4 w-full'>
                    <div className='flex flex-col w-1/2'>
                        <label className='text-cornsilk'>Nombre</label>
                        <CustomInput className='rounded-md h-8' placeholder="nombres"/>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label className='text-cornsilk'>Apellido</label>
                        <CustomInput className='rounded-md h-8' placeholder="apellidos"/>
                    </div>
                </div>
                <div className='flex gap-4 w-full'>
                    <div className='flex flex-col w-1/2'>
                        <label className='text-cornsilk'>Email</label>
                        <CustomInput className='rounded-md h-8' placeholder="correo electronico"/>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label className='text-cornsilk'>Username</label>
                        <CustomInput className='rounded-md h-8' placeholder="username"/>
                    </div>
                </div>
                <div className='flex gap-4 w-full'>
                    <div className='flex flex-col w-1/2'>
                        <label className='text-cornsilk'>Celular</label>
                        <CustomInput className='rounded-md h-8' placeholder="celular"/>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label className='text-cornsilk'>Password</label>
                        <CustomInput className='rounded-md h-8' placeholder="password"/>
                    </div>
                </div>
                <div className='mt-6 flex justify-center'>
                    <CustomButton
                        className="w-full bg-goldenrod border-none rounded-md p-3 hover:bg-denim-blue"
                        text='Registrarse'
                    />
                </div>
                <>
                    <CustomButton
                        className="w-full bg-tomato-red rounded-md p-3 border-none hover:bg-denim-blue"
                        text='Registrarse con Google'
                    />
                    <img className="w-10 absolute bottom-24 ml-2 text-cornsilk" src={logoGoogle} alt="logo google"/>
                </>
            </form>
        </div>
    );
};

export {RegisterUser};