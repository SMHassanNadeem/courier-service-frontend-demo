import { useNavigate, useLocation } from "react-router-dom";

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: "/admin", label: "Admin Stats", iconClass: "fas fa-tachometer-alt" },
    { path: "/admin/riders", label: "Riders", iconClass: "fas fa-motorcycle" },
    { path: "/admin/unassigned-orders", label: "Unassigned Orders", iconClass: "fas fa-box-open" },
    { path: "/admin/unapproved-users", label: "Unapproved Users", iconClass: "fas fa-user-xmark" },
    { path: "/admin/users", label: "Users", iconClass: "fas fa-users" },
    { path: "/admin/orders", label: "Orders", iconClass: "fas fa-clipboard-list" },
    { path: "/admin/warehouse-scanner", label: "Warehouse Scanner", iconClass: "fas fa-warehouse" },
    { path: "/admin/orders-at-warehouse", label: "Orders at Warehouse", iconClass: "fas fa-boxes" },
    { path: "/admin/order-edit", label: "Order Edits", iconClass: "fas fa-edit" },
    { path: "/admin/return-management", label: "Return Management", iconClass: "fas fa-undo-alt" },
    { path: "/admin/invoice-report", label: "Invoice Reports", iconClass: "fas fa-file-invoice" },
  ];

  return (
    <div className="flex flex-col items-center py-3 px-0 text-lg font-sans font-medium w-1/8 sm:w-1/4! text-wrap overflow-x-scroll h-screen bg-white shadow-md">
      <div className="text-purple-400 text-xl sm:text-2xl pb-3 flex flex-col items-center! sm:justify-start!">MGS</div>
      {menuItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`text-justify flex items-center w-[90%] hover:bg-gray-100 py-2 rounded pl-6 gap-3 transition-all 
              ${isActive ? "bg-gray-100 text-gray-6 00 border-l-4 border-purple-400" : "hover:bg-gray-100 text-gray-600"}`}
          >
            <i className={`${item.iconClass} w-4 h-4`}></i>
            <span className="hidden sm:block">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}