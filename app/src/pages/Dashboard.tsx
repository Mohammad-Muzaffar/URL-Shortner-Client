import { Appbar } from "../components/Appbar";
import { DashboardBody } from "../components/DashboardBody";

// Add Auth Guard:

export const Dashboard: React.FC = () => {

    return (
        <div>
            <div className="border-solid border-2 fixed bg-transparent top-0 w-screen">
                <Appbar />
            </div>
            <div className="">
                <DashboardBody />
            </div>
        </div>
    );
}