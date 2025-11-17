import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
  BarElement,
} from "chart.js";
import { useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
  BarElement,
);

export default function Chart() {

  // useEffect(() => {
  //   fetch("https://ipwhois.app/json/")
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.error(err));
  // }, [])

  const data = [
    { date: "Jan", price: 500, status: "Pending", product: "Laptop", username: "Alice" },
    { date: "Apr", price: 900, status: "Waiting", product: "Headphones", username: "Alice" },
    { date: "Feb", price: 700, status: "Done", product: "Phone", username: "Bob" },
    { date: "Jul", price: 850, status: "Pending", product: "Monitor", username: "Bob" },
    { date: "Mar", price: 300, status: "Canceled", product: "Tablet", username: "Charlie" },
    { date: "May", price: 400, status: "Pending", product: "Keyboard", username: "David" },
    { date: "Jun", price: 650, status: "Pending", product: "Mouse", username: "Eve" },
    { date: "Aug", price: 750, status: "Pending", product: "Charger", username: "Frank" },
    { date: "Sep", price: 950, status: "Pending", product: "Camera", username: "Grace" },
    { date: "Oct", price: 1000, status: "Pending", product: "Speaker", username: "Heidi" },
  ];


  const data1 = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Earning",
        data: data
          .map((item) => item.price)
          .reduce((acc, val) => {
            const last = acc.length > 0 ? acc[acc.length - 1] : 0;
            acc.push(last + val);
            return acc;
          }, []),
        borderColor: "rgba(99, 102, 241, 1)",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(99, 102, 241, 0.4)");
          gradient.addColorStop(1, "rgba(24, 24, 27, 0)");
          return gradient;
        },
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: { display: false },
      },
      y: {
        display: false,
        grid: { display: false },
      },
    },
    elements: {
      line: {
        borderJoinStyle: "round",
        borderCapStyle: "round",
        shadowColor: "rgba(99, 102, 241, 0.5)",
        shadowBlur: 12,
        shadowOffsetY: 6,
      },
    },
  };

  const data2 = {
    labels: data?.map((item) => item.product) || [],
    datasets: [
      {
        label: "Users by Country",
        data: data?.map((item) => item.price) || [],
        backgroundColor: [
          "rgba(24, 24, 27, 0.9)",   // near-black obsidian
          "rgba(45, 52, 54, 0.8)",   // graphite grey
          "rgba(99, 102, 241, 0.7)", // electric indigo
          "rgba(56, 189, 248, 0.7)", // neon cyan
          "rgba(16, 185, 129, 0.7)", // emerald teal
          "rgba(245, 158, 11, 0.7)", // golden amber
          "rgba(239, 68, 68, 0.7)",  // scarlet red
          "rgba(168, 85, 247, 0.7)", // vivid violet
          "rgba(236, 72, 153, 0.7)", // magenta rose
          "rgba(148, 163, 184, 0.7)" // cool steel
        ]
        ,
        borderColor: [
          "transparent",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options1 = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (ctx) {
            let label = ctx.label || "";
            let value = ctx.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  const cumulativePrices = data
    .map(item => item.price)
    .reduce((acc, val) => {
      const last = acc.length ? acc[acc.length - 1] : 0;
      acc.push(last + val);
      return acc;
    }, []);

  const barData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: "Earning",
        data: cumulativePrices,
        backgroundColor: "rgba(99, 102, 241, 0.8)",
        borderColor: "rgba(99, 102, 241, 1)",
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      x: {display: false, grid: { display: false } },
      y: {display: false, grid: { display: false }, beginAtZero: true },
    },
  };

  return (
    <>
      <div className="pt-5 flex flex-col gap-3 bg-gray-100 w-7/8! sm:w-3/4 h-screen">
        <div className="mt-3 flex w-full h-1/4 gap-3 flex-wrap sm:flex-nowrap">
          <div className="flex flex-col p-2 h-full w-[30%] sm:w-[30%] rounded bg-white ml-3">
            <Line className="" data={data1} options={options} />
          </div>

          <div className="flex items-center bg-white h-full w-[60%] rounded">
            <div className="flex flex-col gap-3 items-center justify-center border-r border-gray-400 h-[70%] w-1/4">
              <div className="rounded-[50%] bg-green-200 text-green-700 flex justify-center items-center p-3">
                <i className="fa-solid fa-sack-dollar"></i>
              </div>
              <div className="text-md font-bold">{data.reduce((sum, item) => sum + item.price, 0)}</div>
              <div className="text-sm!">Earning</div>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center border-r border-gray-400 h-[70%] w-1/4">
              <div className="rounded-[50%] bg-blue-200 text-blue-700 flex justify-center items-center p-3">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
              <div className="text-md font-bold">{data.length}</div>
              <div className="text-sm!">Orders</div>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center border-r border-gray-400 h-[70%] w-1/4">
              <div className="rounded-[50%] bg-red-200 text-red-700 flex justify-center items-center p-3">
                <i className="fa-solid fa-hourglass-half"></i>
              </div>
              <div className="text-md font-bold">{data.filter(a => a.status === "Pending").length}</div>
              <div className="text-sm!">Pending</div>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center h-[70%] w-1/4">
              <div className="rounded-[50%] bg-orange-200 text-orange-700 flex justify-center items-center p-3">
                <i className="fa-solid fa-users"></i>
              </div>
              <div className="text-md font-bold">{new Set(data.map(item => item.username)).size}</div>
              <div className="text-sm!">Users</div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 w-full h-1/2">
          <div className="flex flex-col items-center justify-center h-full w-full sm:w-[30%] rounded bg-white ml-3 p-3">
            {/* <h3>Riders</h3> */}
            <Bar data={barData} options={barOptions} />
          </div>
          <div className="mt-9 h-full flex items-center justify-center w-[60%] sm:mt-0 sm:w-[60%] rounded bg-white">
            <div className="w-[80%] h-[80%] ml-[25%]">
              <Pie data={data2} options={options1} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}