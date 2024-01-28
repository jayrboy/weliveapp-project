import { NavLink } from 'react-router-dom'

const DBNav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: '#e3f2fd' }}
    >
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">MERN Stack - CRUD</span>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <NavLink to="/db/create" className="nav-link">
            เพิ่มข้อมูล
          </NavLink>
          <NavLink to="/db/read" className="nav-link">
            แสดงข้อมูล
          </NavLink>
          <NavLink to="/db/update" className="nav-link">
            แก้ไขข้อมูล
          </NavLink>
          <NavLink to="/db/delete" className="nav-link">
            ลบข้อมูล
          </NavLink>
          <NavLink to="/db/paginate" className="nav-link">
            แบ่งเพจ
          </NavLink>
          <NavLink to="/db/search" className="nav-link">
            Workshop: ค้นหาข้อมูล
          </NavLink>
        </ul>
      </div>
    </nav>
  )
}
export default DBNav
