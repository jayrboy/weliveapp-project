import { createSlice } from '@reduxjs/toolkit'

//TODO:
const initialState = {
  user: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state, action) => {
      state.user = action.payload
    },
    incrementByAmount: (state, action) => {
      state.user += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, incrementByAmount } = userSlice.actions

export default userSlice.reducer
