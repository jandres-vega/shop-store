import React from 'react';
import { AnyAction } from 'redux';
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {useForm} from 'react-hook-form';
import { useNavigate} from "react-router-dom";
import {CustomInput} from "../common/CustomInput.tsx";
import {CustomButton} from "../common/CustomButton.tsx";
import logoGoogle from "../assets/google.svg";
import {CustomIcon} from "../common/CustomIcon.tsx";
import {loginUser} from '../redux/actions/auth.actions.ts';
import {LoginForm} from '../types/login/loginT.ts';
import { useAppDispatch, useAppSelector } from '../hooks/useAppDispatch.ts';
import { Message } from '../components/molecules/Message.tsx';
import {faCircleXmark} from "@fortawesome/free-regular-svg-icons"
const Login:React.FC = () => {
    const user = useAppSelector(state => state.auth);
    const [stateVisible, setStateVisible] = React.useState<boolean>(false)
    const dispatch= useAppDispatch();
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {errors}, resetField} = useForm<LoginForm>();

    const handleFormLogin = (data:LoginForm) =>{
        dispatch(loginUser(data) as unknown as AnyAction)
        if (user.user) navigate("/")
        if (!user.user){
            setStateVisible(true)
            setTimeout(() => {
                setStateVisible(false)
            }, 3000)
            resetField("password")
            return
        }
    }

    React.useEffect(() => {
        if (user.user) navigate("/")
    },[user.user])


    return (
        <div className="flex justify-center py-16">
            <form className="flex flex-col gap-4 w-1/3" onSubmit={handleSubmit(handleFormLogin)}>
                <div className="flex justify-between">
                    <h1 className="text-4xl text-cornsilk">Inicia sesion</h1>
                    <CustomIcon className='text-4xl text-cornsilk' icon={faLock} />
                </div>
                <div className="flex flex-col">
                    <label className="text-cornsilk">Email</label>
                    <CustomInput
                        className='h-10 rounded-md'
                        register={register('email', {
                            required: true,
                            pattern: /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                        })}
                        placeholder="Correo electronico"
                    />
                    <span className="text-tomato-red">
                        {(errors.email?.type === "required") && "El email es requerido"}
                    </span>
                </div>
                <div className="flex flex-col">
                    <label className="text-cornsilk">Password</label>
                    <CustomInput
                        register={register('password',{
                            required: true,
                            minLength: 8,
                            maxLength: 12,

                        })}
                        className='h-10 rounded-md'
                        placeholder="contraseña"
                        type="password"
                    />
                    <span className="text-tomato-red">
                        {
                            errors.password?.type === "required" && "El password es requerido" ||
                            errors.password?.type === "minLength" && "El password debe de ser de minimo 6 digitos"||
                            errors.password?.type === "maxLength" && "El password debe ser de maximo de 12 caracteres"
                        }
                    </span>
                </div>
                <CustomButton
                    className="bg-goldenrod rounded-md border-none p-3 hover:bg-denim-blue"
                    text='Ingresar'
                    type='submit'
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
            {
                user?.error?.message && (
                    <Message
                        error='error'
                        message={user.error.message}
                        icon={faCircleXmark}
                        visible={stateVisible}
                    />
                )
            }
        </div>
    );
};

export {Login};