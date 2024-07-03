import { BehaviorSubject } from 'rxjs';
import { throttle } from 'lodash';
import { API, SearchResult } from '../../api';
import { IBalance, IBalanceService } from './balance.type';

export const APP_TOP_UP_BASE_URL = '/profile/top-up';
export const APP_WITHDRAW_BASE_URL = '/profile/withdraw';
export const APP_TRANSFER_WALLET_URL = '/profile/transfer-wallet';

export const BalanceService$ = new BehaviorSubject<IBalanceService | null>({
  loading: false,
  balance: undefined,
});

export const refreshBalance = throttle(
  async (): Promise<void> => {
    BalanceService$.next({ ...BalanceService$.value, loading: true });
    return fetchMyBalance()
      .then((balance) => BalanceService$.next({ balance }))
      .finally(() => BalanceService$.next({ ...BalanceService$.value, loading: false }));
  },
  2000,
  { trailing: false },
);

export const requestTopUp = () => {
  window.location.href = APP_TOP_UP_BASE_URL;
};

export const requestWithdraw = () => {
  window.location.href = APP_WITHDRAW_BASE_URL;
};

export const requestTransferWallet = () => {
  window.location.href = APP_TRANSFER_WALLET_URL;
};

export const fetchMyBalance = () => {
  return new Promise<IBalance>((resolve, reject) => {
    API.get<SearchResult<{ balanceDToes: IBalance[] }>>('/account/balances/me')
      .then((res) => {
        if (!res.data._embedded?.balanceDToes[0]) {
          reject('1');
        } else {
          resolve(res.data._embedded.balanceDToes[0]);
        }
      })
      .catch(reject);
  });
};

export const availableBalanceForWithdraw = (balance?: IBalance) => {
  if (!balance) return 0;
  return Math.max(
    0,
    (balance.balance >= balance.availableBalance ? balance.availableBalance - balance.bonusBalance : balance.balance) -
      balance.turnoverAmt,
  );
};
