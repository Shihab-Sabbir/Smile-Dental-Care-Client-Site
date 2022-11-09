import React from 'react'
import doctor from '../../asset/images/doctor.png'
function Doctor() {
    return (
        <div className="relative flex gap-2 lg:flex-row flex-col bg-white mt-10">
            <img src={doctor} className='mx-auto' alt="Sample Page" role="img" />
            <div className='p-2'>
                <p className='text-xl lg:text-3xl mb-4 lg:mb-14'>Dr. Eddie Harsini is dedicated to the profession of dentistry and is passionate about being one of the best in his field.</p>
                <p className='text-justify lg:leading-relaxed text-lg'>
                    His commitment to continued education in the latest advancements in dental techniques and technology shows in the results he is able to help his patients achieve. Dr. Harsini has trained with some of the world’s most recognized leaders in cosmetic dentistry and holds premier certifications in implant dentistry. He works closely with patients to understand their needs and guide them through their treatments so they feel comfortable and confident that they are in good hands.
                </p>
                <div className='p-1 mt-3 lg:mt-16'>
                    <div className="border-l-2 border-l-[#00929f]">
                        <p className="pl-3 font-semibold text-[#00929f]">
                            <em>“Dr. Harsini wants to continue growing professionally. That’s why he has never stopped learning new clinical skills. He still loves what he does after all this time.”</em>
                        </p>
                        <p className="pl-3 mt-2">– Toni, Chief Operations Officer dental society</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctor;