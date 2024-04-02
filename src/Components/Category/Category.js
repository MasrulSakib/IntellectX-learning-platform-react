import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../CourseSummary/CourseSummary';

const Category = () => {

    const categoryData = useLoaderData();
    return (
        <div>
            <h2>This is side category for courses.</h2>

            {
                categoryData.map(category => <CourseSummary
                    key={category._id}
                    category={category}>
                </CourseSummary>)
            }
        </div>
    );
};

export default Category;