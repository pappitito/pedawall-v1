"use client"
import { DASHBOARD_ROUTES } from '@/utils/appData/appRoutes';
import React, { ReactElement } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';
import { JsxElement } from 'typescript';
import { usePathname, useRouter } from 'next/navigation';


const useNavigator = () => {
  const router = useRouter()
  const pathName = usePathname()
  
  const sidebarItems : SideBarProp[] = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon/> ,
        path: DASHBOARD_ROUTES.DASHBOARD
    },
    {
      title: 'Courses',
      icon: <SchoolIcon/>,
      isDropdown: true,
      childItems: [
        {
          title: 'Upload Course',
          alias: 'upload-course',
          path: DASHBOARD_ROUTES.COURSES.UPLOAD
        },
        {
          title: 'Manage Courses',
          alias: 'manage-course',
          path: DASHBOARD_ROUTES.COURSES.MANAGE
        }
      ] 
    },
    {
      title: 'Settings',
      icon: <SettingsIcon/>,
      path: DASHBOARD_ROUTES.SETINGS
    }
    
  ]

  return {
    router,
    pathName,
    sidebarItems
  }
}

export default useNavigator