"use client"
import React, { useState } from 'react'
interface InputProps {
    placeholder?: string
    isPassword? : boolean
    label? : string
    onChange? : ()=> void
    onClick? : ()=> void
}
const Input = ({placeholder, label, isPassword, onChange, onClick}: InputProps) => {
    const [showPassword, setShowPassword] = useState(false)
  const normal = (
    <div className='flex flex-col w-full justify-start gap-2'>
        {label && <p>{label}</p>}
        <input className='p-3 outline-none border-[1.5px] w-full text-[0.9rem] rounded-[0.64rem] ' placeholder={placeholder} />
    </div>
  )
  const password = (
    <div className='flex flex-col w-full justify-start gap-2'>
    {label && <p>{label}</p>}
    <div className='p-3 outline-none border-[1.5px] flex w-full text-[0.9rem] rounded-[0.64rem] '>
    <input type={showPassword? 'text': 'password'} className='outline-none w-full'  placeholder={placeholder} />
    <div onClick={()=>setShowPassword((prev)=> !prev)} className='text-gray-400 cursor-pointer '>{showPassword? 'Hide': 'Show'}</div>
    </div>
</div>
  )
  return isPassword? password : normal
}

export default Input