import React from 'react'
import HomeServices from './HomeServices';
import Safety from './Safety';

function Home() {
    return (
        <div className='w-full lg:w-[1200px] mx-auto container'>
            <HomeServices />
            <Safety/>
        </div>
    )
}

export default Home;