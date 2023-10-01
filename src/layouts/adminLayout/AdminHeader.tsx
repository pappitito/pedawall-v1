"use client"
import { Avatar, Drawer } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import useToolkit from '@/utils/hooks/misc/useToolkit';
import { toggleSidebarOpen } from '@/redux/slices/actuatorSlice';
import AdminSidebar from './AdminSidebar';
import {HiOutlineMenu} from 'react-icons/hi'
import { IoIosMenu } from 'react-icons/io' 

const AdminHeader = () => {
    const {dispatch, useAppSelector} = useToolkit()
    const {isSidebarOpen} = useAppSelector((state)=> state.actuator)

    
  return (
    <div className='w-full mx-auto justify-between items-center  flex bg-[#353F4C] shadow-sm  p-6 pt-3 pb-3 '>
        <div className='text-white flex gap-5 items-center'>
            <div className='flex sm:hidden' onClick={()=> dispatch(toggleSidebarOpen())}><IoIosMenu className='!w-[1.8rem] !h-[1.8rem]'/></div>
            
        <Link href={'/'} className='flex w-full items-center gap-4'>
             <img className='w-[2rem] hidden xsm:flex ' src='/assets/logo.svg' alt='logo' />
            <h1 className='text-[1.2rem] font-semibold hidden md:flex font-raleway text-white'><div>Pedawalls</div></h1>
        </Link>
        </div>
        
        <Avatar/>
        <Drawer className='flex sm:hidden' anchor='left' open={isSidebarOpen} onClose={()=> dispatch(toggleSidebarOpen())}>
            <div className='w-[100vw] xsm:w-[50vw]'>
                <AdminSidebar/>
            </div>

        </Drawer>
    </div>
  )
}

export default AdminHeader