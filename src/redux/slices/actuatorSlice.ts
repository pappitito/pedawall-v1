import { createSlice } from "@reduxjs/toolkit";
interface Props {
    isSidebarOpen?: boolean;
}

const initialState : Props ={
    isSidebarOpen: false
}

export const actuatorSlice = createSlice({
    name: 'actuator',
    initialState,
    reducers: {
        toggleSidebarOpen : (state)=>{
            return {
                ...state,
                isSidebarOpen : !state.isSidebarOpen
            }
        }
    }
})

export const {
    toggleSidebarOpen
} = actuatorSlice.actions

export default actuatorSlice.reducer