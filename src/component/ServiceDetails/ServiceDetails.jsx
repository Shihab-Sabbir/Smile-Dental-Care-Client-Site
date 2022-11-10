import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, Navigate, useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";
import { Helmet } from "react-helmet";
const ServiceDetails = () => {
    const [reviews, setReviews] = useState([])
    const [dataLoading, setDataLoading] = useState(true);
    const service = useLoaderData();
    const { user, updateState } = useContext(AuthContext);
    const { title, price, description1, serviceId, description2, descriptionHeader, displayImage, InsideImage, treatmentTime } = service;
    const location = useLocation();
    useEffect(() => {
        fetch(` https://assignment-11-five.vercel.app/review/${serviceId}`).then(res => res.json()).then(data => { setReviews(data); setDataLoading(false) }).catch(err => console.log(err))
    }, [updateState])

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
        <div>
            <Helmet>
                <title>Smile - Service Details</title>
            </Helmet>
            <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4 ">
                <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                    <img className="w-full dark:brightness-50" alt="" src={displayImage} />
                    <img className="mt-6 w-full dark:brightness-50" alt="" src={InsideImage} />
                </div>
                <div className="md:hidden ">
                    <img className="w-full" alt="" src={displayImage} />
                    <div className="border-b border-gray-200 pb-6 mt-3 ">
                        <p className="text-sm leading-none text-gray-600 dark:text-gray-200">Dr. Eddie Harsini</p>
                        <h1
                            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
                            dark:text-gray-200
						"
                        >
                            {title}
                            <br />
                            ${price}
                        </h1>
                    </div>
                    <button
                        className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
                        flex
                        md:hidden
						items-center
						justify-center
						leading-none
						text-white
						bg-[#00ACBD]
						w-full
						py-4
						hover:bg-gray-700
                        
					"
                    >
                        <svg className="mr-3" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.66699 4.83333V4.84166" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.333 11.5V11.5083" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Make Appointment
                    </button>
                    <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                        <img className="md:w-48 md:h-48 w-full" alt="" src={InsideImage} />
                    </div>
                </div>
                <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                    <div className="border-b border-gray-200 pb-6 md:block hidden">
                        <p className="text-sm leading-none text-gray-600 dark:text-gray-200">Dr. Eddie Harsini</p>
                        <h1
                            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
                            dark:text-gray-200
							mt-2
						"
                        >
                            {title}
                            <br />
                            <br />
                            ${price}
                        </h1>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800 dark:text-gray-200">Treatment Duration</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm font-bold leading-none text-gray-600 dark:text-gray-200">{treatmentTime}</p>
                        </div>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800 dark:text-gray-200">Success rate</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-green-400 font-bold mr-3">92%</p>
                        </div>
                    </div>
                    <button
                        className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#008693]
						text-base
                        hidden
						md:flex
						items-center
						justify-center
						leading-none
						text-white
						bg-[#00ACBD]
						w-full
						py-4
						hover:bg-[#1f7178]
                        
					"
                    >
                        <svg className="mr-3" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.66699 4.83333V4.84166" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.333 11.5V11.5083" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Make Appointment
                    </button>
                    <div>
                        <p className="text-base lg:leading-relaxed leading-normal text-gray-600  dark:text-gray-200 mt-7 text-justify">{description1}</p>
                        <p className="text-lg font-bold leading-4 mt-7 lg:mt-10 text-gray-600 dark:text-gray-200 ">{descriptionHeader}</p>
                        <p className="text-base lg:leading-relaxed leading-normal  text-gray-600 dark:text-gray-200  mt-7 text-justify">{description2}</p>
                    </div>
                </div>
            </div>
            <div className="lg:ml-[220px] my-10">
                <p className="p-5 font-bold text-2xl lg:text-3xl">Reviews</p>
                {reviews?.length === 0 && <p className="px-5 text-start uppercase font-semibold my-10">No view Yet !</p>}
                {!user?.uid && <p className="font-semibold px-5">Do you want to add review ?<br /> Please <Link to='/login' state={{ from: location }} replace className="font-bold uppercase text-[#00ACBD]">Login</Link> to add a review !</p>}
                {user?.uid && <label htmlFor="my-modal-3" className="m-5 btn bg-[#00ACBD] border-0 text-white dark:hover:bg-gray-700 text-xs">Please , add review</label>}
            </div>
            <ReviewForm title={title} serviceId={serviceId} insideImage={InsideImage} />
            {reviews?.map(review => <Review key={review._id} review={review} />)}
        </div>
    );
};

export default ServiceDetails;
