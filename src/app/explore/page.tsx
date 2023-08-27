import Searchbar from "@/components/Searchbar"
import { dummyCourses } from "@/components/misc"
import Footer from "@/containers/Footer"
import Header from "@/containers/Header"
import { CourseCard } from "@/containers/TopCourses"

const similarCourses  = dummyCourses.filter((item)=> item.level === 'beginner')


const Explore = () => {
  return (
    <main className="">
        <Header hasNoSearch />
        <section className="flex flex-col sm:flex-row p-[1.5rem] pt-[3rem] xs:p-[3rem] mt-[4.47rem] items-center  xsm:pt-[4.5rem] lg:p-[5rem]">
          <div className="w-full flex flex-col lg:p-[1rem]">
            <h1 className="text-[2rem] bxs:text-[2.4rem] sm:text-[3rem] font-semibold w-full lg:w-[70%] mb-[3rem]">What would you like to learn today</h1>
            <div className="w-full">
              <Searchbar isLarge/>
            </div>
          </div>
          <img className="w-[60%] min-w-[16rem] sm:w-full max-w-[40rem]" src="/assets/technolpgy.svg" alt="" />
        </section>
        <section className='flex flex-col w-full p-[1.5rem] md:p-[5rem]'>
             <h1 className="text-[1.5rem] mt-10 mb-8 font-semibold">Recommended for beginners</h1>
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
        
    </section>
    <Footer/>
    </main>
  )
}

export default Explore