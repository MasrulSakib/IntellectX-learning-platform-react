import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseFullContent = () => {

    const fullContent = useLoaderData();
    const { _id, course, picture, title, details } = fullContent;

    return (

        <div className="card w-[712px] mt-20 bg-emerald-800 my-4 p-4 shadow-xl gap-4">
            <h2 className='text-2xl'>{course}</h2>
            <figure><img className=' w-[712px] rounded-2xl' src={picture} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Mentor: {title}

                </h2>
                <p>
                    {details}
                </p>
                <div className="card-actions justify-end">

                    <Link to={`/enroll/${_id}`}>
                        <button className='btn btn-primary btn-xs sm:btn-sm md:btn-md rounded-md'>Enroll now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseFullContent;