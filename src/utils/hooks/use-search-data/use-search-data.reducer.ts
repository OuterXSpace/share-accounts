import { IBaseSearchParams, ISearchDataHookState, SearchDataAction, SearchDataActionType } from '.';

export const searchDataReducerInitState = <T, P extends IBaseSearchParams>(
  defaultParams?: Partial<P>,
): ISearchDataHookState<T, P> => ({
  canLoadMore: true,
  currentSearchData: [],
  error: null,
  initSearchParams: {
    size: 10,
    page: 1,
    sort: 'createdAt,desc',
    ...defaultParams,
  } as any,
  loading: false,
  searchParams: {
    size: 10,
    page: 1,
    sort: 'createdAt,desc',
    ...defaultParams,
  } as any,
  totalPages: 0,
  totalRecords: 0,
});

export const searchDataReducer = <T, P extends IBaseSearchParams>(
  state: ISearchDataHookState<T, P>,
  action: SearchDataAction<T, P>,
): ISearchDataHookState<T, P> => {
  switch (action.type) {
    case SearchDataActionType.START_SEARCH:
      return {
        ...state,
        loading: true,
        error: null,
        searchParams: {
          ...state?.searchParams,
          ...action.payload?.searchParams,
        },
      };

    case SearchDataActionType.START_NEW_SEARCH:
      return {
        ...state,
        loading: true,
        error: null,
        currentSearchData: [],
        searchData: [],
        totalPages: 0,
        totalRecords: 0,
        searchParams: {
          ...state?.searchParams,
          ...action.payload?.searchParams,
        },
      };

    case SearchDataActionType.UPDATE_SEARCH_PARAMS:
      return {
        ...state,
        searchParams: {
          ...state.searchParams,
          ...action.payload?.searchParams,
        },
      };

    case SearchDataActionType.UPDATE_SEARCH_DATA:
      return {
        ...state,
        loading: false,
        error: null,
        currentSearchData: action.payload.currentSearchData,
        searchData: [...(state.searchData || []), ...action.payload.currentSearchData],
        totalPages: action.payload.totalPages,
        totalRecords: action.payload.totalRecords,
        canLoadMore: action.payload.currentSearchData.length === state?.searchParams?.size,
      };

    case SearchDataActionType.ON_SEARCH_ERROR:
      return {
        ...state,
        currentSearchData: [],
        error: action.payload.error,
        loading: false,
      };

    default:
      return state;
  }
};
