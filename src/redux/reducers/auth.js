import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAdmin: false,
    authInfoLoaded: false,
    loginMessage: ""
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAdmin(state, action){
            state.isAdmin = action.payload;
        },
        setAuthLoaded(state, action){
            state.authInfoLoaded = action.payload;
        },
        setLoginMessage(state, action){
            state.loginMessage = action.payload
        }
    },
})

export const {
    setIsAdmin,
    setAuthLoaded,
    setLoginMessage
} = auth.actions
export default auth.reducer;