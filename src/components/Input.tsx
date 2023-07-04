"use client"
import React, { useState } from 'react'
interface InputProps {
    placeholder?: string
    isPassword? : boolean
    label? : string
    value? : any
    onChange? : (e:any)=> void
    onClick? : ()=> void
}
const Input = ({placeholder, label, value, isPassword, onChange, onClick}: InputProps) => {
    const [showPassword, setShowPassword] = useState(false)
  const normal = (
    <div className='flex flex-col w-full justify-start gap-2'>
        {label && <p>{label}</p>}
        <input value={value} onChange={onChange} className='p-3 outline-none border-[1.5px] border-gray-400 w-full text-[0.9rem] rounded-[0.64rem] ' placeholder={placeholder} />
    </div>
  )
  const password = (
    <div className='flex flex-col w-full justify-start gap-2'>
    {label && <p>{label}</p>}
    <div className='p-3 outline-none border-[1.5px] border-gray-400 flex w-full text-[0.9rem] rounded-[0.64rem] '>
    <input value={value} onChange={onChange}  type={showPassword? 'text': 'password'} className='outline-none w-full'  placeholder={placeholder} />
    <div onClick={()=>setShowPassword((prev)=> !prev)} className='text-gray-400 cursor-pointer '>{showPassword? 'Hide': 'Show'}</div>
    </div>
</div>
  )
  return isPassword? password : normal
}

export default Input