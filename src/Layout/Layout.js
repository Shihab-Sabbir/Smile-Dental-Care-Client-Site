import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
function Layout() {
    return (
        <div>
            <div className='min-h-screen dark:bg-slate-500' >
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;