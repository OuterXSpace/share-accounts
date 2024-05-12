import { Dispatch, SetStateAction } from 'react';

export interface IPaginationTripFooterProps {
  activePage: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
  count: number | undefined;
}
