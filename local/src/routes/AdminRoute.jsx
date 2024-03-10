import { Box } from '@mui/material'
import SideBar from '../layout/SideBar'
import HeaderBar from '../layout/HeaderBar'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import NotFound from '../components/pages/NotFound'

const AdminRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user)
  // console.log('AdminRoute', user)
  // console.log('AdminRoute', user.user.token)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user.token) {
      const axiosFetch = async (authToken) =>
        await axios
          .post(
            '/api/current-admin',
            {},
            {
              headers: { authToken },
            }
          )
          .then((result) => {
            console.log(result)
            setLoading(true)
          })
          .catch((err) => {
            console.log(err)
            setLoading(false)
          })
      axiosFetch(user.token)
    }
  }, [user])
  // console.log(user.user.role)

  return loading ? (
    <div className="app">
      <SideBar />
      <main className="content">
        <HeaderBar />
        <div className="content_body">
          <Box>{children}</Box>
        </div>
      </main>
    </div>
  ) : (
    <NotFound text="Admin No Permission" />
  )
}
export default AdminRoute
