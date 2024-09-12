import { useState } from "react"


// for testing purpose
interface props {
    shortURL: string,
    orignalURL:string
}



export const Inputbox: React.FC<props> = ({shortURL, orignalURL}:props) => {

    // state variable for handling the copy materials
    const [copiedUrl, setCopiedUrl] = useState(shortURL)
    const [copyStatus, setCopyStatus] = useState(false); 

    //copy function 
    const handleCopyClick : React.MouseEventHandler<HTMLButtonElement> = async () => {
        try {
            await window.navigator.clipboard.writeText(copiedUrl);
            setCopyStatus(true);
            setTimeout(() => setCopyStatus(false), 2000);

        } catch (err) {
            console.error(
                "Unable to copy to clipboard.",
                err
            );
            alert("Copy to clipboard failed.");
        }
    };
    return (
        <>
            <div className="flex justify-center items-center m-5">
                <div className="max-w-[500px] min-w-[500px] border-solid border-2 border-[#112A46] border-opacity-20 rounded p-3">
                    <div className="relative flex items-center">
                        <input type="url"
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-stone-300 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none  hover:border-slate-300 shadow-sm focus:shadow  focus:ring-blue-500 focus:border-blue-500"
                            placeholder="https:google.com........."
                            name="orignalUrl"
                            value={copiedUrl}
                            required
                            readOnly
                        />
                        <button
                            data-tooltip-target="tooltip-click"
                            data-tooltip-trigger="click"
                            onClick={handleCopyClick}
                            className="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Copy
                        </button>
                        <div id="tooltip-click" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                {copyStatus && <p>copied!</p>}
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                    <div className="m-3">
                        <span >Redirected Url: <a className="mx-1 underline text-blue-400" href="https://www.google.com">{orignalURL}</a></span>
                    </div>
                </div>
            </div>


        </>
    )
}
