import { Link } from 'react-router-dom'
export default function ADSales() {
  return (
    <>
      <div className="m-2 row-cols-auto">
        <h3 className="text-start">
          <Link to="/admin/home" className="  text-decoration-none">
            WE LIVE |
          </Link>{' '}
          <span className="text-success"> เช็คยอดขาย </span>
        </h3>
      </div>
      <form className="card mt-3 ms-3">
        <div className=" p-2 border-1 mt-3 mb-5 ">
          <div className="ms-3">
            <span>วันที่ : </span>
            <input type="date" className=" rounded ms-1"></input>
            <button className="btn btn-sm btn-success mt-3 ms-3 mb-3">
              {' '}
              ค้นหา{' '}
            </button>
          </div>

          <div className="relative flex-column px-2 mt-2">
            <div>
              <table className=" table table-striped ">
                <thead className="  table table-success text-center  ">
                  <tr>
                    <th className=" text-center ">#</th>
                    <th className=" text-center ">วันที่</th>
                    <th className=" text-center ">จำนวน</th>
                    <th className=" text-center">ยอดเงิน</th>
                    <th className=" text-center ">ออเดอร์</th>
                    <th className=" text-center ">จำนวนขาย</th>
                    <th className=" text-center ">ยอดขาย</th>
                    <th className=" text-center ">ค่าส่ง</th>
                    <th className=" text-center ">ยอดรวม</th>
                    <th className=" text-center ">จำนวนโอนแล้ว/ยังไม่โอน</th>
                    <th className=" text-center ">ยอดเงินโอนแล้ว/ยังไม่โอน</th>
                    <th className=" text-center ">ต้นทุน</th>
                    <th className=" text-center ">กำไร</th>
                    <th className=" text-center link-offset-1-hover">Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th className=" text-center"> 1</th>
                    <th className=" text-center">21/11/2544</th>
                    <th className=" text-center">92 ชิ้น</th>
                    <th className=" text-center">2314 บาท</th>
                    <th className=" text-center">232 ออเดอร์</th>
                    <th className=" text-center">923 ชิ้น</th>
                    <th className=" text-center">5555 บาท</th>
                    <th className=" text-center">4444 บาท</th>
                    <th className=" text-center">9999 บาท</th>
                    <th className=" text-center">3500/0 บาท</th>
                    <th className=" text-center">2400 บาท</th>
                    <th className=" text-center">2400 บาท</th>
                    <th className=" text-center">9999 บาท</th>
                    <th className=" text-center text-decoration-underline text-primary">
                      รายละเอียด
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
