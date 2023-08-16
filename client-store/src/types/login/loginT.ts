export interface LoginForm {
    email: string,
    password: string
}

export interface LoginUser  {
    user: {
        id: string,
        "full_name": string,
        "email": string,
        "cellphone": string,
        "userName": string,
        "isAdmin": boolean,
        "picture": null,
        "createdAt": string,
        "updatedAt": string
    },
    "token": string
}