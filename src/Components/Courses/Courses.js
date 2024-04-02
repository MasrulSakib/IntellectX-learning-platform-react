import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Context';

const Courses = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2>this is courses components of: {user.displayName}</h2>
        </div>
    );
};

export default Courses;