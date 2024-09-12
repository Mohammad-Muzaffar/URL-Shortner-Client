import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { Inputbox } from "./Inputbox";

interface ResponseData {
    id: string;
    longUrl: string;
    shortUrl: string;
    creationDate: string;
    published: boolean;
    authorId: string;
}

export const PreviousUrl: React.FC = () => {
    const [previousUrl, setPreviousUrl] = useState<ResponseData[]>([]);

    const sendRequest = async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/v1/users/urls`, {
                headers: {
                    authorization: localStorage.getItem('token') || ''
                }
            });
            if (response.status === 200) {
                setPreviousUrl(response.data.urls);
            }
        } catch (error: any | AxiosError) {
            if (axios.isAxiosError(error)) {
                console.log(error.response?.data.message);
            }
        }
    };

    useEffect(() => {
        sendRequest();
    }, []);

    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-[500px] min-w-[500px] border-solid border-4 border-[#112A46] border-opacity-10 rounded p-3">
                <h2 className="text-2xl flex justify-center items-center m-3 mb-5">
                    Your Previously Generated URL's
                </h2>
                {previousUrl.length > 0 ? (
                    previousUrl.map(item => (
                        <Inputbox
                            key={item.id}
                            shortURL={item.shortUrl}
                            orignalURL={item.longUrl}
                        />
                    ))
                ) : (
                    <p>No URLs available.</p>
                )}
            </div>
        </div>
    );
};
