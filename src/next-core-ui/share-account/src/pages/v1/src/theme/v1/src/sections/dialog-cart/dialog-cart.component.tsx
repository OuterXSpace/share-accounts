import { Drawer } from 'flowbite-react';
import { IDialogCartShareAccountTheme01Props } from './dialog-cart.type';
import Link from 'next/link';
import IonIcon from '@reacticons/ionicons';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedCurrency } from '../../../../../../../../../../../components';
import { cartActions, selectCart } from '../../../../../../../../../../../store-tookit';
import { CartItem } from '../cart';

export const DialogCartShareAccountTheme01: React.FC<IDialogCartShareAccountTheme01Props> = (props) => {
  const { isOpenCart, handleCloseCart, position } = props;

  const cartState = useSelector(selectCart);

  const dispatch = useDispatch();

  const totalPriceCart = useMemo(() => {
    return cartState.cart.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  }, [cartState]);

  const currency = 'VNĐ';

  return (
    <Drawer open={isOpenCart} onClose={handleCloseCart} position={position} className="flex flex-col justify-between">
      <div>
        <Drawer.Header titleIcon={() => ''} />
        <div className="flex flex-col items-center">
          <h2 className="text-[20px] uppercase font-bold text-center mb-[18px]">Giỏ hàng</h2>
          <span className="border h-[3px] w-[30px] rounded bg-gray-200" />
        </div>
        <div className="my-[15px] flex flex-col gap-[30px] items-center">
          {cartState?.cart?.length === 0 ? (
            <>
              <IonIcon className="text-gray-200 text-[80px]" name="cart-outline" />
              <span className="text-center block">Chưa có sản phẩm trong giỏ hàng.</span>
              <div className="mt-[8px] p-[10px] w-fit bg-red-500 hover:bg-primary break-words transition duration-200 text-white uppercase text-center">
                <Link href="/cart">Quay trở lại cửa hàng</Link>
              </div>
            </>
          ) : (
            <div>
              {cartState?.cart?.map((item) => {
                const { id } = item;

                return (
                  <CartItem key={id} item={item} removeFromCart={() => dispatch(cartActions.removeFromCart({ id }))} />
                );
              })}
            </div>
          )}
        </div>
      </div>
      {cartState?.cart?.length > 0 && (
        <div>
          <div className="flex justify-between flex-col">
            <div className="flex justify-between py-[10px]">
              <strong>Tổng số phụ:</strong>
              <span className="font-bold">
                <FormattedCurrency value={totalPriceCart} isColored={false} /> {currency}
              </span>
            </div>
            <span className="border h-[3px] w-full bg-gray-200" />
          </div>
          <Link href="/cart" onClick={handleCloseCart}>
            <div className="mt-[8px] p-[10px] w-full bg-red-500 text-white uppercase text-center">Thanh toán</div>
          </Link>
        </div>
      )}
    </Drawer>
  );
};
