
export default function Footer() {

    return (
        <div className="bg-gray-700 flex justify-center text-gray-100 w-screen z-1">
            <div className="w-200 sm:w-310! h-100 flex flex-col sm:flex-row! justify-around px-10 py-30">
                <div className="flex flex-col gap-3">
                    <h4>Company Information</h4>
                    <div className="flex flex-col">
                        <p className="m-0">About Us</p>
                        <p className="m-0">Mission & Core Values</p>
                        <p className="m-0">Leadership</p>
                        <p className="m-0">Careers</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h4>Product & Services</h4>
                    <div className="flex flex-col">
                        <p className="m-0">Express</p>
                        <p className="m-0">Logistics</p>
                        <p className="m-0">Brands</p>
                        <p className="m-0">Promotions</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h4>Head Office</h4>
                    <div className="flex flex-col">
                        <p className="m-0">100-100</p>
                        <p className="m-0">ABC Road</p>
                        <p className="m-0">Karachi 00000, Pakistan</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h4>Follow Us</h4>
                    <div className="flex gap-2 text-2xl">
                        <a href="#" className="text-green-500!">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className="flex left-40 mt-[50px] z-9 rounded">
                <div className="rounded-full bg-black shadow-[0_0_160px_50px_rgba(34,197,94,0.8)]"></div>
            </div> */}
        </div>
    )
}