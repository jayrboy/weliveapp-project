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
import DBCreate from './components/pages/admin/DBCreate'
import DBUpdate from './components/pages/admin/DBUpdate'
import DBDelete from './components/pages/admin/DBDelete'
import DBCart from './components/pages/admin/DBCart'
import DBOrder from './components/pages/admin/DBOrder'
import DBCFCode from './components/pages/admin/DBCFCode'
import Stock from './components/pages/admin/Stock'
import USorder from './components/pages/user/USorder'
import USinvoice from './components/pages/user/USinvoice'
import ADinvoice from './components/pages/admin/ADinvoice'
import ADexpress from './components/pages/admin/ADexpress'
import ADSales from './components/pages/admin/ADSales'
import ADSeacrh from './components/pages/admin/ADSearch'

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
  console.log({ token: userToken })

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
        console.log(result)
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
            <NotFound
              title="404"
              content="The page you are looking for does not exist."
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* User */}
        <Route
          path="/"
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
