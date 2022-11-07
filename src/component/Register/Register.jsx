import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import toast from 'react-hot-toast';
import { AuthContext } from '../../UserContext/UserContext';
import regAnim from '../../asset/register.gif'
import regAnimDark from '../../asset/registerDark.gif'
function Register() {
    const auth = getAuth(app);
    const { setUser, setLoading,dark } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // new added , maybe needed to be removed
        const form = e.target;
        const name = form.username.value;
        const email = form.email.value;
        const photo = form.url.value;
        const password = form.password.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    auth.currentUser.photoURL = photo;
                    setUser(auth.currentUser);
                    navigate(from, { replace: true });
                    toast.success('Successfully registered');
                }).catch((error) => {
                    console.log(error)
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
    }
    return (
        <div className='p-2 dark:bg-slate-500 flex justify-center items-start pt-3 lg:pt-8 min-h-screen'>
            <div className='flex lg:flex-row flex-col items-center justify-evenly gap-10'>
                <div>{!dark ? <img src={regAnim} alt="" /> : <img src={regAnimDark} alt="" />}</div>
                <div className="w-full h-fit max-w-md p-8 space-y-3 rounded-xl bg-white bg-gradient-to-r dark:bg-gray-800 dark:text-gray-100 border dark:border-none">
                    <h1 className="text-2xl text-center font-thin">Registration Form</h1>
                    <form noValidate={false} className="space-y-6 ng-untouched ng-pristine ng-valid" onSubmit={handleFormSubmit}>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-400">Username</label>
                            <input required type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-2 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="Email" className="block dark:text-gray-400">Email</label>
                            <input required type="email" name="email" id="Email" placeholder="Email" className="w-full px-4 py-2 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="Photo URL" className="block dark:text-gray-400">Photo URL</label>
                            <input required type="URL" name="url" id="Photo URL" placeholder="Photo URL" className="w-full px-4 py-2 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                            <input required type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-2 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm 
                    bg-amber-500
                    dark:text-gray-900 dark:bg-violet-400  bg-gradient-to-l" type='submit'>Sign up</button>
                    </form>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                        <Link rel="noopener noreferrer" to='/login' className="underline dark:text-gray-100 px-2 text-sm font-bold">Log in</Link>
                    </p>
                </div>
          </div>
        </div>
    )
}

export default Register;