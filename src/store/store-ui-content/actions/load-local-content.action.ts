import { action } from 'satcheljs';

export const loadLocalContentAction = action('loadLocalContentAction', (contentId: string) => ({
  contentId,
}));
