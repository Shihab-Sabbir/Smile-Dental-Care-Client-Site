import React, { useContext } from 'react'
import { AuthContext } from '../../UserContext/UserContext';
import HealthAdvice from './HealthAdvice';
import HomeHeader from './HomeHeader';
import HomeServices from './HomeServices';
import Safety from './Safety';
function Home() {
    const { loading, setLoading } = useContext(AuthContext);
    if (loading) {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
        return (
            <div className=" rounded relative mt-[100px]">
                <div className="rounded-full bg-[#b8ebf0] w-[190px] h-[190px] relative flex justify-center items-center mx-auto animate-spin">
                    <svg className="absolute top-[2px] right-0" width={76} height={97} viewBox="0 0 76 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_2495_2146" fill="white">
                            <path d="M76 97C76 75.6829 69.2552 54.9123 56.7313 37.6621C44.2074 20.4118 26.5466 7.56643 6.27743 0.964994L0.0860505 19.9752C16.343 25.2698 30.5078 35.5725 40.5526 49.408C50.5974 63.2436 56.007 79.9026 56.007 97H76Z" />
                        </mask>
                        <path d="M76 97C76 75.6829 69.2552 54.9123 56.7313 37.6621C44.2074 20.4118 26.5466 7.56643 6.27743 0.964994L0.0860505 19.9752C16.343 25.2698 30.5078 35.5725 40.5526 49.408C50.5974 63.2436 56.007 79.9026 56.007 97H76Z" stroke="#1ab7c5" strokeWidth={40} mask="url(#path-1-inside-1_2495_2146)" />
                    </svg>
                    <div className="rounded-full bg-white w-[150px] h-[150px]" />
                </div>
                <p className="absolute mx-auto inset-x-0 my-auto inset-y-[80px] text-base font-medium text-gray-800 text-center">
                    Loading ...
                </p>
            </div>
        )
    }
    return (
        <>
            <div className='pt-2 pb-4 flex items-center w-full'>
                <div className="w-[12%] min-w-[100px] flex justify-center items-center bg-[#00adbd44] text-white font-mono h-[40px]"> Smile</div>
                <marquee behavior="" direction="">All services are provided by Dr. Eddie Harsini. He is dedicated to the profession of dentistry and is passionate about being one of the best in his field.</marquee>
            </div>
            <div className='w-full lg:w-[1200px] mx-auto container lg:px-0 px-1'>
                <HomeHeader />
                <HomeServices />
                <HealthAdvice />
                <div className='pb-20'>
                    <Safety />
                </div>
            </div>
        </>
    )
}

export default Home;