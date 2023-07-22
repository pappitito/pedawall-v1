import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Header from '@/containers/Header'
import EducationUltraMuros from '@/containers/EducationUltraMuros'
import ExploreByCategory from '@/containers/ExploreByCategory'
import Vision from '@/containers/Vision'
import Footer from '@/containers/Footer'
import TopCourses from '@/containers/TopCourses'

export default function Home() {
  return (
    <main className=''>
      <title>Pedawalls</title>
        <Header />
        <EducationUltraMuros/>
        <ExploreByCategory />
        <Vision />
        <TopCourses/>
        <Footer/>
      
    </main>
  )
}
