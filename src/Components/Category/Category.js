import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../CourseSummary/CourseSummary';

const Category = () => {

    const categoryData = useLoaderData();
    return (
        <div>
            <h2 className='mt-10 mb-6 font-semibold text-2xl'>Total courses in this category: {categoryData.length}</h2>
            {
                categoryData.map(courses => <CourseSummary
                    key={courses._id}
                    courses={courses}>
                </CourseSummary>)
            }
        </div>
    );
};

export default Category;