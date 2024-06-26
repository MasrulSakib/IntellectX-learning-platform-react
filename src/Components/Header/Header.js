import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    const { user, logOut, setLoader } = useContext(AuthContext)

    const handlelogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error))
            .finally(() => setLoader(false))
    }

    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="flex-1 flex justify-between">
                <Link to={'/'} className="btn btn-ghost md:text-2xl text-xl antialiased italic shadow-2xl">Intellect<span className=' text-green-500 md:text-4xl text-3xl font-bold'>X</span></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 items-center">
                    <li>
                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" className="theme-controller" value="synthwave" />

                            {/* sun icon */}
                            <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </li>

                    <li className='md:flex hidden'><Link to={'/courses'}>Courses</Link></li>

                    <div className='md:flex flex-col hidden'>
                        {
                            user?.uid ?
                                <div className='flex items-center'>
                                    <li><Link onClick={handlelogOut}>Log Out</Link></li>
                                </div>
                                :
                                <div className='flex items-center'>
                                    <li><Link to={'/login'}>Sign in</Link></li>
                                    <li><Link to={'/register'}>Sign up</Link></li>
                                </div>
                        }
                    </div>


                    <li className='md:grid hidden'>
                        {
                            user?.photoURL ?
                                <div className='tooltip tooltip-bottom tooltip-secondary' data-tip={user?.displayName}>
                                    <img className=' h-8 w-8 rounded-full' src={user?.photoURL} alt="" />
                                </div>

                                :
                                <FaUserCircle className='hidden' />

                        }
                    </li>

                    <li className='md:me-0 me-5'>
                        <details>
                            <summary>
                                More
                            </summary>
                            <ul className="p-2 bg-base-100 z-10">
                                <li className='md:hidden grid'>
                                    {
                                        user?.photoURL ?
                                            <div className='tooltip tooltip-bottom tooltip-secondary' data-tip={user?.displayName}>
                                                <img className=' h-8 w-8 rounded-full' src={user?.photoURL} alt="" />
                                            </div>

                                            :
                                            <FaUserCircle className='hidden' />

                                    }
                                </li>
                                <div className='grid md:hidden'>
                                    {
                                        user?.uid ?
                                            <div className='flex flex-col items-center'>
                                                <li><Link className='whitespace-nowrap' onClick={handlelogOut}>Log Out</Link></li>
                                            </div>
                                            :
                                            <div className='flex flex-col items-center'>
                                                <li><Link className='whitespace-nowrap' to={'/login'}>Sign in</Link></li>
                                                <li><Link className='whitespace-nowrap' to={'/register'}>Sign up</Link></li>
                                            </div>
                                    }
                                </div>
                                <li className='grid md:hidden'><Link to={'/courses'}>Courses</Link></li>
                                <li><Link>FAQ</Link></li>
                                <li><Link to={'/blog'}>Blog</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;