import { CartPageShareAccountTheme01Props } from './cart.type';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { CartInfoTable } from './components/cart-info-table';
import { CartInfoPayment } from './components/cart-info-payment';
import IonIcon from '@reacticons/ionicons';
import { ICartInfoFormModel } from './components/cart-info-form/cart-info-form.type';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { CartInfoForm } from './components/cart-info-form';
import { useRouter } from 'next/router';
import { checkoutApi } from '../../../../../../../../../../../api/checkout';
import { FormattedCurrency, useToast } from '../../../../../../../../../../../components';
import { PUBLIC_URL } from '../../../../../../../../../../../constants/platform';
import {
  isLoginSelector,
  loginUrlSelector,
} from '../../../../../../../../../../../store/store-authentication/selector';
import { getUuid } from '../../../../../../../../../../../utils';
import { ProductCard } from '../../components/product-card';
import { CartContext } from '../../context';

// validate sceheme for cart info form
const cartInfoSchema = yup.object().shape({
  firstName: yup.string().required('Tên là mục bắt buộc'),
  lastName: yup.string().required('Họ là mục bắt buộc'),
  phoneNumber: yup.string().required('Số điện thoại là mục bắt buộc'),
  emailAddress: yup.string().email('Địa chỉ email không hợp lệ').required('Địa chỉ email là mục bắt buộc'),
  note: yup.string(),
});

export const CartPageShareAccountTheme01: React.FC<CartPageShareAccountTheme01Props> = (props) => {
  const { products } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { showToast } = useToast();

  const { initialState, removeItemToCart, increaseItemQuantity, decreaseItemQuantity, onChangeItemQuantity } =
    useContext(CartContext);

  const { totalPrice, cartItems } = initialState;

  const currency = 'VNĐ';

  const isLogin = isLoginSelector();

  const loginUrl = loginUrlSelector();

  const router = useRouter();

  const {
    getValues,
    register,
    formState: { errors, isValid },
    clearErrors,
  } = useForm<ICartInfoFormModel>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(cartInfoSchema),
    defaultValues: {},
  });

  const handlePostOrder = async () => {
    const cartInfoValues = getValues();
    const payload = {
      orderId: getUuid(),
      amount: totalPrice,
      url: PUBLIC_URL,
    };
    try {
      setIsLoading(true);
      if (isValid) {
        const res = await checkoutApi(payload);
        showToast('Data posted successfully!', 'success');
        router.push({
          pathname: '/checkout',
          query: { url: res?.payUrl },
        });
      }
    } catch (error) {
      setIsLoading(false);
      showToast('Data posted successfully!', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="cart-section">
      <section className="cart-page w-full min-h-auto mx-auto mt-10 flex gap-8 container mb-8">
        <div className="row w-full">
          <div className="col w-full">
            <section className="w-full mb-[50px] shadow-custom bg-white p-[20px] md:p-[40px]">
              <div className="flex flex-col gap-2">
                {!isLogin && (
                  <span>
                    Bạn đã có tài khoản?{' '}
                    <Link href="/" className="text-red-500">
                      Ấn vào đây để đăng nhập
                    </Link>
                  </span>
                )}
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
              <CartInfoTable
                items={cartItems}
                removeItemToCart={removeItemToCart}
                increaseItemQuantity={increaseItemQuantity}
                decreaseItemQuantity={decreaseItemQuantity}
                onChangeItemQuantity={onChangeItemQuantity}
              />
              {/* tiếp tục xem sản phẩm */}
              <div className="flex mt-3">
                <Link
                  href="/"
                  className="border-2 border-red-500 hover:bg-primary break-words transition duration-200 py-[5px] px-[15px] flex items-center gap-1 flex-row"
                >
                  <IonIcon className="text-red-500 text-[16px] hover:text-white" name="arrow-back-outline" />
                  <span className="uppercase text-red-500  hover:text-white font-bold">Tiếp tục xem sản phẩm</span>
                </Link>
              </div>
              <div className="border-t border-gray-200 my-4" />
              {/* info buyer */}
              <CartInfoForm register={register} errors={errors} clearErrors={clearErrors} />
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
              <CartInfoPayment
                items={cartItems}
                totalPrice={totalPrice}
                handlePostOrder={handlePostOrder}
                isLoading={isLoading}
              />
            </section>
          </div>
        </div>
      </section>
      {/* relate product */}
      <section className="container product-suggestion pb-10">
        <div className="row">
          <div className="col">
            <div className="font-sans text-[20px] font-semibold leading-snug text-gray-1">SẢN PHẨM TƯƠNG TỰ</div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 pt-9">
              {products?.map((product) => {
                const {
                  id = '',
                  imageUrl = '',
                  imageAlt = '',
                  title = '',
                  totalOrderNumber = 0,
                  categoryName = '',
                  linkUrl = '',
                  durations,
                } = product;
                return (
                  <ProductCard
                    key={id}
                    img={imageUrl}
                    alt={imageAlt}
                    title={title}
                    quantity={totalOrderNumber}
                    category={categoryName}
                    originalPrice={durations?.[0]?.price || 0}
                    linkUrl={linkUrl}
                    currency={currency}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
