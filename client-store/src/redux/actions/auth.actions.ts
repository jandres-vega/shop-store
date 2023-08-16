import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginForm, LoginUser } from '../../types/login/loginT.ts';

const loginUser= createAsyncThunk<LoginUser, LoginForm>('auth/loginUser', async (payload:LoginForm) =>{
    try {
        const userData = await axios.post('http://localhost:3000/api/v1/login', payload)
        return userData.data
    }catch (e) {
        if (axios.isAxiosError(e)){
            throw new Error(e.response?.data.message)
        }
    }
})

export {loginUser}
