import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaGoogle} from 'react-icons/fa'

const GoogleReg = () => {
    const {googleLogIn} = useContext(AuthContext)
    const handleGoogleSignIn = () =>{
        googleLogIn()
        .then( result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error =>{
            console.log(error)
        })

    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='flex items-center gap-2 border border-yellow-400 text-white font-semibold rounded px-4 py-2'><FaGoogle></FaGoogle> Google</button>     
        </div>
    );
};

export default GoogleReg;