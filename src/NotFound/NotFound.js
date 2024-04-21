import React from 'react';

const NotFound = () => {

    return (
        <div className='flex flex-col text-center items-center justify-center'>
            <h1 className='text-5xl text-red-600'>404 - Not Found</h1>
            <p className='text-2xl'>The page you are looking for does not exist.</p>
        </div>
    );

};

export default NotFound;