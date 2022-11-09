import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';
import loadingImg from '../asset/loading.gif'
function ProtectedRoute({ children }) {
    const { setLoading, user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
        return (
            <div className='flex justify-center items-center pt-[150px]'>
                <img src={loadingImg} alt="" />
            </div>
        )
    }
    if (!user?.uid) {
        return <Navigate to='/login' state={{ from: location }
        } replace />
    }
    if (user?.uid) {
        return children;
    }
}

export default ProtectedRoute;