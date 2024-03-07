import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import DBNav from './components/DBNav'
import DBCreate from './components/DBCreate'
import DBUpdate from './components/DBUpdate'
import DBDelete from './components/DBDelete'
import DBCart from './components/DBCart'
import DBOrder from './components/์DBOrder'

function App() {
  return (
    <>
      <DBNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/db/search" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/db/create" element={<DBCreate />} />
        <Route path="/db/update" element={<DBUpdate />} />
        <Route path="/db/delete" element={<DBDelete />} />
        <Route path="/db/cart" element={<DBCart />} />
        <Route path="/db/order" element={<DBOrder />} />
      </Routes>
    </>
  )
}

export default App
