import React from 'react';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CustomIcon } from '../../common/CustomIcon.tsx';
import imgUser from '../../assets/sinFoto.png';
import { ModalUser } from './ModalUser.tsx';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppDispatch.ts';
import { ContextShop } from '../../contex/contex.tsx';


const NavBarRight:React.FC = () => {

    const {menuOpen, handleSetOpenMenu} = React.useContext(ContextShop);
    const userAuth = useAppSelector(state => state.auth.user);

    return (
        <>
            {
                !userAuth ? (
                    <div className="flex justify-end items-center pr-5 gap-9">
                        <Link to='/login-user'>Iniciar sesion</Link>
                        <Link to='/register-user'>Crear cuenta</Link>
                    </div>
                ):(
                    <nav className="flex items-center justify-between mr-6 absolute right-0 w-1/4 h-28">
                        <div className="flex">
                            <div className="ml-6">
                                <span className="relative bottom-4 left-4 text-goldenrod">0</span>
                                <CustomIcon className="text-tomato-red text-2xl" icon={faHeart}/>
                            </div>
                            <div className="ml-6">
                                <span className="relative bottom-5 left-6 rounded-full text-goldenrod">0</span>
                                <CustomIcon className="text-2xl" icon={faCartShopping}/>
                            </div>
                        </div>
                        <div className="flex items-center" onClick={handleSetOpenMenu}>
                            <span className="ml-7 text-cornsilk">andres Vega</span>
                            <img className="h-12 w-12 rounded-full ring-2 ring-white cursor-pointer ml-6" src={imgUser}
                                 alt="{user.handle}"/>
                        </div>
                    </nav>
                )
            }
            {
                !menuOpen || !userAuth ? null : <ModalUser/>
            }
        </>
)
    ;
};

export { NavBarRight };