import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
export default function HomePage() {
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
      <div className="container" style={{ maxWidth: '100%' }}>
        <div className="row">
          <div className="col-sm-6 mb-2 d-flex">
            <form action="/db/search" method="get" className="d-flex">
              <div className="d-inline-block">
                <input
                  type="text"
                  name="q"
                  placeholder="พิมพ์คำที่จะค้นหา"
                  defaultValue={params.get('q')}
                  className="form-control form-control-sm"
                />
              </div>
              &nbsp;
              <button className="btn btn-sm btn-primary">ค้นหา</button>
            </form>
          </div>
          <div className="col-sm-6">
            <Link to="/db/create">
              <button className="btn btn-primary btn-sm">Add</button>
            </Link>
            &nbsp;
            <Link to="/db/update">
              <button className="btn btn-warning btn-sm">EDIT</button>
            </Link>
            &nbsp;
            <Link to="/db/delete">
              <button className="btn btn-danger btn-sm">Delete</button>
            </Link>
          </div>
        </div>

        <table
          className="table table-sm table-striped caption-top"
          style={{ maxWidth: '100%' }}
        >
          <thead className="table-dark">
            <tr style={numDocs === 0 ? hidden : null}>
              <th>#</th>
              <th>CF CODE</th>
              <th>ชื่อสินค้า</th>
              <th>ราคา</th>
              <th>ราคาต้นทุน</th>
              <th>จำนวนสินค้า</th>
              <th>สินค้าเกินจำนวน</th>
              <th>วันที่เพิ่มสินค้า</th>
            </tr>
          </thead>
          <tbody>
            {result.docs.map((doc, i) => {
              //จัดรูปแบบวันเดือนปี ที่สามารถเข้าใจได้
              let dt = new Date(Date.parse(doc.date_added))
              let df = (
                <>
                  {dt.getDate()}-{dt.getMonth() + 1}-{dt.getFullYear()}
                </>
              )
              let p = new Intl.NumberFormat().format(doc.price)
              let c = new Intl.NumberFormat().format(doc.cost)

              return (
                <tr key={doc._id}>
                  <td className="text-center">{i + 1}</td>
                  <td className="text-center">{doc.itemid}</td>
                  <td className="text-center">{doc.name}</td>
                  <td className="text-center">{p}</td>
                  <td className="text-center">{c}</td>
                  <td className="text-center">{doc.stock}</td>
                  <td className="text-center">{doc.over_stock}</td>
                  <td className="text-center">{df}</td>
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
          <a to={url + 1}>{'|<'}</a>
        </li>
      )
    }

    for (let i = start; i <= end; i++) {
      if (i === result.page) {
        links.push(
          <li className="page-item">
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
    <>
      <div
        className="card mt-5 mx-auto p-4 rounded"
        style={{ width: '400px', background: '#fff' }}
      >
        <h1>
          WE Live App <span className="badge bg-secondary">New</span>
        </h1>
        <p>Home Page</p>
      </div>
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
      </div>
    </>
  )
}
