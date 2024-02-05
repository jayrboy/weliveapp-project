/* eslint-disable padded-blocks */

import { useState, useRef, useEffect } from 'react'

export default function DBUpdate() {
  let [data, setData] = useState('')
  const form = useRef()
  const name = useRef()
  const price = useRef()
  const date_added = useRef()
  const detail = useRef()

  useEffect(() => {
    fetch('/api/db/read') //อ่านข้อมูลมาแสดงผล
      .then((res) => res.json())
      .then((result) => {
        if (result.length > 0) {
          showData(result)
        } else {
          setData(<>ไม่มีรายการข้อมูล</>)
        }
      })
      .catch((e) => alert(e))
  }, [])

  const showData = (result) => {
    let r = (
      <form onSubmit={onSubmitForm} ref={form}>
        <table className="table table-striped">
          <thead className="table-success">
            <tr>
              <th>แก้ไข</th>
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
            {result.map((doc) => {
              let dt = new Date(Date.parse(doc.date_added))
              let df = (
                <>
                  {dt.getDate()}-{dt.getMonth() + 1}-{dt.getFullYear()}
                </>
              )
              let p = new Intl.NumberFormat().format(doc.price)

              return (
                <tr key={doc._id}>
                  {/* เมื่อคลิก radio บนรายการใด เราก็แนบ document ของรายการนั้น
                      ไปยังฟังก์ชันเป้าหมาย เพื่อใช้ในการอ่านข้อมูลจากแต่ละฟิลด์ไปแสดงที่ฟอร์ม
                  */}
                  <td>
                    <input
                      type="radio"
                      name="_id"
                      value={doc._id}
                      onClick={() => onClickRadio(doc)}
                    />
                  </td>
                  <td>{doc.name}</td>
                  <td>{p}</td>
                  <td>{df}</td>
                  <td>{doc.detail}</td>
                </tr>
              )
            })}

            {/* สร้างฟอร์มไว้ที่แถวสุดท้าย */}
            <tr>
              <td>
                <button className="btn btn-warning btn-sm">แก้ไข</button>
              </td>
              <td>
                <input type="text" name="name" ref={name} required />
              </td>
              <td>
                <input type="number" name="price" ref={price} required />
              </td>
              <td>
                <input
                  type="date"
                  name="date_added"
                  ref={date_added}
                  required
                />
              </td>
              <td>
                <textarea
                  name="detail"
                  cols="34"
                  rows="3"
                  ref={detail}
                  required
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          เลือกรายการที่จะแก้ไข แล้วใส่ข้อมูลใหม่ลงไป จากนั้นคลิกปุ่ม แก้ไข
        </div>
      </form>
    )

    setData(r)
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    if (!window.confirm('ยืนยันการแก้ไขรายการนี้')) {
      return
    }
    const fd = new FormData(form.current)
    const fe = Object.fromEntries(fd.entries())

    fetch('/api/db/update', {
      method: 'POST',
      body: JSON.stringify(fe),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          alert(result.error)
        } else {
          //หลังการแก้ไข ฝั่งเซิร์ฟเวอร์จะอ่านข้อมูลใหม่
          //แล้วส่งกลับมา เราก็นำมาแสดงผลอีกครั้ง
          showData(result)
          form.current.reset()
          alert('ข้อมูลถูกแก้ไขแล้ว')
        }
      })
      .catch((err) => alert(err))
  }

  //เมื่อ radio บนรายการใดถูกคลิก (ในที่นี้เลือกใช้ click แทน change)
  //ก็อ่านข้อมูลในแต่ละฟิลต์จาก document ที่ผ่านเข้ามา แล้วเติมลงในฟอร์ม
  const onClickRadio = (doc) => {
    name.current.value = doc.name
    price.current.value = doc.price

    let dt = new Date(Date.parse(doc.date_added))
    let y = dt.getFullYear()
    let m = dt.getMonth() + 1
    //ค่าที่จะกำหนดให้แก่อินพุตชนิด date ต้องเป็นรูปแบบ yyyy-mm-dd
    //สำหรับเดือนและวันที่ หากเป็นเลขตัวเดียวต้องเติม 0 ข้างหน้า
    m = m >= 10 ? m : '0' + m
    let d = dt.getDate()
    d = d >= 10 ? d : '0' + d
    date_added.current.value = `${y}-${m}-${d}`
    detail.current.value = doc.detail
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
