import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function DBCreate() {
  const form = useRef()
  const navigate = useNavigate()

  const onSubmitForm = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    const formEnt = Object.fromEntries(formData.entries())

    fetch('/api/db/create', {
      method: 'POST',
      body: JSON.stringify(formEnt),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.text())
      .then((result) => {
        if (result === 'true') {
          form.current.reset()
          alert('ข้อมูลถูกจัดเก็บแล้ว')
        } else {
          alert('เกิดข้อผิดพลาด ข้อมูลไม่ถูกบันทึก')
        }
        navigate('/')
      })
      .catch((e) => alert(e))
  }

  return (
    <>
      <div
        className="card mt-5 mx-auto p-4 rounded"
        style={{ width: '400px', background: '#fff' }}
      >
        <form onSubmit={onSubmitForm} ref={form}>
          <label className="form-label">ชื่อสินค้า</label>
          <input
            type="text"
            name="name"
            className="form-control form-control-sm"
            required
          />
          <br />
          <label className="form-label">ราคา</label>
          <input
            type="number"
            name="price"
            min="0"
            className="form-control form-control-sm"
            required
          />
          <br />
          <label className="form-label">รายละเอียดสินค้า</label>
          <textarea
            name="detail"
            cols="30"
            rows="3"
            className="form-control form-control-sm"
          ></textarea>
          <br />
          <div className="d-flex justify-content-center">
            <button className="btn btn-success btn-sm">ตกลง</button>
          </div>
        </form>
      </div>
    </>
  )
}
