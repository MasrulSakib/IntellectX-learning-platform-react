import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="flex-1">
                <Link className="btn btn-ghost text-2xl antialiased italic bg-black">Intellect<span className=' text-green-500'>X</span></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link to={'/register'}>Register</Link></li>
                    <li>
                        <details>
                            <summary>
                                More
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><Link >Profile</Link></li>
                                <li><Link>Link 2</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;