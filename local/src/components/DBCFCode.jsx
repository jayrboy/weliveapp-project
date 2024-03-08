import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBoxOpen } from 'react-icons/fa'

import { MdEdit, MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function DBCFCode() {
  let [data, setData] = useState('')
  const form = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/api/db/read')
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
          <thead>
            <tr>
              <th className="text-center">
                <input type="checkbox" />
              </th>
              <th className="text-center">สถานะ</th>
              <th className="text-center">CF CODE</th>
              <th className="text-center">สินค้าที่มี</th>
              <th className="text-center">รายละเอียด</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {result.map((doc) => {
              let p = new Intl.NumberFormat().format(doc.price)
              return (
                <tr key={doc._id}>
                  <td className="text-center ">
                    <input
                      type="checkbox"
                      className="toggle-switch-checkbox"
                      name="_id"
                      value={doc._id}
                    />
                  </td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-success">เปิด</button>
                  </td>
                  <td className="text-center">
                    <div className="cardcode">A42</div>
                  </td>

                  <td className="text-center">
                    <div className="card">
                      <FaBoxOpen />
                      {doc.stock}
                    </div>
                  </td>
                  <td>
                    <div className="carddocument">
                      <p>{doc.name}</p>
                      <p>฿{p}</p>
                    </div>
                  </td>
                  <td>
                    <div className="btn btn-sm btn-warning">
                      <MdEdit />
                    </div>

                    <div className="btn btn-sm btn-danger m-2">
                      <MdDelete />
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <br />
        <div className="text-center ">
          <Link to="/db/create">
            <button className="btn btn-primary btn-sm">เพิ่มโค้ดการขาย</button>
          </Link>
          <button className="btn btn-danger btn-sm  m-2">ลบโค้ดที่เลือก</button>
        </div>
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

    fetch('/api/db/delete', {
      method: 'POST',
      body: JSON.stringify(fe),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.error) {
          alert(result.error)
        } else {
          if (result.length === 0) {
            setData('ไม่มีรายการข้อมูล')
          } else {
            showData(result)
          }
          alert('ข้อมูลถูกลบแล้ว')
        }
        navigate('/db/delete')
      })
      .catch((err) => alert(err))
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
