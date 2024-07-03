import { fetchTestApi } from './api';
import { actions } from './slice';

export function fetchTestSlide(params: string) {
  return async (dispatch) => {
    await dispatch(actions.changeLoading(true));
    try {
      const response = await fetchTestApi(params);
      await dispatch(actions.setTestData(response));
      return response;
    } catch (error) {
      //
    }
  };
}
