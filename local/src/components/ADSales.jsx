export default function ADSales() {
  return (
    <form
      className="relative flex-column px-2 mt-3 m-auto overflow-scroll"
      style={{ height: '1000px' }}
    >
      <div className="card card-header">
        <div>
          <span>วันที่</span>{' '}
          <input type="date" name="Date of Sales" className="w-25"></input>{' '}
          <button
            className="btn btn-sm btn-outline-success rounded-2 ms-3"
            style={{ width: '60px' }}
          >
            <span>ค้นหา</span>
          </button>
        </div>
      </div>

      <div className="relative flex-column px-2 mt-3 m-auto overflow-scroll">
        <table
          className=" border-3 border-success table"
          style={{ width: '1200px' }}
        >
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">วันที่</th>
              <th className="text-center">จำนวน</th>
              <th className="text-center">ยอดเงิน</th>
              <th className="text-center">ออเดอร์เข้า</th>
              <th className="text-center">จำนานขาย</th>
              <th className="text-center">ยอดขาย</th>
              <th className="text-center">ค่าส่ง</th>
              <th className="text-center">ยอดขายรวมค่าส่ง</th>
              <th className="text-center">จำนวนโอนแล้ว/ยังไม่โอน</th>
              <th className="text-center">โอนแล้ว/ยังไม่โอน</th>
              <th className="text-center">ต้นทุน</th>
              <th className="text-center">กำไร</th>
            </tr>
          </thead>
          <tbody className=" table-bordered table">
            <tr>
              <th className="text-center">1</th>
              <th className="text-center">date</th>
              <th className="text-center">product</th>
              <th className="text-center">price</th>
              <th className="text-center">order</th>
              <th className="text-center">sales</th>
              <th className="text-center">summary</th>
              <th className="text-center">express</th>
              <th className="text-center">summary+express</th>
              <th className="text-center">productpay/productnpay</th>
              <th className="text-center">paying/npaying</th>
              <th className="text-center">cost</th>
              <th className="text-center">profit</th>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  )
}
