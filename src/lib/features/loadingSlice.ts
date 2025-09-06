import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LoadingState = {
  isLoading: boolean;
  message?: string;
};

const initialState: LoadingState = {
  isLoading: false,
  message: undefined,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showLoading: (state, action: PayloadAction<{ message?: string } | undefined>) => {
      state.isLoading = true;
      state.message = action?.payload?.message;
    },
    hideLoading: state => {
      state.isLoading = false;
      state.message = undefined;
    },
    setLoading: (state, action: PayloadAction<{ isLoading: boolean; message?: string }>) => {
      state.isLoading = action.payload.isLoading;
      state.message = action.payload.message;
    },
  },
});

export const { showLoading, hideLoading, setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
