import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertState {
  isOpen: boolean;
  title?: string;
  message?: string;
  variant?: AlertVariant;
}

const initialState: AlertState = {
  isOpen: false,
  title: undefined,
  message: undefined,
  variant: 'info',
};

export interface ShowAlertPayload {
  title?: string;
  message?: string;
  variant?: AlertVariant;
}

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, action: PayloadAction<ShowAlertPayload>) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.message = action.payload.message;
      state.variant = action.payload.variant ?? 'info';
    },
    hideAlert: (state) => {
      state.isOpen = false;
      state.title = undefined;
      state.message = undefined;
      state.variant = 'info';
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
