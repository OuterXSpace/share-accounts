import { useCallback, useEffect } from 'react';
import { ILoginFormData } from './use-login.type';
import { CoreAuthenticationStore } from '../../store';

export const useLogin = () => {
  const handleLogin = useCallback((data: ILoginFormData) => {
    CoreAuthenticationStore.loginAction(data?.username, data?.password);
  }, []);

  // * prevent user login-ed access login page
  useEffect(() => {
    if (!CoreAuthenticationStore.isLoginSelector()) return;

    CoreAuthenticationStore.backToRedirectUrl();
  }, []);

  return {
    handleLogin,
  };
};
