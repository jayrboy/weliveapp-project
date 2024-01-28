/* eslint-disable padded-blocks */
import { useState, useEffect } from 'react'

export default function DBPaginate() {
  let [data, setData] = useState('')
  let [page, setPage] = useState([])

  useEffect(() => {
    //อ่าน Query String ที่ปรากฏบน URL ของเบราเซอร์ในขณะนั้น
    let qStr = window.location.search
    let params = new URLSearchParams(qStr)

    //นำส่วน Query String ไปต่อท้าย URL เป้าหมายของฝั่งเซิร์ฟเวอร์
    fetch('/api/db/paginate?' + params)
      .then((response) => response.json())
      .then((result) => {
        if (result.totalDocs > 0) {
          //หากมีข้อมูลผลลัพธ์
          showData(result) //แสดงรายการข้อมูล
          showPages(result) //แสดงหมายเลขเพจ
        } else {
          setData(<>ไม่มีรายการข้อมูล</>)
        }
      })
      .catch((err) => alert(err))
  }, [])

  //ฟังก์ชันสำหรับแสดงรายการข้อมูล แล้วเปลี่ยนค่าใน state
  const showData = (result) => {
    const numDocs = result.totalDocs
    const hidden = {
      visibility: 'hidden',
    }
    let tb = (
      <div>
        <table className="table table-striped">
          <thead className="table-success">
            <tr style={numDocs === 0 ? hidden : null}>
              <th>ชื่อสินค้า</th>
              <th>ราคา</th>
              <th>วันที่เพิ่มสินค้า</th>
              <th>รายละเอียด</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {result.docs.map((doc) => {
              //จัดรูปแบบวันเดือนปี ที่สามารถเข้าใจได้
              let dt = new Date(Date.parse(doc.date_added))
              let df = (
                <>
                  {dt.getDate()}-{dt.getMonth() + 1}-{dt.getFullYear()}
                </>
              )
              let p = new Intl.NumberFormat().format(doc.price)

              return (
                <tr key={doc._id}>
                  <td>{doc.name}</td>
                  <td className="text-center">{p}</td>
                  <td className="text-center">{df}</td>
                  <td>{doc.detail}</td>
                </tr>
              )
            })}
          </tbody>
          <span className="ms-3">
            {numDocs === 0 ? (
              <>ไม่พบข้อมูล</>
            ) : (
              <small>พบข้อมูลทั้งหมด {result.totalDocs} รายการ</small>
            )}
          </span>
        </table>
      </div>
    )

    setData(tb)
  }

  //ฟังก์ชันสำหรับสร้างหมายเลขเพจ แล้วเปลี่ยนค่าใน state
  const showPages = (result) => {
    //เพื่อความสะดวก เราจะจัดเก็บลิงก์ของแต่ละเพจไว้ในอาร์เรย์
    let links = []

    //วนลูปตามจำนวนหมายเลขเพจที่แบ่งได้
    for (let i = 1; i <= result.totalPages; i++) {
      if (i === result.page) {
        //เพจปัจจุบันไม่ทำลิงก์
        links.push(
          <li className="page-item">
            <span className="page-link active">{i}</span>
          </li>
        )
      } else {
        //กำหนดลิงก์ของเพจ โดยกำหนดหมายเลขในแบบ Query String
        //แล้ววางต่อท้าย URL ของฝั่งโลคอลหรือของคอมโพเนนต์นั่นเอง
        let a = (
          <li className="page-item">
            <a href={'/db/paginate?page=' + i} className="page-link">
              {i}
            </a>
          </li>
        )
        links.push(a)
      }
    }

    setPage(links) //เปลี่ยนค่าใน state
  }

  return (
    <div style={{ margin: '20px' }}>
      <div id="data">{data}</div>
      <br />
      {/* 
        เนื่องจากเราจัดเก็บลิงก์หมายเลขเพจไว้ในอาร์เรย์ (อยู่ใน state)
        ดังนั้น เมื่อจะแสดงผลก็ต้องอ่านจากอาร์เรย์
      */}
      <div>
        <ul className="pagination">
          {page.map((p) => (
            <>{p}</>
          ))}
        </ul>
      </div>

      <br />
      <div className="d-flex justify-content-center mx-auto">
        <a href="/db" className="btn btn-light btn-sm">
          หน้าหลัก
        </a>
      </div>
    </div>
  )
}
