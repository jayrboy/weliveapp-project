import { Link } from 'react-router-dom'
import img1 from '../../../assets/SimulateOrderBill.png'
export default function USorder() {
  return (
    <>
      <div className="card mt-5 mx-auto p-4 rounded">
        <table className="table table-striped table-sm">
          <thead className="table-success">
            <tr>
              <td className="text-center">เลข Order</td>
              <td className="text-center">ขนส่ง</td>
              <td className="text-center">ผู้รับ</td>
              <td className="text-center">ยอดสั่งซื้อ</td>
              <td className="text-center">วันที่สั่งซื้อ</td>
              <td className="text-center"></td>
            </tr>
          </thead>

          <tbody className="table-group-divider">
            {/* {result.map((doc) => {
              let dt = new Date(Date.parse(doc.date_added))
              let df = (
                <>
                  {dt.getDate()}-{dt.getMonth() + 1}-{dt.getFullYear()}
                </>
              )
              let p = new Intl.NumberFormat().format(doc.price)
              let c = new Intl.NumberFormat().format(doc.cost) 
            return (*/}
            <tr>
              <td className="text-center">12345EIGQSANG</td>
              <td className="text-center">FAST COMPANY</td>
              <td className="text-center"> เจษฎากร คุ้มเดช </td>
              <td className="text-center">฿ 239</td>
              <td className="text-center">03/04/22</td>
              <td>
                <div>
                  <Link to="/db/userinvoice">รายละเอียด</Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" align-items-center text-center mt-3">
        <Link
          to="/user/home"
          className="btn btn-sm btn-outline-light text-dark border-3 border-primary text-center  "
        >
          กลับหน้าหลัก
        </Link>
      </div>
    </>
  )
}
