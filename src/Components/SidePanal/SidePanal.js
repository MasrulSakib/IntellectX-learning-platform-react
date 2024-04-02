import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SidePanal = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/categories-list')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <h2 className='text-2xl text-center'>Categories:</h2>
            {
                categories.map(category => <p
                    key={category.id}>
                    <button className='no-underline text-white btn btn-outline btn-secondary btn-wide rounded-lg'><Link to={`/category/${category.id}`}>{category.name}</Link></button>
                </p>)
            }
        </div>
    );
};

export default SidePanal;