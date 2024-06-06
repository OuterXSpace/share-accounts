import { API } from '../Api';

export interface IOrderPayloadApi {
  orderId: string;
  amount: number;
  url: string;
}

export interface IOrderResponseApi {
  payUrl: string;
}

export const checkoutApi = (order: IOrderPayloadApi) => {
  return new Promise<IOrderResponseApi>((resolve, reject) => {
    API.get<IOrderResponseApi>(`/payment/checkout?orderId=${order.orderId}&amount=${order.amount}&url=${order.url}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
};
