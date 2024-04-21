import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../CourseSummary/CourseSummary';


const Courses = () => {
    // const { user } = useContext(AuthContext);
    const allCourses = useLoaderData();

    return (
        <div >
            <h2 className='mt-10 mb-6 text-2xl font-semibold'>All Courses:</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10'>
                {
                    allCourses.map(courses => <CourseSummary
                        key={courses._id}
                        courses={courses}
                    ></CourseSummary>)
                }
            </div>
        </div>

    );
};

export default Courses;