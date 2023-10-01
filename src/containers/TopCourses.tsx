"use client"
import { CourseProp, dummyCourses } from '@/components/misc'
import Link from 'next/link'
import React from 'react'


import dynamic from 'next/dynamic';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";



export const CourseCard = ({id, title, type, coverImg, level, school, rating, duration} : CourseProp) => {
    return (
        <Link href={`/courses/${type?.toLowerCase()}/${title.replace(/[^\w]+/g, '-').toLowerCase()}-${id?.slice(0,5)}`}   className='flex h-full'>
            <div className='hidden blg:flex flex-col w-[100%] max-w-[19rem] min-w-[15rem] h-full rounded-[0.9rem] cursor-pointer duration-300 hover:scale-105  bg-white '>
            <div className='w-full h-[10rem] object-cover'>
                <img className='w-[100%] rounded-t-[0.9rem] h-[100%] object-cover' src={coverImg} alt="cover image" />
            </div>
            <div className='p-[0.4rem] pl-4 pr-4 flex ml-6  rounded-[0.4rem] m-auto mt-[-1rem] text-[0.8rem] z-10  text-white bg-[#4B6F21]'>{type}</div>
            <div className='flex flex-col mt-[0.5rem] justify-between h-full   w-full text-[0.8rem] p-4 gap-4'>
                <h1 className='text-[0.99rem] max-w-[80%] flex flex-col text-start items-start overflow-hidden text-ellipsis font-semibold'>{title}</h1>
               <div className='flex flex-col '>
               <div className='flex items-center w-full  justify-between'>
                    <p className='font-semibold max-w-[12rem] whitespace-nowrap overflow-hidden text-ellipsis'>By: {school}</p>
                    <p>{level}</p>
                </div>
                <div className='flex items-center w-full mb-2 pt-3 border-t-[1px] border-t-gray-300  justify-between'>
                    <p>{rating}/5 Rating</p>
                    <p>{duration}</p>
                 </div>
               </div>
            </div>
            </div>


            <div className='flex flex-col justify-between cursor-pointer duration-300 hover:scale-105 bg-white rounded-[0.9rem] w-full sm:max-w-[25rem] p-4 gap-2 blg:hidden '>
            <div className='flex flex-row gap-2  mt-[0rem] items-start justify-between w-full text-[0.8rem]'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-[0.96rem] max-w-[100%] flex flex-col text-start items-start overflow-hidden text-ellipsis font-semibold'>{title}</h1>
                <div className=' flex  text-[0.8rem] z-10 font-semibold  text-[#4B6F21]'>{type}</div>
                </div>
                
                <div className=''>
                    <img className='w-[100%] max-w-[6rem] xsm:max-w-[6rem] min-w-[6rem] xsm:min-w-[6rem] min-h-[4rem] max-h-[5.7rem] rounded-[0.5rem] h-[100%] object-cover' src={coverImg} alt="cover image" />
                 </div>
                 
                
            </div>
           
            <div className='flex flex-col text-[0.78rem] gap-1 '>
               <div className='flex items-center w-full  justify-between'>
                    <p className='font-semibold max-w-[12rem] whitespace-nowrap overflow-hidden text-ellipsis'>By: {school}</p>
                    <p>{level}</p>
                </div>
                <div className='flex items-center w-full mb-0 pt-1 border-t-[1px] border-t-gray-300  justify-between'>
                    <p>{rating}/5 Rating</p>
                    <p>{duration}</p>
                 </div>
               </div>
            </div>
        </Link>
    )
}
const fourTop = dummyCourses.slice(0,4)
const TopCourses = () => {

 
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const carouselSettings = {
    responsive,
    draggable: true, // Enable dragging
    keyBoardControl: true, // Enable keyboard navigation
    
  };

  return (
    <div className='flex flex-col w-full p-[1.5rem] md:p-[5rem]'>
        <div className='text-[1.5rem] sm:text-[2rem] p-3 font-bold'>Top Courses</div>

           <div className='grid grid-cols-1 sm:grid-cols-2 blg:grid-cols-4 myCenter4 justify-center gap-5 '>
            {dummyCourses.map(({id, title, type, coverImg, level, school, rating, duration})=>(
               
                <CourseCard 
                    key={id}
                    id={id}
                    title={title} 
                    type={type} 
                    coverImg={coverImg}
                    level={level}
                    school={school}
                    rating={rating}
                    duration={duration}
                    />
            ))}
          </div> 
         
        
    </div>
  )
}

export default TopCourses