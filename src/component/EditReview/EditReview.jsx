import React, { useContext, useState } from 'react'
import { AuthContext } from '../../UserContext/UserContext';

function EditReview({ title, Reviewtitle, comment, rating, id }) {
    const { updateState, setUpdateState } = useContext(AuthContext);
    function handleReview(e) {
        e.preventDefault();
        const form = e.target;
        const Reviewtitle = form.title.value;
        const comment = form.comment.value;
        const rating = form.rating.value;
        const time = new Date().valueOf();
        const review = { Reviewtitle, comment, rating, time };
        if (rating == 0) {
            window.alert("Please select a rating");
            return;
        }
        fetch(` https://assignment-11-five.vercel.app/review/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    form.reset();
                    window.alert('review placed succesfully !');
                    setUpdateState(!updateState)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <div className="modal">
                <form className="modal-box relative" onSubmit={handleReview}>
                    <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setUpdateState(!updateState)}>✕</label>
                    <h3 className="text-lg font-bold">Review on {title}</h3>
                    <input required type="text" defaultValue={Reviewtitle} name="title" id="" className="my-4 w-full input border-0 border-b-2" placeholder='Review title' />
                    <textarea required defaultValue={comment} name='comment' className="textarea textarea-bordered rounded-none w-full" placeholder="Comment"></textarea>
                    <select required name='rating' className="select w-full border-0 rounded-none px-0 my-1" defaultValue={`${rating - 1}`}>
                        <option disabled value='0'>RATING</option>
                        <option className='text-3xl text-amber-400 ' value='5'>* * * * *</option>
                        <option className='text-3xl text-amber-400 ' value='4'>* * * *</option>
                        <option className='text-3xl text-amber-400' value='3'>* * *</option>
                        <option className='text-3xl text-amber-400 ' value='2'>* *</option>
                        <option className='text-3xl text-amber-400 ' value='1'>*</option>
                    </select>
                    <button type='submit' className='w-full p-2 border-2 text-sm font-bold bg-black hover:bg-slate-200 text-white hover:text-black shadow-lg'>SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default EditReview;