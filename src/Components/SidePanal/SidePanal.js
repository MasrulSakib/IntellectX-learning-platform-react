import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SidePanel = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories-list')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div className='flex flex-col justify-center items-center gap-6'>
            <h2 className='text-2xl text-center font-semibold'>Categories:</h2>
            {
                categories.map(category => (
                    <div key={category.id}>
                        <Link to={`/category/${category.id}`}>
                            <button className='no-underline btn btn-outline btn-secondary btn-wide rounded-lg'>
                                {category.name}
                            </button>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default SidePanel;
