import React from 'react';
import image from '../../assets/img1.jpg'

const CardFavourite: React.FC = () => {
    return (
        <div className="rounded-md bg-cornsilk m-2 p-3">
            <h2 className="text-2xl font-bold tracking-tight text-center">Customers also purchased</h2>
            <div className="mt-6">
                <div className="group relative">
                    <div
                        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img src={image} alt="Front of men&#039;s Basic Tee in black."
                             className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-md"/>
                    </div>
                    <div className="mt-2 flex justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Envio gratis</p>
                            <h3 className="text-sm text-gray-700 mt-2">
                                <a href="#">
                                    <span aria-hidden="true" className="absolute inset-0"></span>
                                    Ver detalles
                                </a>
                            </h3>
                        </div>
                        <p className="text-sm font-medium text-gray-900">$35.000.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {CardFavourite};
// <div className='w-56 h-60'>
//     <div className='h-1/2'>
//         <img src={image} alt="image-prueba"/>
//     </div>
//     <div>
//         <span>Envio gratis</span>
//         <span>$25.000.00</span>
//     </div>
//     <div>
//         <p>Ver detalles</p>
//     </div>
//
// </div>
