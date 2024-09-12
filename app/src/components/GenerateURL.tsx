
import axios, { AxiosError } from "axios";
import { useState } from "react"
import { BACKEND_URL } from "../config";
import { Inputbox } from "./Inputbox";

interface ResponseData {
    shortURL: string,
    id: string,
    orignalURL: string,
    messsage: string
}

export const GenerateURL: React.FC = () => {
    const [url, setUrl] = useState({
        orignalUrl: ""
    });
    const [responseData, setResponseData] = useState<ResponseData>({
        shortURL: "",
        id: "",
        orignalURL: "",
        messsage: ""
    })
    
    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const {name, value} = event.target;
        setUrl(url => ({
            ...url,
            [name]: value
        })); 
    }

    const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/urls/`,url,{
                "headers": {
                    "authorization": localStorage.getItem('token')
                }
            });
            if(response.status === 200){
                setResponseData(response.data);
            }
        } catch(error: any | AxiosError){
            if(axios.isAxiosError(error)){
                if(error.response?.status === 409){
                    setResponseData(prevData => {
                        return {
                            ...prevData,
                            shortURL : error.response?.data.shortUrl,
                            orignalURL: url.orignalUrl
                        }
                    })
                } else {
                    
                }
            }
        }
    }

    return(
        <div>
            <div className="flex justify-center items-center">
                <div className="w-full max-w-[500px] min-w-[500px] border-solid border-4 border-[#112A46] border-opacity-10 rounded p-3">
                    <h2 className="text-2xl  flex justify-center items-center m-3 mb-5">Generate you're Short URL</h2>
                    <div className="relative flex items-center">
                        <input type="url" 
                               className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-stone-300 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none  hover:border-slate-300 shadow-sm focus:shadow  focus:ring-blue-500 focus:border-blue-500" 
                               placeholder="https:google.com........." 
                               name="orignalUrl"
                               value={url.orignalUrl}
                               onChange={handleOnChange}
                               required
                        />
                        <button
                        className="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        onClick={handleOnClick}
                        >
                        Generate
                        </button>
                    </div>
                    <div className="mx-3">
                        <Inputbox shortURL={responseData.shortURL} orignalURL={responseData.orignalURL} />
                    </div>
                </div>
            </div>
        </div>
    )
}