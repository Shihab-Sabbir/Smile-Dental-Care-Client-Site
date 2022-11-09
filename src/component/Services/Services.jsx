import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import { Helmet } from "react-helmet";
import { PhotoView } from 'react-photo-view';
import loadingImg from '../../asset/loading.gif'
function Services() {
    const [services, setServices] = useState([]);
    const [dataLoading, setDataLoading] = useState(true)
    const { loading, setLoading } = useContext(AuthContext);
    useEffect(() => {
        fetch(' https://assignment-11-five.vercel.app/services').then(res => res.json()).then(data => { setServices(data); setDataLoading(false) }).catch(err => console.log(err))
    }, [])

    if (loading || dataLoading) {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
        return (
            <div className='flex justify-center items-center'>
                <img src={loadingImg} alt="" />
            </div>
        )
    }

    return (
        <div className="bg-transparent py-[20px]">
            <Helmet>
                <title>Explore Services</title>
            </Helmet>
            <div className="w-full lg:w-[1200px] mx-auto container">
                <div className='flex justify-start items-center flex-col'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

                        {
                            services?.map(service =>
                                <div className="mx-2 w-72 lg:mb-0 mb-8">
                                    <div>
                                        <PhotoView src={service?.displayImage}>
                                            <img src={service?.displayImage} className="w-full h-44 cursor-zoom-in dark:brightness-75" title='Click to zoom' />
                                        </PhotoView>
                                    </div>
                                    <div className="bg-white dark:bg-slate-400">
                                        <div className="flex items-center justify-between px-4 pt-4">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                                </svg>
                                            </div>
                                            <Link to={`/service/details/${service?._id}`} className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                                <p className="text-xs text-yellow-500">Details</p>
                                            </Link>
                                        </div>
                                        <div className="p-4">
                                            <div className="flex items-center min-h-[56px]">
                                                <h2 className="text-lg font-semibold dark:text-gray-300">{service?.title}</h2>
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
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;