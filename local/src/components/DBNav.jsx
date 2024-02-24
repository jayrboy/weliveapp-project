import { NavLink } from 'react-router-dom'

const DBNav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: '#e3f2fd' }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand mb-0 h1" href="/">
          MERN Stack - CRUD
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
      </div>
    </nav>
  )
}
export default DBNav
