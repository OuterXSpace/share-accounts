import { jwtDecode } from 'jwt-decode';

export const checkTokenExpiredUtil = (token: string): boolean => {
  try {
    const jwtToken: any = jwtDecode(token);
    return jwtToken.exp && jwtToken.exp * 1000 < Date.now();
  } catch (error) {
    return true;
  }
};
