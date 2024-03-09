import { createSlice } from '@reduxjs/toolkit'

//TODO:
const initialState = {
  value: 'Redux',
  user: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.value = 'jay login'
      state.user = 'welcome'
    },
    logout: (state) => {
      state.value = 'jay logout'
      state.user = 'bye bye'
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, incrementByAmount } = userSlice.actions

export default userSlice.reducer
