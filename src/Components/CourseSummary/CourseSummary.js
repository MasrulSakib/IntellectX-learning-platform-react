import React from 'react';

const CourseSummary = ({ courses }) => {

    const { _id, course, picture, title, details } = courses;

    return (
        <div className="card w-[712px] bg-emerald-800 my-4 p-4 shadow-xl gap-4">
            <h2 className='text-2xl'>{course}</h2>
            <figure><img className=' w-[712px] rounded-2xl' src={picture} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Mentor: {title}

                </h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default CourseSummary;