'use client'
import { Form, Input } from 'antd';
import React from 'react'

interface InputProps {
    name: string;
    label?: string;
    labelClassName?: string;
    placeholder?: string;
    onChange?: ()=> void;
    disabled?: boolean;
    isPassword?: boolean;
    required?: boolean
}

const CustomInput = ({
    name,
    label,
    labelClassName,
    placeholder,
    onChange,
    disabled,
    required,
    isPassword
}: InputProps) => {
   const inputRules = {
        required
   }

    const Regular = (
        <Form.Item className='w-full' name={name} help={false} rules={[inputRules]}>
            <Input className='w-full !h-[2.74rem]' placeholder={placeholder} disabled={disabled} onChange={onChange}  />
        </Form.Item>
    )
  return (
    <div className='w-full'>
      {label && <div className={`${labelClassName} text-[0.85rem] mb-3`}>{label}:</div>}
      <div>{Regular}</div>

    </div>
  )
}

export default CustomInput