import React from 'react'
import tooth from '../../asset/images/tooth.png'
function HealthAdvice() {

    return (
        <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
            {/* Code block starts */}
            <dh-component>
                <section className="max-w-8xl mx-auto container bg-transparent pt-16 ">
                    <div>
                        <div role="contentinfo" className="flex items-center flex-col px-4">
                            <p tabIndex={0} className="focus:outline-none uppercase text-sm text-center text-gray-600 dark:text-gray-400 leading-4 dark:text-gray-500">Health advice section</p>
                            <h1 tabIndex={0} className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 dark:text-gray-500 lg:w-5/12 md:w-9/12 pt-4 dark:text-gray-500">Frequently Asked Questions</h1>
                        </div>
                        <div tabIndex={0} aria-label="group of cards" className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
                            <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20 ">
                                <div className="w-20 h-20 relative mr-5">
                                    <div className="absolute top-0 right-0 bg-[#03bdce31] rounded w-16 h-16 mt-2 mr-1" />
                                    <div className="absolute bottom-0 left-0 bg-[#03bdce] rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                        <img src={tooth} alt="drawer" />
                                    </div>
                                </div>
                                <div className="w-10/12">
                                    <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-tight text-gray-800 dark:text-gray-500">How often should one brush teeth ?</h2>
                                    <p tabIndex={0} className="focus:outline-none text-justify text-base text-gray-600 dark:text-gray-400 leading-normal pt-2">Brushing your teeth at least twice a day is recommended for everyone. It is especially important to brush your teeth right before going to bed. The toothbrush you use should be ADA approved with soft bristles. Electronic toothbrushes are also recommended because they are easy to use and effectively remove plaque</p>
                                </div>
                            </div>
                            <div tabIndex={0} aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                                <div className="w-20 h-20 relative mr-5">
                                    <div className="absolute top-0 right-0 bg-[#03bdce31] rounded w-16 h-16 mt-2 mr-1" />
                                    <div className="absolute text-white bottom-0 left-0 bg-[#03bdce] rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                        <img src={tooth} alt="check" />
                                    </div>
                                </div>
                                <div className="w-10/12">
                                    <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800 dark:text-gray-500">How often should one have a dental exam ?</h2>
                                    <p tabIndex={0} className="focus:outline-none text-base text-justify text-gray-600 dark:text-gray-400 leading-normal pt-2">Destist recommends you schedule a dental exam and cleaning appointment at least twice a year. Your dentist or dental hygienist may recommend more frequent visits.</p>
                                </div>
                            </div>
                            <div tabIndex={0} aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                                <div className="w-20 h-20 relative mr-5">
                                    <div className="absolute top-0 right-0 bg-[#03bdce31] rounded w-16 h-16 mt-2 mr-1" />
                                    <div className="absolute text-white bottom-0 left-0 bg-[#03bdce] rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                        <img src={tooth} alt="html tag" />
                                    </div>
                                </div>
                                <div className="w-10/12">
                                    <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800 dark:text-gray-500">Does cosmetic dentistry improve smiling ?</h2>
                                    <p tabIndex={0} className="focus:outline-none text-base text-justify text-gray-600 dark:text-gray-400 leading-normal pt-2">A smile can be the first thing a person notices about you. If you are not confident with your smile, the dentists at Smile Dental Clinics can work with you to determine what dental care and procedures would work best to improve your smile and boost your self-confidence.</p>
                                </div>
                            </div>
                            <div tabIndex={0} aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                                <div className="w-20 h-20 relative mr-5">
                                    <div className="absolute top-0 right-0 bg-[#03bdce31] rounded w-16 h-16 mt-2 mr-1" />
                                    <div className="absolute text-white bottom-0 left-0 bg-[#03bdce] rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                        <img src={tooth} alt="monitor" />
                                    </div>
                                </div>
                                <div className="w-10/12">
                                    <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800 dark:text-gray-500">Is there a way to prevent discolored teeth?</h2>
                                    <p tabIndex={0} className="focus:outline-none text-justify text-base text-gray-600 dark:text-gray-400 leading-normal pt-2">Most at-home teeth whitening systems come in a gel form that is put into a custom-fitted mouth guard (also known as a tray) that is molded to the shape of your teeth. The gel-filled trays can be worn overnight while you sleep or during the day.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </dh-component>
            {/* Code block ends */}
        </div>

    )
}

export default HealthAdvice;
