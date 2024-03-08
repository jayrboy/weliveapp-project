import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa'
export default function DBReg() {
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
        <h1>Sign in</h1>
        <form onSubmit={onSubmitForm} ref={form}>
        <br/>
          <input
            type="text"
            name="name"
            placeholder="Email Address *"
            className="form-control form-control-sm"
            required
          />
          <br />

          <input
            type="text"
            name="name"
            placeholder="Password *"
            className="form-control form-control-sm"
            required
          />
          <br />
          <th className="text-center">
            <input type="checkbox" /> Remember Me
          </th>

          <br />

          <div className="d-flex justify-content-center">
            <button className="btn btn-success btn-sm">ตกลง</button>
          </div>
        </form>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <a href="/" className="btn btn-light btn-sm">
          กลับหน้าหลัก
        </a>
      </div>
    </>
  )
}
