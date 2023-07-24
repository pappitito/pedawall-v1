import React from 'react'


const Vision = () => {
  return (
    <div className='flex p-8 xsm:pl-[5rem] xsm:pr-[5rem] gap-[5rem]'>
        <img className='max-w-[28rem] w-full hidden md:flex' src="/assets/vision.svg" alt="mission" />
        <div className='flex flex-col gap-6  justify-evenly'>
            <div className='flex flex-col xsm:flex-row items-start gap-1 xsm:gap-4  bg-white p-6 w-full rounded-[1.2rem] '>
                    <img className='w-[2.3rem]' src="/assets/bullseye.svg" alt="" />
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-[1.3rem]  font-semibold mb-1'>Our Mission</h1>
                        <p className='text-[0.9rem]'>Amet minim mollit non deserunt ullamco est sit  aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
            </div>
            <div className='flex flex-col xsm:flex-row items-start gap-1 xsm:gap-4  bg-white p-6 w-full rounded-[1.2rem] '>
                    <img className='w-[2.2rem]' src="/assets/info.svg" alt="" />
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-[1.3rem]  font-semibold mb-1'>Who we are</h1>
                        <p className='text-[0.9rem]'>Amet minim mollit non deserunt ullamco est sit  aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
            </div>
            <div className='flex flex-col xsm:flex-row items-start gap-1 xsm:gap-4  bg-white p-6 w-full rounded-[1.2rem] '>
                    <img className='w-[2.3rem]' src="/assets/binoculars.svg" alt="" />
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-[1.3rem]  font-semibold mb-1'>Our Vision</h1>
                        <p className='text-[0.9rem]'>Amet minim mollit non deserunt ullamco est sit  aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Vision