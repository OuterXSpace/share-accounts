import { PayloadAction } from '@reduxjs/toolkit';
import { ContainerState, IFieldValue } from './types';
import { createSlice } from '../../../utils';

export const initialState: ContainerState = {
  loading: false,
  data: {},
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeFieldValue: {
      reducer: (state, action: PayloadAction<IFieldValue>) => {
        state[action.payload.field] = action.payload.value;
      },
      prepare(field: string, value: any) {
        return { payload: { field, value } };
      },
    },
    changeLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setTestData(state, actions: PayloadAction<Record<string, any>>) {
      state.data = actions.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = appSlice;
