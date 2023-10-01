import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-[95%] mx-auto rounded-[1rem] mb-4 flex flex-col mt-8 pt-[4rem] p-6 pb-2 xs:pl-[3rem] xs:pr-[3rem]  text-white bg-[#363636]'>
        <div className='flex sm:pl-[5rem] sm:pr-[5rem] flex-wrap gap-4 justify-between'>
          <div className='flex flex-col gap-2'>
             <img className='w-[4rem]' src='/assets/logo.svg' alt="" />
             <p className='w-[14rem] text-[0.8rem]'>Study any topic, anytime. explore
                thousands of courses for the lowest
                price ever!</p>
              <div className='flex'>
                  socials
              </div>
          </div>
          <div className='flex text-[0.9rem] justify-between gap-5 sm:gap-[3rem]'>
            <div className='flex flex-col leading-5 gap-2'>
                <h1 className='text-[1.1rem] font-semibold'>Pedawalls</h1>
                <Link href={''}>About Us</Link>
                <Link href={''}>What we offer</Link>
                <Link href={''}>Free courses</Link>
                <Link href={''}>All courses</Link>
                <Link href={''}>Become a partner</Link>
            </div>
            <div className='flex flex-col leading-5 gap-1'>
                <h1 className='text-[1.1rem] font-semibold'>Help</h1>
                <Link href={''}>Contact Us</Link>
                <Link href={''}>Privacy poilicy</Link>
                <Link href={''}>Terms and conditions</Link>
                <Link href={''}>Refund policy</Link>
                <Link href={''}>Notice a bug?</Link>
                <Link href={''}>FAQ</Link>
            </div>
          </div>
        </div>
        <div className='flex justify-between text-[0.9rem] p-3 border-t-[1px] mt-[3rem] mb-1 border-t-gray-400'>
          <h2>© 2023 PEDAWALLS, All rights reserved</h2>
        </div>
    </div>
  )
}

export default Footer