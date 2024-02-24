import { useState, useRef, useEffect } from 'react'

export default function DBDelete() {
  let [data, setData] = useState('')
  const form = useRef()

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
          <thead className="table-success">
            <tr>
              <th>ลบ</th>
              <th>ชื่อสินค้า</th>
              <th>ราคา</th>
              <th>วันที่เพิ่มสินค้า</th>
              <th>รายละเอียด</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {result.map((doc) => {
              let dt = new Date(Date.parse(doc.date_added))
              let dmy = (
                <>
                  {dt.getDate()}-{dt.getMonth() + 1}-{dt.getFullYear()}
                </>
              )
              let p = new Intl.NumberFormat().format(doc.price)
              return (
                <tr key={doc._id}>
                  <td>
                    <input type="radio" name="_id" value={doc._id} />
                  </td>
                  <td>{doc.name}</td>
                  <td>{p}</td>
                  <td>{dmy}</td>
                  <td>{doc.detail}</td>
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
      })
      .catch((err) => alert(err))
  }

  return (
    <div style={{ margin: '20px' }}>
      <div id="data">{data}</div>
    </div>
  )
}
