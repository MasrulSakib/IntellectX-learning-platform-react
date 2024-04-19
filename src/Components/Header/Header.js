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
            <div className='container mx-auto'>
                <div className="flex-1 flex justify-between">
                    <Link to={'/'} className="btn btn-ghost text-2xl antialiased italic">Intellect<span className=' text-green-500 font-bold'>X</span></Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 items-center">
                        <li><Link to={'/courses'}>Courses</Link></li>

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


                        <li>
                            {
                                user?.photoURL ?
                                    <div className='tooltip tooltip-bottom tooltip-secondary' data-tip={user?.displayName}>
                                        <img className=' h-8 w-8 rounded-full' src={user?.photoURL} alt="" />
                                    </div>

                                    :
                                    <FaUserCircle className='hidden' />

                            }
                        </li>

                        <li>
                            <details>
                                <summary>
                                    More
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li><Link >Profile</Link></li>
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