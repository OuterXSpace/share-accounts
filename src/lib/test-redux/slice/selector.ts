import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';
import { RootState } from '../../../types';

const selectDomain = (state: RootState) => state.test || initialState;

export const selectTest = createSelector([selectDomain], (testState) => testState);

export const selectLoading = createSelector([selectDomain], (testState) => testState.loading);

export const selectData = createSelector([selectDomain], (testState) => testState.data);
