import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { BrowserMultiFormatReader } from "@zxing/library";

export default function RiderScanOrders() {
    const [openMenu, setOpenMenu] = useState(false)
    const [openMenuAddUser, setOpenMenuAddUser] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    const [scanning, setScanning] = useState(false);
    const [result, setResult] = useState(null);
    const videoRef = useRef(null);
    const codeReader = useRef(new BrowserMultiFormatReader());

    // -----------------------Scanner---------------------------------
    useEffect(() => {
        if (scanning) {
            startScanning();
        } else {
            stopScanning();
        }
        return () => stopScanning();
    }, [scanning]);
    const startScanning = () => {
        codeReader.current.decodeFromVideoDevice(
            null,
            videoRef.current,
            (result, err) => {
                if (result) {
                    setResult(result.getText())
                    setScanning(false)
                }
                if (err && (err.name === "NotFoundException")) {
                    console.error(err)
                }
            }
        )
    }
    const stopScanning = () => {
        codeReader.current.reset()
        const stream = videoRef.current?.srcObject;
        const tracks = stream?.getTracks();
        if (tracks) {
            tracks.forEach((tracks) => tracks.stop())
        }
        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
    }
    const handleClick = () => {
        setResult(null)
        setScanning(!scanning)
    }
    useEffect(() => {
        if (result) setSearchTerm(result);
    }, [result]);


    // -------------------Dummy API----------------------------------------
    const [ orders, setOrders ] = useState()
    useEffect(() => {
        const stored = localStorage.getItem("orders");
        if (stored) setOrders(JSON.parse(stored));
    }, []);

    // -------------------Search--------------------------------------------
    const filteredData = orders?.filter((item) =>
        [item.OrderRefrenceNumber]
            .some((field) =>
                String(field).toLowerCase().includes(searchTerm.toLowerCase())
            )
    );

    return (
        <div className="overflow-y-scroll bg-gray-100 flex flex-col gap-4 p-2 justify-start items-start w-screen h-auto">
            <div className="flex items-center justify-between w-full">
                <h4>Scan Orders</h4>
                <button
                    onClick={handleClick}
                    className="bg-purple-400 text-white font-bold py-3 px-4 rounded w-[20%]"
                >
                    Scan QR Code
                </button>
            </div>
            <div className='m-auto w-full h-full'>
                {
                    scanning && (
                        <div>
                            <video ref={videoRef} width="300" height="300" className="border" />
                        </div>
                    )
                }
                {
                    result && (
                        <>
                            <h3>Scanned Result: </h3>
                            <div className='overflow-x-scroll w-[97vw] h-auto'>
                                <table className="bg-white border w-full rounded-lg shadow-md">
                                    <thead className="text-black border-b-2 border-black">
                                        <tr>
                                            <td className="py-[2%] text-center text-nowrap font-semibold">Customer Name </td>
                                            <td className="py-[2%] text-center text-nowrap font-semibold">Delivery City </td>
                                            <td className="py-[2%] text-center text-nowrap font-semibold">Order Refrence Number </td>
                                            <td className="py-[2%] text-center text-nowrap font-semibold">Order Date </td>
                                            <td className="py-[2%] text-center text-nowrap font-semibold">Customer Contact No </td>
                                            <td className="py-[2%] text-center text-nowrap font-semibold">Delivery Address </td>
                                            <td className="py-[2%] text-center text-nowrap font-semibold">Add </td>
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
                                                        <button className='bg-gray-300 p-2 rounded' onClick={() => { alert("added");const oldData = JSON.parse(localStorage.getItem("ordersWithRider")) || []; localStorage.setItem("ordersWithRider", JSON.stringify([...oldData, ...filteredData])); setResult(null)}}>Add</button></td>
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
                            {/* <a href={result}>{result}</a> */}
                        </>
                    )
                }
            </div>

            {/* <div className="bg-white px-[2%] py-[2%] text-center rounded flex items-center justify-start w-full">
                <label htmlFor="search"><i className="fas fa-search text-gray-400 m-0 p-0"></i></label>
                <input onChange={(e) => setSearchTerm(e.target.value)} id="search" className="rounded pl-2 w-full focus:outline-0 text-md! font-medium" type="search" placeholder="Search ...." />
            </div> */}
        </div>
    )
}