import { createSlice } from '@reduxjs/toolkit';
import { InitialState, name } from './initial';
import { CommStateReducers } from './reducers';

const reducers = { ...CommStateReducers };
const extraReducers = {};

export const commStore = createSlice({
  name,
  initialState: InitialState,
  reducers,
  extraReducers
});

export default commStore.reducer;

export const { SetLoadingStates, InitialLoadingState, SetRouterState, InitialRouterState } = commStore.actions;
