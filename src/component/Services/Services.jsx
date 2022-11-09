import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import { Helmet } from "react-helmet";
import { PhotoView } from 'react-photo-view';

function Services() {
    const [services, setServices] = useState([]);
    const { loading, setLoading } = useContext(AuthContext);
    useEffect(() => {
        fetch(' https://assignment-11-five.vercel.app/services').then(res => res.json()).then(data => setServices(data)).catch(err => console.log(err))
    }, [])

    if (loading) {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
        return (
            <div role="status" className='flex justify-center items-center pt-[150px]'>
                <Helmet>
                    <title>Explore Services</title>
                </Helmet>
                <svg className="inline mr-2 w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    return (
        <div className="bg-gray-100 py-[20px]">
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
                                            <img src={service?.displayImage} className="w-full h-44 cursor-zoom-in" title='Click to zoom' />
                                        </PhotoView>
                                    </div>
                                    <div className="bg-white">
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
                                                <h2 className="text-lg font-semibold">{service?.title}</h2>
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