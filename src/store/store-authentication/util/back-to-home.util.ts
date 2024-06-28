import { AppHistory } from '../../store-router-manager';

export const backToHome = (delay?: number) => {
  if (!delay || delay < 0) AppHistory()?.push('/');
  else {
    setTimeout(() => {
      AppHistory()?.push('/');
    }, delay);
  }
};
