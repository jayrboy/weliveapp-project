import { useSelector } from 'react-redux'

const UserRoute = ({ children }) => {
  // Check User
  const { user } = useSelector((state) => state.user)
  console.log(user)

  return user.token ? children : <>ไม่ได้ Login</>
  // return children
}
export default UserRoute
