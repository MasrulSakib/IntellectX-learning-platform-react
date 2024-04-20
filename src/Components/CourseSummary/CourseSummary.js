import React from 'react';
import { Link } from 'react-router-dom';


const CourseSummary = ({ courses }) => {

    const { _id, course, picture, title, details } = courses;

    return (
        <div className="card w-[480px] bg-emerald-800 p-5 shadow-xl">
            <h2 className='text-2xl mb-4'>{course}</h2>
            <figure><img className=' w-[480px] h-[260px] rounded-2xl' src={picture} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Mentor: {title}

                </h2>
                <p>
                    {
                        details.length > 250 ?
                            <span>{details.slice(0, 250) + ' ...'} <Link to={`/courses/${_id}`} className=' font-bold italic'>Read more</Link></span>
                            :
                            details

                    }
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/courses/${_id}`}>
                        <button className='btn btn-primary btn-xs sm:btn-sm md:btn-md rounded-md'>Full details</button>
                    </Link>


                </div>
            </div>
        </div >
    );
};

export default CourseSummary;