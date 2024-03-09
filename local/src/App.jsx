import { Routes, Route, Navigate } from 'react-router-dom'
import { CssBaseline, Box } from '@mui/material'
import SideBar from './layout/SideBar'
import HeaderBar from './layout/HeaderBar'
import HomePage from './pages/Home'
import DBCreate from './components/DBCreate'
import DBUpdate from './components/DBUpdate'
import DBDelete from './components/DBDelete'
import DBCart from './components/DBCart'
import DBOrder from './components/DBOrder'
import DBCFCode from './components/DBCFCode'
import DBReg from './components/DBReg'
import Stock from './pages/Stock'
import USorder from './components/USorder'
import USinvoice from './components/USinvoice'
import ADinvoice from './components/ADinvoice'
import ADexpress from './components/ADexpress'

function App() {
  return (
    <>
      <CssBaseline />
      <div className="app">
        <SideBar />
        <main className="content">
          <HeaderBar />
          <div className="content_body">
            <Box>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/stock" element={<Stock />} />
                <Route path="/db/search" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/db/create" element={<DBCreate />} />
                <Route path="/db/update" element={<DBUpdate />} />
                <Route path="/db/delete" element={<DBDelete />} />
                <Route path="/db/cart" element={<DBCart />} />
                <Route path="/db/order" element={<DBOrder />} />
                <Route path="/db/cfcode" element={<DBCFCode />} />
                <Route path="/db/register" element={<DBReg />} />
                <Route path="/db/userorder" element={<USorder />} />
                <Route path="/db/userinvoice" element={<USinvoice />} />
                <Route path="/db/admininvoice" element={<ADinvoice />} />
                <Route path="/db/adminexpress" element={<ADexpress />} />
              </Routes>
            </Box>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
