import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import commStore from './comm-store/slice';

export const store = configureStore({
  reducer: {
    commStore
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
