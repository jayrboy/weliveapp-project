import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { CssBaseline } from '@mui/material'

import Register from './components/pages/auth/Register'
import Login from './components/pages/auth/Login'
import AdminRoute from './routes/AdminRoute'
import UserRoute from './routes/UserRoute'

import HomeUser from './components/pages/user/HomeUser'
import HomeAdmin from './components/pages/admin/HomeAdmin'
import DBCreate from './components/pages/admin/DBCreate'
import DBUpdate from './components/pages/admin/DBUpdate'
import DBDelete from './components/pages/admin/DBDelete'
import DBCart from './components/pages/admin/DBCart'
import DBOrder from './components/DBOrder'
import DBCFCode from './components/DBCFCode'
import Stock from './components/pages/admin/Stock'
import USorder from './components/USorder'
import USinvoice from './components/USinvoice'
import ADinvoice from './components/ADinvoice'
import ADexpress from './components/ADexpress'
import ADSales from './components/ADSales'
import ADSeacrh from './components/ADSearch'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Public */}
      <Routes>
        <Route path="*" errorElement={<Navigate to="/" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* User */}
        <Route
          path="/user/home"
          element={
            <UserRoute>
              <HomeUser />
            </UserRoute>
          }
        />
        <Route path="/db/userorder" element={<USorder />} />
        <Route path="/db/userinvoice" element={<USinvoice />} />

        {/* Admin */}
        <Route
          path="/admin/home"
          element={
            <AdminRoute>
              <HomeAdmin />
            </AdminRoute>
          }
        />
        <Route
          path="/stock"
          element={
            <AdminRoute>
              <Stock />
            </AdminRoute>
          }
        />
        <Route
          path="/db/search"
          element={
            <AdminRoute>
              <HomeAdmin />
            </AdminRoute>
          }
        />
        <Route
          path="/db/create"
          element={
            <AdminRoute>
              <DBCreate />
            </AdminRoute>
          }
        />
        <Route
          path="/db/update"
          element={
            <AdminRoute>
              <DBUpdate />
            </AdminRoute>
          }
        />
        <Route
          path="/db/delete"
          element={
            <AdminRoute>
              <DBDelete />
            </AdminRoute>
          }
        />
        <Route
          path="/db/cart"
          element={
            <AdminRoute>
              <DBCart />
            </AdminRoute>
          }
        />
        <Route
          path="/db/order"
          element={
            <AdminRoute>
              <DBOrder />
            </AdminRoute>
          }
        />
        <Route
          path="/db/cfcode"
          element={
            <AdminRoute>
              <DBCFCode />
            </AdminRoute>
          }
        />
        <Route
          path="/db/admininvoice"
          element={
            <AdminRoute>
              <ADinvoice />
            </AdminRoute>
          }
        />
        <Route
          path="/db/adminexpress"
          element={
            <AdminRoute>
              <ADexpress />
            </AdminRoute>
          }
        />
        <Route
          path="/db/adminsales"
          element={
            <AdminRoute>
              <ADSales />
            </AdminRoute>
          }
        />
        <Route
          path="/db/adminsearch"
          element={
            <AdminRoute>
              <ADSeacrh />
            </AdminRoute>
          }
        />
      </Routes>
    </React.Fragment>
  )
}

export default App
