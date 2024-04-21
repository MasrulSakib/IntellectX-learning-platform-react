import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SidePanel = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://intellectx-server.vercel.app/categories-list')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div>
            <h2 className='text-2xl text-center font-semibold'>Categories:</h2>
            <div className='grid grid-cols-1 justify-center align-top items-start mt-6'>
                <div className='grid justify-center gap-6 align-top'>
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
            </div>
        </div>
    );
};

export default SidePanel;
