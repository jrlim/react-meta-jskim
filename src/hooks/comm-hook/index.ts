import { cloneDeep } from 'lodash';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TreeItem } from 'performant-array-to-tree';

import { RouterStateType } from 'stores/comm-store/type';
import { ReselectCommLoading, ReselectCommRouter } from 'stores/comm-store/reselect';
import { SetLoadingStates, InitialLoadingState, SetRouterState, InitialRouterState } from 'stores/comm-store/slice';
import { handleRouterTree } from './handle';

interface ICommHook {
  /** Loading */
  FetchLoading: () => boolean;
  MutationLoading: (loading: boolean) => void;
  InitialLoading: () => void;

  /** Router */
  FetchRouter: () => RouterStateType;
  FetchRouterTree: () => TreeItem;
  MutationRouter: (routerInfo: RouterStateType) => void;
  InitialRouter: () => void;
}

export const useCommHook = (): ICommHook => {
  const dispatch = useDispatch();

  const loading = useSelector(ReselectCommLoading) as boolean;
  const router = useSelector(ReselectCommRouter) as RouterStateType;

  /** Loading Biz Start */
  const FetchLoading = useCallback(() => {
    return loading;
  }, [loading]);
  const MutationLoading = useCallback(
    (loading: boolean) => {
      dispatch(SetLoadingStates({ loading }));
    },
    [dispatch]
  );
  const InitialLoading = useCallback(() => {
    dispatch(InitialLoadingState());
  }, [dispatch]);
  /** Loading Biz End */

  /** Rotuer Biz Start */
  const FetchRouter = useCallback(() => {
    return cloneDeep(router);
  }, [router]);

  const FetchRouterTree = useCallback(() => {
    return handleRouterTree(cloneDeep(router.menus));
  }, [router]);

  const MutationRouter = useCallback(
    (routerInfo: RouterStateType) => {
      dispatch(SetRouterState({ routerInfo }));
    },
    [dispatch]
  );

  const InitialRouter = useCallback(() => {
    dispatch(InitialRouterState());
  }, [dispatch]);
  /** Loading Biz End */

  return { FetchLoading, MutationLoading, InitialLoading, FetchRouter, FetchRouterTree, MutationRouter, InitialRouter };
};
