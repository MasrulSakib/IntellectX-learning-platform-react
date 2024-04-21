import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import Header from '../Header/Header';
import { AuthContext } from '../../Context/Context';
import toast from 'react-hot-toast';
import Footer from '../../Footer/Footer';

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const { userLogIn, setLoader, otherSignInOption } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from || '/';

    const handleSignIn = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await userLogIn(email, password);
            const user = result.user;
            setError('');

            if (user.emailVerified) {
                navigate(from, { replace: true });
            } else {
                toast.error('Email address is not verified. Please verify.');
            }
        } catch (e) {
            console.error(e);
            setError(e.message);

        } finally {
            setLoader(false);
            form.reset();
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await otherSignInOption(googleProvider);
            navigate(from);
        } catch (e) {
            console.error(e);
            setError(e.message);
            toast.error(error);
        }
    };

    const handleGithubSignIn = async () => {
        try {
            await otherSignInOption(githubProvider);
            navigate(from);
        } catch (e) {
            console.error(e);
            setError(e.message);
        }
    };

    return (
        <div>
            <Header />
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold text-center">Login now!</h1>
                    </div>
                    <div className="card px-4 shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                                <p className="label-text-alt mt-4 text-center">Didn't sign up yet? Please <Link className="link link-hover text-secondary" to="/register">Register</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className="flex flex-col gap-3 mx-4 mb-6">
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary">
                                <FaGoogle className="text-xl" /> Login Via Google
                            </button>
                            <button onClick={handleGithubSignIn} className="btn btn-outline btn-info">
                                <FaGithub className="text-xl" /> Login Via Github
                            </button>
                        </div>
                        <p className=' text-red-800 mb-4 text-wrap'>{error}</p>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
