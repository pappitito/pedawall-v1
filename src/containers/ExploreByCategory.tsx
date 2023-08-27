import Button from '@/components/Button'
import Link from 'next/link'
import React from 'react'
interface CategoryCardProps {
    key?: number
    title: string
    subtitle: string
    count: string
    icon: string
}
const CategoryCard = ({icon, title, subtitle, count}:CategoryCardProps) =>{
    return (
        <div className='flex flex-col md:min-h-[17.4rem] bg-white hover:bg-[#E50914] cursor-pointer duration-500 hover:text-white hover:scale-105  p-6 w-full rounded-[1.2rem] md:max-w-[15.4rem]'>
        <div className='flex justify-between items-center mb-2'>
            <img className='w-[1.8rem]' src={icon} alt="icon" />
            <div className='text-[#4B6F21]'>{count}+</div>
        </div>
        <div className='text-[1.3rem] font-semibold mb-1'>{title}</div>
        <div className='text-[0.9rem]'>{subtitle}</div>

    </div>
    )
}

const Categories : CategoryCardProps[] = [{
    key: 1,
    title: 'Digital Marketing',
    subtitle: `Master digital marketing and conquer the online world with our course. Unlock the latest strategies, connect with your audience, and achieve exceptional results.`,
    count: '30',
    icon: 'assets/megaphone.svg'
},
{
    key: 1,
    title: 'Finance',
    subtitle: `Secure your financial future with our finance course. Learn wealth creation and investment strategies to take control of your money and achieve lasting prosperity.`,
    count: '10',
    icon: 'assets/finance.svg'
},
{
    key: 1,
    title: 'Game Dev',
    subtitle: `Code, create, conquer! Master Python game development in our immersive course and unleash your creativity to bring captivating games to life.`,
    count: '15',
    icon: 'assets/gameController.svg'
},
{
    key: 1,
    title: 'App Dev',
    subtitle: `Create captivating apps with our course! Master the skills to develop innovative and user-friendly mobile applications, turning your ideas into reality.`,
    count: '10',
    icon: 'assets/appDev.svg'
},
]

const ExploreByCategory = () => {
  return (
    <div className='flex p-4 xsm:p-[5rem] flex-col w-full'>
        <h1 className='text-[1.5rem] sm:text-[2rem] p-3 font-bold'>Explore by category</h1>
        <div className='flex justify-evenly mt-[3rem] p-3 flex-wrap gap-[2rem]'>
            {Categories.map(({key, title, subtitle, icon, count})=>{
                return  <CategoryCard key={key} title={title} subtitle={subtitle} icon={icon} count={count} />
            })}
        </div>
        <div className='w-[12rem] mt-10 myCenter3'>
            <Link href={'/explore'}><Button content='Explore Courses'/></Link>
        </div>
    </div>
  )
}

export default ExploreByCategory