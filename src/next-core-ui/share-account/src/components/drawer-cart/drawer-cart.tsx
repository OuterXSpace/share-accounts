/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unstable-nested-components */
import { Drawer } from 'flowbite-react';
import { IDrawerCartProps } from './drawer-cart.type';
import Link from 'next/link';
import IonIcon from '@reacticons/ionicons';

export const DrawerCart: React.FC<IDrawerCartProps> = (props) => {
  const { isOpenCart, handleCloseCart, position } = props;
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
            <IonIcon className="text-gray-200 text-[80px]" name="cart-outline" />
            <span className="text-center block">Chưa có sản phẩm trong giỏ hàng.</span>
            <div className="mt-[8px] p-[10px] w-full bg-red-500 text-white uppercase text-center">
              <Link href="/cart">Quay trở lại cửa hàng</Link>
            </div>
          </div>
          <Drawer.Items />
        </div>
        {/* <div>
          <div className="flex justify-between ">
            <strong>Tổng số phụ:</strong>
            <span className="font-bold">699,000,000 VNĐ</span>
          </div>
          <div className="mt-[8px] p-[10px] w-full bg-red-500 text-white uppercase text-center">
            <Link href="/cart">Thanh toán</Link>
          </div>
        </div> */}
      </Drawer>
    </>
  );
};
