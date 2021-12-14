import { RootState } from 'stores';
import { memoizeSelector } from '@comfy/redux-selectors';

export const ReselectCommLoading = memoizeSelector((state: RootState) => state.commStore.loadingState);
export const ReselectCommRouter = memoizeSelector((state: RootState) => state.commStore.routerState);
