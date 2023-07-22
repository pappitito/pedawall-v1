import { CourseProp, dummyCourses } from '@/components/misc'
import React from 'react'

const CourseCard = ({title, type, coverImg, level, school, rating, duration} : CourseProp) => {
    return (
        <div className='flex'>
            <div className='hidden blg:flex flex-col w-[100%] max-w-[20rem] min-w-[15rem] rounded-[0.9rem] bg-white '>
            <div className='w-full h-[12rem] object-cover'>
                <img className='w-[100%] rounded-t-[0.9rem] h-[100%] object-cover' src={coverImg} alt="cover image" />
            </div>
            <div className='p-[0.4rem] pl-4 pr-4 flex ml-6  rounded-[0.4rem] m-auto mt-[-1rem] text-[0.8rem] z-10  text-white bg-[#4B6F21]'>{type}</div>
            <div className='flex flex-col mt-[0.5rem] justify-between h-full   w-full text-[0.8rem] p-4 gap-4'>
                <h1 className='text-[0.96rem] max-w-[100%] flex flex-col text-start items-start overflow-hidden text-ellipsis font-semibold'>{title}</h1>
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


            <div className='flex flex-col justify-between bg-white rounded-[0.9rem] w-full sm:max-w-[25rem] p-4 gap-2 blg:hidden '>
            <div className='flex flex-row gap-2  mt-[0rem] items-start justify-between w-full text-[0.8rem]'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-[0.96rem] max-w-[100%] flex flex-col text-start items-start overflow-hidden text-ellipsis font-semibold'>{title}</h1>
                <div className=' flex  text-[0.8rem] z-10 font-semibold  text-[#4B6F21]'>{type}</div>
                </div>
                
                <div className='max-w-[5rem] max-h-[5rem]'>
                    <img className='w-[100%] rounded-[0.9rem] h-[100%] object-cover' src={coverImg} alt="cover image" />
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
        </div>
    )
}
const fourTop = dummyCourses.slice(0,4)
const TopCourses = () => {
  return (
    <div className='flex flex-col w-full p-[1.5rem] md:p-[5rem]'>
        <div className='text-[1.5rem] sm:text-[2rem] p-3 font-bold'>Top Courses</div>
          <div className='grid grid-cols-1 sm:grid-cols-2 blg:grid-cols-4 myCenter4 justify-center gap-4 '>
            {dummyCourses.map(({title, type, coverImg, level, school, rating, duration})=>(
                <CourseCard 
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