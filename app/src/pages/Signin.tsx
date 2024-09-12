import { Quote } from "../components/Quote";
import { SigninComponent } from "../components/SigninComponent";


export const Signin: React.FC = () => {

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-6 text-[#112A46] bg-[#FEF8EC]">
                <SigninComponent />
            </div>
            <div className="col-span-6">
                <Quote />
            </div>
        </div>
    );
}