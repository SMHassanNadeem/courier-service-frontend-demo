import { useNavigate } from "react-router-dom"

export default function RiderNavbar(){
    const navigate = useNavigate()
    return(
        <div className="py-2 px-2 text-white flex items-center justify-between bg-gray-600 w-full">
            <h3>MGS</h3>
            <div className="flex gap-3 pr-3">
                <button onClick={()=> navigate('/rider')} className="p-1">Dashboard</button>
                <button onClick={()=> navigate('/rider/assigned-orders')} className="p-1">Assigned Orders</button>
                <button onClick={()=> navigate('/rider/orders-with-rider')} className="p-1">Orders With Rider</button>
                <button onClick={()=> navigate('/rider/scan-orders')} className="p-1">Scan Orders</button>
                <button className="p-1">Logout</button>
            </div>
        </div>
    )
}