import { Box } from '@mui/material'
import SideBar from '../layout/SideBar'
import HeaderBar from '../assets/HeaderBar'

const AdminRoute = ({ children }) => {
  return (
    <div className="app">
      <SideBar />
      <main className="content">
        <HeaderBar />
        <div className="content_body">
          <Box>{children}</Box>
        </div>
      </main>
    </div>
  )
}
export default AdminRoute
