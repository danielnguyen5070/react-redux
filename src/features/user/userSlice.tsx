import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GetUser } from '../../api/user';
import type { User } from '../../api/user';

interface UserState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const user = await GetUser();
    return user;
});

const initialState: UserState = {
  users: [],
  status: 'idle',
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}, // normal reducers if needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  }
});

export default userSlice.reducer;