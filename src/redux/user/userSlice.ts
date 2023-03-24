import {StatusEnum} from "../types";
import {getStoreLocal} from "./local-storage";
import {createSlice} from "@reduxjs/toolkit";
import {loginTC, logoutTC, registerTC} from "./user.actions";

const initialState = {
  status: StatusEnum.IDLE,
  user: getStoreLocal('user')
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //register
      .addCase(registerTC.pending, state => {
        state.status = StatusEnum.LOADING
      })
      .addCase(registerTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        state.user = action.payload.user
      })
      .addCase(registerTC.rejected, state => {
        state.status = StatusEnum.ERROR
        state.user = null
      })

      //login
      .addCase(loginTC.pending, state => {
        state.status = StatusEnum.LOADING
      })
      .addCase(loginTC.fulfilled, (state, action) => {
        state.status = StatusEnum.SUCCESS
        state.user = action.payload.user
      })
      .addCase(loginTC.rejected, state => {
        state.status = StatusEnum.ERROR
        state.user = null
      })

      //logout
      .addCase(logoutTC.fulfilled, state => {
        state.status = StatusEnum.SUCCESS
        state.user = null
      })
  }
})

export const userReducer = userSlice.reducer