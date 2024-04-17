import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../CourseSummary/CourseSummary';


const Courses = () => {
    // const { user } = useContext(AuthContext);
    const allCourses = useLoaderData();

    return (
        <div>
            <h2 className='mt-10 mb-6 text-2xl font-semibold'>All Courses:</h2>
            {
                allCourses.map(courses => <CourseSummary
                    key={courses._id}
                    courses={courses}
                ></CourseSummary>)
            }
        </div>

    );
};

export default Courses;