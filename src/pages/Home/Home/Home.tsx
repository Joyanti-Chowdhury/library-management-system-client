import Navbar from '@/components/nav/Navbar'

import { Outlet } from 'react-router'

export default function Home() {
  return (
    <div>
   <Navbar></Navbar>
   <Outlet></Outlet>


    </div>
  )
}
