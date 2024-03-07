import { FaCartShopping } from 'react-icons/fa6'
import '../index.css'
import { BsFillSendArrowUpFill } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
const DBNav = () => {
  //อ่านคีย์เวิร์ดจาก URL
  let qStr = window.location.search
  let params = new URLSearchParams(qStr)

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
          &nbsp;
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <a href="/" className="nav-link">
              <FaHome />
            </a>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <a href="/db/order" className="nav-link">
              <BsFillSendArrowUpFill />
            </a>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <a href="/db/cart" className="cart">
              <FaCartShopping />
            </a>
          </ul>
          &nbsp; &nbsp;
        </div>
      </div>
    </nav>
  )
}
export default DBNav
