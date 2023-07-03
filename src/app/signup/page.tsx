import Button from '@/components/Button'
import Input from '@/components/Input'
import Image from 'next/image'
import React from 'react'

const SignUp
 = () => {
  return (
    <div className='flex w-full '>
        <div className='hidden sm:flex min-h-[100vh] w-[40%]  m-0'>
            <img className=' min-w-full object-cover '   src='/assets/signupImg.svg' alt='sign up' />
        </div>
        <div className='flex flex-col w-full p-4 sm:w-[60%] items-center'>
            <div className='flex gap-3 items-center'>
                <img className='w-[2.2rem]' src='/assets/logo.svg' alt='logo' />
                <h4 className='text-[1.3rem]'>Pedawalls</h4>
            </div>
            <div className=' flex flex-col w-full pl-2 pr-2 max-w-[31rem] gap-5 items-center  mt-[10vh]'>
                <h1 className='text-[1.6rem] font-semibold text-center mb-4 '>Create Account</h1>
                <Input  label='Full name' />
                <Input  label='Email Address' />
                <Input  label='Password' isPassword />
                <div className='flex gap-2 w-full text-left'>
                    <input className='cursor-pointer'  type="checkbox" />
                    <div className='text-[0.8rem] font-medium'>I agree to the <span className='linkSpan'>terms of service </span>and <span className='linkSpan'>privacy policy</span></div>
                </div>
                <div className='max-w-[20rem] w-full mt-4'>
                    <Button content='Sign up' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
