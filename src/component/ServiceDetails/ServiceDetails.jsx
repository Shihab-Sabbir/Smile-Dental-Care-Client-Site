import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([])
    const service = useLoaderData();
    const { user, updateState } = useContext(AuthContext);
    const { title, price, clinicName, description1, serviceId, description3, descriptionHeader, displayImage, InsideImage, treatmentTime } = service;
    useEffect(() => {
        fetch(`http://localhost:5000/review/${serviceId}`).then(res => res.json()).then(data => setReviews(data)).catch(err => console.log(err))
    }, [updateState])

    return (
        <div>
            <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
                <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                    <img className="w-full" alt="" src={displayImage} />
                    <img className="mt-6 w-full" alt="" src={InsideImage} />
                </div>
                <div className="md:hidden">
                    <img className="w-full" alt="" src={displayImage} />
                    <div className="border-b border-gray-200 pb-6 mt-3">
                        <p className="text-sm leading-none text-gray-600">{clinicName}</p>
                        <h1
                            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
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
						bg-gray-800
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
                        <p className="text-sm leading-none text-gray-600">{clinicName}</p>
                        <h1
                            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
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
                        <p className="text-base leading-4 text-gray-800">Treatment Duration</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm font-bold leading-none text-gray-600">{treatmentTime}</p>
                        </div>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">Success rate</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-green-600 font-bold mr-3">92%</p>
                        </div>
                    </div>
                    <button
                        className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
                        hidden
						md:flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
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
                    <div>
                        <p className="text-base lg:leading-relaxed leading-normal text-gray-600 mt-7 text-justify">{description1}</p>
                        <p className="text-lg font-bold leading-4 mt-7 lg:mt-10 text-gray-600">{descriptionHeader}</p>
                        <p className="text-base lg:leading-relaxed leading-normal  text-gray-600 mt-7 text-justify">{description3}</p>
                    </div>
                </div>
            </div>
            <div className="lg:ml-[220px]">
                <p className="p-5 font-bold text-2xl lg:text-3xl">Reviews</p>
                {reviews?.length === 0 && <p className="px-5 text-start uppercase font-semibold">No view Yet !</p>}
                {!user?.uid && <p className="font-semibold px-5">Do you want to add review ?<br /> Please <Link to='/login' className="font-bold uppercase text-blue-500">Login</Link> First !</p>}
                {user?.uid && <label htmlFor="my-modal-3" className="m-5 btn text-xs">Please , add review</label>}
           </div>
            <ReviewForm title={title} serviceId={serviceId} />
            {reviews?.map(review => <Review key={review._id} InsideImage={InsideImage} review={review} />)}
        </div>
    );
};

export default ServiceDetails;
