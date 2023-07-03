import React, { ReactNode } from 'react'
import { JsxElement } from 'typescript'

interface ButtonProps {
    content: string | ReactNode
    disabled?: boolean
}
const Button = ({content, disabled}: ButtonProps) => {
  return (
    <button className='w-full bg-[#E50914] rounded-[0.64rem] p-3 flex justify-center text-[white]'>{content}</button>
  )
}

export default Button