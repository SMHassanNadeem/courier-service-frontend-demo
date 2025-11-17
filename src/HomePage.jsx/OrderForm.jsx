import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material'
import { BrowserQRCodeSvgWriter } from '@zxing/browser';
import { useState, useContext, useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react';
import { Global } from "../global";

export default function OrderForm() {
    const [openMenu, setOpenMenu] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    const [openMenuAddUser, setOpenMenuAddUser] = useState(false)
    const [openMenuOrderDetail, setOpenMenuOrderDetail] = useState(false)

    const [orders, setOrders] = useState()
    useEffect(() => {
        const stored = localStorage.getItem("orders");
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

    const [formData, setFormData] = useState({
        OrderType: "Normal",
        OrderAmount: "",
        CustomerName: "",
        DeliveryCity: "",
        AirwayBillCopies: "",
        PickupCity: "",
        OrderRefrenceNumber: Date.now().toString().slice(5,13),
        OrderDate: "",
        CustomerContactNo: "",
        DeliveryAddress: "",
        PickupAddress: "",
        status: "pending"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    function addOrder(e) {
        e.preventDefault();
        setOrders([...orders, formData]);
        setFormData({
            OrderType: "Normal",
            OrderAmount: "",
            CustomerName: "",
            DeliveryCity: "",
            AirwayBillCopies: "",
            PickupCity: "",
            OrderRefrenceNumber: "",
            OrderDate: "",
            CustomerContactNo: "",
            DeliveryAddress: "",
            PickupAddress: "",
            status: "pending"
        });
        setOpenMenuAddUser(false);
    }

    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);

    const filteredData = orders?.filter((item) =>
        [
            item.CustomerName,
            item.DeliveryCity,
            item.OrderRefrenceNumber,
            item.CustomerContactNo,
            item.DeliveryAddress,
            item.status,
        ].some((field) =>
            String(field).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div className="pt-25! overflow-scroll! bg-gray-100 flex flex-col p-4 justify-start items-start w-screen h-auto">
            <div className="flex flex-col items-center text-gray-600 w-full">
                <h1>Welcome</h1>
                <h3>to Shipper Portal</h3>
                <div className="flex absolute top-20 left-150 mt-[90px] z-9 rounded">
                    <div className="rounded-full shadow-[0_0_260px_100px_rgba(34,197,94,0.8)]"></div>
                </div>
            </div>

            <div className="bg-gray-200 rounded py-3 px-3 flex items-center justify-between w-full">
                <div className='flex items-center py-2 px-7 pl-2 border border-gray-500! rounded w-[30%] h-full'>
                    <label htmlFor="search"><i className="fas fa-search text-gray-400 m-0 p-0"></i></label>
                    <input onChange={(e) => setSearchTerm(e.target.value)} id="search" className="rounded pl-2 w-[150px] sm:w-full focus:outline-0 text-md! font-medium" type="search" placeholder="Search" />
                </div>
                <button onClick={() => setOpenMenuAddUser(true)} className="w-[150px] py-2 bg-purple-400 text-white font-medium px-4 rounded text-nowrap">
                    Create Order
                </button>
                <Dialog
                    open={openMenuAddUser}
                    onClose={() => setOpenMenuAddUser(false)}
                >
                    <DialogTitle
                        sx={{
                            paddingY: "10px",
                            width: "45vw",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: 'flex-start',
                            gap: "1px",
                        }}
                    >
                        <div className="w-full flex flex-col gap-0 items-start">
                            <h3 className='text-gray-600! text-md! font-medium!' > Create Order </h3>
                            <form onSubmit={addOrder} className='w-full flex flex-col'>
                                <div className="flex gap-[5%]">
                                    <div className="w-[47.5%]">
                                        <label className='text-gray-600 text-[17px]'>Order Type:</label>
                                        <select name="OrderType" value={formData.OrderType} onChange={handleChange} className='border w-full rounded py-2 pl-3 text-[17px]! text-gray-400'>
                                            <option value="Normal">Normal</option>
                                            <option value="Express">Express</option>
                                        </select>
                                        <label className='text-gray-600 text-[17px]'>Order Amount:</label>
                                        <input required name="OrderAmount" value={formData.OrderAmount} onChange={handleChange} type="number" className='text-gray-600 border w-full rounded py-2 pl-3 text-[17px]!' placeholder='Quantity' />
                                        <label className='text-gray-600 text-[17px]'>Customer Name:</label>
                                        <input required name="CustomerName" value={formData.CustomerName} onChange={handleChange} type="text" className='text-gray-600 border w-full rounded py-2 pl-3 text-[17px]!' placeholder='Customer Name' />
                                        <label className='text-gray-600 text-[17px]'>Delivery City:</label>
                                        <input required name="DeliveryCity" value={formData.DeliveryCity} onChange={handleChange} type="text" className='text-gray-600 border w-full rounded py-2 pl-3 text-[17px]!' placeholder='Deliver City' />
                                        <label className='text-gray-600 text-[17px]'>Airway Bill Copies:</label>
                                        <input required name="AirwayBillCopies" value={formData.AirwayBillCopies} onChange={handleChange} type="number" className='text-gray-600 border w-full rounded py-2 pl-3 text-[17px]!' placeholder='Quantity' />
                                        <label className='text-gray-600 text-[17px]'>Pickup City:</label>
                                        <input required name="PickupCity" value={formData.PickupCity} onChange={handleChange} type="text" className='text-gray-600 border w-full rounded py-2 pl-3 text-[17px]!' placeholder='Pickup City' />
                                    </div>
                                    <div className="w-[47.5%]">
                                        <label className='hidden! text-gray-600 text-[17px]'>Order Refrence Number:</label>
                                        <input required className='hidden! text-gray-600 border w-full rounded py-2 pl-3 text-[17px]!' name="OrderRefrenceNumber" value={formData.OrderRefrenceNumber} onChange={handleChange} type="text" placeholder='Order ref no' />
                                        <label className='text-gray-600 text-[17px]'>Order Date:</label>
                                        <input required name="OrderDate" value={formData.OrderDate} onChange={handleChange} type="date" className='text-gray-600 border w-full rounded py-2 pl-3 text-[17px]!' placeholder='' />
                                        <label className='text-gray-600 text-[17px]'>Customer Contact No:</label>
                                        <input required name="CustomerContactNo" value={formData.CustomerContactNo} onChange={handleChange} type="text" className='text-gray-600 border w-full rounded py-2 pl-3 text-[17px]!' placeholder='Customer Contact No' />
                                        <label className='text-gray-600 text-[17px]'>Delivery Address:</label>
                                        <input required name='DeliveryAddress' value={formData.DeliveryAddress} onChange={handleChange} type="text" className='text-gray-600 border w-full rounded py-2 pl-3 text-[17px]!' placeholder='Delivery Address' />
                                        <label className='text-gray-600 text-[17px]'>Items:</label>
                                        <input required name="Items" value={formData.Items} onChange={handleChange} type="text" className='text-gray-600 border w-full rounded py-2 pl-3 text-[17px]!' placeholder='Items' />
                                        <label className='text-gray-600 text-[17px]'>Pickup Address:</label>
                                        <input required name="PickupAddress" value={formData.PickupAddress} onChange={handleChange} type="text" className='text-gray-600 border w-full rounded py-2 pl-3 text-[17px]!' placeholder='Pickup Address:' />
                                    </div>
                                </div>
                                <button type='submit' className='bg-purple-400 text-white rounded py-1 mt-[5px]!'>Add</button>
                            </form>
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
                            <td className="py-[2%] text-center text-nowrap font-semibold">Tracking Id </td>
                            <td className="py-[2%] text-center text-nowrap font-semibold">Order Date </td>
                            <td className="py-[2%] text-center text-nowrap font-semibold">Customer Contact No </td>
                            <td className="py-[2%] text-center text-nowrap font-semibold">Delivery Address </td>
                            <td className="py-[2%] text-center text-nowrap font-semibold">Confirm </td>
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
                                    <td className="py-[2%] text-center text-nowrap">
                                        <button onClick={() => { setOpenMenuOrderDetail(a?.OrderRefrenceNumber), alert("Order Confirmed") }} className='bg-blue-200 p-2 rounded'>Confirm Order</button>
                                        <Dialog
                                            open={openMenuOrderDetail === a?.OrderRefrenceNumber}
                                            onClose={() => setOpenMenuOrderDetail(false)}
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
                                                    width: "90vw",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: 'flex-start',
                                                    gap: "1px",
                                                }}
                                            >
                                                <div className='w-full flex justify-between gap-0'>
                                                    <div className="w-full flex flex-col gap-1 items-start">
                                                        <button className='bg-gray-300 rounded py-1 px-3' onClick={() => window.print()}>Print</button>
                                                        <div className="w-full flex gap-3 text-sm p-3">
                                                            <div className="flex flex-col gap-3">
                                                                <div><b>Order Type:</b>    <br />{a?.OrderType}</div>
                                                                <div><b>Order Amount:</b>  <br />{a?.OrderAmount}</div>
                                                                <div><b>Customer Name:</b> <br />{a?.CustomerName}</div>
                                                                <div><b>Delivery City:</b> <br />{a?.DeliveryCity}</div>
                                                                <div><b>Airway Bill Copies:</b> <br />{a?.AirwayBillCopies}</div>
                                                                <div><b>Pickup City:</b> <br />{a?.PickupCity}</div>
                                                            </div>

                                                            <div className="flex flex-col gap-3">
                                                                <div><b>Tracking Id:</b> <br />{a?.OrderRefrenceNumber}</div>
                                                                <div><b>Order Date:</b><br /> {a?.OrderDate}</div>
                                                                <div><b>Customer Contact No:</b> <br />{a?.CustomerContactNo}</div>
                                                                <div><b>Delivery Address:</b> <br />{a?.DeliveryAddress}</div>
                                                                <div><b>Pickup Address:</b><br /> {a?.PickupAddress}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <QRCodeSVG
                                                            className='w-[100px] h-[100px] sm:w-90 sm:h-90 md:w-110 md:h-100'
                                                            value={a?.OrderRefrenceNumber}
                                                            bgColor="#ffffff"
                                                            fgColor="#000000"
                                                            level="H"  // error correction level (L, M, Q, H)
                                                            includeMargin={true}
                                                        />
                                                    </div>
                                                </div>
                                            </DialogTitle>
                                        </Dialog>
                                    </td>
                                    <td className="py-[2%] text-center text-nowrap" style={{ color: (a?.status === "pending") ? "green" : "red" }}>{a?.status}</td>
                                </tr>
                            ))
                        )
                            :
                            <div className='ml-6'>No Result</div>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}