import React, { ReactNode } from 'react'
import { JsxElement } from 'typescript'

interface ButtonProps {
    content: string | ReactNode
    disabled?: boolean
    isOutlined?: boolean
    isSubmit?: boolean
}
const Button = ({content, disabled, isOutlined, isSubmit}: ButtonProps) => {
  const normal = (
    <button disabled={disabled} type={isSubmit? 'submit': undefined} className={`w-full cursor-pointer trans ${disabled? 'bg-[#9f9e9e] cursor-not-allowed': 'bg-[#E50914]'} rounded-[0.64rem] p-[0.56rem]  text-[0.9rem] flex justify-center text-[white]`}>{content}</button>
  )
  const outlined = (
    <button disabled={disabled} type={isSubmit? 'submit': undefined} className={`w-full cursor-pointer trans ${disabled? 'border-[1px] border-gray-500 text-gray-500 cursor-not-allowed': 'border-[1px] border-gray-800'}  text-[0.9rem]  bg-transparent rounded-[0.64rem] p-[0.5rem] flex justify-center text-[black]`}>{content}</button>
  )
  return isOutlined? outlined : normal
}

export default Button