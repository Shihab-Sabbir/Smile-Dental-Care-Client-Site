import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Edit({ data }) {
    const [updateData, setUpdateData] = useState({});
    const navigate = useNavigate();
    const handleDataUpdate = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...data };
        newData[field] = value;
        setUpdateData(newData);
    }
    const handleUpdate = () => {
        fetch('', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData)
        }).then(res => res.json()).then(data => {
            
         }).catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={data.name} onBlur={handleDataUpdate} />
                <input type="text" name="email" defaultValue={data.email} onBlur={handleDataUpdate} />
                <input type="text" name="address" defaultValue={data.address} onBlur={handleDataUpdate} />
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}

export default Edit;