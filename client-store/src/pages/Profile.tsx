import React from 'react';
import {faCamera} from "@fortawesome/free-solid-svg-icons"
import imgProfile from "../assets/sinFoto.png"
import { CustomIcon } from '../common/CustomIcon.tsx';
import { useAppSelector } from '../hooks/useAppDispatch.ts';
import { CustomInput } from '../common/CustomInput.tsx';
const Profile:React.FC = () => {
    const userAuth = useAppSelector(state => state.auth.user);
    return (
        <div className="pt-5">
            <div className="flex justify-center px-14">
                <div className="relative flex justify-center">
                    <img className='rounded-full w-1/2' src={imgProfile} alt="img-profile"/>
                    <CustomIcon className="absolute right-24 bottom-0 text-4xl" icon={faCamera} />
                </div>
                <div className="flex items-center">
                    <h3 className="text-cornsilk text-5xl">Andres Vega</h3>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <form className="w-1/2 grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-2">
                        <label className="text-cornsilk"> Nombre</label>
                        <CustomInput className="h-8 rounded-md border-none" type='text' value={userAuth.user.full_name} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-cornsilk">Email</label>
                        <CustomInput className="h-8 rounded-md border-none" type='text' value={userAuth.user.email} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-cornsilk">Numero de Celular</label>
                        <CustomInput className="h-8 rounded-md border-none" type='text' value={userAuth.user.cellphone} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-cornsilk">Nick</label>
                        <CustomInput className="h-8 rounded-md border-none" type='text' value={userAuth.user.userName} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export {Profile};