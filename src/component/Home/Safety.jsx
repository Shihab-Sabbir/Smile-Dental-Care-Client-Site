import React from 'react'
import img1 from '../../asset/images/1.png'
import img2 from '../../asset/images/2.png'
import img3 from '../../asset/images/3.png'
import img4 from '../../asset/images/4.png'
import img5 from '../../asset/images/5.png'
import img6 from '../../asset/images/6.png'
function Safety() {
    return (
        <div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 '>
                    <div className='flex justify-between items-start p-3'>
                        <div className='pt-1'>
                            <img src={img6} alt="" className='w-[180px]' />
                        </div>
                        <div className='flex flex-col justify-between items-start px-3'>
                            <p className='font-bold text-xl mb-2'>SANITIZATION STANDARDS</p>
                            <p className='text-justify text-lg leading-relaxed font-serif'>All Delivery Riders have been trained to maintained high cleanliness standards and they carry a Kit of Mask, Hand Sanitizer, Gloves and Thermometer.</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-start p-3'>
                        <div className='pt-1'>
                            <img src={img2} alt="" className='w-[180px]' />
                        </div>
                        <div className='flex flex-col justify-between items-start px-3'>
                            <p className='font-bold text-xl mb-2'>CONTACTLESS DELIVERY</p>
                            <p className='text-justify text-lg leading-relaxed font-serif'>Every Food Package is picked up and delivered without any contact with the Home Chef and Customer. We follow a Contactless delivery policy.</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-start p-3'>
                        <div className='pt-1'>
                            <img src={img5} alt="" className='w-[180px]' />
                        </div>
                        <div className='flex flex-col justify-between items-start px-3'>
                            <p className='font-bold text-xl mb-2'>RIDER SUPERVISION</p>
                            <p className='text-justify text-lg leading-relaxed font-serif'>All the Delivery Riders are supervised daily for their temperature readings and conformity to Wearing a Mask, Hygiene and social distancing norms.</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-start p-3'>
                        <div className='pt-1'>
                            <img src={img1} alt="" className='w-[180px]' />
                        </div>
                        <div className='flex flex-col justify-between items-start px-3'>
                            <p className='font-bold text-xl mb-2'>CLEANING & SANITIZATION</p>
                            <p className='text-justify text-lg leading-relaxed font-serif'>Every Home chef ensures that hands are washed regularly every 15 minutes and their Home Kitchen is cleaned and sanitized 2 times daily.</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-start p-3'>
                        <div className='pt-1'>
                            <img src={img4} alt="" className='w-[180px]' />
                        </div>
                        <div className='flex flex-col justify-between items-start px-3'>
                            <p className='font-bold text-xl mb-2'>MASK & SOCIAL DISTANCING</p>
                            <p className='text-justify text-lg leading-relaxed font-serif'>All the Home Chefs usually don’t move of their homes. They wear a Mask and maintain social distancing of 6 Feet if they meet anyone.</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-start p-3'>
                        <div className='pt-1'>
                            <img src={img3} alt="" className='w-[180px]' />
                        </div>
                        <div className='flex flex-col justify-between items-start px-3'>
                            <p className='font-bold text-xl mb-2'>HEATHY & FRESHLY PREPARED</p>
                            <p className='text-justify text-lg leading-relaxed font-serif'>Food is freshly prepared by home chefs when they get an order. All the ingredients used are Fresh and Top quality to ensure food served is Healthy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Safety;