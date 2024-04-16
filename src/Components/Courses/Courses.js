import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Context';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const { user } = useContext(AuthContext);
    const courses = useLoaderData();
    const { picture, course, title, details } = courses;

    return (
        <div>
            <h2>this is courses components of: {user.displayName}</h2>
            <div className="card w-96 bg-base-100 shadow-xl">
                <h2 className='text-2xl'>{course}</h2>
                <figure><img src={picture} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}

                    </h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;