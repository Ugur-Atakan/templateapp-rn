import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import commonSlice from './slices/commonSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    common: commonSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;