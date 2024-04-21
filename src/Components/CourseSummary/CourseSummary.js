import React from 'react';
import { Link } from 'react-router-dom';


const CourseSummary = ({ courses }) => {

    const { _id, course, picture, title, details } = courses;

    return (
        <div className="card md:w-[480px] w-[280px] bg-emerald-800 p-5 shadow-xl">
            <h2 className='md:text-2xl text-xl mb-4'>{course}</h2>
            <figure><img className=' md:w-[480px] w-[280px] md:h-[260px] h-[130px] rounded-2xl' src={picture} alt="" /></figure>
            <div className="card-body md:p-8 p-4">
                <h2 className="card-title md:text-xl text-lg">
                    Mentor: {title}

                </h2>
                <p className='md:text-base text-sm text-justify'>
                    {
                        details.length > 250 ?
                            <span>{details.slice(0, 250) + ' ...'} <Link to={`/courses/${_id}`} className=' font-bold italic'>Read more</Link></span>
                            :
                            details

                    }
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/courses/${_id}`}>
                        <button className='btn btn-neutral btn-xs sm:btn-sm md:btn-md rounded-md'>Full details</button>
                    </Link>


                </div>
            </div>
        </div >
    );
};

export default CourseSummary;