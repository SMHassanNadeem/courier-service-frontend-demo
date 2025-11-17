import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './HomePage.jsx/layout'
import Section1 from './HomePage.jsx/section1'
import AdminPage1 from './Admin/AdminPage'
import AdminLayout from './Admin/AdminLayout'
import Riders from './Admin/Riders'
import UnassignedOrders from './Admin/UnassignedOrders'
import UnapprovedUsers from './Admin/UnapprovedUsers'
import Users from './Admin/Users'
import Orders from './Admin/Orders'
import WarehouseScanner from './Admin/WarehouseScanner'
import OrdersAtWarehouse from './Admin/OrdersAtWarehouse'
import OrderEdit from './Admin/OrderEdit'
import ReturnManagement from './Admin/ReturnManagement'
import InvoiceReport from './Admin/InvoiceReport'
import OrderForm from './HomePage.jsx/OrderForm'
import RiderPage from './Rider.jsx/RiderPage'
import RiderLayout from './Rider.jsx/RiderLayout'
import RiderAssignedOrders from './Rider.jsx/AssignedOrders'
import RiderScanOrders from './Rider.jsx/RiderScanOrders'
import OrdersWithRider from './Rider.jsx/OrdersWithRider'

function App() {
  return (
    <Routes>
      {/* ------------User Routes----------------------------- */}
      <Route path='/' element={<Layout />}>
        <Route path='home' element={<Section1 />} />
        <Route index element={<Section1 />} />
        <Route path='/order-form' element={<OrderForm/>}/>
      </Route>

      {/* -------------Admin Routes--------------------------- */}
      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<AdminPage1 />} />
        <Route path='riders' element={<Riders/>} />
        <Route path='unassigned-orders' element={<UnassignedOrders/>} />
        <Route path='unapproved-users' element={<UnapprovedUsers/>} />
        <Route path='users' element={<Users/>} />
        <Route path='orders' element={<Orders/>} />
        <Route path='warehouse-scanner' element={<WarehouseScanner/>} />
        <Route path='orders-at-warehouse' element={<OrdersAtWarehouse/>} />
        <Route path='order-edit' element={<OrderEdit/>} />
        <Route path='return-management' element={<ReturnManagement/>} />
        <Route path='invoice-report' element={<InvoiceReport/>} />
      </Route>

      {/* --------------Rider Routes------------------------------------- */}
      <Route path='/rider' element={<RiderLayout/>}>
        <Route index element={<RiderPage/>} />
        <Route path='orders-with-rider' element={<OrdersWithRider/>} />
        <Route path='assigned-orders' element={<RiderAssignedOrders/>} />
        <Route path='scan-orders' element={<RiderScanOrders/>} />
      </Route>

      {/* ----------------Auth-------------------------------------------- */}
      
    </Routes>
  )
}

export default App