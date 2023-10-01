import React, { ReactNode } from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
interface LayoutProps {
    children: ReactNode
}
const AdminLayout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className='flex flex-col w-full'>
      <AdminHeader/>
      
      <div className='flex w-full p-4 pl-0 pt-0 md:pt-4 md:pl-6 md:pr-6 flex-row'>
        <div className='hidden sm:flex w-full max-w-[14rem] md:max-w-[16.4rem] '><AdminSidebar/></div>
        <div className='p-4 w-full'>{children}</div>
      </div>

    </div>
  )
}

export default AdminLayout