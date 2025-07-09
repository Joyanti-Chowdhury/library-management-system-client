import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/nav/Navbar'


import { Outlet } from 'react-router'
import HeroSection from './HeroSection'


export default function Home() {
  return (
    <div>
   <Navbar></Navbar>
   <HeroSection></HeroSection>
   <Outlet></Outlet>
   <Footer></Footer>
 


    </div>
  )
}
