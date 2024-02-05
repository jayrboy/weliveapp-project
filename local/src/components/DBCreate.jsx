import { useRef } from 'react'

export default function DBCreate() {
  const form = useRef()

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
          <label className="form-label">รหัสสินค้า</label>
          <input
            type="text"
            name="id"
            className="form-control form-control-sm"
            required
          />
          <br />
          <label className="form-label">ชื่อสินค้า</label>
          <input
            type="text"
            name="name"
            className="form-control form-control-sm"
            required
          />
          <br />
          <label className="form-label">จำนวนสินค้า</label>
          <input
            type="number"
            name="stock"
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

          <label className="form-label">จำนวนสินค้าที่อนุญาติให้ล้นสต็อก</label>
          <input
            type="number"
            name="over_stock"
            min="0"
            className="form-control form-control-sm"
            
          />
          <br />

          <label className="form-label">ราคาต้นทุน</label>
          <input
            type="number"
            name="cost"
            min="1"
            className="form-control form-control-sm"
            required
          />
          <br />

          <label className="form-label">วันที่เพิ่มสินค้า</label>
          <input
            type="Date"
            name="date_added"
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
        <a href="/db" className="btn btn-light btn-sm">
          กลับหน้าหลัก
        </a>
      </div>
    </>
  )
}
