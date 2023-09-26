import { dummyCourses } from '@/components/misc'
import Header from '@/containers/Header'
import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@/components/Button';
import Link from 'next/link';

const page = () => {
  return (
    <div>
        <Header />
        <main className='mt-[4.4rem] p-[1.2rem] sm:p-[3rem]'>
            <h1 className='text-2xl font-semibold mb-6'>Shopping Cart</h1>
            <section className='flex flex-col items-start gap-[2rem] justify-around md:flex-row'>
                <div className='bg-white items-start p-4 pt-8 pb-8 xsm:p-[2rem] w-full md:min-w-[28rem] max-w-[50rem] rounded-[1.5rem] gap-[2rem] flex flex-col'>
                    {dummyCourses.slice(0,3).map(({coverImg, title, price, school, type, duration})=>(
                        <div className='flex flex-col-reverse gap-3 md:gap-0 w-full sm:flex-row sm:items-center justify-between'>
                            <div className='flex flex-col bxs:flex-row  gap-6'>
                                <img className='w-[10rem] m-auto bxs:m-0 bxs:w-[6rem] xs:w-[9rem] md:w-[10.5rem] rounded-[0.8rem]' src={coverImg} alt="cover" />
                                <div className='flex flex-col gap-2 text-[0.8rem] sm:w-[60%]'>
                                    <p className='font-semibold text-[1rem] '>{title}</p>
                                    <p>by: {school}</p>
                                    <p>{type}</p>
                                    <p className='text-[1.3rem]  font-bold'>${price}</p>
                                </div>
                            </div>
                            <div className='w-full flex justify-end sm:justify-normal sm:w-auto '>
                                <div className='p-1 rounded-[50%] text-black flex bg-gray-200'>
                                    <ClearIcon/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='bg-white w-full md:max-w-[20rem]  items-center   p-6 rounded-[1.5rem] flex flex-col'>
                    <h1 className='p-5 text-[1.1rem] border-b-[1px] border-b-gray-200 w-full'>Payment Summary</h1>
                    <div className='w-full p-5 flex flex-col border-b-[1px] border-b-gray-200'>
                        <div className='flex justify-between text-[0.9rem] text-gray-600 w-full'>
                            <p>Total</p>
                            <p>$114</p>
                        </div>
                        <div className='flex justify-between text-[0.9rem] text-gray-600 w-full'>
                            <p>VAT</p>
                            <p>$10</p>
                        </div>
                        <div className='flex justify-between text-[0.9rem] text-gray-600 w-full'>
                            <p>Discount</p>
                            <p>-$15</p>
                        </div>
                    </div>
                    <div className='flex w-full justify-between p-5 border-b-[1px] border-b-gray-200'>
                        <p className=''>Amount to pay</p>
                        <p className='font-semibold text-lg'>$109</p>
                    </div>
                    <div className='w-[12rem] p-5'>
                        <Link href={'/cart/payment-checkout'}><Button content={'Proceed'} /></Link>
                    </div>

                </div>
            </section>
        </main>
    </div>
  )
}

export default page