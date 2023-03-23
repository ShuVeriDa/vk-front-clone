import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthService} from "../../services/auth/auth.service";
import {IAuthResponse, IRegister} from "./user.interface";

export const registerTC = createAsyncThunk<IAuthResponse, IRegister>('auth/register', async (data, thunkAPI) => {
    try {
      const res = await AuthService.register(data)
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)