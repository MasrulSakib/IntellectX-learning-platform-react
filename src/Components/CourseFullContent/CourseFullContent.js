import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseFullContent = () => {

    const fullContent = useLoaderData();
    const { _id, course, picture, title, details } = fullContent;

    return (

        <div className="card md:w-[712px] w-[356px] mt-20 bg-emerald-800 my-4 p-4 shadow-xl gap-4">
            <h2 className='md:text-2xl text-xl'>{course}</h2>
            <figure><img className=' md:w-[712px] w-[356px] rounded-2xl' src={picture} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title md:text-xl text-lg">
                    Mentor: {title}

                </h2>
                <p>
                    {details}
                </p>
                <div className="card-actions justify-end">

                    <Link to={`/enroll/${_id}`}>
                        <button className='btn btn-neutral btn-xs sm:btn-sm md:btn-md rounded-md'>Enroll now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseFullContent;