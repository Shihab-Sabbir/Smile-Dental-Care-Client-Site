import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function HomeServices() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services').then(res => res.json()).then(data => setServices(data)).catch(err => console.log(err))
    }, [])

    return (
        <div className="bg-gray-100 ">
            <div className='flex justify-start items-center flex-col'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

                    {
                        services?.slice(0, 3).map(service =>
                            <div key={service._id} className=" relative ">
                                <div className=" relative group">
                                    <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                    <img className=" w-[315px] h-[264px] brightness-50" src={service.displayImage} alt="" />
                                    <div className="absolute top-[15%] left-[33%] font-normal text-center text-xl leading-5 text-gray-100 md:mt-6 mt-4">
                                        <p className='max-w-[100px]' style={{ lineHeight: '25px' }}>
                                            {service?.title}
                                        </p>
                                        <hr className='border-t-4 mt-4 w-1/2 mx-auto' />
                                    </div>
                                    <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">

                                        <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 pt-[150px] w-full mt-2 text-white hover:scale-105 hover:duration-700 cursor-default">
                                            <Link className='text-center cursor-pointer' to={`/service/details/${service?._id}`}>
                                                Quick View
                                            </Link>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
                <Link to='/services'>
                    <button className='text-sm uppercase font-bold p-2 px-4 border-2 rounded-lg m-5 hover:bg-black hover:text-gray-300'>View More</button>
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