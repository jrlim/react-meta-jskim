import { ICommStates } from './interface';
import { InitialLoadingState, InitialRouterState } from './constants';

export const name = 'router';

export const InitialState: ICommStates = {
  loadingState: InitialLoadingState,
  routerState: InitialRouterState
};
