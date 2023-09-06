import Navbar from '@/components/Navbar';
import SideBar from '@/components/SideBar';
import React from 'react'

const DashboardLayout = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <div className='h-full relative'>
            <div className='hidden h-full md:w-[230px] md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-[#F1691D]'>
                <SideBar/>
            </div>
            <main className='md:pl-60'>
                <Navbar/>
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout;