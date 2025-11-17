import { useNavigate } from "react-router-dom";
import CarouselFunction from "./carousel";

export default function Section1() {
    const navigate = useNavigate()
    return (
        <>
            {/* ------------------- Carousel ----------------------------------- */}
            <CarouselFunction />

            {/* ------------------- Search----------------------------------- */}
            <div className="flex-col top-[35vh] text-gray-300 text-center! sm:text-justify! w-[300px]! sm:w-[500px]! md:w-[700px]! lg:w-[900px]! flex sm:items-start! items-center! text-lg absolute z-10">
                {/* <input className="pl-3 border border-black bg-[rgba(255,255,255,0.4)] w-50 sm:w-80! lg:w-120! h-12" placeholder="Enter Your Tracking Number" type="text" />
                <button type="submit" className="bg-red-600 text-white text-sm! px-4" >Track Shipment</button> */}
                <h1 className="font-bold">GET INSTANT ACCESS <br /> TO <b className="text-gray-100">GROWTH CAPITAL</b></h1>
                <button onClick={() => navigate('/order-form')} className="w-40 border-2 rounded-4xl! border-gray-100! py-2 px-4 hover:border-gray-600! transition-all duration-300 ease-in-out hover:bg-gray-600! hover:text-black text-gray-300 bg-[rgb(0,0,0,0.5)]">Get Started</button>
            </div>

            {/* -------------------- Buttons -------------------------------- */}
            {/* <div className="flex absolute top-[70vh] z-9 bg-gray-200 rounded">
                <div onClick={()=> navigate('/order-form')} className="cursor-pointer flex flex-col items-center gap-2 border w-40 sm:w-55! shadow-2xl shadow-black/30 hover:shadow py-4 rounded">
                    <img className="w-10 h-10" src="https://www.tcsexpress.com/Home/KeyFeatures/tcskardo.svg" alt="" />
                    <div>Place Order</div>
                </div>
                <div onClick={()=> navigate('/order-form')} className="cursor-pointer flex flex-col items-center gap-2 border w-40 sm:w-55! shadow-2xl shadow-black/30 hover:shadow py-4 rounded">
                    <img className="w-10 h-10" src="https://www.tcsexpress.com/Home/KeyFeatures/pickup-icon-5.svg" alt="" />
                    <div>Track Order</div>
                </div>
            </div> */}

            {/* -------------------- Products and Services -------------------------------- */}
            <div className="flex flex-col items-center gap-9 mt-50 m-9">
                <h1 className="font-extrabold! text-blue-900! uppercase">Products and Services</h1>

                <div className="w-25 h-3 rounded-2xl bg-gray-400"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center gap-2 border w-55 shadow-2xl shadow-black/30 hover:shadow py-4 rounded">
                        <img className="w-10 h-10" src="https://www.tcsexpress.com/Home/KeyFeatures/pickup-icon-5.svg" alt="" />
                        <div>Schedule a Pickup</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 border w-55 shadow-2xl shadow-black/30 hover:shadow py-4 rounded">
                        <img className="w-10 h-10" src="https://www.tcsexpress.com/Home/KeyFeatures/pickup-icon-5.svg" alt="" />
                        <div>Schedule a Pickup</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 border w-55 shadow-2xl shadow-black/30 hover:shadow py-4 rounded">
                        <img className="w-10 h-10" src="https://www.tcsexpress.com/Home/KeyFeatures/pickup-icon-5.svg" alt="" />
                        <div>Schedule a Pickup</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 border w-55 shadow-2xl shadow-black/30 hover:shadow py-4 rounded">
                        <img className="w-10 h-10" src="https://www.tcsexpress.com/Home/KeyFeatures/pickup-icon-5.svg" alt="" />
                        <div>Schedule a Pickup</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 border w-55 shadow-2xl shadow-black/30 hover:shadow py-4 rounded">
                        <img className="w-10 h-10" src="https://www.tcsexpress.com/Home/KeyFeatures/pickup-icon-5.svg" alt="" />
                        <div>Schedule a Pickup</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 border w-55 shadow-2xl shadow-black/30 hover:shadow py-4 rounded">
                        <img className="w-10 h-10" src="https://www.tcsexpress.com/Home/KeyFeatures/pickup-icon-5.svg" alt="" />
                        <div>Schedule a Pickup</div>
                    </div>
                </div>
            </div>

            {/* -------------------- History -------------------------------- */}
            <div className="flex justify-center w-screen bg-gray-200">
                <div className="flex flex-col items-center gap-9 m-9 w-200">
                    <h1 className="font-extrabold! text-blue-900! uppercase">Master Global Services</h1>

                    <div className="w-25 h-3 rounded-2xl bg-gray-400"></div>

                    <div className="text-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem ut quasi ducimus est maiores totam vel, deserunt minus expedita delectus facilis! Rem aut vel veniam placeat. Explicabo debitis odit totam repellat possimus alias modi eius incidunt maiores! Ipsam nemo beatae iusto voluptatum sit in temporibus facere praesentium ullam incidunt!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, eaque dolorum! Praesentium rerum quaerat natus non fuga delectus quam nam velit ea, culpa error quibusdam repudiandae quidem? Delectus ducimus corrupti quis assumenda culpa a expedita porro deleniti distinctio iusto necessitatibus sapiente corporis ipsa at nobis, quia quam praesentium soluta eligendi. Esse voluptate consequatur labore molestiae quaerat explicabo sapiente temporibus porro.</p>
                    </div>
                </div>
            </div>

            {/* -------------------- At a Glance -------------------------------- */}
            <div className="flex justify-center w-screen" style={{ backgroundImage: `url('	https://www.tcsexpress.com/Home/TrustALeaderBG.png')` }}>
                <div className="flex flex-col items-center gap-9 m-9 w-200">
                    <h1 className="font-extrabold! text-blue-900! uppercase">At a Glance</h1>

                    <div className="w-25 h-3 rounded-2xl bg-gray-400"></div>

                    <div className="">
                        <img src="https://www.tcsexpress.com/Home/At%20a%20glance.jpg" alt="" />
                    </div>
                </div>
            </div>

            {/* -------------------- Customer Support -------------------------------- */}
            <div className="flex flex-col md:flex-row justify-center items-center w-screen">
                <div className="flex gap-3">
                    <div className="flex flex-col gap-3 py-10 -mt-5">
                        <img className="w-55" src="https://www.tcsexpress.com/Home/support3.png" alt="" />
                        <img className="w-55" src="https://www.tcsexpress.com/Home/customersupport1.jpg" alt="" />
                    </div>
                    <div className="flex flex-col gap-3 py-10 mt-5s">
                        <img className="w-55" src="https://www.tcsexpress.com/Home/support2.png" alt="" />
                        <img className="w-55" src="https://www.tcsexpress.com/Home/customersupport2.jpg" alt="" />
                    </div>
                </div>
                <div className="flex flex-col items-start gap-9 m-9 w-90 sm:w-110!">
                    <h1 className="font-extrabold! text-blue-900! uppercase">Customer Support</h1>
                    <div className="w-25 h-3 rounded-2xl bg-gray-400"></div>
                    <div className="text-justify">
                        <p>With the aim to do better everyday, and to be able to add greater value to our customers' lives, we have an extensive network of call centres, a WhatsApp response systems, along with a highly motivated social media team, so we can respond to your queries, inputs, and complaints better.</p>
                        <button className="bg-gray-400 text-white px-3 py-1 rounded cursor-pointer">Contact Us</button>
                    </div>
                </div>
            </div>
        </>
        // <div className="w-[300px] sm:w-[700px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] h-full">
        //     <div className="flex justify-center w-full">
        //         {/* ------------------- Side Details and Button ----------------------------------- */}
        //         <div className="mt-40 w-[70%] md:w-1/2 flex flex-col text-lg text-white">
        //             <h1>Get Instant Access <br /> To <b className="text-green-400">Growth Capital</b></h1>
        //             <h4 className="w-full text-gray-400!">Unlock the full potential of your business with PostEx. and scale without limits.</h4>
        //             <button onClick={() => navigate('/order-form')} className="border-2 rounded-4xl! border-green-900! py-2 px-4 hover:border-green-300! transition-all duration-300 ease-in-out hover:bg-green-300! hover:text-black text-green-900 w-1/2 h-15 mt-3 font-bold">Get Started</button>
        //         </div>
        //         <div className="flex absolute top-[3vh] left-40 mt-[50px] z-9 rounded">
        //             <div className="rounded-full bg-black shadow-[0_0_160px_100px_rgba(34,197,94,0.8)]"></div>
        //         </div>

        //         {/* ------------------- Carousel ----------------------------------- */}
        //         <CarouselFunction />
        //     </div>

        //     {/* -------------------- Products and Services -------------------------------- */}
        //     <div className="flex flex-col items-center gap-9 mt-50 m-9 text-white bg-black">
        //         <h1 className="text-nowrap">Products and Services</h1>

        //         <div className="w-25 h-3 rounded-2xl bg-green-500"></div>

        //         <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
        //             <div className="flex flex-col items-center gap-2 border w-55 shadow-2xl shadow-black/30 hover:shadow py-4 rounded">
        //                 <img className="w-10 h-10" src="https://www.tcsexpress.com/Home/KeyFeatures/pickup-icon-5.svg" alt="" />
        //                 <div>Schedule a Pickup</div>
        //             </div>
        //             {/* <div className="flex flex-col items-center gap-2 border w-55 shadow-2xl shadow-black/30 hover:shadow py-4 rounded">
        //                 <img className="w-10 h-10" src="https://www.tcsexpress.com/Home/KeyFeatures/pickup-icon-5.svg" alt="" />
        //                 <div>Schedule a Pickup</div>
        //             </div>
        //             <div className="flex flex-col items-center gap-2 border w-55 shadow-2xl shadow-black/30 hover:shadow py-4 rounded">
        //                 <img className="w-10 h-10" src="https://www.tcsexpress.com/Home/KeyFeatures/pickup-icon-5.svg" alt="" />
        //                 <div>Schedule a Pickup</div>
        //             </div>
        //             <div className="flex flex-col items-center gap-2 border w-55 shadow-2xl shadow-black/30 hover:shadow py-4 rounded">
        //                 <img className="w-10 h-10" src="https://www.tcsexpress.com/Home/KeyFeatures/pickup-icon-5.svg" alt="" />
        //                 <div>Schedule a Pickup</div>
        //             </div>
        //             <div className="flex flex-col items-center gap-2 border w-55 shadow-2xl shadow-black/30 hover:shadow py-4 rounded">
        //                 <img className="w-10 h-10" src="https://www.tcsexpress.com/Home/KeyFeatures/pickup-icon-5.svg" alt="" />
        //                 <div>Schedule a Pickup</div>
        //             </div>
        //             <div className="flex flex-col items-center gap-2 border w-55 shadow-2xl shadow-black/30 hover:shadow py-4 rounded">
        //                 <img className="w-10 h-10" src="https://www.tcsexpress.com/Home/KeyFeatures/pickup-icon-5.svg" alt="" />
        //                 <div>Schedule a Pickup</div>
        //             </div> */}
        //         </div>
        //     </div>

        //     {/* -------------------- History -------------------------------- */}
        //     <div className="flex justify-center w-full bg-black text-white glance">
        //         <div className="flex flex-col items-center gap-9 m-9 w-200">
        //             <h1 className="text-nowrap">Master Global Courier</h1>

        //             <div className="w-25 h-3 rounded-2xl bg-green-500"></div>

        //             <div className="text-center">
        //                 <p>In 1983, with twelve Express Centres and twenty-five shipments is where it started for TCS. Now with a network of more than 1,000 retail centres in the country, serving customers 24-hours a day, Express operation is the bedrock of TCS products and services. Five different classes of TCS Express Centres, including COCO, Franchised, Shop-in-Shop, Agents and IBRS, serve as a one-stop-shop for our customers.</p>
        //                 <p>In 1983, with twelve Express Centres and twenty-five shipments is where it started for TCS. Now with a network of more than 1,000 retail centres in the country, serving customers 24-hours a day, Express operation is the bedrock of TCS products and services. Five different classes of TCS Express Centres, including COCO, Franchised, Shop-in-Shop, Agents and IBRS, serve as a one-stop-shop for our customers.</p>
        //             </div>
        //         </div>
        //     </div>

        //     {/* -------------------- At a Glance -------------------------------- */}
        //     <div className="flex justify-center w-full glance text-white">
        //         <div className="flex flex-col items-center gap-9 m-9 w-full">
        //             <h1>At a Glance</h1>

        //             <div className="w-25 h-3 rounded-2xl bg-green-500"></div>

        //             <div>
        //                 <img src="https://www.tcsexpress.com/Home/At%20a%20glance.jpg" alt="" />
        //             </div>
        //         </div>
        //     </div>

        //     {/* -------------------- Customer Support -------------------------------- */}
        //     <div className="text-white flex flex-col md:flex-row justify-center items-center w-full">
        //         <div className="flex gap-3">
        //             <div className="flex flex-col gap-3 py-10 -mt-5">
        //                 <img className="w-55" src="https://www.tcsexpress.com/Home/support3.png" alt="" />
        //                 <img className="w-55" src="https://www.tcsexpress.com/Home/customersupport1.jpg" alt="" />
        //             </div>
        //             <div className="flex flex-col gap-3 py-10 mt-5s">
        //                 <img className="w-55" src="https://www.tcsexpress.com/Home/support2.png" alt="" />
        //                 <img className="w-55" src="https://www.tcsexpress.com/Home/customersupport2.jpg" alt="" />
        //             </div>
        //         </div>
        //         <div className="flex flex-col items-start gap-9 m-9 w-full">
        //             <h1>Customer Support</h1>
        //             <div className="w-25 h-3 rounded-2xl bg-green-500"></div>
        //             <div className="text-justify w-full">
        //                 <p>With the aim to do better everyday, and to be able to add greater value to our customers' lives, we have an extensive network of call centres, a WhatsApp response systems, along with a highly motivated social media team, so we can respond to your queries, inputs, and complaints better.</p>
        //                 <button className="bg-green-500 text-white px-3 py-1 rounded cursor-pointer">Contact Us</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}