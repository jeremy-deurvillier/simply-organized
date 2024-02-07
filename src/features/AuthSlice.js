import { createSlice } from '@reduxjs/toolkit'
import { redirect } from "react-router-dom";

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    value: 0,
    user: null,
    token: null
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    login: (state, action) => {
        state.token = action.payload
    },
    setUser: (state, action) => {
        state.user = action.payload
        redirect("/user")
    }
  }
})

export const { increment, decrement, incrementByAmount, login, setUser } = authSlice.actions

export default authSlice.reducer