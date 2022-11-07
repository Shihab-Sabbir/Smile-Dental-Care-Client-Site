import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../UserContext/UserContext';

function MyReview() {
    const [reviews, setReviews] = useState([]);
    const { user, loading, updateState, setUpdateState } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/review?uid=${user?.uid}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-car-token')}`
            }
        }).then(res => res.json()).then(data => setReviews(data));
    }, [updateState, loading])

    const handleDelete = (id) => {
        const confirm = window.confirm('Are You Sure Deleting This Item ?');
        if (confirm) {
            fetch(`https://genius-car-server-psi-woad.vercel.app/orders/${id}`, {
                method: 'DELETE'
            }).then(res => res.json()).then(data => {
                console.log(data);
                setUpdateState(!updateState);
            });
        }
    }
    return (
        <div className='w-full lg:w-[1176px] p-2 mx-auto'>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                {(reviews?.length > 0) ? <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6 text-center">
                                Delete
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
                                Date
                            </th>
                            <th scope="col" className="py-3 px-6 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews?.map(order =>
                                <tr key={order._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                                    <td className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline" onClick={() => {
                                        handleDelete(order._id)
                                    }}>
                                        Remove
                                    </td>
                                    <td className="p-4 max-w-[96px]">
                                        <img src={order.img} alt="" />
                                    </td>
                                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                        {order.title}
                                    </td>

                                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                        ${order.price}
                                    </td>
                                    <td className="py-4 px-6">
                                        {order?.orderDate}
                                    </td>
                                    <td className="py-4 px-6">
                                        <p className={order?.status === 'CANCLED' ? 'p-1 bg-red-600 text-white rounded-2xl uppercase text-xs font-bold' : order?.status === 'PENDING' ? 'p-1 bg-amber-400 text-white rounded-2xl uppercase text-xs font-bold' : order?.status === 'APPROVED' ? 'p-1 bg-green-600 text-white rounded-2xl uppercase text-xs font-bold' : undefined}>{order.status}</p>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table> : <p className='text-center uppercase font-bold py-[150px]'>No orders found !</p>}
            </div>
        </div>
    )
}

export default MyReview;