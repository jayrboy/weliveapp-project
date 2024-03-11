import { Link } from 'react-router-dom'
import { orderdetail } from '../../../data'

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
            {orderdetail.map((detail) => {
              // คำนวณค่า itempr * among - discount

              return (
                <tr key={detail.id}>
                  <td className="text-center"># {detail.from.orderID}</td>
                  <td className="text-center"> {detail.from.express} </td>
                  <td className="text-center"> {detail.from.trName} </td>
                  <td className="text-center text-danger">รอใส่ราคารวม</td>
                  <td className="text-center">{detail.from.date}</td>
                  <td>
                    <div>
                      <Link to="/db/userinvoice">รายละเอียด</Link>
                    </div>
                  </td>
                </tr>
              )
            })}
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
