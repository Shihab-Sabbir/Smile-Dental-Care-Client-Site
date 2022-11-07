import React, { useContext, useState } from 'react'
import { AuthContext } from '../../UserContext/UserContext';

function ReviewForm({ title, setUpdateState }) {
    const { user } = useContext(AuthContext);
    function handleReview(e) {
        e.preventDefault();
        const form = e.target;
        const Reviewtitle = form.title.value;
        const comment = form.comment.value;
        const rating = form.rating.value;
        const time = new Date().valueOf();
        const review = { Reviewtitle, comment, rating, user: user?.uid, time };
        console.log(review);
        fetch(`https://genius-car-server-psi-woad.vercel.app/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    form.reset();
                    window.alert('review placed succesfully !');
                    setUpdateState(!updateState)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}
return (
    <div>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
            <form className="modal-box relative" onSubmit={handleReview}>
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">Review on {title}</h3>
                <input type="text" name="title" id="" className="my-4 w-full input border-0 border-b-2" placeholder='Review title' />
                <textarea name='comment' className="textarea textarea-bordered rounded-none w-full" placeholder="Comment"></textarea>
                <select name='rating' className="select w-full border-0 rounded-none px-0 my-1">
                    <option disabled selected>RATING</option>
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

export default ReviewForm;