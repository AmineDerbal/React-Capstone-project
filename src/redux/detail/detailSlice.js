import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.coinstats.app/public/v1/coins/';

export const getDetailsData = createAsyncThunk('detail/getDetail', async (id) => {
  try {
    const dataStream = await fetch(`${baseUrl}${id}`);
    const data = await dataStream.json();
    return data.coin;
  } catch (err) {
    return err;
  }
});

const initialState = {
  details: [],
  isLoading: false,
  hasError: false,
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetailsData.pending, (state) => {
      const isLoading = true;
      return {
        ...state,
        isLoading,
      };
    });
    builder.addCase(getDetailsData.fulfilled, (state, action) => {
      const isLoading = false;
      const details = action.payload;
      return {
        ...state,
        details,
        isLoading,
      };
    });
    builder.addCase(getDetailsData.rejected, (state) => {
      const isLoading = false;
      const hasError = true;
      return {
        ...state,
        isLoading,
        hasError,
      };
    });
  },
});

export default detailSlice.reducer;
