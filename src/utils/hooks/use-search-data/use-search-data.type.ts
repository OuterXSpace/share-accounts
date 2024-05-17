export interface IBaseSearchParams<T = unknown> {
  size?: number;
  page?: number;
  sort?: T extends { [key: string]: any } ? `${keyof T & string},${'asc' | 'desc'}` : string;
}

export interface IBaseSearchResult<T> {
  data: T[];
  totalPages?: number;
  totalRecords?: number;
}

export interface IBaseSearchResponse<T> {
  _embedded?: T;
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}

// REDUCER TYPES

export interface ISearchDataHookState<T, P extends IBaseSearchParams> {
  loading: boolean;
  canLoadMore: boolean;
  searchParams: Partial<P>;
  initSearchParams: Partial<P>;
  currentSearchData: T[];
  searchData?: T[];

  error: string | null;
  totalPages: number;
  totalRecords: number;
}

export type OnSearchFunc<T, P> = (
  params?: Partial<P>,
  resetSearchResult?: boolean,
) => Promise<IBaseSearchResult<T> | null>;

export interface ISearchDataHook<T, P extends IBaseSearchParams> extends ISearchDataHookState<T, P> {
  onSearch: OnSearchFunc<T, P>;
  updateSearchParams: (params: Partial<P>) => void;
  resetSearch: () => void;
}

export enum SearchDataActionType {
  'START_SEARCH',
  'START_NEW_SEARCH',
  'UPDATE_SEARCH_DATA',
  'UPDATE_SEARCH_PARAMS',
  'ON_SEARCH_ERROR',
}

export type SearchDataAction<T, P> =
  | {
      type:
        | SearchDataActionType.START_SEARCH
        | SearchDataActionType.START_NEW_SEARCH
        | SearchDataActionType.UPDATE_SEARCH_PARAMS;
      payload: {
        searchParams?: Partial<P>;
      };
    }
  | {
      type: SearchDataActionType.UPDATE_SEARCH_DATA;
      payload: {
        currentSearchData: T[];
        totalPages: number;
        totalRecords: number;
      };
    }
  | {
      type: SearchDataActionType.ON_SEARCH_ERROR;
      payload: {
        error: string;
      };
    };
