import { useCallback, useEffect, useState } from 'react';
import { BalanceService$, refreshBalance, availableBalanceForWithdraw as ab4w } from './balance.service';
import { BalanceHookState, IBalance } from './balance.type';
import { CoreAuthenticationStore } from '../../store';

export const useBalance = (): BalanceHookState => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [balance, setBalance] = useState<IBalance>();

  useEffect(() => {
    const subscription = BalanceService$.subscribe((data) => {
      setBalance(data?.balance);
      setIsLoading(data?.loading);
    });

    return () => subscription.unsubscribe();
  }, []);

  const refresh = useCallback(() => {
    if (!CoreAuthenticationStore.isLoginAndNotMustVerifyPhoneSelector()) return false;
    refreshBalance();
    return true;
  }, []);

  const availableBalanceForWithdraw = useCallback(() => {
    return ab4w(balance);
  }, [balance]);

  return {
    isLoading,
    balance,
    isInitial: !balance && isLoading === false,
    refresh,
    availableBalanceForWithdraw,
  };
};
