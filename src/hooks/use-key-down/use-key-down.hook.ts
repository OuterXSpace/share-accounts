import { useCallback } from 'react';

export const useKeyDown = (callback?: () => void) => {
  const enterKey = useCallback((e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      e.stopPropagation();
      const { form } = e.target;
      const index = Array.prototype.indexOf.call(form, e.target);
      form.elements[index + 1]?.focus();
    }
  }, []);

  const tabKey = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();

        callback?.();

        const { form } = e.target;

        if (form) {
          const submitButton = form.querySelector('button[type="submit"]');
          if (submitButton) {
            submitButton.click();
          }
        }
      }
    },
    [callback],
  );

  return {
    enterKey,
    tabKey,
  };
};
