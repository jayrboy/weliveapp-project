import { useState, useEffect } from 'react'

export default function DBSearch() {
  let [data, setData] = useState('')
  let [page, setPage] = useState([])

  //อ่านคีย์เวิร์ดจาก URL
  let qStr = window.location.search
  let params = new URLSearchParams(qStr)

  useEffect(() => {
    fetch('/api/db/search?' + params)
      .then((response) => response.json())
      .then((result) => {
        showData(result)
        paginate(result)
      })
      .catch((err) => alert(err))
    // eslint-disable-next-line
  }, [])

  const showData = (result) => {
    const numDocs = result.totalDocs
    const hidden = {
      visibility: 'hidden',
    }

    let r = (
      <div style={{ maxWidth: '100%' }}>
        <span className="navbar-brand mb-0 h1">Workshop - Search</span>
        {/* แสดงฟอร์ม เพื่อรับคีย์เวิร์ดสำหรับการค้นหา */}
        <form action="/db/search" method="get" className="float-end mb-2">
          <div className="d-inline-block">
            <input
              type="text"
              name="q"
              defaultValue={params.get('q')}
              className="form-control form-control-sm"
            />
          </div>
          &nbsp;
          <button className="btn btn-sm btn-primary">ค้นหา</button>
        </form>
        <table
          className="table table-sm table-striped caption-top"
          style={{ maxWidth: '100%' }}
        >
          <thead className="table-dark">
            <tr style={numDocs === 0 ? hidden : null}>
              <th>Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>COST</th>
              <th>DATE</th>
            </tr>
          </thead>
          <tbody>
            {result.docs.map((doc) => {
              //จัดรูปแบบวันเดือนปี ที่สามารถเข้าใจได้
              let dt = new Date(Date.parse(doc.date_added))
              let df = (
                <>
                  {dt.getDate()}-{dt.getMonth() + 1}-{dt.getFullYear()}
                </>
              )
              let p = new Intl.NumberFormat().format(doc.price)

              return (
                <tr key={doc._id}>
                  <td>{doc.name}</td>
                  <td>{doc.stock}</td>
                  <td>{p}</td>
                  <td>{doc.cost}</td>
                  <td>{df}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <span className="ms-3">
          {numDocs === 0 ? (
            <>ไม่พบข้อมูล</>
          ) : (
            <small>พบข้อมูลทั้งหมด {result.totalDocs} รายการ</small>
          )}
        </span>
      </div>
    )

    setData(r)
  }

  const paginate = (result) => {
    if (result.totalPages === 1) {
      setPage([])
      return
    }

    let links = []
    let q = params.get('q') || ''
    let url = `/db/search?q=${q}&page=`

    //เนื่องจากจำนวนข้อมูลตัวอย่างมีไม่มาก
    //จึงให้แสดงหมายเลขในช่วง -/+ 2 จากเพจปัจจุบัน

    //ให้แสดง 2 หมายเลขก่อนเพจปัจจุบัน แต่ต้องไม่ต่ำกว่า 1
    let start = result.page - 2
    start = start < 1 ? 1 : start

    //ถัดจากเพจปัจจุบัน ให้แสดงอีก 2 หมายเลข (ต้องไม่เกินจำนวนเพจทั้งหมด)
    let end = result.page + 2
    end = end < result.totalPages ? end : result.totalPages

    //ถ้าช่วงหมายเลขเพจที่แสดง ยังสามารถเลื่อนกลับไปยังหมายเลขที่ตำ่กว่านี้ได้
    //ให้แสดงลิงก์ '|<' เพื่อสำหรับคลิกย้อนกลับไป
    if (start > 1) {
      links.push(
        <li className="page-item">
          <a href={url + 1} className="page-link">
            {'|<'}
          </a>
        </li>
      )
    }

    for (let i = start; i <= end; i++) {
      if (i === result.page) {
        links.push(
          <li className="page-item">
            {/*  eslint-disable-next-line */}
            <a className="page-link active">{i}</a>
          </li>
        )
      } else {
        links.push(
          <li className="page-item">
            <a href={url + i} className="page-link">
              {i}
            </a>
          </li>
        )
      }
    }

    //ถ้าช่วงหมายเลขเพจที่แสดง ยังสามารถเลื่อนไปยังหมายเลขที่สูงกว่านี้ได้
    //ให้แสดงลิงก์ '>|' เพื่อสำหรับคลิกย้อนไปยังเพจเหล่านั้น
    if (end < result.totalPages) {
      links.push(
        <li className="page-item">
          <a href={url + result.totalPages} className="page-link">
            {'>|'}
          </a>
        </li>
      )
    }

    setPage(links)
  }

  return (
    <div style={{ margin: '20px' }}>
      <div>{data}</div>
      <br />
      <div>
        <ul className="pagination">
          {page.map((p) => (
            <>{p}</>
          ))}
        </ul>
      </div>
      <div className="d-flex justify-content-center mx-auto">
        <a href="http://localhost:5173/" className="btn btn-light btn-sm">
          หน้าหลัก
        </a>
      </div>
    </div>
  )
}
