'use client'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Validator from '@/components/Validator'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const SignUp
 = () => {
    const [disabler, setDisabler] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validatedPassword, setValidatedPassword] = useState(false)
    const handleDisabler = ()=>{
        if(name && email && password && disabler && validatedPassword){
            return false
        }
        else return true

    }
  return (
    <div className='flex w-full bg-white h-screen items-center overflow-auto'>
        <title>Sign up</title>
        <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1" />
       
        
        <div className='flex flex-col w-full p-4 mt-[-7rem] items-center'>
            <Link href={'/'} className='flex gap-3 cursor-pointer items-center'>
                <img className='w-[2.2rem]' src='/assets/logo.svg' alt='logo' />
                <h4 className='text-[1.3rem]'>Pedawalls</h4>
            </Link>
            <div className=' flex flex-col w-full pl-2 pr-2 max-w-[31rem] gap-5 items-center  mt-[7vh] lg:mt-[10vh]'>
                <h1 className='text-[1.6rem] font-semibold text-center mb-4 '>Create Account</h1>
                <Input value={name} onChange={(e: any)=> setName(e.target.value)}  label='Full name' />
                <Input value={email} onChange={(e: any)=> setEmail(e.target.value)}  label='Email Address' />
                <Input value={password} onChange={(e: any)=> setPassword(e.target.value)}  label='Password' isPassword />
                {password.length >= 1 && <Validator text={password} validateSetter={setValidatedPassword} /> }
                <div className='flex gap-2 w-full text-left'>
                    <input onClick={()=> setDisabler((prev)=> !prev)} className='cursor-pointer'  type="checkbox" />
                    <div className='text-[0.8rem] font-medium'>I agree to the <span className='linkSpan'>terms of service </span>and <span className='linkSpan'>privacy policy</span></div>
                </div>
                <div className='max-w-[20rem] w-full mt-4'>
                    <Button disabled={handleDisabler()} content='Sign up' />
                </div>
                <div className='w-full mt-[2rem] text-center text-[0.9rem] font-medium '>Already have an account? <Link className='text-[#E50914] cursor-pointer' href={'/login'}>Log in</Link></div>

            </div>
        </div>
        <div className='hidden sm:flex flex-col items-center pr-12  mt-[-7rem]  w-full '>
            <img className=' w-full max-w-[40rem] '   src='/assets/idea.svg' alt='sign up' />
            <a className='text-[0.62rem] text-gray-400 italic w-full text-center ' href="https://storyset.com/online">Online illustrations by Storyset</a>
        </div>
    </div>
  )
}

export default SignUp
