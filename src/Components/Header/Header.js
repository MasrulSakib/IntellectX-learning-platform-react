import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className='container mx-auto'>
                <div className="flex-1 flex justify-between">
                    <Link className="btn btn-ghost text-2xl antialiased italic">Intellect<span className=' text-green-500 font-bold'>X</span></Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/login'}>Sign in</Link></li>
                        <li><Link to={'/register'}>Sign up</Link></li>
                        <li>
                            <details>
                                <summary>
                                    More
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li><Link >Profile</Link></li>
                                    <li><Link>Courses</Link></li>
                                    <li><Link>FAQ</Link></li>
                                    <li><Link>Blog</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;