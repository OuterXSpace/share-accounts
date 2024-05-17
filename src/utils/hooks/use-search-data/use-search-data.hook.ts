import React, { useCallback, useReducer } from 'react';
import { ISearchDataHookState, SearchDataAction, SearchDataActionType } from '.';
import { searchDataReducer, searchDataReducerInitState } from './use-search-data.reducer';
import { IBaseSearchParams, IBaseSearchResult, ISearchDataHook, OnSearchFunc } from './use-search-data.type';

export const useSearchData = <T, P extends IBaseSearchParams, PP = any>(
  fetchFunction: (params: any) => Promise<IBaseSearchResult<T>>,
  defaultParams?: Partial<P>,
  paramsParser?: (params: Partial<P>) => PP,
): ISearchDataHook<T, P> => {
  const [hookState, dispatch] = useReducer<React.Reducer<ISearchDataHookState<T, P>, SearchDataAction<T, P>>>(
    searchDataReducer,
    searchDataReducerInitState(defaultParams),
  );

  const updateSearchParams = useCallback((params: Partial<P>) => {
    dispatch({
      type: SearchDataActionType.UPDATE_SEARCH_PARAMS,
      payload: {
        searchParams: params,
      },
    });
  }, []);

  const onSearch: OnSearchFunc<T, P> = useCallback(
    async (params, resetSearchResult) => {
      if (hookState.loading) {
        return null;
      }

      dispatch({
        type: resetSearchResult ? SearchDataActionType.START_NEW_SEARCH : SearchDataActionType.START_SEARCH,
        payload: {
          searchParams: params,
        },
      });

      return fetchFunction(
        paramsParser
          ? paramsParser({ ...hookState.searchParams, ...params })
          : { ...hookState.searchParams, ...params },
      )
        .then((response) => {
          dispatch({
            type: SearchDataActionType.UPDATE_SEARCH_DATA,
            payload: {
              currentSearchData: response.data,
              totalPages: response.totalPages ?? 0,
              totalRecords: response.totalRecords ?? 0,
            },
          });
          return response;
        })
        .catch((errorCode) => {
          dispatch({
            type: SearchDataActionType.ON_SEARCH_ERROR,
            payload: {
              error: errorCode,
            },
          });
          return null;
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hookState.searchParams, hookState.loading],
  );

  const resetSearch = useCallback(() => {
    onSearch(hookState.initSearchParams, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSearch]);

  return {
    ...hookState,
    onSearch,
    updateSearchParams,
    resetSearch,
  };
};
