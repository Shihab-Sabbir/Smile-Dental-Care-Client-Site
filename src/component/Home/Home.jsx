import React from 'react'
import HealthAdvice from './HealthAdvice';
import HomeHeader from './HomeHeader';
import HomeServices from './HomeServices';
import Safety from './Safety';
import { Helmet } from 'react-helmet';
function Home() {
    return (
        <div className='w-full lg:w-[1200px] mx-auto container lg:px-0 px-1'>
            <HomeHeader />
            <HomeServices />
            <HealthAdvice />
            <div className='pb-20'>
                <Safety />
           </div>
        </div>
    )
}

export default Home;