import { AppHistory } from '../../store-router-manager';
import { loginUrlSelector } from '../selector';

export const goToLoginPage = (delay?: number) => {
  const history = AppHistory();
  const loginUrl = loginUrlSelector();

  if (!delay || delay < 0) {
    history.push(loginUrl);
  } else {
    setTimeout(() => {
      history.push(loginUrl);
    }, delay);
  }
};
