import { action } from 'satcheljs';

export const updateContentAction = action(
  'updateContentAction',
  <T>(contentId: string, data: T, version?: number, storeLocal = false) => ({
    contentId,
    data,
    version,
    storeLocal,
  }),
);
