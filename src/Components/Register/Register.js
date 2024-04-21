import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import Header from '../Header/Header';
import toast from 'react-hot-toast';
import Footer from '../../Footer/Footer';

const Register = () => {

    const { createNewUser, updateUserProfile, emailVerification } = useContext(AuthContext)

    const handleCreateUser = event => {
        event.preventDefault()
        const form = event.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;

        console.log(username, email, password, photoUrl);

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateUser(username, photoUrl);
                handleUserVerification();
                toast.success("Please varify your email address");
            })

            .catch(error => {
                console.error(error);
            })


    }
    const handleUpdateUser = (username, photoUrl) => {
        const profile = {
            displayName: username,
            photoURL: photoUrl
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleUserVerification = () => {
        emailVerification()
            .then(() => { })
            .catch(error => console.error(error));
    }


    return (
        <div>
            <Header></Header>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-center">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
                        <form onSubmit={handleCreateUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="text" name='username' placeholder="your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="your photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p className='label-text-alt'>Already registered? Please<Link className="label-text-alt link link-hover text-secondary" to={'/login'}> Log In.</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Sign up</button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Register;