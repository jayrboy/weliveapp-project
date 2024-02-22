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
            <th>Item ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>ovStock</th>
            <th>Price</th>
            <th>COST</th>
            <th>DATE</th>
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

            return (
              <tr key={doc._id}>
                <td>{i + 1}</td>
                <td>{doc.barcode}</td>
                <td>{doc.name}</td>
                <td>{doc.stock}</td>
                <td>{doc.overstock}</td>
                <td>{doc.price}</td>
                <td>{doc.cost}</td>
                <td>{df}</td>
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
        <a href="http://localhost:5173/" className="btn btn-light btn-sm">
          หน้าหลัก
        </a>
      </div>
    </div>
  )
}
