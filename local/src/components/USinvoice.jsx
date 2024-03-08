import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined'

export default function USinvoice() {
  return (
    <form className="relative flex flex-column px-2 md:flex-row mt-3">
      <div className="my-6 flex-1 space-y-2 rounded-md bg-white p-4 shadow-sm sm:space-y-4 md:p-6">
        <div className="flex flex-column justify-content-between space-y-2 border-bottom border-info pb-4 md:flex-row md:items-center md:space-y-0">
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
          <input
            required
            placeholder='" นายเจษฎากร คุ้มเดช "'
            type="text"
            name="customerName"
          ></input>
          <br />
          <label className="mt-3">ที่อยู่ : </label>
          <textarea
            className="w-100"
            required
            placeholder='" คอนโด ASDWR ตึก 99 12/123 เขต จอมพล แขวง จตุจักร จังหวัด กรุงเทพ 10900 "'
            type="text"
            name="customerName"
          ></textarea>
          <label className=" mt-2">เลือกขนส่ง</label>
          <input required type="radio" className=" ms-5"></input>
          <span> Flash </span>
          <input required type="radio" className=" ms-5"></input>
          <span > J&B </span>
          <input required type="radio" className=" ms-5"></input>{' '}
          <span > Shoppee </span>
          <input required type="radio" className=" ms-5"></input>
          <span > EMS THAI </span>
          <br />
          <label className="mt-3">
            <span className=" text-danger p-1">
              อัพโหลดสลิปโอนเงิน
              <input type="file" className="p-2"></input>
            </span>
          </label>
        </div>

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
              <td className=" flex-fill align-items-center justify-content-center">
                <button className=" btn rounded-2 bg-danger p-2 text-white shadow-sm">
                  {' '}
                  <BackspaceOutlinedIcon />
                </button>
              </td>
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

      <div>
        <div>
          <button className="btn btn-primary w-100 mt-3">
            ส่งแบบฟอร์มยืนยันการชำระเงิน
          </button>
        </div>
      </div>
    </form>
  )
}
