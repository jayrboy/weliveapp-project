import { useSelector } from 'react-redux'

const UserRoute = ({ children }) => {
  // Check User
  const { user } = useSelector((state) => ({ ...state }))
  console.log(user)

  return user && user.user.token ? children : <>ไม่ได้ Login</>
}
export default UserRoute
