import React from 'react';
import {LayoutProps} from "../types/layoutypes/LayoutProps.ts";
import {Header} from "../containers/Header.tsx";

const LayoutMain:React.FC<LayoutProps> = ({children}) => {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
        </div>
    );
};

export {LayoutMain};