"use client"
import { Avatar, Drawer, Input, InputAdornment, SwipeableDrawer } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import useToolkit from '@/utils/hooks/misc/useToolkit';
import { toggleSidebarOpen } from '@/redux/slices/actuatorSlice';
import AdminSidebar from './AdminSidebar';
import {HiOutlineMenu} from 'react-icons/hi'
import { IoIosMenu } from 'react-icons/io' 
import { Search, SearchOutlined } from '@mui/icons-material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const AdminHeader = () => {
    const {dispatch, useAppSelector} = useToolkit()
    const {isSidebarOpen} = useAppSelector((state)=> state.actuator)

    
  return (
    <div className='w-full mx-auto justify-between items-center border-b-[1px]  flex gap-3 pl-3 pr-3 xsm:pl-6 xsm:pr-6   p-6 pt-3 pb-3 '>
        <div className='text-gray-600 flex xsm:gap-5 items-center'>
            <div className='flex sm:hidden' onClick={()=> dispatch(toggleSidebarOpen())}><IoIosMenu className='!w-[1.8rem] !h-[1.8rem]'/></div>
            
        <Link href={'/'} className='flex w-full items-center gap-4'>
             <img className='w-[2rem] hidden xsm:flex ' src='/assets/logo.svg' alt='logo' />
            <h1 className='text-[1.2rem] font-semibold hidden md:flex font-raleway text-gray-600 '><div>Pedawalls</div></h1>
        </Link>
        </div>
        <div className='w-full xsm:max-w-[50%] flex border-[1px] border-gray-300 p-[0.4rem] pl-4 pr-4 items-center rounded-[2rem]'>
            <SearchOutlined/>
            <input className='w-full outline-none bg-transparent p-1 pl-[1rem] text-[0.85rem]' type="text" placeholder='What would you like to do today' />
        </div>
        <img className='w-[1.8rem] mt-[-0.3rem]' src='/assets/profile.svg' />
        <SwipeableDrawer onOpen={()=> dispatch(toggleSidebarOpen())} className='flex sm:hidden' anchor='left' open={isSidebarOpen} onClose={()=> dispatch(toggleSidebarOpen())}>
            <div className='w-[64vw] xsm:w-[50vw]'>
                <AdminSidebar/>
            </div>

        </SwipeableDrawer>
    </div>
  )
}

export default AdminHeader