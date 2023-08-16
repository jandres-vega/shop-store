import { RoutesPublics, RoutesPrivates } from '../types/Routes/routes.ts';

const routesPublic:RoutesPublics = {
    HOME: '/',
    LOGIN: '/login-user',
    REGISTER_USER: '/register-user'
}

const routesPrivate:RoutesPrivates = {
    REGISTER_PRODUCT: '/register-product',
    PROFILE: '/profile'
}

export {routesPublic, routesPrivate}