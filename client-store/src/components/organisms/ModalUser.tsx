import React from 'react';
import {faUser, faLock, faGripHorizontal, faToggleOn} from "@fortawesome/free-solid-svg-icons"
import { CustomIcon } from '../../common/CustomIcon.tsx';
import {logout} from '../../redux/reducer/auth.slice.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch.ts';
import { ContextShop } from '../../contex/contex.tsx';
import { Link } from 'react-router-dom';
import { routesPrivate } from '../../utils/routes.ts';

const ModalUser:React.FC = () => {

    const dispatch = useAppDispatch();
    const userAdmin = useAppSelector(state => state.auth.user)

    const { handleSetOpenMenu } = React.useContext(ContextShop)
    const handleLogout = () => {
        dispatch(logout())
        handleSetOpenMenu()
    }
    return (
        <div className="bg-cornsilk w-60 p-2 rounded-md z-40 absolute right-8 top-20">
            <div className="h-12 flex justify-between rounded-md px-2 cursor-pointer hover:bg-goldenrod p-1 ">
                <CustomIcon className='text-3xl' icon={faUser} />
                <Link to={routesPrivate.PROFILE} onClick={handleSetOpenMenu}>
                    <span className='text-2xl'>Profile</span>
                </Link>
            </div>
            <div className="h-12 flex justify-between px-2 rounded-md cursor-pointer hover:bg-goldenrod p-1">
                <CustomIcon className='text-3xl' icon={faToggleOn} />
                <span className='text-2xl'>Oscuro</span>
            </div>
            {
                userAdmin.isAdmin && (
                    <div className="h-12 justify-between px-2 flex cursor-pointer hover:bg-goldenrod p-1">
                        <CustomIcon className='text-3xl' icon={faGripHorizontal} />
                        <span className='text-2xl'>Dashboard</span>
                    </div>
                )
            }
            <div className="h-12 justify-between px-2 flex cursor-pointer hover:bg-goldenrod p-1">
                <CustomIcon className='text-3xl' icon={faLock} />
                <span className='text-2xl' onClick={handleLogout}>Cerrar sesion</span>
            </div>
        </div>
    );
};

export {ModalUser};