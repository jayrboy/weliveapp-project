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
        style={{ width: '400px', background: 'chocolate' }}
      >
        <form onSubmit={onSubmitForm} ref={form}>
          <label className="form-label">Item ID</label>
          <input
            placeholder="กำหนดรหัสให้กับสินค้า"
            type="text"
            name="barcode"
            className="form-control form-control-sm"
            required
          />
          <br />
          <label className="form-label">Item Name</label>
          <input
            placeholder="กำหนดชื่อให้กับสินค้า"
            type="text"
            name="name"
            className="form-control form-control-sm"
            required
          />
          <br />
          <label className="form-label">Price</label>
          <input
            placeholder="กำหนดราคาขายปลีกของสินค้า"
            type="number"
            name="price"
            min="0"
            className="form-control form-control-sm"
            required
          />
          <br />
          <label className="form-label">COST</label>
          <input
            placeholder="กำหนดราคาต้นทุนให้กับสินค้า"
            type="number"
            name="cost"
            min="0"
            className="form-control form-control-sm"
            required
          />
          <br />
          <label className="form-label">STOCK</label>
          <input
            placeholder="จำนวนสินค้าที่มีในสต็อก"
            type="number"
            name="stock"
            className="form-control form-control-sm"
            required
          />
          <br />
          <label className="form-label">CAN OVER STOCK ?</label>
          <input
            placeholder="จำนวนสินค้าที่อนุญาติให้เกินจากสต็อกที่มี"
            type="number"
            name="overstock"
            min="0"
            className="form-control form-control-sm"
          />
          <br />
          <label className="form-label">DATE</label>
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
        <a href="http://localhost:5173/" className="btn btn-light btn-sm">
          กลับหน้าหลัก
        </a>
      </div>
    </>
  )
}
