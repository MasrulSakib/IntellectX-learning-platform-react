import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import { FaCcMastercard } from "react-icons/fa";
import { BsCashCoin } from 'react-icons/bs';
import { FaMoneyCheckDollar } from 'react-icons/fa6';
import Footer from '../../Footer/Footer';

const EnrollCourse = () => {
    const enroll = useLoaderData()


    return (
        <div>
            <Header></Header>
            <div className="text-center">
                <h1 className="md:text-5xl text-3xl font-bold md:my-16 my-8">Purchase now!</h1>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 container mx-auto items-center'>
                <div className="hero grid md:grid-cols-1 md:order-1 order-2 ">
                    <div className="hero-content flex-col">

                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name on card</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Card Number</span>
                                    </label>
                                    <input type="password" placeholder="0000-0000-0000-0000" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-neutral"><FaCcMastercard className='text-2xl' />Purchase</button>
                                </div>
                                <div className="divider">OR</div>
                                <div className='flex flex-col gap-3'>
                                    <button className="btn btn-outline btn-secondary"><BsCashCoin className='text-2xl' />Bkash</button>
                                    <button className="btn btn-outline btn-info"><FaMoneyCheckDollar className='text-2xl' /> Nagad</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-1 items-center justify-items-center md:order-2 order-1'>
                    <div className="card md:card-side md:w-[740px] w-[320px] bg-base-100 shadow-xl">
                        <figure><img src={enroll.picture} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title md:text-xl text-lg">{enroll.course}</h2>
                            <p className=''>Instructor: {enroll.title}</p>
                            <div className=" flex items-center justify-end">
                                <Link to={`/courses/${enroll._id}`}>
                                    <button className="btn btn-neutral">Return</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EnrollCourse;