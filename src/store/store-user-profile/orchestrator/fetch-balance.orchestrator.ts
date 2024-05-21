import { orchestrator } from 'satcheljs';
import { fetchBalanceAction } from '../action';
import { updateFetchBalanceError, updateIsFetchingBalance } from '../mutator-action';

let isFetching = false;

orchestrator(fetchBalanceAction, async () => {
  if (isFetching) return;
  isFetching = true;
  try {
    updateIsFetchingBalance(true);
  } catch (error) {
    updateFetchBalanceError(error);
  } finally {
    updateIsFetchingBalance(false);
  }
  isFetching = false;
});
