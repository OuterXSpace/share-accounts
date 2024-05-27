export interface BalanceHookState {
  isLoading?: boolean;
  balance?: IBalance;
  isInitial: boolean;
  refresh: () => boolean;
  availableBalanceForWithdraw: () => number;
}

export interface IBalance {
  id: string;
  accountId: string;
  username: string;
  balance: number;
  bonusBalance: number;
  turnoverAmt: number;
  totalBettingAmt: number;
  totalPayout: number;
  onHoldAmt: number;
  availableBalance: number;
  bonusTicketBalance: number;
  totalDeposit: number;
  totalWithdrawal: number;
  countDeposit: number;
  countWithdrawal: number;
  depositTurnoverAmt: number;
  isBetting: boolean;
}

export interface IBalanceService {
  loading?: boolean;
  balance?: IBalance;
}
