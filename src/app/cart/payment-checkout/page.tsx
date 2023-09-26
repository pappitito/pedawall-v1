import Button from '@/components/Button'
import CustomInput from '@/components/CustomInput'
import GeneralLayout from '@/layouts/GeneralLayout'
import { Form, Switch } from 'antd'
import React from 'react'

const page = () => {
  return (
    <GeneralLayout>
        <div className='m-auto w-full pt-10 p-4 lg:p-[4rem] items-center justify-center flex flex-col'>
            <h1 className='text-[1.7rem] md:text-[2rem] font-semibold'>Payment Checkout</h1>
            <div className='bg-white mt-6 xsm:mt-[3rem]  rounded-[1.3rem] p-[1.5rem] w-full max-w-[34rem]'>
                <p className='mb-6 w-full text-center text-[0.95rem]'>Please fill out the details below</p>
                <Form>
                    <CustomInput name='cardholderName' placeholder={`Cardholder's Name`} required />
                    <CustomInput name='cardNumber' placeholder={`Card Number`} required />
                    <div className='flex gap-4 md:gap-[2rem]'>
                        <CustomInput name='cvv' placeholder={`CVV`} required />
                        <CustomInput name='expiry' placeholder={`EXP`} required />
                    </div>
                    <div className='gap-[1rem] mb-6 flex items-center'>
                       <p> Save this card</p>
                       <Switch className='!w-[2.2rem] ' defaultChecked size='small'/>
                    </div>
                    <div className='max-w-[14rem] w-full m-auto'><Button content={'Pay'} /></div>
                </Form>
            </div>

        </div>
    </GeneralLayout>
  )
}

export default page