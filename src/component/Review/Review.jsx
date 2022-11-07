import React, { useState } from "react";

const Review = ({ review }) => {
    const [menu, setMenu] = useState(true);
    const { Reviewtitle, comment, rating, userName, email, userImg, time } = review;
    const ratingArray = Array(rating);
    const date = new Date(time);
    const dateFormat = date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString();
    return (
        <div className="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
            <div className="w-full flex justify-start items-start flex-col bg-gray-50 p-8 lg:w-[1040px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between w-full">
                    <div className="flex flex-row justify-between items-start">
                        <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800">{Reviewtitle}</p>
                        <button onClick={() => setMenu(!menu)} className="ml-4 md:hidden">
                            <svg className={"transform " + (menu ? "rotate-180" : "rotate-0")} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 12.5L10 7.5L5 12.5" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="cursor-pointer mt-2 md:mt-0">
                        <svg width="152" height="24" viewBox="0 0 152 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {
                                ratingArray?.map((star, idx) =>
                                    <g key={idx} clipPath="url(#clip0)">
                                        <path
                                            d="M17.5598 24.4285C17.3999 24.4291 17.2422 24.3914 17.0998 24.3185L11.9998 21.6485L6.89982 24.3185C6.73422 24.4056 6.5475 24.4444 6.3609 24.4307C6.1743 24.4169 5.9953 24.3511 5.84425 24.2407C5.6932 24.1303 5.57616 23.9797 5.50644 23.8061C5.43671 23.6324 5.4171 23.4427 5.44982 23.2585L6.44982 17.6285L2.32982 13.6285C2.20128 13.5002 2.1101 13.3394 2.06605 13.1632C2.02201 12.987 2.02677 12.8022 2.07982 12.6285C2.13778 12.4508 2.2444 12.2928 2.38757 12.1726C2.53075 12.0525 2.70475 11.9748 2.88982 11.9485L8.58982 11.1185L11.0998 5.98849C11.1817 5.81942 11.3096 5.67683 11.4687 5.57706C11.6279 5.47729 11.812 5.42438 11.9998 5.42438C12.1877 5.42438 12.3717 5.47729 12.5309 5.57706C12.6901 5.67683 12.8179 5.81942 12.8998 5.98849L15.4398 11.1085L21.1398 11.9385C21.3249 11.9648 21.4989 12.0425 21.6421 12.1626C21.7852 12.2828 21.8919 12.4408 21.9498 12.6185C22.0029 12.7922 22.0076 12.977 21.9636 13.1532C21.9196 13.3294 21.8284 13.4902 21.6998 13.6185L17.5798 17.6185L18.5798 23.2485C18.6155 23.436 18.5968 23.6297 18.526 23.8069C18.4551 23.9841 18.335 24.1374 18.1798 24.2485C17.9987 24.3754 17.7807 24.4387 17.5598 24.4285V24.4285Z"
                                            fill="#1F2937"
                                        />
                                    </g>
                                )
                            }
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                                <clipPath id="clip1">
                                    <rect width="24" height="24" fill="white" transform="translate(32)" />
                                </clipPath>
                                <clipPath id="clip2">
                                    <rect width="24" height="24" fill="white" transform="translate(64)" />
                                </clipPath>
                                <clipPath id="clip3">
                                    <rect width="24" height="24" fill="white" transform="translate(96)" />
                                </clipPath>
                                <clipPath id="clip4">
                                    <rect width="24" height="24" fill="white" transform="translate(128)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className={"md:block " + (menu ? "block" : "hidden")}>
                    <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">{comment}</p>
                    <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
                        <div>
                            <img className="rounded-full" src={userImg || "https://i.ibb.co/QcqyrVG/Mask-Group.png"} alt="" />
                        </div>
                        <div className="flex flex-col justify-start items-start space-y-2">
                            <p className="text-base font-medium leading-none text-gray-800">{userName}</p>
                            <p className="text-base font-medium leading-none text-gray-800">{email}</p>
                            <p className="text-sm leading-none text-gray-600">{dateFormat}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
