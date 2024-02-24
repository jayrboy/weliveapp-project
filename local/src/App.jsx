import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import DBNav from './components/DBNav'
import DBCreate from './components/DBCreate'
import DBRead from './components/DBRead'
import DBUpdate from './components/DBUpdate'
import DBDelete from './components/DBDelete'
import DBPaginate from './components/DBPaginate'
import DBSearch from './components/DBSearch'

function App() {
  return (
    <>
      <DBNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/db/create" element={<DBCreate />} />
        <Route path="/db/read" element={<DBRead />} />
        <Route path="/db/update" element={<DBUpdate />} />
        <Route path="/db/delete" element={<DBDelete />} />
        <Route path="/db/paginate" element={<DBPaginate />} />
        <Route path="/db/search" element={<DBSearch />} />
      </Routes>
    </>
  )
}

export default App
