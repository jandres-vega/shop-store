export interface LoginFields {
    id: string
    email: string,
    password:string
}

export interface PayloadJwt {
    sub: string,
    role: boolean
}