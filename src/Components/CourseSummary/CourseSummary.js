import React from 'react';

const courseSummary = ({ category }) => {
    return (
        <div>
            <h2>Details: {category.length}</h2>
        </div>
    );
};

export default courseSummary;