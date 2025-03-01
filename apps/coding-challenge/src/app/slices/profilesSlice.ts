import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Profile } from '../../type';

export interface ProfileState {
  profiles: Profile[];
  loading: boolean;
  error: string | null;
}

export const initialState: ProfileState = {
  profiles: [],
  loading: false,
  error: null,
};

export const fetchProfiles = createAsyncThunk<Profile[], void>(
  'profiles/fetchProfiles',
  async () => {
    const response = await axios.get('https://randomuser.me/api/?results=10');
    return response.data.results.map((user: Profile) => ({
      id: user.login.uuid,
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      phone: user.phone,
      picture: user.picture.large,
      mediumImage: user.picture.medium,
      thumbnail: user.picture.thumbnail,
      address: `${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.postcode}`,
      largeImage: user.picture.large,
    }));
  },
);

const profileSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfiles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProfiles.fulfilled,
        (state, action: PayloadAction<Profile[]>) => {
          state.loading = false;
          state.profiles = action.payload;
        },
      )
      .addCase(fetchProfiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export const profileReducer = profileSlice.reducer;
