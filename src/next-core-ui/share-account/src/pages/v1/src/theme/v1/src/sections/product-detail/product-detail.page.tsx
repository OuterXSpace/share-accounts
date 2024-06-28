/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { IProductItemDuration, ProductDetailPageShareAccountTheme01Props } from './product-detail.type';
import { Slider } from './slider/slider.component';
import IonIcon from '@reacticons/ionicons';
import { ProductCard } from '../../components/product-card';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { CartContext } from '../../context';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css';
import { FormattedCurrency } from '../../../../../../../../../../../components';

export const ProductDetailPageShareAccountTheme01: React.FC<ProductDetailPageShareAccountTheme01Props> = (props) => {
  const { products } = props;

  const [firstPriceDuration, setFirstPriceDuration] = useState<number>(0);

  const [lastPriceDuration, setLastPriceDuration] = useState<number>(0);

  const [selectedDuration, setSelectedDuration] = useState<IProductItemDuration | null>(null);

  const { addItemToCart } = useContext(CartContext);

  const router = useRouter();

  const productDetail = useMemo(() => {
    return products?.filter((item) => `${item?.id}` === `${router?.query?.id}`)[0];
  }, [products, router?.query?.id]);

  if (!productDetail) {
    return <div>Product not found</div>;
  }

  const handleSelectedDuration = (durationItem: IProductItemDuration) => {
    setSelectedDuration(durationItem);
  };

  const handleGetFirstAndLastPriceDuration = useCallback(() => {
    const duration = productDetail?.duration;
    if (!duration || duration.length === 0) return;
    const firstPrice = duration[0]?.price;
    const lastItem = duration[duration.length - 1];
    const lastPrice = lastItem?.price;

    setFirstPriceDuration(firstPrice);
    setLastPriceDuration(lastPrice);
  }, [productDetail?.duration]);

  useEffect(() => {
    handleGetFirstAndLastPriceDuration();
  }, [handleGetFirstAndLastPriceDuration]);

  const handleAddItemToCart = useCallback(() => {
    const payload = {
      id: selectedDuration.id,
      linkUrl: productDetail.linkUrl,
      imageUrl: productDetail.imageUrl,
      imageAlt: productDetail.imageAlt,
      title: productDetail.title,
      durationLabel: selectedDuration.label,
      originalPrice: selectedDuration.price,
    };
    addItemToCart(payload);
  }, [addItemToCart, productDetail, selectedDuration?.id, selectedDuration?.label, selectedDuration?.price]);

  const handleBuyNowItem = useCallback(() => {
    handleAddItemToCart();
    router.push('/cart');
  }, [handleAddItemToCart, router]);

  return (
    <>
      <Head>
        <meta property="og:title" content={productDetail?.title} />
        <meta property="og:url" content={productDetail?.linkUrl} />
        <meta property="og:image" />
        <title>{productDetail?.title}</title>
      </Head>
      <main className="product-detail">
        <div className="container py-[16px]">
          <div className="row flex flex-nowrap flex-col md:flex-row gap-4 md:gap-0">
            <div className="md:col-6 px-[16px] w-auto">
              {/* slider product detail */}
              <Slider data={productDetail?.imagesUrls} />
            </div>
            <div className="md:col-6">
              <div className="flex flex-col gap-4 container">
                <div className="section font-sans text-[20px] md:text-[32px] font-semibold leading-snug text-accent">
                  {productDetail?.title}
                </div>
                {/* range price duration */}
                {selectedDuration ? (
                  <div className="flex flex-row section font-sans text-[20px] font-semibold leading-snug text-primary gap-3">
                    <div>
                      <FormattedCurrency value={selectedDuration?.price} isColored={false} /> {productDetail?.currency}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-row section font-sans text-[20px] font-semibold leading-snug text-primary gap-3">
                    <div>
                      <FormattedCurrency value={firstPriceDuration} isColored={false} /> {productDetail?.currency}
                    </div>
                    <span>-</span>
                    <div>
                      <FormattedCurrency value={lastPriceDuration} isColored={false} /> {productDetail?.currency}
                    </div>
                  </div>
                )}
                {/* duration */}
                <div className="section">
                  <div className="font-sans text-[15px] font-semibold leading-snug text-gray-1">Thời hạn</div>
                  <div className="button-group flex flex-wrap gap-[15px] pt-2">
                    {productDetail?.duration.map((item) => {
                      const { id, label } = item;
                      return (
                        <button
                          key={id}
                          className={`font-semibold px-3 py-2 text-xs  rounded-xl hover:bg-red-700 hover:text-white transition ${
                            selectedDuration?.id === id ? 'bg-red-700 text-white' : 'text-black bg-white'
                          }`}
                          type="button"
                          onClick={() => handleSelectedDuration(item)}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* upgrade account */}
                {/* <div className="section">
                  <div className="font-sans text-[15px] font-semibold leading-snug text-gray-1 pb-2">Email</div>
                  <input
                    className="rounded-md block w-full border border-gray-4 bg-white text-sm px-4 py-2"
                    id="email"
                    type="email"
                    placeholder="Nhập email cần nâng cấp của bạn"
                  />
                </div> */}

                <div className="section">
                  <div className="button-group flex flex-wrap gap-[15px] pt-2">
                    <button
                      className={`inline-flex items-center justify-center px-4 py-3 font-semibold text-sm text-white 
                        bg-success hover:bg-success-darker break-words transition duration-200
                        rounded-xl ${selectedDuration ? 'opacity-100' : 'opacity-50'}`}
                      onClick={handleBuyNowItem}
                    >
                      <IonIcon className="pr-1 text-base" name="card-outline" />
                      Mua ngay
                    </button>
                    <button
                      className={`inline-flex items-center justify-center px-4 py-3 font-semibold text-sm text-white 
                        bg-primary-dark hover:bg-primary-darker break-words transition duration-200
                        rounded-xl  ${selectedDuration ? 'opacity-100' : 'opacity-50'}`}
                      type="button"
                      onClick={handleAddItemToCart}
                    >
                      <IonIcon className="pr-1 text-base" name="cart-outline" />
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container product-description">
          <div className="row">
            <div className="col">
              <div className="font-sans text-[20px] font-semibold leading-snug text-gray-1">MÔ TẢ SẢN PHẨM</div>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 pt-9">
                <div dangerouslySetInnerHTML={{ __html: productDetail?.description || '' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="container product-suggestion pb-10">
          <div className="row">
            <div className="col">
              <div className="font-sans text-[20px] font-semibold leading-snug text-gray-1">SẢN PHẨM TƯƠNG TỰ</div>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 pt-9">
                {products?.map((product) => {
                  const { imageUrl, imageAlt, title, totalOrderNumber, categoryName, linkUrl, currency, duration } =
                    product;
                  return (
                    <ProductCard
                      key={linkUrl}
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
        </div>
      </main>
    </>
  );
};
