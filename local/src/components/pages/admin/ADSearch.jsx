export default function ADSeacrh() {
  return (
    <form className="card align-items-center">
      <div className=" p-2 border-bottom border-1 mt-3 ">
        <div className="ms-3">
          <span>ชื่อ : </span>
          <input
            type="text"
            className=" rounded ms-1"
            placeholder="JASDAKORN AKE"
          ></input>

          <span className="ms-3">ชื่อลูกค้า : </span>
          <input
            type="text"
            className=" rounded ms-1"
            placeholder="เจษฎากร คุ้มเดช"
          ></input>
        </div>
        <div className="mt-3 ms-3">
          <span>ที่อยู่ : </span>
          <input
            type="text"
            className=" rounded ms-1"
            placeholder="12/345"
          ></input>
          <span className="ms-3">เบอร์โทรศัพท์ : </span>
          <input
            type="text"
            className=" rounded ms-1"
            placeholder=" 061-xxxx-xxx "
          ></input>
        </div>
        <div className=" border-bottom">
          <button className="btn btn-sm btn-success mt-3 ms-3 mb-3">
            {' '}
            ค้นหา{' '}
          </button>
        </div>

        <div className="relative flex-column px-2 mt-3 m-auto">
          <div>
            <table
              className=" border-1 border-success table"
              style={{ width: '1000px', textAlign: 'center' }}
            >
              <thead className="  border-3 border-success table ">
                <tr>
                  <th className=" text-center">#</th>
                  <th className=" text-center">ชื่อ</th>
                  <th className=" text-center">ชื่อลูกค้า</th>
                  <th className=" text-center">ที่อยู่</th>
                  <th className=" text-center">ตำบล/แขวง</th>
                  <th className=" text-center">จังหวัด</th>
                  <th className=" text-center">รหัสไปรษณีย์</th>
                  <th className=" text-center">โทรศัพท์</th>
                  <th className=" text-center">สถานะ</th>
                  <th className=" text-center">action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th className=" text-center">1</th>
                  <th className=" text-center">Jasdakorn Ake</th>
                  <th className=" text-center">เจษฎากร คุ้มเดช</th>
                  <th className=" text-center">12/345 ม.1</th>
                  <th className=" text-center">จอมพล</th>
                  <th className=" text-center">จตุจักร</th>
                  <th className=" text-center">10900</th>
                  <th className=" text-center">061-xxxx-xxx</th>
                  <th className=" text-center">ส่งของ</th>
                  <th className=" text-center">
                    <button className="btn btn-sm btn-warning">edit</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </form>
  )
}
