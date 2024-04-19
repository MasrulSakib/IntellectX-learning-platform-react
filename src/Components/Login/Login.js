import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../../Context/Context';
import Header from '../Header/Header';
import toast from 'react-hot-toast';

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const { otherSignInOption, userLogIn, setLoader } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.form?.pathname || '/';

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        userLogIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();

                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }

                else {
                    toast.error('Email address is not varified. Please varify.');
                }
            })
            .catch(error => {
                console.error(error);
            })

            .finally(() => setLoader(false));
    }

    const handleGoogleSignIn = () => {
        otherSignInOption(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => console.error(error));
    }

    const handleGithubSignIn = () => {
        otherSignInOption(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })

            .catch(error => console.error(error));
    }


    return (

        <div>
            <Header></Header>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSignIn} className="card-body">
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
                                <label>
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link><br />
                                    <p className='label-text-alt'>Didn't sign up yet? Please <Link className="label-text-alt link link-hover text-secondary" to={'/register'}>Register</Link></p>


                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                            <div className="divider">OR</div>
                            <div className='flex flex-col gap-3'>
                                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary"><FaGoogle className='text-xl'></FaGoogle>Login Via Google</button>
                                <button onClick={handleGithubSignIn} className="btn btn-outline btn-info"><FaGithub className='text-xl'></FaGithub> Login Via Github</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;