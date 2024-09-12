import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import axios, { AxiosError } from 'axios';
import { BACKEND_URL } from '../config';
import { Link, useNavigate } from 'react-router-dom';


// Tejas ->
// Need to add generate new short url route and page and logout functionality( use localStorage.clear('token'))

export const Appbar: React.FC = () => {
    const [user, setUser] = useState("");
    const navigate = useNavigate()

    async function sendRequest() {
        try{
            const response = await axios.get(`${BACKEND_URL}/api/v1/users/user`,{
                headers: {
                    authorization: localStorage.getItem('token')
                }
            });
            if(response.status === 200){
                setUser(response.data.userName);
            }
        } catch(error: AxiosError | any){
            if(axios.isAxiosError(error)){
                console.log(error.response?.data.message);
                localStorage.clear();
                alert("Unauthorized");
                navigate('/auth/signin')
            }
        }
    }

    const logout = () =>{
        localStorage.removeItem("token");
        navigate("/auth/sigin")
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
                    <button type='button' onClick={logout} className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-[10px] text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10'>Log Out</button>
                </div>
                <div className='flex items-center justify-center w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 text-base'>
                    {user ? `${user[0]}` : `U`}
                </div>
            </div>
        </div>
    )
}

