import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material'
import { useState, useContext, useEffect } from 'react'
import { Global } from "../global";
export default function UnassignedOrders() {
    const [openMenu, setOpenMenu] = useState(false)

    const [orders, setOrders] = useState([])
    useEffect(() => {
        const stored = localStorage.getItem("orders");
        if (stored) setOrders(JSON.parse(stored));
    }, []);

    const [openMenuAssignRider, setOpenMenuAssignRider] = useState(false)

    const [rider, setRider] = useState([])
    useEffect(() => {
        const stored = localStorage.getItem("RiderDetails");
        if (stored) setRider(JSON.parse(stored));
    }, []);

    return (
        <div className=" overflow-y-scroll bg-gray-100 flex flex-col gap-4 p-2 justify-start items-start w-7/8! sm:w-3/4 h-screen">
            <div className="bg-white px-[2%] py-[2%] text-center rounded flex items-center justify-start w-full">
                <label htmlFor="search"><i className="fas fa-search text-gray-400 m-0 p-0"></i></label>
                <input id="search" className="rounded pl-2 w-full focus:outline-0 text-md! font-medium" type="search" placeholder="Search ...." />
            </div>

            <div className="flex items-center justify-between w-full">
                <h4>Unassigned Orders</h4>
            </div>

            <div className="w-full h-auto overflow-scroll">
                <table className="bg-white border w-full rounded-lg shadow-md">
                    <thead className="text-white bg-purple-400">
                        <tr>
                            <td className="py-[2%] text-center text-nowrap font-semibold">Customer Name </td>
                            <td className="py-[2%] text-center text-nowrap font-semibold">Delivery City </td>
                            <td className="py-[2%] text-center text-nowrap font-semibold">Order tracking Id </td>
                            <td className="py-[2%] text-center text-nowrap font-semibold">Order Date </td>
                            <td className="py-[2%] text-center text-nowrap font-semibold">Customer Contact No </td>
                            <td className="py-[2%] text-center text-nowrap font-semibold">Pickup Address </td>
                            <td className="py-[2%] text-center text-nowrap font-semibold">Assign </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((a) => (
                                <tr>
                                    <td className="py-[2%] text-center text-nowrap">{a?.CustomerName}</td>
                                    <td className="py-[2%] text-center text-nowrap">{a?.DeliveryCity}</td>
                                    <td className="py-[2%] text-center text-nowrap">{a?.OrderRefrenceNumber}</td>
                                    <td className="py-[2%] text-center text-nowrap">{a?.OrderDate}</td>
                                    <td className="py-[2%] text-center text-nowrap">{a?.CustomerContactNo}</td>
                                    <td className="py-[2%] text-center text-nowrap">{a?.PickupAddress}</td>
                                    <td className="py-[2%] text-center">
                                        <button onClick={() => setOpenMenuAssignRider(a?.OrderRefrenceNumber)} className='bg-purple-400 text-white rounded p-1'>Assign</button></td>
                                    <Dialog
                                        open={openMenuAssignRider === a?.OrderRefrenceNumber}
                                        onClose={() => setOpenMenuAssignRider(false)}
                                        PaperProps={{
                                            sx: {
                                                width: "100%",
                                                maxWidth: "none",
                                            }
                                        }}
                                    >
                                        <DialogTitle
                                            sx={{
                                                paddingY: "10px",
                                                width: "95vw",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: 'flex-start',
                                                gap: "10px",
                                            }}
                                        >
                                            <div className="w-full h-auto overflow-scroll">
                                                <table className="bg-white border w-full h-auto rounded-lg shadow-md">
                                                    <thead className="text-white bg-purple-400">
                                                        <tr>
                                                            <td className="py-[2%] text-center font-semibold">Rider Name</td>
                                                            <td className="py-[2%] text-center font-semibold">Contact No</td>
                                                            <td className="py-[2%] text-center font-semibold">Email Address</td>
                                                            <td className="py-[2%] text-center font-semibold">Vehicle Details</td>
                                                            <td className="py-[2%] text-center font-semibold">License No</td>
                                                            <td className="py-[2%] text-center font-semibold">Rider Id</td>
                                                            <td className="py-[2%] text-center font-semibold">Assigned Area</td>
                                                            <td className="py-[2%] text-center font-semibold">Assign</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody className='text-nowrap'>
                                                        {
                                                            rider?.map((b) => (
                                                                <tr>
                                                                    <td className="py-[2%] text-center">{b?.RiderName}</td>
                                                                    <td className="py-[2%] text-center">{b?.ContactNo}</td>
                                                                    <td className="py-[2%] text-center">{b?.EmailAddress}</td>
                                                                    <td className="py-[2%] text-center">{b?.VehicleDetails}</td>
                                                                    <td className="py-[2%] text-center">{b?.LicenseNo}</td>
                                                                    <td className="py-[2%] text-center">{b?.RiderRefrenceNumber}</td>
                                                                    <td className="py-[2%] text-center">{b?.AssignedArea}</td>
                                                                    <td className="py-[2%] text-center">
                                                                        <button onClick={() => {
                                                                            const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
                                                                            const updatedOrders = storedOrders.map(order =>
                                                                                order.OrderRefrenceNumber === a.OrderRefrenceNumber
                                                                                    ? { ...order, assignedTo: b.RiderRefrenceNumber }
                                                                                    : order
                                                                            );
                                                                            localStorage.setItem("orders", JSON.stringify(updatedOrders));
                                                                            setOrders(updatedOrders);
                                                                            alert(`order with tracking Id # ${a?.OrderRefrenceNumber} assigned to ${b?.RiderName}`),
                                                                            setOpenMenuAssignRider(false)
                                                                        }} >Assign</button></td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </DialogTitle>
                                    </Dialog>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}