import { PayloadAction } from '@reduxjs/toolkit';
import { ICommStates } from './interface';

import { RouterStateType } from './type';
import { InitialLoadingState, InitialRouterState } from './constants';

export const CommStateReducers = {
  /** Loading */
  SetLoadingStates: (state: ICommStates, action: PayloadAction<{ loading: boolean }>): void => {
    state.loadingState = action.payload.loading;
  },
  InitialLoadingState: (state: ICommStates): void => {
    state.loadingState = InitialLoadingState;
  },

  /** Router */
  SetRouterState: (state: ICommStates, action: PayloadAction<{ routerInfo: RouterStateType }>): void => {
    state.routerState = action.payload.routerInfo;
  },
  InitialRouterState: (state: ICommStates): void => {
    state.routerState = InitialRouterState;
  }
};
