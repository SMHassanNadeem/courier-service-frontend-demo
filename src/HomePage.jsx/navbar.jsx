import { useNavigate } from "react-router-dom"

export default function Navbar() {
    const navigate = useNavigate()
    return (
        <>
            <div className="absolute top-[1vh] z-50 text-gray-100 w-[98vw] -ml-[1.4%] rounded bg-[rgb(0,0,0,0.3)] flex justify-center">
                <div className="w-306 flex justify-between px-3 py-2">
                    <div onClick={() => navigate('/')} className="cursor-pointer pl-4 text-3xl font-bold">MGS</div>
                    <div className="flex gap-2 text-md font-bold">
                        <button className="bg-gray-100 border-2 rounded-4xl! border-white! py-2 px-4 hover:border-gray-600! transition-all duration-300 ease-in-out hover:bg-gray-600! hover:text-black text-gray-600">Login</button>
                        <button className="border-2 rounded-4xl! border-yellow-200! py-2 px-4 hover:border-gray-900! transition-all duration-300 ease-in-out hover:bg-transparent! hover:text-gray-500! bg-yellow-300! text-gray-700">Sign Up</button>
                    </div>
                </div>
            </div>
            {/* ------------------- Strip Notes----------------------------------- */}
            {/* <div className="flex items-center bg-white h-5 w-screen text-xs font-bold">
                <span className="text-nowrap overflow-hidden">Deliveries maybe effected due to rains in Central & Northern regions of Pakistan. Rest assured, the weather may slow us down but it will not stop us.</span>
            </div> */}

            {/* <div className="sticky! top-0 z-50 text-white w-screen bg-black flex justify-center">
                <div className="w-306 flex justify-between px-3 py-2">
                    <div className="text-3xl font-bold">MGS</div>
                    <div className="flex gap-2 text-md font-bold">
                        <button className="border-2 rounded-4xl! border-green-900! py-2 px-4 hover:border-green-300! transition-all duration-300 ease-in-out hover:bg-green-300! hover:text-black text-green-900">Login</button>
                        <button className="border-2 rounded-4xl! border-green-300! py-2 px-4 hover:border-green-900! transition-all duration-300 ease-in-out hover:bg-black! hover:text-green-900! bg-green-300! text-black">Sign Up</button>
                    </div>
                </div>
            </div> */}
        </>
    )
}