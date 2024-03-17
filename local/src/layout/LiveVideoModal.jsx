import { useDispatch } from 'react-redux'
import { closeModal } from '../redux/liveVideoModalSlice'

import { RiLiveFill } from 'react-icons/ri'

export default function LiveVideoModal() {
  const dispatch = useDispatch()

  return (
    <aside className="modal-container">
      <div
        className="card d-flex justify-content-center p-4 rounded-3"
        style={{ height: '250px' }}
      >
        <h5>สร้างคำสั่งขายอัตโนมัติจาก Live Facebook</h5>
        <div className="text-center bouncing-text-y">
          <RiLiveFill color="red" size={80} />
        </div>
        <hr />
        <div className="btn-container">
          <button
            type="button"
            className="btn btn-success btn-sm"
            onClick={() => {
              dispatch(closeModal())
              //....
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn btn-outline-warning btn-sm"
            onClick={() => {
              dispatch(closeModal())
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}
