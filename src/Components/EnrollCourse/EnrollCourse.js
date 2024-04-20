import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const EnrollCourse = () => {
    const enroll = useLoaderData()


    return (
        <div>
            <Header></Header>
            <div className="text-center">
                <h1 className="text-5xl font-bold my-16">Purchase now!</h1>
            </div>
            <div className='grid grid-cols-2 container mx-auto items-center'>
                <div className="hero grid grid-cols-1 ">
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
                                    <button className="btn btn-primary">Purchase</button>
                                </div>
                                <div className="divider">OR</div>
                                <div className='flex flex-col gap-3'>
                                    <button className="btn btn-outline btn-secondary">Bkash</button>
                                    <button className="btn btn-outline btn-info">Nagad</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 items-center justify-items-center'>
                    <div className="card lg:card-side w-[740px] bg-base-100 shadow-xl">
                        <figure><img src={enroll.picture} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{enroll.course}</h2>
                            <p>Instructor: {enroll.title}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/courses/${enroll._id}`}>
                                    <button className="btn btn-primary ">Return</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrollCourse;