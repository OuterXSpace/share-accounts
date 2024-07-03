import { floor } from 'lodash';
import { fetchBalanceAction } from '../action';
import { getStore } from '../store';

export const balanceSelector = (fetchIfUndefined?: boolean) => {
  const { balance } = getStore();

  if (!balance && fetchIfUndefined) {
    fetchBalanceAction();
  }

  return {
    balance,
    availableBalanceForWithdraw: balance
      ? floor(
          Math.max(
            0,
            (balance.balance >= balance.availableBalance
              ? balance.availableBalance - balance.bonusBalance
              : balance.balance) - balance.turnoverAmt,
          ),
        )
      : 0,
  };
};
