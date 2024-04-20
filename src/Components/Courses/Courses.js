import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../CourseSummary/CourseSummary';


const Courses = () => {
    // const { user } = useContext(AuthContext);
    const allCourses = useLoaderData();

    return (
        <div >
            <h2 className='mt-10 mb-6 text-2xl font-semibold'>All Courses:</h2>
            <div className='grid grid-cols-2 gap-20'>
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