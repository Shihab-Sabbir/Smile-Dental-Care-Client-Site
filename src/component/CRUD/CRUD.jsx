import React from 'react'

function CRUD() {
    const [addData, setAddData] = useState({});

    const handleDataAddition = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...data };
        newData[field] = value;
        setAddData(newData);
    }

    const handleAdd = () => {
        fetch('', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addData)
        }).then(res => res.json()).then(data => {

        }).catch(err => console.log(err))
    }

    const handleDelete = id => {
        fetch('https://reqres.in/api/posts/1',
            { method: 'DELETE' })
            .then(() => element.innerHTML = 'Delete successful');
    }
    return (
        <div>
            <form onSubmit={handleAdd}>
                <input type="text" name="name" defaultValue={data.name} onBlur={handleDataAddition} />
                <input type="text" name="email" defaultValue={data.email} onBlur={handleDataAddition} />
                <input type="text" name="address" defaultValue={data.address} onBlur={handleDataAddition} />
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}

export default CRUD;