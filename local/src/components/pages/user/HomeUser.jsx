import React from 'react'
import Navbar from '../../../layout/Navbar'


export default function HomeUser() {
  return (
    <React.Fragment>
      <Navbar />
      <div
        className="card mt-5 mx-auto p-4 rounded"
        style={{ width: '400px', background: '#fff' }}
      >
        <h1>
          WE Live App <span className="badge bg-secondary">New</span>
        </h1>
        <p>Home Page User</p>
      </div>
    </React.Fragment>
  )
}
