"use client"
import Button from '@/components/Button'
import Input from '@/components/Input'
import Searchbar from '@/components/Searchbar'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer'



const Header = () => {
    const [searchForm, setSearchForm] = useState({searchContent: ''})
    const [showSearch, setShowSearch] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null)

  function focus() {
    if(inputRef.current) {
        console.log('entered');
        
        inputRef.current.focus();
      }
    
  }
 

  useEffect(()=>{
    focus()
    
  
  },[showSearch])
  
    const handleSearchChange = (e: any)=>{
        setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
    }
    const handleSearchSubmit = (e: any) => {
        e.preventDefault()
    }

  return (
    <div className='flex sticky top-0 w-full z-[20] bg-white items-center justify-between p-3'>
       {showSearch?
            <div className='flex w-full p-[0.18rem] items-center gap-2'>
                <div className='w-full'>
                    <form className='flex w-full'>
                        <input ref={inputRef} className='text-[0.9rem] p-[0.5rem] w-full outline-none border-[1.5px] border-r-[0px] border-gray-400  rounded-l-[0.64rem]' type="text" placeholder='what do you want to learn' />
                        <button className='bg-[#E50914] p-[0.56rem] pr-[0.9rem] pl-[0.9rem] ml-[-0.6rem] text-[0.9rem] text-white cursor-pointer trans rounded-r-[0.64rem]' type='submit'><SearchIcon/></button>
                    </form>
                 </div>
                <div onClick={()=>setShowSearch(false)} className='text-[#E50914] cursor-pointer text-[3rem] flex'>
                    <CloseIcon className='!w-[2.1rem] !h-[2.1rem]'/>
                </div>
            </div>
        : 
       <div className='w-full flex items-center justify-between'>
        <img className='w-[2.2rem] hidden xsm:flex ' src='/assets/logo.svg' alt='logo' />
       <div className='flex w-full sm:w-[90%] items-center md:w-[80%] justify-end sm:justify-between  gap-3'>
       <div className='hidden pl-5 pr-5 sm:pl-0 sm:pr-0 xsm:flex w-full ml-2 max-w-[42rem] '>
            <Searchbar />
       </div>
       <div onClick={()=>setMenuOpen(true)} className='text-[#E50914] text-[3rem] hidden xsm:flex sm:hidden'>
                 <MenuIcon className='!w-[2.1rem] !h-[2.1rem]'/>
            </div>
       <div className='flex xsm:hidden gap-2 w-full  items-center justify-between'>
          <div onClick={()=> {
                focus() 
                setShowSearch(true)
                }
                } className='text-[#E50914] text-[3rem] cursor-pointer flex xsm:hidden'>
                <SearchIcon className='!w-[2.1rem] !h-[2.1rem]' />
            </div>
            <img className='w-[2.2rem] flex xsm:hidden' src='/assets/logo.svg' alt='logo' />
           
            <div onClick={()=>setMenuOpen(true)} className='text-[#E50914] text-[3rem] flex sm:hidden'>
                 <MenuIcon className='!w-[2.1rem] !h-[2.1rem]'/>
            </div>
             
       </div>
       <div className='hidden sm:flex  gap-3'>
            <Link className='w-[6.5rem] md:w-[8rem] ' href='/login'>
                <Button isOutlined content='Login'  />
            </Link>
             <Link className=' w-[6.5rem] md:w-[8rem]' href='/signup'>
                <Button  content='Signup'  />
             </Link>
             
       </div>
       </div>
       </div>
       }
       <Drawer
        
        anchor='right'
        open={menuOpen}
        onClose={()=> setMenuOpen(false)}
       >
            <div className='w-[100vw] xsm:w-[60vw]  p-6'>
                <div onClick={()=>setMenuOpen(false)} className='text-[#E50914] cursor-pointer text-[3rem] flex'>
                    <CloseIcon className='!w-[2.1rem] !h-[2.1rem]'/>
                </div>
                <div className='flex flex-col gap-4 mt-[4rem] items-center '>
                    <Link className='w-[6.5rem] md:w-[8rem] ' href='/login'>
                        <Button isOutlined content='Login'  />
                    </Link>
                    <Link className=' w-[6.5rem] md:w-[8rem]' href='/signup'>
                        <Button  content='Signup'  />
                    </Link>
                </div>

            </div>
       </Drawer>
       {showSearch && <div onClick={()=>setShowSearch(false)} className='w-[100vw] h-[100vh] bg-black opacity-40 absolute z-[100] top-[4.47rem] left-0'>hello</div>}
    </div>
  )
}

export default Header