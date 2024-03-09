export default function USinvoice() {
  return (
    <form
      className="relative flex-column px-2 mt-3 m-auto overflow-scroll"
      style={{ height: '1000px' }}
    >
      <div
        className=" my-6 flex-grow-1 d-md-grid bg-white p-4 shadow-sm overflow-y-visible border-warning justify-content-around m-auto "
        style={{ width: '500px' }}
      >
        {/* my-6 flex-1 space-y-2 rounded-md bg-white p-4 shadow-sm sm:space-y-4
        md:p-6 */}
        <div className=" flex-column justify-content-between space-y-2 border-bottom border-info pb-4 md:flex-row md:items-center md:space-y-0">
          <div className="flex space-x-2">
            <span className=" font-monospace">Current Date:</span>
            <span> 09/03/2024 </span>
          </div>
          <div className="flex align-items-md-center">
            <label className=" font-monospace">รหัสคำสั่งซื้อ :</label>
            <label>#44596e</label>
          </div>
        </div>
        <h1 className=" text-center text-lg-center font-monospace p-3">
          แจ้งชำระเงิน
        </h1>
        <div>
          <label className=" ">ชื่อลูกค้า : </label>
          <br />
          <input
            required
            placeholder='" นายเจษฎากร คุ้มเดช "'
            type="text"
            name="customerName"
          ></input>
          <br />
          <br />
          <label>ที่อยู่ : </label>
          <br />
          <textarea
            style={{ width: '400px', height: ' 100px' }}
            required
            placeholder='" คอนโด ASDWR ตึก 99 12/123 เขต จอมพล แขวง จตุจักร จังหวัด กรุงเทพ 10900 "'
            type="text"
            name="customerName"
          ></textarea>
          <br />
          <label className=" mt-2">เลือกขนส่ง</label>
          <input required type="radio" className=" ms-5"></input>
          <span> Flash </span>
          <input required type="radio" className=" ms-5"></input>
          <span> J&B </span>
          <input required type="radio" className=" ms-5"></input>{' '}
          <span> Shoppee </span>
          <input required type="radio" className=" ms-5"></input>
          <span> EMS THAI </span>
          <br />
          <label className="mt-3">
            <span className=" text-danger p-1">
              อัพโหลดสลิปโอนเงิน
              <input type="file" className="p-2"></input>
            </span>
          </label>
        </div>
        <br />
        <table className=" w-100 p-4 align-content-md-start text-center">
          <thead>
            <tr className=" border-success">
              <th>สินค้า</th>
              <th>ราคา</th>
              <th>ราคารวม</th>
              <th>{}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p> * พื้นที่ import CF CODE</p>
              </td>
              <td>
                <p> * พื้นที่ import price</p>
              </td>
              <td>
                <p> * พื้นที่ import รวมราคา</p>
              </td>
              <td className=" flex-fill align-items-center justify-content-center"></td>
            </tr>
          </tbody>
        </table>
        <div className=" flex-column carousel-item-end pt-5 w-100">
          <div className="">
            <span className=" p-5">Subtotal :</span>
            <span className=""> ฿ 199</span>
          </div>
          <div className="">
            <span className=" p-5">Discount :</span>
            <span className=" text-danger"> ( 0 % ) ฿ 0 </span>
          </div>
          <div className="">
            <span className="p-5">Tax :</span>
            <span> ( 0 % ) ฿ 0 </span>
          </div>
          <div className=" flex-fill w-100 justify-content-between border-top border-2 pt-2 m-md-1">
            <span className=" font-monospace "> Total</span>
            <span className=" font-monospace"> ฿ 0</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-3">
        <div>
          <button className="btn btn-sm btn-primary">
            <span>ส่งแบบฟอร์มยืนยันการชำระเงิน</span>
          </button>
        </div>
      </div>
    </form>
  )
}
