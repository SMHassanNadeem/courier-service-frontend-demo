import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material'
import { useState } from 'react'

export default function InvoiceReport() {
    const [openMenu, setOpenMenu] = useState(false)
    const dummyData = [
        { Detail1: 500, Detail2: "Pending", Detail3: "Laptop", username: "Alice" },
        { Detail1: 900, Detail2: "Waiting", Detail3: "Headphone", username: "Alice" },
        { Detail1: 700, Detail2: "Done", Detail3: "Phone", username: "Bob" },
        { Detail1: 850, Detail2: "Pending", Detail3: "Monitor", username: "Bob" },
        { Detail1: 300, Detail2: "Canceled", Detail3: "Tablet", username: "Charlie" },
        { Detail1: 400, Detail2: "Pending", Detail3: "Keyboard", username: "David" },
        { Detail1: 650, Detail2: "Pending", Detail3: "Mouse", username: "Eve" },
        { Detail1: 750, Detail2: "Pending", Detail3: "Charger", username: "Frank" },
        { Detail1: 950, Detail2: "Pending", Detail3: "Camera", username: "Grace" },
        { Detail1: 1000, Detail2: "Pending", Detail3: "Speaker", username: "Heidi" },
    ]

    return (
        <div className=" overflow-y-scroll bg-gray-100 flex flex-col gap-4 p-2 justify-start items-start w-7/8! sm:w-3/4 h-screen">
            <div className="bg-white px-[2%] py-[2%] text-center rounded flex items-center justify-start w-full">
                <label htmlFor="search"><i className="fas fa-search text-gray-400 m-0 p-0"></i></label>
                <input id="search" className="rounded pl-2 w-full focus:outline-0 text-md! font-medium" type="search" placeholder="Search ...." />
            </div>

            <div className="flex items-center justify-between w-full">
                <h4>Invoice Report</h4>
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

            <table className="bg-white border w-full rounded-lg shadow-md">
                <thead className="text-white bg-purple-400">
                    <tr>
                        <td className="py-[2%] text-center font-semibold">Name</td>
                        <td className="py-[2%] text-center font-semibold">Detail1</td>
                        <td className="py-[2%] text-center font-semibold">Detail2</td>
                        <td className="py-[2%] text-center font-semibold">Detail3</td>
                        <td className="py-[2%] text-center font-semibold">Detail4</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        dummyData?.map((a) => (
                            <tr>
                                <td className="py-[2%] text-center">{a?.username}</td>
                                <td className="py-[2%] text-center">{a?.Detail1}</td>
                                <td className="py-[2%] text-center">{a?.Detail2}</td>
                                <td className="py-[2%] text-center">{a?.Detail3}</td>
                                <td className="py-[2%] text-center"><button className='bg-purple-400 text-white rounded p-1'>Show</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}