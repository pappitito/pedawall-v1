import { CourseProp, dummyCourses } from "@/components/misc"
import Header from "@/containers/Header"
import LanguageIcon from '@mui/icons-material/Language';
import CheckIcon from '@mui/icons-material/Check';
import { Avatar } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CourseCard } from "@/containers/TopCourses";
import Footer from "@/containers/Footer";
import GeneralLayout from "@/layouts/GeneralLayout";

export default function Page({params}: any) {
    const splitParameter = (text : string) =>{
        var mySplit = text.split('-')
        var mySplitId = mySplit[mySplit.length - 1]
        var mySplitTitle = text.split('-').slice(0,-1).join(' ')
        return {
            id: mySplitId,
            title: mySplitTitle
        }
    } 
    
    const details = splitParameter(params.course)
    
    const courseDetails = dummyCourses.find((course)=>
        course.id?.slice(0,5) === details.id && (course.title.toLowerCase() === details.title || course.title.toLowerCase().includes(details.title[0])  )
    )

    const similarCourses  = dummyCourses.filter((item)=> item.type === courseDetails?.type)

    return(
        <GeneralLayout className="flex flex-col w-full">
            <div className="flex flex-col text-white w-full bg-[#29303B]  pt-[2.5rem] p-6 lg:p-[4rem]">
                <h1 className=" text-[1.5rem] md:text-[2rem] md:w-[70%] font-bold">{courseDetails?.title}</h1>
                <p className="text-[0.9rem] md:text-[1rem] mt-2">{courseDetails?.subtitle}</p>
                <div className="flex items-center md:w-[45%] flex-wrap  text-[0.8rem] mt-5 gap-3">
                        <div className="p-1 pt-[0.1rem] pb-[0.1rem] rounded-sm text-black bg-yellow-500">{courseDetails?.level?.toUpperCase()}</div>
                        {courseDetails?.numberOfRatings && <div>{`(${courseDetails?.numberOfRatings} Ratings)`}</div>}
                        {courseDetails?.numberOfStudents && <div>{`${courseDetails?.numberOfStudents } Students enrolled`}</div>}
                        <div className="flex items-center gap-1"> <LanguageIcon/> {courseDetails?.language} </div>
                </div>
                <div className="mt-[1.2rem] md:w-[41%] lg:w-[55%] text-[0.9rem]">Created by {courseDetails?.school}</div>
                {courseDetails?.lastUpdated && <div className="mt-[1.2rem] text-[0.9rem]">Last updated {courseDetails?.lastUpdated}</div>}
            </div>
            <div className="w-full bg-transparent md:mt-[-8rem] flex p-3 xs:p-5 lg:pr-[4rem] justify-end ">
                <div className="bg-white flex-col xs:flex-row w-full gap-2 xs:gap-[5rem] md:gap-8 md:max-w-[29rem] lg:max-w-[32rem] rounded-[1.1rem] shadow-lg pl-5 pr-5 p-[1.5rem]  flex">
                    <div className="flex gap-3 items-end  w-full xs:max-w-[42%] md:max-w-[14rem] xs:flex-col">
                            <img className="w-[100%] xs:w-full h-[8rem] xs:h-[7.4rem] object-cover rounded-[0.8rem] " src={courseDetails?.coverImg} alt="course image" />
                            <div className="flex w-full flex-col gap-2">
                            <div className="text-[1.8rem] w-full flex xs:hidden items-center justify-center mb-0  font-bold">${courseDetails?.price || 0.00}</div>
                                <div className="w-full p-[0.6rem] text-center rounded-lg text-[#7EB200] border-[#7EB200] text-[0.8rem] border-[1px] ">Add to cart</div>
                                <div className="w-full p-[0.6rem] text-center rounded-lg text-[#CA9500] border-[#CA9500] text-[0.8rem] border-[1px] ">Add to cart</div>
                            </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[2rem] hidden xs:flex items-center  font-bold"><span className="">$</span>{courseDetails?.price || 0.00}</div>
                        <h2 className="xs:mt-6 mt-3 font-semibold">Inludes:</h2>
                        <div className="flex gap-3 mt-3 text-[0.8rem] leading-[0.9rem] flex-row xs:flex-col xs:gap-3 ">
                            <div className="flex gap-2  flex-col">
                                <div>20 Hours of on demand videos</div>
                                <div>full time life access</div>
                            </div>
                            <div className="flex gap-3  flex-col">
                                <div>6 lessons</div>
                                <div>Access on mobile and tv</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 pt-7 xs:p-7 md:p-[3rem] md:mt-[-1rem] lg:pl-[5rem] lg:pr-[5rem]">
                <h1 className="text-[1.5rem] font-semibold">About this course</h1>
                <p className="mt-4 leading-8">{courseDetails?.about}</p>
            </div>
            <div className="p-5 xs:p-7 md:pl-[3rem] md:pr-[3rem]  pt-0 lg:pl-[5rem] lg:pr-[5rem]">
                <h1 className="text-[1.5rem] font-semibold">Skills to be gained</h1>
                <div className="flex mt-5 flex-wrap gap-6">
                    {courseDetails?.skills?.map((item)=>(
                        <div className="bg-gray-200 p-3 text-[0.9rem] rounded-lg">{item}</div>
                    ))}
                </div>
            </div>
            <div className="p-5 xs:p-7 md:pl-[3rem] md:pr-[3rem] pt-0 lg:pl-[5rem] lg:pr-[5rem]">
                <h1 className="text-[1.5rem] mt-10 mb-4 font-semibold">Requirements</h1>
                <div className="flex mt-5 flex-col gap-3">
                    {courseDetails?.requirements?.map((item)=>(
                        <div className="text-[0.99rem] flex gap-3"><CheckIcon className="!w-[1.2rem]"/>{item}</div>
                    ))}
                </div>
            </div>
            <div className="p-5 xs:p-7 md:pl-[3rem] md:pr-[3rem]  pb-5 pt-0 lg:pl-[5rem] lg:pr-[5rem]">
                <h1 className="text-[1.5rem] mt-10 mb-4 font-semibold">Tutors</h1>
                <div className="flex mt-5 flex-wrap gap-6">
                   {courseDetails?.tutors?.map((tutor)=>(
                    <div key={tutor.name} className="flex md:w-[48%] items-start gap-[0.8rem]">
                        <Avatar className="mt-[0.5rem] h-[3rem] w-[3rem] xsm:h-[3.5rem] xsm:w-[3.5rem]" src={tutor.image} />
                        <div className="flex-col flex gap-2">
                            <div className="text-[1.4rem] font-semibold">{tutor.name}</div>
                            <p className="text-[0.9rem] mt-[-0.5rem]">Department: {tutor.department}</p>
                            <p className="text-[0.9rem]">{tutor.info}</p>
                        </div>
                    </div>
                   ))}
                </div>
            </div>
            <div className="p-5 xs:p-7 md:pl-[3rem] md:pr-[3rem]  pb-5 pt-0 lg:pl-[5rem] lg:pr-[5rem]">
                <h1 className="text-[1.5rem] mt-10 mb-4 font-semibold">Course content</h1>
                
                   <div className="bg-white rounded-[1rem] p-3 pl-4 pr-4  xsm:pl-[3rem] xsm:pr-[3rem] ">
                   {courseDetails?.content && courseDetails?.content?.map((week)=>(
                    <Accordion className="bg-white shadow-none" key={week.title}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${week.title}-content`} 
                            id={`panel${week.title}-header`}
                            className="p-[0.4rem] "
                        >
                            <div className=" text-[1.15rem] font-medium tracking-[-0.015rem]">{`${week.title}`}</div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <h1 className="text underline underline-offset-4">Objectives:</h1>
                            <div className="flex mt-5 flex-col gap-3">
                                {week.objectives?.map((item)=>(
                            <div className="text-[0.9rem] flex gap-3"><CheckIcon className="!w-[1.2rem]"/>{item}</div>
                            ))}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                   ))} 
                   </div>
                
            </div>
        
            <div className='flex flex-col w-full p-[1.5rem] md:p-[5rem]'>
             <h1 className="text-[1.5rem] mt-10 mb-4 font-semibold">Similar courses</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 blg:grid-cols-4 myCenter4 justify-center gap-5 '>
            {similarCourses.slice(0,4).map(({id, title, type, coverImg, level, school, rating, duration})=>(
               
                <CourseCard 
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
            <Footer/>
        </GeneralLayout>
    )
}