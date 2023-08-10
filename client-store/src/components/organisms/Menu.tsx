import React from 'react';

const Menu:React.FC = () => {
    return (
        <div>
            <ul>
                <li>
                    <a href="/">Mis ordenes</a>
                </li>
                <li>
                    <a href="/">Mi cuenta</a>
                </li>
                <li>
                    <a href="/">Cerrar sesion</a>
                </li>
            </ul>
        </div>
    );
};

export {Menu};