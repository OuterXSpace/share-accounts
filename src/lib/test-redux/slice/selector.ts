import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';
import { RootState } from '../../../types';

const selectDomain = (state: RootState) => state.app || initialState;

export const selectApp = createSelector([selectDomain], (appState) => appState);

export const selectLoading = createSelector([selectDomain], (appState) => appState.loading);

export const selectData = createSelector([selectDomain], (appState) => appState.data);
