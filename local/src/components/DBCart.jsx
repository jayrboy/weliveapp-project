import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SiHomeadvisor } from 'react-icons/si'
import '../index.css'
export default function DBCart() {
  let [data, setData] = useState('')
  const form = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/api/db/readOrder')
      .then((response) => response.json())
      .then((docs) => {
        if (docs.length > 0) {
          showData(docs)
        } else {
          setData(<>ไม่มีรายการข้อมูล</>)
        }
      })
      .catch((err) => alert(err))
    // eslint-disable-next-line
  }, [])

  const showData = (result) => {
    let r = (
      <form onSubmit={onSubmitForm} ref={form}>
        <table className="table table-striped">
          <thead className="table-success">
            <tr>
              <th className="text-center">ชื่อผู้ใช้</th>
              <th className="text-center">คอมเม้นท์</th>
              <th className="text-center">รหัสสินค้า</th>
              <th className="text-center">สินค้า</th>
              <th className="text-center">จำนวนสินค้าที่สั่ง</th>
              <th className="text-center">วันที่สั่งซื้อ</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {result.map((doc) => {
              let dt = new Date(Date.parse(doc.date_added))
              let df = (
                <>
                  {dt.getDate()}-{dt.getMonth() + 1}-{dt.getFullYear()}
                </>
              )

              return (
                <tr key={doc._id}>
                  <td className="text-center">{doc.UserName}</td>
                  <td className="text-center">{doc.comment}</td>
                  <td className="text-center">{'A12'}</td>
                  <td className="text-center">{'ทิชชู่'}</td>
                  <td className="text-center">
                    <button className="plus">+</button>
                    {'1'}
                    <button className="delete">-</button>
                  </td>
                  <td className="text-center">{df}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <br />
        <button className="btn btn-danger btn-sm">ลบรายการที่เลือก</button>
      </form>
    )

    setData(r)
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    if (!window.confirm('ยืนยันการลบรายการนี้')) {
      return
    }

    const fd = new FormData(form.current)
    const fe = Object.fromEntries(fd.entries())

    if (Object.keys(fe).length === 0) {
      alert('ต้องเลือกรายการที่จะลบ')
      return
    }
  }

  return (
    <div style={{ margin: '20px' }}>
      <div id="data">{data}</div>
      <br />
      <div className="d-flex justify-content-center mx-auto">
        <a href="http://localhost:5173/" className="btn btn-sm bh">
          <SiHomeadvisor />
        </a>
      </div>
    </div>
  )
}
