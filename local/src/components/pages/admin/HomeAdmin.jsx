import React from 'react'
import axios from 'axios'

export default function HomeAdmin() {
  //TODO: User Meta from Graph API (Test)
  async function getUserAPI() {
    const url = 'https://graph.facebook.com/v19.0/me'
    const params = {
      fields: 'id,name,email',
      access_token: import.meta.env.VITE_ACCESS_TOKEN,
    }
    try {
      const response = await axios.get(url, { params })
      console.log(response.data)
    } catch (err) {
      alert(err)
    }
  }

  //TODO: Comments from Graph API
  async function getCommentsAPI() {
    const liveVideoId = import.meta.env.VITE_LIVE_VIDEO_ID
    const url = `https://graph.facebook.com/v19.0/${liveVideoId}/comments`
    const params = {
      fields: 'data',
      access_token: import.meta.env.VITE_ACCESS_TOKEN,
    }
    try {
      const response = await axios.get(url, { params })
      console.log(response.data)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <React.Fragment>
      <div
        className="card mt-5 mx-auto p-4 rounded"
        style={{ width: '400px', background: '#fff' }}
      >
        <h1>
          WE Live App <span className="badge bg-secondary">New</span>
        </h1>
        <p>Home Page Admin</p>
        <hr />
        <p>Meta Developers</p>
        <button className="btn btn-lg btn-primary" onClick={getUserAPI}>
          User From Graph API
        </button>
        <br />
        <button className="btn btn-lg btn-primary" onClick={getCommentsAPI}>
          Live Comments From Graph API
        </button>
      </div>
    </React.Fragment>
  )
}
