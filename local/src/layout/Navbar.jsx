import logo from '../assets/logo-we.png'
import { NavLink } from 'react-router-dom'

import { BiLogIn } from 'react-icons/bi'

const DBNav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: '#EDE7F6' }}
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
        <img
          src={logo}
          alt="Logo"
          width="40px"
          style={{ borderRadius: '50%' }}
        />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <br />
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <NavLink to="/register" className="nav-link">
              <button className="btn btn-sm btn-primary">
                Login / Register
              </button>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default DBNav
