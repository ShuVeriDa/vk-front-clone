import {StatusEnum} from "../types";
import {getStoreLocal} from "./local-storage";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  status: StatusEnum.IDLE,
  user: getStoreLocal('user')
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: () => {}
})

export const userReducer = userSlice.reducer