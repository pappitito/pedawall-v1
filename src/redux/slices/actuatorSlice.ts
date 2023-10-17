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
        },
        closeSidebar : (state)=>{
            return {
                ...state,
                isSidebarOpen : false
            }
        }
    }
})

export const {
    toggleSidebarOpen,
    closeSidebar
} = actuatorSlice.actions

export default actuatorSlice.reducer