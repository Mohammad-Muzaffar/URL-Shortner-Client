import { Quote } from "../components/Quote";
import { SignupComponent } from "../components/SignupComponent";

export const Signup: React.FC = () => {

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-6 text-[#112A46] bg-[#FEF8EC]">
                <SignupComponent />
            </div>
            <div className="col-span-6">
                <Quote />
            </div>
        </div>
    );
}