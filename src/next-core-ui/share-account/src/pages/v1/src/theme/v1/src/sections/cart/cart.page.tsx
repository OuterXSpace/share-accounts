import { CartPageShareAccountTheme01Props } from './cart.type';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { CartInfoTable } from './components/cart-info-table';
import { CartInfoPayment } from './components/cart-info-payment';
import IonIcon from '@reacticons/ionicons';
import { ICartInfoFormModel } from './components/cart-info-form/cart-info-form.type';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { CartInfoForm } from './components/cart-info-form';
import { useRouter } from 'next/router';
import { FormattedCurrency } from '../../../../../../../../../../../components';
import { getUuid } from '../../../../../../../../../../../utils';
import { ProductCard } from '../../components/product-card';
import { cartActions, selectCart } from '../../../../../../../../../../../store-tookit';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutApi } from '../../../../../../../../../../../api/checkout';
import { PUBLIC_URL } from '../../../../../../../../../../../constants/platform';
import { toast } from 'react-toastify';

const cartInfoSchema = yup.object().shape({
  firstName: yup.string().required('Tên là mục bắt buộc'),
  lastName: yup.string().required('Họ là mục bắt buộc'),
  phoneNumber: yup.string().required('Số điện thoại là mục bắt buộc'),
  emailAddress: yup.string().email('Địa chỉ email không hợp lệ').required('Địa chỉ email là mục bắt buộc'),
  note: yup.string(),
});

export const CartPageShareAccountTheme01: React.FC<CartPageShareAccountTheme01Props> = (props) => {
  const { products } = props;

  const router = useRouter();

  const cartState = useSelector(selectCart);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    getValues,
    register,
    formState: { errors },
    clearErrors,
  } = useForm<ICartInfoFormModel>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(cartInfoSchema),
    defaultValues: {},
  });

  const currency = 'VNĐ';

  const totalPriceCart = useMemo(() => {
    return cartState.cart.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  }, [cartState]);

  const onSubmit = async () => {
    if (cartState?.cart?.length === 0) {
      toast.error('Bạn vẫn chưa chọn sản phẩm nào để mua. ');
      return;
    }
    const cartInfoValues = getValues();

    const payload = {
      orderId: getUuid(),
      amount: totalPriceCart,
      url: PUBLIC_URL,
    };

    checkoutApi(payload)
      .then((res) => {
        router.push({
          pathname: '/checkout',
          query: { url: res?.payUrl },
        });
      })
      .catch(() => {
        setIsLoading(false);
        toast.error('Đã có lỗi xảy ra! Bạn vui lòng thử lại sau ít phút!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="cart-section">
      <section className="cart-page w-full min-h-auto mx-auto mt-10 flex gap-8 container mb-8">
        <div className="row w-full">
          <div className="col w-full">
            <section className="w-full mb-[50px] shadow-custom bg-white p-[20px] md:p-[40px]">
              <div className="py-4 bg-white block sm:flex items-center justify-between ">
                <h1 className="text-[17px] md:text-[20px] text-gray-900 uppercase font-bold">Thông tin Giỏ hàng</h1>
              </div>
              <CartInfoTable
                cart={cartState.cart}
                removeFromCart={(c) => dispatch(cartActions.removeFromCart(c))}
                updateCart={(c) => dispatch(cartActions.updateCart(c))}
              />
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <CartInfoForm register={register} errors={errors} clearErrors={clearErrors} />
                <div className="border-t border-gray-200 my-4" />
                <div className="flex w-full py-4 flex-col gap-2">
                  <div>
                    <h3 className="font-bold text-[17px] md:text-[20px] uppercase">Đơn hàng của bạn</h3>
                  </div>
                  <div className="flex items-center w-full gap-2 justify-between">
                    <div className="text-[17px] md:text-[20px]">Tạm tính</div>
                    <div className="cart-total text-[17px] md:text-[20px] font-semibold leading-[1.56] text-[var(--ui-1-color-fill-color-1)]">
                      <FormattedCurrency value={totalPriceCart} isColored={false} /> {currency}
                    </div>
                  </div>
                  <div className="flex items-center w-full gap-2 justify-between">
                    <div className="text-[17px] md:text-[20px]">Tổng</div>
                    <div className="cart-total text-[17px] md:text-[20px] font-semibold leading-[1.56] text-[var(--ui-1-color-fill-color-1)]">
                      <FormattedCurrency value={totalPriceCart} isColored={false} /> {currency}
                    </div>
                  </div>
                </div>
                <CartInfoPayment cart={cartState.cart} isLoading={isLoading} />
              </form>
            </section>
          </div>
        </div>
      </section>
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
