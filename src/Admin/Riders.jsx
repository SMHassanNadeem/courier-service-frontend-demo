import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material'
import { useEffect, useState } from 'react'

export default function Riders() {
    const [openMenu, setOpenMenu] = useState(false)
    const [openMenuAddUser, setOpenMenuAddUser] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    
    const [orders, setOrders] = useState([])
    useEffect(() => {
            const stored = localStorage.getItem("RiderDetails");
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
        RiderName: "",
        ContactNo: "",
        EmailAddress: "",
        VehicleDetails: "",
        LicenseNo: "",
        RiderRefrenceNumber: "rider" + Date.now().toString().slice(5, 13),
        AssignedArea: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    function addOrder(e) {
        e.preventDefault();
        setOrders([...orders, formData]);
        setFormData({
            RiderName: "",
            ContactNo: "",
            EmailAddress: "",
            VehicleDetails: "",
            LicenseNo: "",
            RiderRefrenceNumber: "",
            AssignedArea: "",
        });
        setOpenMenuAddUser(false);
    }

    useEffect(() => {
        localStorage.setItem("RiderDetails", JSON.stringify(orders));
    }, [orders]);

    const filteredData = orders?.filter((item) =>
        [
            item.ContactNo,
            item.EmailAddress,
            item.RiderRefrenceNumber,
        ].some((field) =>
            String(field).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div className=" overflow-y-scroll bg-gray-100 flex flex-col gap-4 p-2 justify-start items-start w-7/8! sm:w-3/4 h-screen">
            <div className="bg-white px-[2%] py-[2%] text-center rounded flex items-center justify-start w-full">
                <label htmlFor="search"><i className="fas fa-search text-gray-400 m-0 p-0"></i></label>
                <input onChange={(e) => setSearchTerm(e.target.value)} id="search" className="rounded pl-2 w-[150px] sm:w-full focus:outline-0 text-md! font-medium" type="search" placeholder="Search" />
                <button onClick={() => setOpenMenuAddUser(true)} className="bg-gray-200 text-gray-500 font-medium py-1 px-4 rounded text-nowrap">Add Rider</button>
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
                                    <div className="w-full">
                                        <label className='text-gray-600 text-[17px]'>Rider Name:</label>
                                        <input required name="RiderName" value={formData.RiderName} onChange={handleChange} type="text" className='text-gray-600 border w-full rounded py-2 pl-3 text-[17px]!' placeholder='Rider Name' />
                                        <label className='text-gray-600 text-[17px]'>Contact No:</label>
                                        <input required name="ContactNo" value={formData.ContactNo} onChange={handleChange} type="text" className='text-gray-600 border w-full rounded py-2 pl-3 text-[17px]!' placeholder='Contact No' />
                                        <label className='text-gray-600 text-[17px]'>Email Address:</label>
                                        <input required name="EmailAddress" value={formData.EmailAddress} onChange={handleChange} type="text" className='text-gray-600 border w-full rounded py-2 pl-3 text-[17px]!' placeholder='Email Address' />
                                        <label className='text-gray-600 text-[17px]'>Vehicle:</label>
                                        <input required name="VehicleDetails" value={formData.VehicleDetails} onChange={handleChange} type="text" className='text-gray-600 border w-full rounded py-2 pl-3 text-[17px]!' placeholder='BIKE (no-plate)' />
                                        <label className='text-gray-600 text-[17px]'>License No:</label>
                                        <input required name="LicenseNo" value={formData.LicenseNo} onChange={handleChange} type="text" className='text-gray-600 border w-full rounded py-2 pl-3 text-[17px]!' placeholder='License Number' />
                                        <label className='text-gray-600 text-[17px]'>Assigned Area:</label>
                                        <input required name="AssignedArea" value={formData.AssignedArea} onChange={handleChange} type="text" className='text-gray-600 border w-full rounded py-2 pl-3 text-[17px]!' placeholder='Assigned Area' />
                                    </div>
                                    <div className="hidden">
                                        <label className=' text-gray-600 text-[17px]'>Order Refrence Number:</label>
                                        <input required className=' text-gray-600 border w-full rounded py-2 pl-3 text-[17px]!' name="RiderRefrenceNumber" value={formData.RiderRefrenceNumber} onChange={handleChange} type="text" placeholder='Order ref no' />
                                    </div>
                                </div>
                                <button type='submit' className='bg-purple-400 text-white rounded py-1 mt-[5px]!'>Add</button>
                            </form>
                        </div>
                    </DialogTitle>
                </Dialog>
            </div>

            <div className="flex items-center justify-between w-full">
                <h4>Riders</h4>
                {/* <button onClick={() => setOpenMenu(true)} className="bg-purple-400 text-white font-bold py-1 px-4 rounded">Sort</button>
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
                </Dialog> */}
            </div>

            <div className="w-full h-auto overflow-x-scroll">
                <table className="bg-white border w-full rounded-lg shadow-md">
                <thead className="text-white bg-purple-400">
                    <tr>
                        <td className="py-[2%] text-center font-semibold">Rider Name</td>
                        <td className="py-[2%] text-center font-semibold">Contact No</td>
                        <td className="py-[2%] text-center font-semibold">Email Address</td>
                        <td className="py-[2%] text-center font-semibold">Vehicle Details</td>
                        <td className="py-[2%] text-center font-semibold">License No</td>
                        <td className="py-[2%] text-center font-semibold">Rider Id</td>
                        <td className="py-[2%] text-center font-semibold">Assigned Area</td>
                    </tr>
                </thead>
                <tbody className='text-nowrap'>
                    {
                        filteredData.length > 0 && (
                            filteredData?.map((a) => (
                            <tr>
                                <td className="py-[2%] text-center">{a?.RiderName}</td>
                                <td className="py-[2%] text-center">{a?.ContactNo}</td>
                                <td className="py-[2%] text-center">{a?.EmailAddress}</td>
                                <td className="py-[2%] text-center">{a?.VehicleDetails}</td>
                                <td className="py-[2%] text-center">{a?.LicenseNo}</td>
                                <td className="py-[2%] text-center">{a?.RiderRefrenceNumber}</td>
                                <td className="py-[2%] text-center">{a?.AssignedArea}</td>
                            </tr>
                        ))
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}