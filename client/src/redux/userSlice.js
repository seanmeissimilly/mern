import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = import.meta.env.VITE_BACKEND;

const userApi = axios.create({
  baseURL: `${URL}/users`,
});

// Todo:Lógica listar un usuario.
export const userSolo = createAsyncThunk(
  "userSolo",
  async ({ id, token }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await userApi.get(`/${id}/`, config);
      localStorage.setItem("userSolo", JSON.stringify(data));
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message
      );
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
    users: [],
    userOnly: {},
    loading: false,
    error: false,
    success: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userSolo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userSolo.fulfilled, (state, action) => {
      state.loading = false;
      state.userOnly = action.payload;
      state.success = true;
    });
    builder.addCase(userSolo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    });
  },
});

export default userSlice.reducer;
