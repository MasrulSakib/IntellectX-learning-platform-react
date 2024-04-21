import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../CourseSummary/CourseSummary';

const Category = () => {

    const categoryData = useLoaderData();
    return (
        <div>
            <h2 className='mt-10 mb-6 font-semibold text-2xl'>Total courses in this category: {categoryData.length}</h2>
            <div className='grid md:grid-cols-2 justify-items-center grid-cols-1 md:gap-20'>
                {
                    categoryData.map(courses => <CourseSummary
                        key={courses._id}
                        courses={courses}>
                    </CourseSummary>)
                }
            </div>
        </div>
    );
};

export default Category;