import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material'
import { useEffect, useState } from 'react'

export default function OrdersWithRider() {
    const [openMenu, setOpenMenu] = useState(false)
    const [openMenuAddUser, setOpenMenuAddUser] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");

    const [orders, setOrders] = useState()
    useEffect(() => {
        const stored = localStorage.getItem("ordersWithRider");
        if (stored) {
            try {
                setOrders(JSON.parse(stored));
            } catch {
                setOrders([]);
            }
        } else {
            setOrders([]);
        }
    }, []);

    const filteredData = orders?.filter((item) =>
        [item.CustomerName, item.DeliveryCity, item.OrderRefrenceNumber, item.CustomerContactNo, item.DeliveryAddress, item.Items, item.status]
            .some((field) =>
                String(field).toLowerCase().includes(searchTerm.toLowerCase())
            )
    );

    return (
        <div className=" overflow-y-scroll bg-gray-100 flex flex-col gap-4 p-2 justify-start items-start w-screen h-auto">
            <div className="bg-white px-[2%] py-[2%] text-center rounded flex items-center justify-start w-full">
                <label htmlFor="search"><i className="fas fa-search text-gray-400 m-0 p-0"></i></label>
                <input onChange={(e) => setSearchTerm(e.target.value)} id="search" className="rounded pl-2 w-full focus:outline-0 text-md! font-medium" type="search" placeholder="Search ...." />
            </div>

            <div className="flex items-center justify-between w-full">
                <h4>Orders With Rider</h4>
                <button onClick={() => setOpenMenu(true)} className="bg-purple-400 text-white font-bold py-1 px-4 rounded">Sort</button>
                <Dialog
                    open={openMenu}
                    onClose={() => setOpenMenu(false)}
                    sx={{
                        "& .MuiDialog-container": {
                            justifyContent: "flex-end",
                            alignItems: "stretch",
                            height: '110vh'
                        },
                    }}
                    PaperProps={{
                        sx: {
                            height: "100vh",
                            margin: 0,
                            borderRadius: 0,
                        },
                    }}
                >
                    <DialogTitle
                        sx={{
                            paddingY: "50px",
                            width: "25vw",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: 'flex-start',
                            gap: "10px",
                        }}
                    >
                        <div className="flex flex-col gap-3 items-start">
                            <button>Latest</button>
                            <button>Oldest</button>
                        </div>
                    </DialogTitle>
                </Dialog>
            </div>

            <div className='overflow-x-scroll w-full'>
                <table className="bg-white border w-full rounded-lg shadow-md">
                    <thead className="text-black border-b-2 border-black">
                        <tr>
                            <td className="py-[2%] text-center text-nowrap font-semibold">Customer Name </td>
                            <td className="py-[2%] text-center text-nowrap font-semibold">Delivery City </td>
                            <td className="py-[2%] text-center text-nowrap font-semibold">Order Refrence Number </td>
                            <td className="py-[2%] text-center text-nowrap font-semibold">Order Date </td>
                            <td className="py-[2%] text-center text-nowrap font-semibold">Customer Contact No </td>
                            <td className="py-[2%] text-center text-nowrap font-semibold">Delivery Address </td>
                            <td className="py-[2%] text-center text-nowrap font-semibold">Items </td>
                            <td className="py-[2%] text-center text-nowrap font-semibold">Status </td>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData?.length > 0 ? (
                            filteredData?.map((a) => (
                                <tr>
                                    <td className="py-[2%] text-center text-nowrap">{a?.CustomerName}</td>
                                    <td className="py-[2%] text-center text-nowrap">{a?.DeliveryCity}</td>
                                    <td className="py-[2%] text-center text-nowrap">{a?.OrderRefrenceNumber}</td>
                                    <td className="py-[2%] text-center text-nowrap">{a?.OrderDate}</td>
                                    <td className="py-[2%] text-center text-nowrap">{a?.CustomerContactNo}</td>
                                    <td className="py-[2%] text-center text-nowrap">{a?.DeliveryAddress}</td>
                                    <td className="py-[2%] text-center text-nowrap">{a?.Items}</td>
                                    <td className="py-[2%] text-center text-nowrap" style={{ color: (a?.status === "pending") ? "green" : "red" }}>{a?.status}</td>
                                </tr>
                            ))
                        )
                            :
                            <div>No Result</div>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}