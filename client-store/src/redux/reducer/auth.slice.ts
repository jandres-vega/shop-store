import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser } from '../actions/auth.actions.ts';
import { LoginUser } from '../../types/login/loginT.ts';

const userAuth = localStorage.getItem('userAuth')

const initialState = {
    user: userAuth ? JSON.parse(userAuth) : null,
    error: {} || null,
    loading: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userAuth')
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) =>{
            state.loading = true
            state.error = null
        }).addCase(loginUser.fulfilled, (state, action:PayloadAction<LoginUser>) => {
            state.loading = false
            state.error = null
            state.user = action.payload
            localStorage.setItem('userAuth', JSON.stringify(state.user))
        }).addCase(loginUser.rejected, (state, action) => {
            state.loading = false
            state.error = action?.error
        })
    }
})

export const {logout} = authSlice.actions


