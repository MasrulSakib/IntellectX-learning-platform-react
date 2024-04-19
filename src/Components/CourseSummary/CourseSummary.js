import React from 'react';
import { Link } from 'react-router-dom';


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
                <p>
                    {
                        details.length > 250 ?
                            <span>{details.slice(0, 250) + ' ...'} <Link className=' font-bold italic' to={`/courses/${_id}`}>Read more</Link></span>
                            :
                            details

                    }
                </p>
                <div className="card-actions justify-end">
                    <button className='btn btn-primary btn-xs sm:btn-sm md:btn-md rounded-md'>Enroll now</button>

                </div>
            </div>
        </div>
    );
};

export default CourseSummary;