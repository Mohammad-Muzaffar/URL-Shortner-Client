import { SignupBody } from '@muzaffarshaikh/url-shortner-common';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    signup: SignupBody
} 

const initialState: AuthState = {
    signup: {
        email: "",
        password: "",
        userName: ""
    }
}

export const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        addSignUp : (state, action: PayloadAction<SignupBody>) => {
            state.signup = action.payload;
        },
        clearSignUp : (state) => {
            state.signup = {   
                email: "",
                password: "",
                userName: ""
            }
        }
    }
});

export const { addSignUp, clearSignUp} = signupSlice.actions;
export default signupSlice.reducer;