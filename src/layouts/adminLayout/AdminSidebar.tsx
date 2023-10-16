"use client"
import useNavigator from '@/utils/hooks/navigation/useNavigator'
import React, { useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import useToolkit from '@/utils/hooks/misc/useToolkit';
import CloseIcon from '@mui/icons-material/Close';
import { toggleSidebarOpen } from '@/redux/slices/actuatorSlice';






const AdminSidebar = () => {
  const {router, pathName, sidebarItems} = useNavigator()
  const {dispatch, useAppSelector} = useToolkit()
  const {isSidebarOpen} = useAppSelector((state)=> state.actuator)
  const DropdownItem = ({title, icon, childItems}: SideBarProp)=>{
  
    const [expanded, setExpanded] = useState(false)
    const [activeExpand, setActiveExpand] = useState(true)
    const isActive = pathName.includes(title.toLowerCase())
   
  
    return (
      <div>
        <div onClick={()=> {
          isActive? setActiveExpand((prev : boolean)=> !prev) :
          setExpanded((prev)=> !prev)}} className={`flex gap-3 w-full cursor-pointer first-letter ${!activeExpand && 'bg-gray-100'} justify-between max-w-[12rem] p-3 pl-6 hover:bg-gray-100 pr-6 rounded-[0.6rem]  items-center`}>
              <div className='flex gap-3'>
              {icon}
              <p>{title}</p>
              </div>
              {(expanded? true : isActive? activeExpand? true : false : false) ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
        </div>
        {(expanded? true : isActive? activeExpand? true : false : false) &&
          <div className='flex flex-col mt-4 items-end gap-3'>
          {childItems?.map(({title: dropTitle, path, alias})=>{
            const myAlias = alias as string
          const isDropActive = pathName.includes(myAlias.toLowerCase())
          console.log(pathName, dropTitle);
          
            return (
              <Link key={title} className={`flex gap-3 text-[0.85rem] w-full cursor-pointer max-w-[10rem] p-[0.5rem] pl-6 hover:bg-gray-100 pr-6 rounded-[0.6rem]  ${isDropActive && 'bg-gray-100'}  items-center`} href={path as string}>{dropTitle}</Link>
            )
          })}
        </div>
        }
      </div>
    )
  }

  return (
    <div className={`bg-white  min-h-[88vh] shadow-sm text-[0.93rem] rounded-[0.6rem] gap-6 flex flex-col pt-[0.5rem] ${isSidebarOpen? 'pl-[2rem]' : 'pl-[0.6rem]'} md:pl-[1.2rem] w-full  text-gray-600`}>
        <div className='w-full flex sm:hidden cursor-pointer justify-end items-end pt-4 pr-8' onClick={()=> dispatch(toggleSidebarOpen())}> <CloseIcon/></div>
      <div className='w-full max-w-[12rem] pt-[1rem] gap-4 flex flex-col'>
      {sidebarItems.map(({title, icon, isDropdown, path, childItems})=>{
        const isActive = pathName.includes(title.toLowerCase())
        const newPath = path as string
        return isDropdown? (
            <DropdownItem key={title} title={title} icon={icon} childItems={childItems} />
        ) : (
          <Link key={title} href={newPath}  className={`flex gap-3 w-full cursor-pointer max-w-[12rem] p-[0.7rem] pl-6 hover:bg-gray-100 pr-6 rounded-[0.6rem]  ${isActive && 'bg-gray-100'}  items-center`}>
            {icon}
            <p>{title}</p>
          </Link>
        )
          
        
      })}
        <div className='flex gap-3 cursor-pointer  w-full p-3 pl-6 hover:bg-gray-100 pr-6 rounded-[0.6rem] items-center'>
          <LogoutIcon/>
          <p>Logout</p>
        </div>
      </div>
      </div>
  )
}

export default AdminSidebar