import { useSelector } from 'react-redux'
import NotFound from '../components/pages/NotFound'

const UserRoute = ({ children }) => {
  // Check User
  const { user } = useSelector((state) => state.user)
  console.log(user)

  return user.token ? children : <NotFound text="User Not Permission" />
  // return children
}
export default UserRoute
