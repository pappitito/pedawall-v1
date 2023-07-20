"use client"
import Button from '@/components/Button'
import Input from '@/components/Input'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [searchForm, setSearchForm] = useState({searchContent: ''})
    const handleSearchChange = (e: any)=>{
        setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
    }
    const handleSearchSubmit = (e: any) => {
        e.preventDefault()
    }

  return (
    <div className='flex sticky w-[100vw] bg-white justify-between p-3'>
       <img className='w-[2.2rem] ' src='/assets/logo.svg' alt='logo' />
       <div className='flex w-[80%] justify-between  gap-3'>
       <form onSubmit={handleSearchSubmit} className='flex gap-3 w-[100%]'>
        <div className='w-[100%] max-w-[40rem] '>
            <Input name='searchContent'  value={searchForm.searchContent} onChange={handleSearchChange} placeholder='what do you want to learn?' />
        </div>
            <div className=' w-[100%] max-w-[8rem]'>
                <Button isSubmit content={'Search'} />
            </div>
       </form>
       <div className='flex  gap-3'>
            <Link className=' w-[8rem] ' href='/signup'>
                <Button isOutlined content='Login'  />
            </Link>
             <Link className='w-[8rem]' href='/login'>
                <Button  content='Signup'  />
             </Link>
             
       </div>
       </div>
    </div>
  )
}

export default Header