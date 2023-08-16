import React from 'react';
import { LayoutProps } from '../types/layoutypes/LayoutProps.tsx';

interface ContextValue {
    menuOpen: boolean;
    handleSetOpenMenu: () => void;
}
const defaultValue:ContextValue = {
    menuOpen: false,
    handleSetOpenMenu: () => {}
}
const ContextShop = React.createContext<ContextValue>(defaultValue)

function Provider({children}:LayoutProps) {

    const [menuOpen, setMenuOpen] = React.useState<boolean>(false)

    const handleSetOpenMenu = () => {
        setMenuOpen(!menuOpen)
    }
    const contextValue = {
        menuOpen,
        handleSetOpenMenu,
    };

    return(
        <ContextShop.Provider value={contextValue}>
            {children}
        </ContextShop.Provider>
    )
}



export {ContextShop, Provider}