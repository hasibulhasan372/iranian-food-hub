import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaGithub } from 'react-icons/fa';

const GithubReg = () => {
    const {githubLogIn} = useContext(AuthContext);
    const handleGithubSignIn =() =>{
        githubLogIn()
        .then(result =>{
            const githubUser = result.user;
            console.log(githubUser)
        })
        .catch(error =>{
            console.log(error)

        })
    }
    return (
        <div>
            <button onClick={handleGithubSignIn} className='flex items-center gap-2 border border-slate-500 text-white  font-semibold rounded px-4 py-2'><FaGithub></FaGithub>Github</button>
            
        </div>
    );
};

export default GithubReg;