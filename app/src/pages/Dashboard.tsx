import { Appbar } from "../components/Appbar";
import { DashboardBody } from "../components/DashboardBody";
import { Footer } from "../components/Footer";

// Add Auth Guard:

export const Dashboard: React.FC = () => {

    return (
        <div className="bg-[#FEF8EC]">
            <div className="border-solid border-2 sticky bg-[#FEF8EC] top-0 w-full bg-opacity-70">
                <Appbar />
            </div>
            <div className="text-[#112A46]">
                <DashboardBody />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}