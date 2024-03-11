/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { CssBaseline } from '@mui/material'

import Register from './components/pages/auth/Register'
import Login from './components/pages/auth/Login'
import AdminRoute from './routes/AdminRoute'
import UserRoute from './routes/UserRoute'
import NotFound from './components/pages/NotFound'

import HomeUser from './components/pages/user/HomeUser'
import HomeAdmin from './components/pages/admin/HomeAdmin'

import Stock from './components/pages/admin/Stock'
import DBCreate from './components/pages/admin/DBCreate'
import DBUpdate from './components/pages/admin/DBUpdate'
import DBDelete from './components/pages/admin/DBDelete'
import DBCart from './components/pages/admin/DBCart'
import DBOrder from './components/pages/admin/DBOrder'
import DBCFCode from './components/pages/admin/DBCFCode'
import ADinvoice from './components/pages/admin/ADinvoice'
import ADexpress from './components/pages/admin/ADexpress'
import ADSales from './components/pages/admin/ADSales'
import ADSeacrh from './components/pages/admin/ADSearch'
import SearchbyOrder from './components/pages/admin/SearchbyOrder'
import ManageUser from './components/pages/ManageUser'


import ResponsiveAppBar from './layout/ResponsiveAppBar'
import USorder from './components/pages/user/USorder'
import USinvoice from './components/pages/user/USinvoice'
import Service from './components/pages/user/Service'
import About from './components/pages/user/About'

import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login } from './redux/userSlice'

function App() {
  // TODO:
  const dispatch = useDispatch()
  const userToken = localStorage.getItem('token') || ''

  if (userToken === '') {
    console.log('Token not found in localStorage')
  }
  // console.log({ token: userToken })

  const axiosFetch = async (authToken) =>
    await axios
      .post(
        '/api/current-user',
        {},
        {
          headers: { authToken },
        }
      )
      .then((result) => {
        // console.log(result)
        dispatch(
          login({
            username: result.data.username,
            role: result.data.role,
            token: authToken,
          })
        )
      })
      .catch((err) => console.log(err))

  axiosFetch(userToken)

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Public */}

      <Routes>
        <Route
          path="*"
          element={
            <NotFound text="The page you are looking for does not exist." />
          }
        />
        <Route
          path="/"
          element={
            <>
              <ResponsiveAppBar />
              <HomeUser />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/service"
          element={
            <>
              <ResponsiveAppBar />
              <Service />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <ResponsiveAppBar />
              <About />
            </>
          }
        />

        {/* User */}
        <Route
          path="/user/home"
          element={
            <UserRoute>
              <HomeUser />
            </UserRoute>
          }
        />
        <Route
          path="/user/order"
          element={
            <UserRoute>
              <USorder />
            </UserRoute>
          }
        />
        <Route
          path="/user/invoice"
          element={
            <UserRoute>
              <USinvoice />
            </UserRoute>
          }
        />

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
          path="/search/by-order"
          element={
            <AdminRoute>
              <SearchbyOrder />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/stock"
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
          path="/admin/cf-code"
          element={
            <AdminRoute>
              <DBCFCode />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/invoice"
          element={
            <AdminRoute>
              <ADinvoice />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/express"
          element={
            <AdminRoute>
              <ADexpress />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/sales"
          element={
            <AdminRoute>
              <ADSales />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/search"
          element={
            <AdminRoute>
              <ADSeacrh />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/manage"
          element={
            <AdminRoute>
              <ManageUser />
            </AdminRoute>
          }
        />
      </Routes>
    </React.Fragment>
  )
}

export default App
