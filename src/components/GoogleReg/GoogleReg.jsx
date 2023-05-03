import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaGooglePlusG} from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleReg = () => {
    const {googleLogIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state ?.from ?.pathname || '/';
    const handleGoogleSignIn = () =>{
        googleLogIn()
        .then( result =>{
            const user = result.user;
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error)
        })

    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='flex items-center gap-2 border border-yellow-400 text-white font-semibold rounded px-4 py-2'><FaGooglePlusG className='text-xl'></FaGooglePlusG> Google</button>     
        </div>
    );
};

export default GoogleReg;