import { createSlice } from '@reduxjs/toolkit'

//TODO:
const initialState = {
  user: [],
  orderID:[],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = []
      localStorage.clear()
    },
  },
})
export const cartSlice = createSlice({
  name: 'orderID',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = []
      localStorage.clear()
    },
  },
})


// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer
