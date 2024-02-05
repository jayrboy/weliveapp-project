/* eslint-disable padded-blocks */
import { useState, useEffect } from 'react'

export default function DBRead() {
  let [data, setData] = useState('')

  useEffect(() => {
    fetch('/api/db/read')
      .then((res) => res.json())
      .then((result) => {
        if (result.length > 0) {
          showData(result)
        } else {
          setData(<>ไม่มีรายการข้อมูล</>)
        }
      })
      .catch((err) => alert({ message: err.message }))
  }, [])

  const showData = (result) => {
    let tb = (
      <table className="table table-striped">
        <thead className="table-success">
          <tr>
            <th>#</th>
            <th>รหัสสินค้า</th>
            <th>ชื่อสินค้า</th>
            <th>จำนวนสินค้า</th>
            <th>จำนวนสินค้าที่อนุญาติให้ล้นสต็อก</th>
            <th>ราคา</th>
            <th>วันที่เพิ่มสินค้า</th>
            <th>รายละเอียด</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {result.map((doc, i) => {
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
                <td>{i + 1}</td>
                <td>{}</td>
                <td>{doc.name}</td>
                <td>{p}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{df}</td>
                <td>{doc.detail}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )

    setData(tb)
  }

  return (
    <div style={{ margin: '20px' }}>
      <div id="data">{data}</div>
      <br />
      <div className="d-flex justify-content-center mx-auto">
        <a href="/db" className="btn btn-light btn-sm">
          หน้าหลัก
        </a>
      </div>
    </div>
  )
}
