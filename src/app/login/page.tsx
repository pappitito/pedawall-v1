'use client'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Validator from '@/components/Validator'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import SignUp from '../signup/page'
import Head from 'next/head'

const Login = () => {
    const [keepLogged, setKeepLogged] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleDisabler = ()=>{
        if( email && password  ){
            return false
        }
        else return true

    }
  return (
    <div className='flex w-full bg-white h-screen overflow-auto '>
        <title>Log In</title>
        <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1" />

        <div className='hidden sm:flex min-h-[100vh] w-[40%]  m-0'>
            <Image className=' min-w-full object-cover ' width={40} height={60} priority  src='/assets/loginImg.svg' alt='sign up' />
        </div>
        <div className='flex flex-col w-full p-4 sm:w-[60%] items-center'>
            <div className='flex gap-3 items-center'>
                <img className='w-[2.2rem]' src='/assets/logo.svg' alt='logo' />
                <h4 className='text-[1.3rem]'>Pedawalls</h4>
            </div>
            <div className=' flex flex-col w-full pl-2 pr-2 max-w-[31rem] gap-5 items-center mt-[9vh] lg:mt-[12vh]'>
                <h1 className='text-[1.6rem] font-semibold text-center mb-4 '>Welcome Back</h1>
                <Input value={email} onChange={(e: any)=> setEmail(e.target.value)}  label='Email Address' />
                <Input value={password} onChange={(e: any)=> setPassword(e.target.value)}  label='Password' isPassword />
                <div className='w-full flex items-center justify-between'>
                    <div className='flex gap-2  '>
                        <input onClick={()=> setKeepLogged((prev)=> !prev)} className='cursor-pointer'  type="checkbox" />
                        <div className='text-[0.8rem] font-medium'>Keep me logged in</div>
                    </div>
                    <p className='redlink font-medium text-[0.8rem]'>forgot password?</p>
                </div>
                <div className='max-w-[20rem] w-full mt-4'>
                    <Button disabled={handleDisabler()} content='Sign up' />
                </div>
                <div className='w-full mt-[2rem] text-center text-[0.9rem] font-medium '>Don't have an account? <Link className='text-[#E50914] cursor-pointer' href={'/signup'}>Sign up</Link></div>
            </div>
        </div>
    </div>
  )
}

export default Login