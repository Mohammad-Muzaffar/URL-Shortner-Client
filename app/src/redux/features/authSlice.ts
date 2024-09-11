import { SigninBody } from '@muzaffarshaikh/url-shortner-common';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    auth: SigninBody
} 

const initialState: AuthState = {
    auth: {
        email: "",
        password: "",
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addAuth : (state, action: PayloadAction<SigninBody>) => {
            state.auth = action.payload;
        },
        clearAuth : (state) => {
            state.auth = {   
                email: "",
                password: "",
            }
        }
    }
});

export const { addAuth, clearAuth} = authSlice.actions;
export default authSlice.reducer;