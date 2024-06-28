/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unstable-nested-components */
import { Drawer } from 'flowbite-react';
import { IDrawerCartProps } from './drawer-cart.type';
import Link from 'next/link';
import { CartItem } from '../cart-item';
import IonIcon from '@reacticons/ionicons';
import { CartContext } from '../../../../context/cart-context';
import { useContext } from 'react';
import { FormattedCurrency } from '../../../../../../../../../../../../../components';

export const DrawerCart: React.FC<IDrawerCartProps> = (props) => {
  const { isOpenCart, handleCloseCart, position } = props;
  const { initialState, removeItemToCart } = useContext(CartContext);
  const { cartItems, totalPrice } = initialState;
  const currency = 'VNĐ';

  return (
    <>
      {/* drawer cart */}
      <Drawer open={isOpenCart} onClose={handleCloseCart} position={position} className="flex flex-col justify-between">
        <div>
          <Drawer.Header titleIcon={() => <></>} />
          <div className="flex flex-col items-center">
            <h2 className="text-[20px] uppercase font-bold text-center mb-[18px]">Giỏ hàng</h2>
            <span className="border h-[3px] w-[30px] rounded bg-gray-200" />
          </div>
          <div className="my-[15px] flex flex-col gap-[30px] items-center">
            {cartItems?.length === 0 ? (
              <>
                {/* empty Cart */}
                <IonIcon className="text-gray-200 text-[80px]" name="cart-outline" />
                <span className="text-center block">Chưa có sản phẩm trong giỏ hàng.</span>
                <div className="mt-[8px] p-[10px] w-fit bg-red-500 hover:bg-primary break-words transition duration-200 text-white uppercase text-center">
                  <Link href="/cart">Quay trở lại cửa hàng</Link>
                </div>
              </>
            ) : (
              <div>
                {/* not empty Cart */}
                {cartItems?.map((item) => {
                  const { id } = item;
                  return <CartItem key={id} item={item} removeItemToCart={removeItemToCart} />;
                })}
              </div>
            )}
          </div>
        </div>
        {cartItems?.length > 0 && (
          <div>
            <div className="flex justify-between flex-col">
              <div className="flex justify-between py-[10px]">
                <strong>Tổng số phụ:</strong>
                <span className="font-bold">
                  <FormattedCurrency value={totalPrice} isColored={false} /> {currency}
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
    </>
  );
};
