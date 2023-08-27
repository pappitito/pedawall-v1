"use client"
import Button from '@/components/Button'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const EducationUltraMuros = () => {
    const FADE_INTERVAL_MS = 2100
    const [fader, setFader] = useState('fade-in')
    const [faderWord, setFaderWord] = useState('Ultra Muros')
    useEffect(()=>{
        const fadeTimeout = setInterval(() => {
            fader === 'fade-in' ? setFader('fade-out') : setFader('fade-in')
          }, FADE_INTERVAL_MS)
      
          return () => clearInterval(fadeTimeout)
    },[fader])
    useEffect(()=>{
        const fadeTimeout = setInterval(() => {
            faderWord === 'Ultra Muros' ? setFaderWord('Beyond Walls') : setFaderWord('Ultra Muros')
          }, 4200)
      
          return () => clearInterval(fadeTimeout)
    },[faderWord])
    

  return (
    <div className='flex flex-col p-[2rem] mt-[4.47rem]  xsm:pt-[4.5rem] xsm:p-[5rem] w-full'>
        <div className='flex flex-col  sm:flex-row justify-between  items-center w-full'>
            <div className='flex w-full  flex-col'>
                <div className='flex flex-col text-[1.9rem] xs:text-[2.2rem] xsm:text-[2.5rem] lg:text-[3rem] font-bold'>
                    <div className='text-[#4B6F21]'>Education <span className={` ${fader}`}>{faderWord}</span></div>
                    <div className='w-[90%]'> 
                        Master Your Success: 
                        Learn, Grow, and Achieve with Us</div>
                </div>
                <div className='flex max-w-[19rem] myCenter2 sm:m-0 sm:mt-[3rem] gap-2  justify-between w-full  mb-7'>
                    <Link className=' w-[8rem] ' href='/login'>
                         <Button isOutlined content='Login'  />
                    </Link>
                    <Link className='w-[8rem]' href='/signup'>
                        <Button  content='Signup'  />
                    </Link>
             
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <img className='w-full max-w-[40rem] sm:pt-[4rem] m-auto' src="/assets/Online learning-pana.svg" alt="" />
                <a className='text-[0.62rem] text-gray-400 mt-4 italic w-full pb-[3rem] text-center pr-8' href="https://storyset.com/online">Online illustrations by Storyset</a>
            </div>
           {/*  <img className='w-full min-w-[16rem] max-w-[22rem] lg:max-w-[30rem] bg-[#839098] rounded-[50%]' src="/assets/eduImg.svg" alt="" /> */}
        </div>
        <div className='flex mt-[7rem] myCenter flex-col md:flex-row  md:justify-around gap-[3rem] flex-wrap'>
            <div className='flex items-center gap-6'>
                <div className='circleShadow'>
                    <img className='min-w-[1.4rem] max-w-[1.7rem] ' src="/assets/bookshelf.svg" alt="bookshelf" />
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <div className='text-[1.3rem] font-semibold'>Multiple online courses</div>
                    <p className='text-[0.95rem]'>Explore a variety of fresh topics</p>
                </div>
            </div>
            <div className='flex items-center gap-6'>
                <div className='circleShadow'>
                    <img className='min-w-[1.4rem] max-w-[1.7rem] ' src="/assets/book.svg" alt="book" />
                </div>
                <div className='flex flex-col  gap-2'>
                    <div className='text-[1.3rem] font-semibold'>Expert Instructions</div>
                    <p className='text-[0.95rem]'>Find the right course for you</p>
                </div>
            </div>
            <div className='flex items-center gap-6'>
                <div className='circleShadow'>
                    <img className='min-w-[1.4rem] max-w-[1.7rem] ' src="/assets/clock.svg" alt="" />
                </div>
                <div className='flex flex-col  gap-2'>
                    <div className='text-[1.3rem]  font-semibold'>Lifetime Access</div>
                    <p className='text-[0.95rem]'>Learn on your own schedule</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EducationUltraMuros