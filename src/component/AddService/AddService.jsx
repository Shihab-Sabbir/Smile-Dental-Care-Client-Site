import React from 'react'
import addServiceHeader from '../../asset/images/addServiceHeader.png'
import { Helmet } from "react-helmet";
function AddService() {
    const handleServiceAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const description1 = form.description1.value;
        const description2 = form.description2.value;
        const serviceId = form.serviceId.value;
        const treatmentTime = form.treatmentTime.value;
        const successRate = form.successRate.value;
        const descriptionHeader = form.descriptionHeader.value;
        const displayImage = form.displayImage.value;
        const InsideImage = form.InsideImage.value;
        const serviceDetails = {
            title, serviceId, price, treatmentTime, successRate, description1, description2, descriptionHeader, displayImage, InsideImage
        };
        fetch(` https://assignment-11-five.vercel.app/add-service`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(serviceDetails),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    form.reset();
                    window.alert('Service added succesfully !')
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div className='bg-transparent'>
            <Helmet>
                <title>Add New Service</title>
            </Helmet>
            <div className='w-full lg:w-[1176px] mx-auto p-2'>
                <div>
                    <img src={addServiceHeader} className='min-w-full brightness-[80%]' alt="" />
                    <p className='text-xl lg:text-3xl font-bold text-center mt-5'>New Service</p>
                </div>
                <div className='min-w-full mx-auto my-[80px] bg-transparent dark:bg-slate-800 p-3 md:p-10 lg:p-[97px]'>
                    <form onSubmit={handleServiceAdd}>
                        <div className='my-[30px] w-full'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                <input className='border border-slate-400 p-1 dark:bg-slate-700 dark:placeholder-slate-400 dark:text-slate-400  h-[60px] w-full lg:w-[461px]' required type="text" name="title" placeholder='Service Title' id="" />
                                <input className='border border-slate-400 p-1 dark:bg-slate-700 dark:placeholder-slate-400 dark:text-slate-400  h-[60px] w-full lg:w-[461px]' required type="number" name="price" placeholder='Service Price' id="" />
                                <input className='border border-slate-400 p-1 dark:bg-slate-700 dark:placeholder-slate-400 dark:text-slate-400  h-[60px] w-full lg:w-[461px]' required type="number" name="serviceId" placeholder='Service ID (1,2,3,4,5,6,7...)' id="" />
                                <input className='border border-slate-400 p-1 dark:bg-slate-700 dark:placeholder-slate-400 dark:text-slate-400  h-[60px] w-full lg:w-[461px]' required type="number" name="successRate" placeholder='Success Rate' id="" />
                                <input className='border border-slate-400 p-1 dark:bg-slate-700 dark:placeholder-slate-400 dark:text-slate-400  h-[60pxD] w-full lg:w-[461px]' required type="text" name="treatmentTime" placeholder='Treatment Time (days/months/years)' id="" />
                                <input className='border border-slate-400 p-1 dark:bg-slate-700 dark:placeholder-slate-400 dark:text-slate-400  h-[60px] w-full lg:w-[461px]' required type="text" name="descriptionHeader" placeholder='Inside Details Heading' id="" />
                                <input className='border border-slate-400 p-1 dark:bg-slate-700 dark:placeholder-slate-400 dark:text-slate-400  h-[60px] w-full lg:w-[461px]' name="displayImage" placeholder='Service Top Image URL' type="URL" />
                                <input className='border border-slate-400 p-1 dark:bg-slate-700 dark:placeholder-slate-400 dark:text-slate-400  h-[60px] w-full lg:w-[461px]' name="InsideImage" placeholder='Service Inside Image URL' type="URL" />
                            </div>
                            <textarea name="description1" placeholder='Service Details Top' id="" className='w-full h-[250px] mt-[20px] dark:bg-slate-700 dark:text-slate-400 dark:placeholder-slate-400'></textarea>
                            <textarea name="description2" placeholder='Service Details Bottom' id="" className='w-full h-[250px] my-[20px] dark:bg-slate-700 dark:text-slate-400 dark:placeholder-slate-400'></textarea>
                            <button type='submit' className='bg-[#00ACBD] text-white uppercase text-xs font-bold rounded-lg min-w-full hover:bg-slate-200 hover:text-black py-3 p-2'>Add Service</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddService;