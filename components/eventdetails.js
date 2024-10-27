import { GrLinkPrevious } from "react-icons/gr";
export default function EventDetail() {

    return (
        <div >
            <div>
                <div className="absolute top-14 left-10 pt-10">
                    <button className=" text-white px-4 py-2 rounded text-2xl"><GrLinkPrevious /></button>
                    <button className=" text-white px-4 py-2 rounded text-3xl font-semibold">Detail</button>

                </div>
                <div className="flex justify-center items-center h-screen">
                    <div className="mt-10 p-4 bg-transparent border border-gray-300 rounded shadow-md">
                      
                        
                        <h2 className="text-xl font-semibold"></h2>
                        <p className="mt-2"></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
