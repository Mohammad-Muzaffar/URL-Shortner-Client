import { GenerateURL } from "./GenerateURL"
import { PreviousUrl } from "./PreviousUrl"

export const DashboardBody: React.FC = () => {
    return(
        <div>
            <div className="mt-16 p-3">
                <GenerateURL />
            </div>
            <div className="mt-10 mx-5 p-3">
                <PreviousUrl />
            </div>
        </div>
    )
}