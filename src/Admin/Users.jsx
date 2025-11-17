import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material'
import { useState, useContext, useEffect } from 'react'
import { Global } from "../global";
export default function Users() {
    const [openMenu, setOpenMenu] = useState(false)

    const { orders, setOrders } = useContext(Global)
    useEffect(() => {
        const stored = localStorage.getItem("orders");
        if (stored) setOrders(JSON.parse(stored));
    }, []);

    return (
        <div className=" overflow-y-scroll bg-gray-100 flex flex-col gap-4 p-2 justify-start items-start w-7/8! sm:w-3/4 h-screen">
            <div className="bg-white px-[2%] py-[2%] text-center rounded flex items-center justify-start w-full">
                <label htmlFor="search"><i className="fas fa-search text-gray-400 m-0 p-0"></i></label>
                <input id="search" className="rounded pl-2 w-full focus:outline-0 text-md! font-medium" type="search" placeholder="Search ...." />
            </div>

            <div className="flex items-center justify-between w-full">
                <h4>Users</h4>
            </div>

            <table className="bg-white border w-full rounded-lg shadow-md">
                <thead className="text-white bg-purple-400">
                    <tr>
                        <td className="py-[2%] text-center text-nowrap font-semibold">User Name </td>
                        <td className="py-[2%] text-center text-nowrap font-semibold">Delivery City </td>
                        <td className="py-[2%] text-center text-nowrap font-semibold">Customer Contact No </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.filter(
                            (item, index, self) =>
                                index === self.findIndex((x) => x.CustomerName === item.CustomerName)
                        )?.map((a) => (
                            <tr>
                                <td className="py-[2%] text-center text-nowrap">{a?.CustomerName}</td>
                                <td className="py-[2%] text-center text-nowrap">{a?.DeliveryCity}</td>
                                <td className="py-[2%] text-center text-nowrap">{a?.CustomerContactNo}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}