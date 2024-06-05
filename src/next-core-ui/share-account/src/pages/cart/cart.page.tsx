import Head from 'next/head';
import { ProductCard } from '../../components/product-card';
import { CartPageProps } from './cart.type';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../../context';
import { FormattedCurrency } from '../../../../../components';
import { CartInfoTable } from './components/cart-info-table';
import { CartInfoPayment } from './components/cart-info-payment';
import { CartInfoForm } from './components/cart-info-form/cart-info-form';
import IonIcon from '@reacticons/ionicons';

export const CartPage: React.FC<CartPageProps> = (props) => {
  const { sacProductData } = props;

  const { initialState } = useContext(CartContext);

  const { totalPrice } = initialState;

  const currency = 'VNĐ';

  console.log('initialState', initialState);

  return (
    <>
      <Head>
        <meta property="og:title" content="Cart page" />
        <meta property="og:url" content="/cart" />
        <meta property="og:image" />
        <title>Cart page</title>
      </Head>
      <main className="pt-[120px]">
        <section className="cart-page w-full min-h-auto mx-auto mt-10 flex gap-8 container mb-8">
          <section className="w-full mb-[50px] shadow-custom bg-white p-[20px] md:p-[40px]">
            <div className="flex flex-col gap-2">
              <span>
                Bạn đã có tài khoản?{' '}
                <Link href="/" className="text-red-500">
                  Ấn vào đây để đăng nhập
                </Link>
              </span>
              <span>
                Bạn đã có mã ưu đãi?{' '}
                <Link href="/" className="text-red-500">
                  Ấn vào đây để nhập mã
                </Link>
              </span>
            </div>
            <div className="py-4 bg-white block sm:flex items-center justify-between ">
              <h1 className="text-[17px] md:text-[20px] text-gray-900 uppercase font-bold">Thông tin Giỏ hàng</h1>
            </div>
            {/* table cart */}
            <CartInfoTable />
            <div className="flex mt-3">
              <button className="border-2 border-red-500 py-[5px] px-[15px] flex items-center gap-1 flex-row">
                <IonIcon className="text-red-500 text-[16px]" name="arrow-back-outline" />
                <span className="uppercase text-red-500">Tiếp tục xem sản phẩm</span>
              </button>
            </div>
            <div className="border-t border-gray-200 my-4" />
            {/* info buyer */}
            <CartInfoForm />
            <div className="border-t border-gray-200 my-4" />
            {/* total price */}
            <div className="flex w-full py-4 flex-col gap-2">
              <div>
                <h3 className="font-bold text-[17px] md:text-[20px] uppercase">Đơn hàng của bạn</h3>
              </div>
              <div className="flex items-center w-full gap-2 justify-between">
                <div className="text-[17px] md:text-[20px]">Tạm tính</div>
                <div className="cart-total text-[17px] md:text-[20px] font-semibold leading-[1.56] text-[var(--ui-1-color-fill-color-1)]">
                  <FormattedCurrency value={totalPrice} isColored={false} /> {currency}
                </div>
              </div>
              <div className="flex items-center w-full gap-2 justify-between">
                <div className="text-[17px] md:text-[20px]">Tổng</div>
                <div className="cart-total text-[17px] md:text-[20px] font-semibold leading-[1.56] text-[var(--ui-1-color-fill-color-1)]">
                  <FormattedCurrency value={totalPrice} isColored={false} /> {currency}
                </div>
              </div>
            </div>
            {/* payment */}
            <CartInfoPayment />
          </section>
        </section>
        {/* relate product */}
        <section className="container product-suggestion pb-10">
          <div className="row">
            <div className="col">
              <div className="font-sans text-[20px] font-semibold leading-snug text-gray-1">SẢN PHẨM TƯƠNG TỰ</div>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 pt-9">
                {sacProductData?.products?.data?.map((product) => {
                  const {
                    id = '',
                    imageUrl = '',
                    imageAlt = '',
                    title = '',
                    totalOrderNumber = 0,
                    categoryName = '',
                    linkUrl = '',
                    duration,
                  } = product;
                  return (
                    <ProductCard
                      key={id}
                      img={imageUrl}
                      alt={imageAlt}
                      title={title}
                      quantity={totalOrderNumber}
                      category={categoryName}
                      originalPrice={duration[0]?.price || 0}
                      linkUrl={linkUrl}
                      currency={currency}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
