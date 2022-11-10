import { Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Doctor from "./Doctor";
function HomeHeader() {
    const [services, setServices] = useState([]);
    const [dataLoading, setDataLoading] = useState(true)
    useEffect(() => {
        fetch('https://assignment-11-five.vercel.app/services').then(res => res.json()).then(data => { setServices(data); setDataLoading(false) }).catch(err => console.log(err))
    }, [])
    if (dataLoading) {
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
        <div className="bg-transparent overflow-y-hidden pb-10">
            <div className="w-full">
                {/* <Doctor /> */}
                <div className="relative rounded-lg bg-[#00ACBD] dark:brightness-75 container mx-auto flex flex-col items-center pt-12 sm:pt-[60px] pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
                    <img className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg" />
                    <img className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg" />
                    <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">Feel Free to Smile</h1>
                    </div>
                </div>
                <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
                    <div className="relative sm:w-[55%] w-11/12 bg-white rounded-lg">
                        <div className="h-56 sm:h-64 xl:h-80 2xl:h-[400px] max-h-full">
                            <Carousel
                                slideInterval={2000}
                                leftControl="."
                                rightControl="."
                            >
                                {
                                    services?.map(service =>
                                        <img key={service?._id} src={service?.displayImage} className='brightness-75 dark:brightness-50 max-h-full'></img>
                                    )
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
                <Doctor />
            </div>
        </div>

    );
}

export default HomeHeader;
