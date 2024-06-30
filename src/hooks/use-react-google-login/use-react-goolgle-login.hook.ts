import { useGoogleLogin } from '@react-oauth/google';
import { CoreAuthenticationStore } from '../../store';
import { useEffect } from 'react';

export const useReactGoogleLogin = () => {
  const onSuccess = async (response) => {
    await CoreAuthenticationStore.login3rdAction('google', response.access_token);
  };

  const handleLoginGoogle = useGoogleLogin({
    onSuccess,
    onError: () => {},
  });

  useEffect(() => {
    if (!CoreAuthenticationStore.isLoginSelector()) return;

    CoreAuthenticationStore.backToRedirectUrl();
  }, []);

  return {
    handleLoginGoogle,
  };
};
