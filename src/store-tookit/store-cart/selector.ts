import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';
import { RootState } from '../../types';

const selectDomain = (state: RootState) => state.cart || initialState;

export const selectCart = createSelector([selectDomain], (cartState) => cartState);

export const selectLoading = createSelector([selectDomain], (cartState) => cartState.loading);

export const selectData = createSelector([selectDomain], (cartState) => cartState.data);
