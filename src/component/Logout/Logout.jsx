import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';
import { getAuth, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import logoutAmin from '../../asset/logout.gif'
import logoutDarkAmin from '../../asset/logoutDark.gif'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function Logout() {
    const auth = getAuth(app);
    const { user, setUser, dark } = useContext(AuthContext);
    const navigate = useNavigate();
    const logOut = () => {
        signOut(auth).then(() => {
            if (user?.uid) {
                setUser(null);
                toast.success('Logout Successful');
                navigate('/login');
            }
            else {
                toast.error('No user Logged in !')
            }
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                {!dark ? <img src={logoutAmin} className='w-1/2 lg:w-1/4' alt="" />
                    : <img src={logoutDarkAmin} className='w-1/2 lg:w-1/4' alt="" />}
                <div>
                    <button type="button" className="uppercase text-xs font-bold shadow-lg p-2 rounded-md bg-black text-white dark:bg-slate-700" onClick={logOut}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Logout;