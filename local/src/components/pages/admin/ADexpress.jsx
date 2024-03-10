import { Link } from 'react-router-dom'
export default function ADexpress() {
  return (
    <>
      <h3 className="text-start">
        <Link to="/admin/home" className="  text-decoration-none">
          WE LIVE |
        </Link>{' '}
        <span className="text-success"> จัดการค่าขนส่ง </span>
      </h3>

      <form className="relative flex-column px-2 mt-3 m-auto">
        <div className=" my-6 flex-column d-md-grid bg-white p-4 overflow-y-visible  justify-content-around rounded-3">
          <table className="table table-striped table-warning border-bottom border-2 ">
            <thead className=" border-2 ">
              <tr>
                <th className="text-center">ขนส่ง</th>
                <th className="text-center">ค่าส่งเริ่มต้น</th>
                <th className="text-center">ค่าส่งชิ้นต่อไป</th>
                <th className="text-center">ค่าส่งสูงสุด</th>
                <th className="text-center">ส่งฟรีเมื่อยอดถึง</th>
                <th className="text-center">ค่าส่งเพิ่มเติม COD</th>
                <th className="text-center">วันที่เริ่มต้น</th>
                <th className="text-center">{}</th>
                <th className="text-center">{}</th>
              </tr>
            </thead>
            <tbody className=" bg-body bg-white text-center border-2 mt-3 justify-content-center ">
              <tr>
                <th className="text-center">ค่าเริ่มต้น</th>
                <th className="text-center">
                  <input
                    type="text"
                    name="name"
                    placeholder="' 50 ฿ '"
                    className="form-control form-control-sm"
                    required
                  />
                </th>
                <th className="text-center">
                  <input
                    type="text"
                    name="name"
                    placeholder="' 30 ฿ '"
                    className="form-control form-control-sm"
                  />
                </th>
                <th className="text-center">
                  <input
                    type="text"
                    name="name"
                    placeholder="' 100 ฿ '"
                    className="form-control form-control-sm"
                  />
                </th>
                <th className="text-center">
                  <input
                    type="text"
                    name="name"
                    placeholder="' 1000 ฿ '"
                    className="form-control form-control-sm"
                  />
                </th>
                <th className="text-center">
                  <input
                    type="text"
                    name="name"
                    placeholder="' 30 ฿ '"
                    className="form-control form-control-sm"
                  />
                </th>
                <th className="text-center">
                  <input
                    type="date"
                    name="name"
                    placeholder="' 1000 ฿ '"
                    className="form-control form-control-sm"
                  />
                </th>
                <th className="text-center">
                  <button className=" btn btn-sm bg-warning">แก้ไข</button>
                </th>
                <th className="text-center">
                  <button className="btn btn-sm bg-danger">ลบ</button>
                </th>
              </tr>
            </tbody>
          </table>

          <div className=" justify-content-around text-md-start border-bottom mt-1 m-auto ">
            <div>
              <span> ลูกค้าเลือกขนส่งเองได้</span>
              <span className=" bg-opacity-25 ms-2">|</span>
              <button className=" btn btn-outline-success btn-close-white ms-md-5">
                {'เปิด'}
              </button>
            </div>
            <br />
            <div className=" mb-3">
              <span> ลูกค้าเลือกเก็บเงินปลายทางได้</span>
              <span className=" bg-opacity-25 ms-2">|</span>
              <button className=" btn btn-outline-danger btn-close-white ms-5">
                {'ปิด'}
              </button>
            </div>
          </div>
          <div className="mt-2 ">
            <div className="p-3 text-start w-50 border-bottom m-auto">
              <div>
                <span>ชื่อขนส่ง :</span>
                <input
                  type="text"
                  name="name"
                  placeholder="' J&T Express '"
                  className="form-control form-control-sm mt-1"
                />
              </div>

              <div className="mt-2">
                <span>ค่าส่งเริ่มต้น :</span>
                <input
                  type="text"
                  name="name"
                  placeholder="' 50 '"
                  className="form-control form-control-sm mt-1"
                  required
                />
              </div>

              <div className="mt-2">
                <span>ค่าส่งชิ้นต่อไป :</span>
                <input
                  type="text"
                  name="name"
                  placeholder="' 30 '"
                  className="form-control form-control-sm mt-1"
                />
              </div>

              <div className="mt-2">
                <span>ค่าส่งสูงสุด :</span>
                <input
                  type="text"
                  name="name"
                  placeholder="' 100 '"
                  className="form-control form-control-sm mt-1"
                />
              </div>

              <div className="mt-2">
                <span>ส่งฟรีต่อเมื่อยอดถึง :</span>
                <input
                  type="text"
                  name="name"
                  placeholder="' 1000 '"
                  className="form-control form-control-sm mt-1"
                />
              </div>

              <div className="mt-2">
                <span>ค่าส่งเพิ่มเติมกรณี COD :</span>
                <input
                  type="text"
                  name="name"
                  placeholder="' 30 '"
                  className="form-control form-control-sm mt-1"
                />
              </div>

              <div className="mt-2">
                <span>วันที่เริ่มต้น :</span>
                <input
                  type="date"
                  name="name"
                  placeholder="' J&T Express '"
                  className="form-control form-control-sm mt-1"
                />
              </div>
            </div>
            <div className=" m-auto text-center">
              <div>
                <button className=" btn btn-sm bg-success text-white mt-3">
                  เพิ่มขนส่ง
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
