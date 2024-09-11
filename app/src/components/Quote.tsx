import { getRandomQuote, signupQuotes } from "../features/quote"

export const Quote: React.FC = () => {
    const randomQuote = getRandomQuote(signupQuotes);
    const [quote, author] = randomQuote.split('—')
    return (
        <div className="bg-stone-300 h-screen flex flex-col justify-center">
           <div className="flex justify-center">
                <div className="max-w-lg">
                    <div className="font-extrabold text-2xl">
                        {quote}
                    </div>
                    <div className="font-semibold text-xl  text-left mt-2 text-slate-800">
                         — {author}
                    </div>
                </div>
            </div> 
        </div>
    )
}