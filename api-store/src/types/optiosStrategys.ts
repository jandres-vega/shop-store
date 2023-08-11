import { JwtFromRequestFunction } from 'passport-jwt';

export interface OptionsLocalFields {
    usernameField: string,
    passwordField:string
}
export interface OptionsJwt{
    jwtFromRequest: JwtFromRequestFunction,
    secretOrKey: string
}

