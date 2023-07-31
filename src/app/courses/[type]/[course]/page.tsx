import { dummyCourses } from "@/components/misc"
import Header from "@/containers/Header"
import LanguageIcon from '@mui/icons-material/Language';

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

    return(
        <div className="flex flex-col w-full">
            <Header/>
            <div className="flex flex-col text-white w-full bg-[#29303B] mt-[3rem] pt-[4rem] p-6 lg:p-[4rem]">
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
            <div className="w-full bg-transparent md:mt-[-8rem] flex p-3 lg:pr-[4rem] justify-end ">
                <div className="bg-white flex-col xs:flex-row w-full gap-2 xs:gap-[5rem] md:gap-8 md:max-w-[29rem] lg:max-w-[32rem] rounded-[1.1rem] shadow-lg pl-5 pr-5 p-[1.5rem]  flex">
                    <div className="flex gap-3 items-end  w-full xs:max-w-[42%] md:max-w-[14rem] xs:flex-col">
                            <img className="w-[100%] xs:w-full h-[8rem] xs:h-[7.4rem] object-cover rounded-[0.8rem] " src={courseDetails?.coverImg} alt="course image" />
                            <div className="flex w-full flex-col gap-2">
                            <div className="text-[2rem] w-full flex xs:hidden justify-center mb-3  font-serif font-semibold">${courseDetails?.price}</div>
                                <div className="w-full p-[0.6rem] text-center rounded-lg text-[#7EB200] border-[#7EB200] text-[0.8rem] border-[1px] ">Add to cart</div>
                                <div className="w-full p-[0.6rem] text-center rounded-lg text-[#CA9500] border-[#CA9500] text-[0.8rem] border-[1px] ">Add to cart</div>
                            </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[2rem] hidden xs:flex   font-serif font-semibold">${courseDetails?.price}</div>
                        <h2 className="xs:mt-6 mt-3 font-semibold">Inludes:</h2>
                        <div className="flex gap-2 mt-3 text-[0.8rem] leading-[0.9rem] flex-row xs:flex-col xs:gap-2 ">
                            <div className="flex gap-3  flex-col">
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
        </div>
    )
}