import { orchestrator } from 'satcheljs';
import { fetchProfileAction } from '../action';
import { updateFetchProfileError, updateIsFetchingBalance, updateProfileAction } from '../mutator-action';
import { fetchUserProfileApi } from '../../../api';

let isFetching = false;

orchestrator(fetchProfileAction, async () => {
  if (isFetching) return;
  isFetching = true;
  try {
    updateIsFetchingBalance(true);

    const profile = await fetchUserProfileApi();

    updateProfileAction(profile);
  } catch (error) {
    updateFetchProfileError(error);
  } finally {
    updateIsFetchingBalance(false);
  }
  isFetching = false;
});
