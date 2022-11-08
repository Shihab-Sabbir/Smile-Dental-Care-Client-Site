import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../UserContext/UserContext';
import { AiFillStar } from 'react-icons/ai'
import EditReview from '../EditReview/EditReview';
import { useNavigate } from 'react-router-dom';
function MyReview() {
    const [reviews, setReviews] = useState([]);
    const { user, loading, updateState, setUpdateState } = useContext(AuthContext);
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:5000/review/user/${user?.uid}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('assignment-11_Token')}`
            }
        }).then(res => {
            return res.json()
        }).then(data => setReviews(data));
    }, [updateState, loading])

    const handleDelete = (id) => {
        const confirm = window.confirm('Are You Sure Deleting This Review ?');
        if (confirm) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            }).then(res => res.json()).then(data => {
                if (data.deletedCount > 0) { window.alert('succesfully deleted'); setUpdateState(!updateState); }
            });
        }
    }

    return (
        <div className='w-full lg:w-[1176px] p-2 mx-auto'>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                {(reviews?.length > 0) ? <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3  px-6 text-center">

                            </th>
                            <th scope="col" className="py-3 px-6 text-center">
                                Service
                            </th>
                            <th scope="col" className="py-3 px-6 text-center">
                                Review
                            </th>
                            <th scope="col" className="py-3 px-6 text-center">
                                Rating
                            </th>
                            <th scope="col" className="py-3 px-6 text-center">
                                Post Date
                            </th>
                            <th scope="col" className="py-3 px-2 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews?.map(review =>
                                <tr key={review._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                                    <td className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline" onClick={() => {
                                        handleDelete(review._id)
                                    }}>
                                        Remove
                                    </td>
                                    <td className="p-4 max-w-[150px] text-xs font-semibold text-center">
                                        {review.serviceName}
                                        <img className='w-[100px] h-[70px] mt-1 shadow-lg rounded-lg mx-auto' src={review.serviceImage} alt="" />
                                    </td>
                                    <td className="py-4 px-6 font-thin text-justify max-w-[150px] text-gray-900 dark:text-white">
                                        <p className='font-semibold'>{review.Reviewtitle}</p>
                                        {review.comment}
                                    </td>

                                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                        <p className='flex gap-2 justify-center items-center'>
                                            {review.rating} <AiFillStar className='text-amber-500' />
                                        </p>
                                    </td>
                                    <td className="py-4 px-6">
                                        {new Date(review.time).getHours() + ":" + new Date(review.time).getMinutes() + ", " + new Date(review.time).toDateString()}
                                    </td>
                                    <td className="py-4 px-2">
                                        <label htmlFor="my-modal-2" className="text-sm cursor-pointer text-blue-600">Edit</label>
                                        <EditReview tile={review.serviceName} Reviewtitle={review.Reviewtitle} comment={review.comment} rating={review.rating} id={review._id} />
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table> : <p className='text-center uppercase font-bold py-[150px]'>No Review found !</p>}
            </div>
        </div>
    )
}

export default MyReview;