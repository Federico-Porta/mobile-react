import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    token: null,
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return{
                user: action.payload.data.email,
                token: action.payload.data.idToken,
            }
        },
        clearUser: () =>{
            return{ user:null, token: null}
        }
    }
})

export const {setUser, clearUser} = authSlice.actions

export default authSlice.reducer