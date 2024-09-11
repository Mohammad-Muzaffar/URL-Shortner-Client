import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { AppDispatch } from "../redux/store";
import { useState } from "react";
import { SignupBody } from "@muzaffarshaikh/url-shortner-common";
import { addSignUp } from "../redux/features/signupSlice";
import axios, { AxiosError } from "axios";
import { BACKEND_URL } from "../config";


export const SignupComponent: React.FC = () => {
    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch();
    const [input, setInput] = useState<SignupBody>({
        email: "",
        password: "",
        userName: ""
    });
    const [msg, setMsg] = useState("");

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const {name, value} = event.target;
        setInput(prevInput => ({
            ...prevInput,
            [name]: value
        }));
    }

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        try{
            dispatch(addSignUp(input));
            const response = await axios.post(`${BACKEND_URL}/api/v1/users/signup`, input);
            setMsg(response.data.message);
            if(response.status === 200){
                localStorage.setItem('token', response.data.token);
                setInput({
                    email: "",
                    password: "",
                    userName: ""
                })
                setTimeout(() => navigate('/dashboard'), 1000);
            }
        } catch(error: any | AxiosError){
            console.log(error);
            if(axios.isAxiosError(error)){
                setMsg(error.response?.data.message);
            }
        }
    }

    return(
        <div className="flex justify-center items-center h-full">
            <div className="border-none hover:border-solid border-2 p-4">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-extrabold font-sans">Create an Account</h2>
                    <h6 className="text-lg mt-2 font-normal text-stone-600">Already have an account <Link to={'/auth/signin'} className="underline">Login</Link></h6>
                </div>
                <div>
                    <form onSubmit={handleOnSubmit}>
                        <div className="pt-3">
                            <label className="block mb-2 text-md font-semibold text-gray-900"
                                   htmlFor="userName">Name</label>
                            <input type="text"
                                   placeholder="John Doe..."
                                   name="userName"
                                   id="userName"
                                   onChange={handleOnChange}
                                    className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required
                            /> 
                        </div>
                        <div className="pt-2">
                            <label className="block mb-2 text-md font-semibold text-gray-900"
                                   htmlFor="email">Email</label>
                            <input type="email"
                                   placeholder="john@gmail.com"
                                   name="email"
                                   id="email"
                                   onChange={handleOnChange}
                                    className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required
                            /> 
                        </div>
                        <div className="pt-2">
                            <label className="block mb-2 text-md font-semibold text-gray-900"
                                   htmlFor="password">Password</label>
                            <input type="password"
                                   placeholder="!p@ssWord"
                                   name="password"
                                   id="password"
                                   onChange={handleOnChange}
                                    className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required
                            /> 
                        </div>
                        <div className="py-4">
                        <button type="submit" 
                                className="w-full rounded-lg text-white bg-stone-800 hover:bg-stone-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold text-md px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign Up</button>
                        </div>
                    </form>
                    <div className="text-green-600 text-base flex justify-center">
                        {msg && <span>{msg}</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}