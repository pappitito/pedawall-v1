import Header from '@/containers/Header'
import React, { ReactNode } from 'react'
interface LayoutProps{
    children: ReactNode;
    searchless?: boolean;
    className?: string;
}

const GeneralLayout: React.FC<LayoutProps>  = ({children, searchless, className}) => {
  return (
    <div>
        <Header hasNoSearch={searchless} />
        <div className='mt-[3.93rem] xsm:mt-[4.4rem] w-full'>
            <div className={className}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default GeneralLayout