import { action } from 'satcheljs';
import { Language } from '../../../configuration/language';

// * fetch ui-content by contentId
// * content will be store and do not refetch if force is false (default false)
export const fetchContentAction = action(
  'fetchContentAction',
  (contentId: string, language?: Language, force: boolean = false) => {
    return {
      contentId,
      language,
      force,
    };
  },
);
