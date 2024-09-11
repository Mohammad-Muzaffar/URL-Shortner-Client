import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { Link } from 'react-router-dom';


// Tejas ->
// Need to add generate new short url route and page and logout functionality

export const Appbar: React.FC = () => {
    const [user, setUser] = useState("");
    
    async function sendRequest() {
        try{
            const response = await axios.get(`${BACKEND_URL}/api/v1/users/user`,{
                headers: {
                    authorization: localStorage.getItem('token')
                }
            });
            setUser(response.data.userName);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        sendRequest();
    },[])

    return (
        <div className='h-16 flex items-center mx-5 justify-between'>
            <div className='h-14 w-40 flex items-center'> 
                <Link to={'/dashboard'}>
                <img src={logo} 
                    alt="logo"/>
                </Link>
            </div>
            <div className='flex gap-3 items-center'>
                <div className='flex items-center'>
                    <button type='button' className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-[10px] text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 h-10'>Generate URL</button>
                    <button type='button' className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-[10px] text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10'>Log Out</button>
                </div>
                <div className='flex items-center justify-center w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 text-base'>
                    {user ? `${user[0]}` : `U`}
                </div>
            </div>
        </div>
    )
}

