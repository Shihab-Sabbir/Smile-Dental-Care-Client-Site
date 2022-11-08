import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import app from '../../firebase/firebase.config';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';
import { useRef } from 'react';
import loginAnim from '../../asset/login.gif'
import loginAnimDark from '../../asset/loginDark.gif'
import Logout from '../Logout/Logout';
function Login() {
    const [error, setError] = useState('');
    const { setUser, setLoading, dark, user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const auth = getAuth(app);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const GoogleProvider = new GoogleAuthProvider();
    const GitHubProvider = new GithubAuthProvider();
    const userEmail = useRef();

    const jwtToken = (user) => {
        const uid = user?.uid;
        fetch('http://localhost:5000/jwt', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ uid }),
        }).then(res => res.json()).then(data => {
            if (data.token) {
                localStorage.setItem('assignment-11_Token', data.token)
                setUser(user);
                toast.success('Successfully Login');
                setError('');
                navigate(from, { replace: true });
            }

        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setLoading(true);
                jwtToken(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);
                setError(errorMessage);
            });
    }
    function handleThirdPartyLogin(provider) {
        setLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                jwtToken(user)
            }).catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
    }
    function handlePasswordReset() {
        if (userEmail.current.value)
            sendPasswordResetEmail(auth, userEmail.current.value)
                .then(() => {
                    toast.success('Password reset mail has been sent to your Email, please check inbox or spam folder');
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    toast.error(errorMessage)
                });
        else {
            toast.error('Please put your valid email address')
        }
    }

    if (loading) {
        return (
            <div role="status" className='flex justify-center items-center pt-[150px]'>
                <svg className="inline mr-2 w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    return (
        <div className='flex justify-center p-2 items-start pt-3 lg:pt-8 md:min-h-screen dark:bg-slate-500'>
            {!user?.uid && <div className='flex lg:flex-row flex-col items-center justify-evenly gap-10'>
                <div>{!dark ? <img src={loginAnim} alt="" /> : <img src={loginAnimDark} alt="" />}</div>
                <div className="w-full h-fit max-w-md p-8 space-y-3 rounded-xl bg-gradient-to-r dark:bg-gray-800 dark:text-gray-100 border dark:border-none shadow-lg dark:shadow-xl">
                    <h1 className="text-2xl text-center font-thin">Login to your account</h1>
                    <form noValidate={false} action="" className="space-y-6 ng-untouched ng-pristine ng-valid" onSubmit={handleFormSubmit}>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="Email" className="block dark:text-gray-400">Email</label>
                            <input required ref={userEmail} type="email" name="email" id="Email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                            <input required type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            <div className="flex justify-end text-xs dark:text-gray-400">
                                <button rel="noopener noreferrer" onClick={handlePasswordReset}>Forgot Password?</button>
                            </div>
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm 
                    bg-amber-500
                    dark:text-gray-900 dark:bg-violet-400  bg-gradient-to-l">Sign in</button>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button aria-label="Log in with Google" className="p-3 rounded-sm" onClick={() => { handleThirdPartyLogin(GoogleProvider) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>
                        <button aria-label="Log in with GitHub" className="p-3 rounded-sm" onClick={() => { handleThirdPartyLogin(GitHubProvider) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                        </button>
                    </div>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                        <Link rel="noopener noreferrer" to='/register' className="underline dark:text-gray-100 px-2 text-sm font-bold" type='submit'>Sign up</Link>
                    </p>
                </div>
            </div>}
            {user?.uid && <Logout />}
        </div>
    )
}

export default Login;