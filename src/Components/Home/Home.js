import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../CourseSummary/CourseSummary';

const Home = () => {

    const allCourses = useLoaderData();

    return (
        <div className='mt-10'>
            <h2 className=' font-semibold text-2xl'>All Courses : {allCourses.length}</h2>
            {
                allCourses.map(courses =>
                    <CourseSummary
                        key={courses._id}
                        courses={courses}
                    ></CourseSummary>)
            }
        </div>
    );
};

export default Home;