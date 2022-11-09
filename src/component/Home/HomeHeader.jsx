import { Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Doctor from "./Doctor";
import loading from '../../asset/loading.gif'
function HomeHeader() {
    const [services, setServices] = useState([]);
    const [dataLoading, setDataLoading] = useState(true)
    useEffect(() => {
        fetch(' https://assignment-11-five.vercel.app/services').then(res => res.json()).then(data => { setServices(data); setDataLoading(false) }).catch(err => console.log(err))
    }, [])
    if (dataLoading) {
        return (
            <div className="flex justify-center items-center">
                <img src={loading} alt="" />
            </div>
        )
    }
    return (
        <div className="bg-transparent overflow-y-hidden py-10">
            <div className="w-full">
                <div className="relative rounded-lg bg-[#00ACBD] dark:brightness-75 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
                    <img className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg" />
                    <img className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg" />
                    <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">Feel Free to Smile</h1>
                    </div>
                </div>
                <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
                    <div className="relative sm:w-2/3 w-11/12 bg-white rounded-lg">
                        <div className="h-56 sm:h-64 xl:h-80 2xl:h-[400px] max-h-full max-w-full">
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
                {/* <div className="relative flex gap-2 lg:flex-row flex-col bg-white mt-10">
                    <img src={doctor} className='mx-auto rounded-xl' alt="Sample Page" role="img" />
                    <div>
                        <p>Dr. Eddie Harsini is dedicated to the profession of dentistry and is passionate about being one of the best in his field.</p>
                        <p>
                            His commitment to continued education in the latest advancements in dental techniques and technology shows in the results he is able to help his patients achieve. Dr. Harsini has trained with some of the world’s most recognized leaders in cosmetic dentistry and holds premier certifications in implant dentistry. He works closely with patients to understand their needs and guide them through their treatments so they feel comfortable and confident that they are in good hands.
                        </p>
                        <div className='p-1 mt-3'>
                            <div className="border border-l-[#00929f]">
                                <p className="pl-3">
                                    <em>“Dr. Harsini wants to continue growing professionally. That’s why he has never stopped learning new clinical skills. He still loves what he does after all this time.”</em>
                                </p>
                                <p className="pl-3">– Toni, Chief Operations Officer for Smile Dental Clinics</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                <Doctor />
            </div>
        </div>

    );
}

export default HomeHeader;