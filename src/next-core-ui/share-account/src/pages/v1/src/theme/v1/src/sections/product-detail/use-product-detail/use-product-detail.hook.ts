import { useRouter } from 'next/router';
import { useState, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { cartSliceKey, reducer, cartActions } from '../../../../../../../../../../../../store-tookit';
import { IProductItemDuration } from '../product-detail.type';
import { useInjectReducer } from '../../../../../../../../../../../../utils';
import { IUseProductDetailProps } from './use-product-detail.type';
import { toast } from 'react-toastify';

export const useProductDetail = (props: IUseProductDetailProps) => {
  useInjectReducer({ key: cartSliceKey, reducer });

  const { products } = props;

  const router = useRouter();

  const dispatch = useDispatch();

  const [formError, setFormError] = useState<string>();

  const [variant, setVariant] = useState<IProductItemDuration>();

  const productDetail = useMemo(() => {
    return products?.filter((item) => `${item?.id}` === `${router?.query?.id}`)[0];
  }, [products, router?.query?.id]);

  const updateVariant = useCallback((item: IProductItemDuration) => {
    setVariant(item);
    setFormError(undefined);
  }, []);

  const addToCart = useCallback(
    (ev, type?: 'add-to-cart' | 'buy-now') => {
      ev.preventDefault();

      setFormError(undefined);

      if (!variant) {
        setFormError('Vui lòng chọn thời hạn');
        return;
      }

      const { id, price } = variant;

      dispatch(
        cartActions.addToCart({
          productId: productDetail?.id,
          quantity: 1,
          price,
          variants: id,
          product: productDetail,
        }),
      );

      if (type === 'add-to-cart') {
        toast.success('Sản phẩm đã được thêm vào Giỏ hàng!');
      }
    },
    [dispatch, productDetail, variant],
  );

  const buyNow = useCallback(
    (ev) => {
      ev.preventDefault();

      if (!variant) {
        setFormError('Vui lòng chọn thời hạn');
        return;
      }

      addToCart(ev, 'buy-now');

      router.push('/cart');
    },
    [addToCart, router, variant],
  );

  const initialVariant = useMemo(() => {
    const durations = productDetail?.durations;

    if (!durations || durations.length === 0) return;

    const durationLength = durations[durations.length - 1];

    return {
      durations,
      minPrice: durations[0]?.price,
      maxPrice: durationLength?.price,
    };
  }, [productDetail?.durations]);

  return { productDetail, variant, formError, updateVariant, addToCart, buyNow, initialVariant };
};
