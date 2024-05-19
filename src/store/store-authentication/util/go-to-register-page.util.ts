import { AppHistory } from '../../store-router-manager';
import { registerUrlSelector } from '../selector';

export const goToRegisterPage = (delay?: number) => {
  if (!delay || delay < 0) AppHistory().push(registerUrlSelector());
  else {
    setTimeout(() => {
      AppHistory().push(registerUrlSelector());
    }, delay);
  }
};
