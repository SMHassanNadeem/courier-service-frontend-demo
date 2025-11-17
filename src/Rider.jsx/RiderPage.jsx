import { useEffect, useState } from "react";

export default function RiderPage() {

    const [rider, setRider] = useState([])
    useEffect(() => {
        const stored = localStorage.getItem("RiderDetails");
        if (stored) setRider(JSON.parse(stored));
    }, []);
    return (
        <>{
            rider?.map((a) => (
                <div className="flex flex-col gap-3 items-center h-[88vh] w-screen">
                    <h4 className="p-3 w-full! sm:w-170! md:w-220! lg:w-250! xl:w-300! bg-gray-200 rounded">Rider Dashboard</h4>
                    <div className="w-full! sm:w-170! md:w-220! lg:w-250! xl:w-300! flex gap-5 items-center bg-gray-200 h-[300px] rounded pl-10!">
                        <div className="w-30 h-30 rounded-full bg-blue-500 flex justify-center items-center text-white text-4xl">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="ml-5 text-gray-600">
                            <h2>{a?.RiderName}</h2>
                            <h4> <i className="fas fa-phone"></i> {a?.ContactNo}</h4>
                            <h4> <i className="fas fa-envelope"></i>{a?.EmailAddress}</h4>
                        </div>
                    </div>
                    <div className="w-full! sm:w-170! md:w-220! lg:w-250! xl:w-300! flex flex-col md:flex-row gap-2 items-center p-2 bg-gray-200 h-[300px] rounded">
                        <div className="flex flex-col gap-2 w-full md:w-1/2 h-full">
                            <div className="h-1/2 w-full bg-white text-xl text-gray-600 font-medium flex gap-3 justify-center items-center rounded">
                                <i class="fa-solid fa-motorcycle"></i>
                                <div className="flex flex-col">
                                    <div>Vehicle</div>
                                    <div>{a?.VehicleDetails}</div>
                                </div>
                            </div>
                            <div className="h-1/2 w-full bg-white text-xl text-gray-600 font-medium flex gap-3 justify-center items-center rounded">
                                <i class="fa-solid fa-id-card"></i>
                                <div className="flex flex-col">
                                    <div>License</div>
                                    <div>{a?.LicenseNo}</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-1/2 h-full">
                            <div className="flex gap-2 h-1/2 w-full">
                                <div className="flex flex-col w-1/2 justify-center items-center bg-white text-xl text-gray-600 font-medium rounded">
                                    <div>101</div>
                                    <div>Total Orders</div>
                                </div>
                                <div className="flex flex-col w-1/2 justify-center items-center bg-white text-xl text-gray-600 font-medium rounded">
                                    <div>84</div>
                                    <div>Completed</div>
                                </div>
                            </div>
                            <div className="flex gap-2 h-1/2 w-full">
                                <div className="flex flex-col w-1/2 justify-center items-center bg-white text-xl text-gray-600 font-medium rounded">
                                    <div>3</div>
                                    <div>Canceled</div>
                                </div>
                                <div className="flex flex-col w-1/2 justify-center items-center bg-white text-xl text-gray-600 font-medium rounded">
                                    <div>20</div>
                                    <div>Pending</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
        </>
    )
}