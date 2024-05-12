import { useObserver } from 'mobx-react';
import { useEffect } from 'react';
import { UIContentStore, CoreLoadingStore } from '../../store';
import { Language, useCurrentLanguage } from '../../configuration/language';

export const useUIContent = <T>(
  contentId: string | undefined,
  options?: {
    language?: Language;
    disabledCache?: boolean;
  },
) => {
  const { currentLanguage } = useCurrentLanguage();

  const content = useObserver(() => UIContentStore.contentSelector<T>(contentId));

  const loading = useObserver(() => CoreLoadingStore.localLoadingSelector(contentId));

  // TODO use local message
  const error = useObserver(() => UIContentStore.errorSelector(contentId));

  useEffect(() => {
    if (!contentId) return;

    UIContentStore.fetchContentAction(contentId, options?.language ?? currentLanguage, options?.disabledCache);
  }, [contentId]); // * just fetch when change contentId

  useEffect(() => {
    if (!contentId) return;
    if (content) return;
    // * load content from local storage if not exists
    UIContentStore.loadLocalContentAction(contentId);
  }, [contentId, content]);

  return { content, loading, error: error?.get() };
};
