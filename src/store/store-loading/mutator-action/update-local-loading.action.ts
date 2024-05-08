import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

/**
 * @param processId
 * - should include context and specific process id
 * - Example:
 *   - context: Service A
 *   - process: Process A1
 * - processId: a-a1;
 */
export const updateLocalLoadingAction = mutatorAction(
  'updateLocalLoadingAction',
  (processId: string, loading: boolean) => {
    const store = getStore();

    store.localLoading[processId] = loading;
  },
);
