import React from 'react'
import img1 from '../../asset/images/1.png'
import img2 from '../../asset/images/2.png'
import img3 from '../../asset/images/3.png'
function Safety() {
    return (
        <div className='py-10 border-2 border-[#03bdce]'>
            <p className='focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 pb-10'>Features</p>
            <div className='grid grid-cols-1 md:grid-cols-3 '>
                <div className='flex flex-col justify-start items-center p-3'>
                    <div className='pt-1 '>
                        <img src={img2} alt="" className='w-[100px] shadow-md mb-4 dark:bg-slate-300 shadow-[#03bdce]' />
                    </div>
                    <div className='flex flex-col justify-between items-center px-3'>
                        <p className=' text-2xl mb-2 text-[#00ACBD]'>Friendly Atmosphere</p>
                        <p className='text-justify text-lg leading-relaxed font-serif'>Dr. Eddie Harsini will treat you with care and kindness at every visit.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-center p-3'>
                    <div className='pt-1'>
                        <img src={img3} alt="" className='w-[100px] shadow-md mb-4 dark:bg-slate-300 shadow-[#03bdce]' />
                    </div>
                    <div className='flex flex-col justify-between items-center px-3'>
                        <p className=' text-2xl mb-2 text-[#00ACBD]'>Experience</p>
                        <p className='text-justify text-lg leading-relaxed font-serif'>You’ll have the advantage of a highly skilled and knowledgeable dentist supporting you in your dental health every step of the way.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-center p-3'>
                    <div className='pt-1'>
                        <img src={img1} alt="" className='w-[100px] shadow-md mb-4 dark:bg-slate-300 shadow-[#03bdce]' />
                    </div>
                    <div className='flex flex-col justify-between items-center px-3'>
                        <p className=' text-2xl mb-2 text-[#00ACBD]'>Complete Care</p>
                        <p className='text-justify text-lg leading-relaxed font-serif'>Dr. Eddie Harsini provide a full suite of dental care to cover you and your family’s oral health needs.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Safety;