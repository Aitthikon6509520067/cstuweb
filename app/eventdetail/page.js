import EventDetail from "@/components/eventdetails";
import Navbar from "@/components/navbar";

export default function Auth() {

    return (
        <div>
            <Navbar />
            <div className="min-h-screen custom-gradient flex items-center justify-center pt-20">
                <div>
                <EventDetail/>
            </div>

            </div>

        </div>

    )
};