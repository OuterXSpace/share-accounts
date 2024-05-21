import { useEffect, useCallback } from 'react';
import { IRegisterFormData } from './use-register.type';
import { CoreAuthenticationStore } from '../../store';

export const useRegister = () => {
  const handleRegister = useCallback((data: IRegisterFormData) => {
    CoreAuthenticationStore.registerAction(data.email, data.username, data.password, data.fullName);
  }, []);

  useEffect(() => {
    if (!CoreAuthenticationStore.isLoginSelector()) return;

    CoreAuthenticationStore.backToHome();
  }, []);

  return {
    handleRegister,
  };
};
