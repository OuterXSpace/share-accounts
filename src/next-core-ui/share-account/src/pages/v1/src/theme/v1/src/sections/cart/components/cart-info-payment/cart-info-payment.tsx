import Image from 'next/image';
import { ICartInfoPaymentProps } from './cart-info-payment.type';
import { useState } from 'react';
import { LoadingMore } from '../../../../../../../../../../../../../components';

export const CartInfoPayment: React.FC<ICartInfoPaymentProps> = (props) => {
  const { items, handlePostOrder, isLoading } = props;
  const [selectedPayment, setSelectedPayment] = useState<string>('momo-payment');

  const handleChangeSelectPayment = (payment: string) => {
    setSelectedPayment(payment);
  };

  return (
    <div className="flex flex-col">
      {/* payment */}
      <div className="border-t border-gray-200 py-4">
        <div className="flex items-center">
          <input
            id="momo-payment"
            type="radio"
            value="momo-payment"
            checked={selectedPayment === 'momo-payment'}
            onChange={() => handleChangeSelectPayment('momo-payment')}
            name="momo-payment"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <label htmlFor="momo-payment" className="text-sm font-bold text-gray-900 md:mr-2 mx-2">
            Thanh toán bằng ví MoMo
          </label>
          <Image
            src="https://gamikey.com/wp-content/plugins/echbay-momo-woo/images/momo_icon_square_pinkbg_RGB.png"
            alt="momo"
            width={30}
            height={30}
          />
        </div>
        <p>Quét mã thanh toán tới nhà cung cấp dịch vụ là SHAREACCOUNT</p>
      </div>
      <div className="flex items-center">
        <button
          className={`flex items-center justify-center flex-1 px-3 py-3 font-semibold text-[20px] text-white bg-red-500 hover:bg-primary break-words transition duration-200 uppercase ${
            !items.length ? 'opacity-50' : 'opacity-100'
          }`}
          disabled={!items.length || isLoading}
          onClick={handlePostOrder}
        >
          {isLoading ? <LoadingMore /> : ' Đặt hàng'}
        </button>
      </div>
    </div>
  );
};
