import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoView } from 'react-photo-view';
function HomeServices() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(' https://assignment-11-five.vercel.app/services?limit=3').then(res => res.json()).then(data => setServices(data)).catch(err => console.log(err))
    }, [])

    return (
        <div className="bg-transparent dark:bg-gray-800">
            <div className='flex justify-start items-center flex-col border-1 shadow-sm shadow-[#88e2ea86] rounded-xl border-[#00ACBD] my-10'>
                <p className='focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4 dark:text-slate-300'>Top Services <span className='text-sm'> of Dr. Eddie Harsini</span> </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">

                    {
                        services?.map(service =>
                            <div key={service._id} className=" relative ">
                                <PhotoView src={service?.displayImage}>
                                    <div className="relative group w-[315px] h-[264px] cursor-zoom-in" style={{ backgroundImage: `url(${service.displayImage})`, backgroundSize: 'cover', opacity: '1' }}>
                                        <div className="font-normal text-center text-xl leading-5 text-white md:mt-6 mt-4 hero-overlay">
                                            <p className='max-w-[100px] 
                                            mx-auto pt-[60px]
                                            !brightness-[200%]' style={{ lineHeight: '25px' }}>
                                                {service?.title}
                                            </p>
                                            <hr className='border-t-4 border-white mt-4 w-[25%] mx-auto' />
                                        </div>
                                        <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">

                                            <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 pt-[150px] w-full mt-2 text-white hover:scale-105 hover:duration-700 cursor-zoom-in">
                                                <Link className='text-center cursor-pointer' to={`/service/details/${service?._id}`}>
                                                    Quick View
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </PhotoView>
                                <div className='w-[315px] pt-2 mb-10'>
                                    <p className='font-semibold'>${service?.price}</p>
                                    <p className='font-thin mb-2'>{service?.description1?.slice(0, 80) + '...'}</p>
                                    <Link to={`/service/details/${service?._id}`}>
                                        <p className="text-xs text-[#00ACBD]">Details</p>
                                    </Link>
                                </div>
                            </div>
                        )
                    }

                </div>
                <Link to='/services'>
                    <button className='text-sm uppercase font-bold text-[#00ACBD] p-2 px-4 border-2 border-[#00ACBD] rounded-lg m-5 hover:bg-[#00ACBD] hover:text-white'>View More</button>
                </Link>
            </div>
        </div>
    )
}

export default HomeServices;

{/* <div className="mx-2 w-72 lg:mb-0 mb-8">
                                    <div>
                                        <img src={service?.displayImage} className="w-full h-44" />
                                    </div>
                                    <div className="bg-white">
                                        <div className="flex items-center justify-between px-4 pt-4">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                                </svg>
                                            </div>
                                            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                                <p className="text-xs text-yellow-500">Details</p>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <div className="flex items-center">
                                                <h2 className="text-lg font-semibold">{service?.title}</h2>
                                                <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                                            </div>
                                            <p className="text-xs text-gray-600 mt-2">{service?.description1?.length > 100 ? service?.description1?.slice(0, 100) + "..." : service?.description1}</p>
                                            <div className="flex mt-4">
                                                <div>
                                                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Treatment duration :<span className='pl-1 font-bold'>{service?.treatmentTime}</span></p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between py-4">
                                                <h2 className="text-indigo-700 text-xs font-semibold">{service?.clinicName}</h2>
                                                <h3 className="text-indigo-700 text-xl font-semibold">${service?.price}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}