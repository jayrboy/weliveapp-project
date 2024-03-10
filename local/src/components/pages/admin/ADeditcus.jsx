import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function ADeditcus() {
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
        navigate('/db/create')
      })
      .catch((e) => alert(e))
  }

  return (
    <>
      <div className="m-2">
        <h3>
          <Link to="/admin/home" className="  text-decoration-none">
            WE LIVE |
          </Link>{' '}
          <span className=" text-danger"> แก้ไขข้อมูลของลูกค้า </span>
        </h3>
      </div>
      <div
        className="card mt-5 mx-auto p-4 rounded"
        style={{ width: '400px', background: '#fff' }}
      >
        <form onSubmit={onSubmitForm} ref={form}>
          <label className="form-label">ชื่อ</label>
          <input
            type="text"
            placeholder=" ' JASDAKORN KHUMDEJ ' "
            name="fbname"
            className="form-control form-control-sm"
            required
          />
          <br />
          <label className="form-label">ชื่อลูกค้า</label>
          <input
            type="text"
            name="name"
            placeholder="' เจษฎากร คุ้มเดช '"
            className="form-control form-control-sm"
            required
          />
          <br />

          <label className="form-label">ที่อยู่</label>
          <input
            type="text"
            name="Hnumber"
            placeholder="' 12/345 ม.1 '"
            min="0"
            className="form-control form-control-sm"
            required
          />

          <br />

          <label className="form-label">ตำบล</label>
          <input
            type="text"
            name="tb"
            min="0"
            placeholder="' จอมพล , จตุจักร '"
            className="form-control form-control-sm"
            required
          />
          <br />

          <label className="form-label">จังหวัด</label>
          <input
            type="text"
            name="jw"
            placeholder="' กรุงเทพ '"
            min="0"
            className="form-control form-control-sm"
            required
          />
          <br />

          <label className="form-label">รหัสไปรษณีย์</label>
          <input
            type="text"
            name="postID"
            placeholder="' 10900 '"
            min="0"
            className="form-control form-control-sm"
          />
          <br />

          <label className="form-label">โทรศัพท์</label>
          <input
            type="number"
            name="phoneNumber"
            placeholder="' 0619799148 '"
            className="form-control form-control-sm"
            required
          />
          <br />

          <label className="form-label">สถานะ</label>
          <input
            type="text"
            name="sendStatus"
            placeholder="' ส่งแล้ว '"
            className="form-control form-control-sm"
            required
          />
          <br />

          <div className="d-flex justify-content-center">
            <button className="btn btn-success btn-sm">ตกลง</button>
          </div>
        </form>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <a href="/db/adminsearch" className="btn btn-light btn-sm">
          กลับหน้าค้นหาลูกค้า
        </a>
      </div>
    </>
  )
}
