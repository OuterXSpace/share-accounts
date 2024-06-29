/* eslint-disable react-hooks/rules-of-hooks */
import { ProductDetailPageShareAccountTheme01Props } from './product-detail.type';
import { Slider } from './slider/slider.component';
import IonIcon from '@reacticons/ionicons';
import { ProductCard } from '../../components/product-card';
import Head from 'next/head';
import { FormattedCurrency, NotFound } from '../../../../../../../../../../../components';
import { useProductDetail } from './use-product-detail';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css';

export const ProductDetailPageShareAccountTheme01: React.FC<ProductDetailPageShareAccountTheme01Props> = (props) => {
  const { products } = props;

  const { productDetail, variant, formError, updateVariant, addToCart, buyNow, initialVariant } = useProductDetail({
    products,
  });

  if (!productDetail) {
    return <NotFound />;
  }

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
              <Slider data={productDetail?.imagesUrls} />
            </div>
            <div className="md:col-6">
              <div className="flex flex-col gap-4 container">
                <div className="section font-sans text-[20px] md:text-[32px] font-semibold leading-snug text-accent">
                  {productDetail?.title}
                </div>

                {variant ? (
                  <div className="flex flex-row section font-sans text-[20px] font-semibold leading-snug text-primary gap-3">
                    <div>
                      <FormattedCurrency value={variant?.price} isColored={false} /> {productDetail?.currency}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-row section font-sans text-[20px] font-semibold leading-snug text-primary gap-3">
                    <div>
                      <FormattedCurrency value={initialVariant?.minPrice} isColored={false} /> {productDetail?.currency}
                    </div>
                    <span>-</span>
                    <div>
                      <FormattedCurrency value={initialVariant?.maxPrice} isColored={false} /> {productDetail?.currency}
                    </div>
                  </div>
                )}

                <div className="section">
                  <div className="font-sans text-[15px] font-semibold leading-snug text-gray-1">Thời hạn</div>
                  <div className="button-group flex flex-wrap gap-[15px] pt-2">
                    {initialVariant?.durations.map((item) => {
                      const { id, label } = item;
                      return (
                        <button
                          key={id}
                          className={`font-semibold px-3 py-2 text-xs  rounded-xl hover:bg-red-700 hover:text-white transition ${
                            variant?.id === id ? 'bg-red-700 text-white' : 'text-black bg-white'
                          }`}
                          type="button"
                          onClick={() => updateVariant(item)}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                  {formError && (
                    <div className="pt-[10px] font-sans text-[10px] font-semibold leading-snug text-accent">
                      {formError}
                    </div>
                  )}
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
                      className="cursor-pointer inline-flex items-center justify-center px-4 py-3 font-semibold text-sm text-white 
                        bg-success hover:bg-success-darker break-words transition durations-200
                        rounded-xl"
                      type="submit"
                      onClick={buyNow}
                    >
                      <IonIcon className="pr-1 text-base" name="card-outline" />
                      Mua ngay
                    </button>
                    <button
                      className="cursor-pointer inline-flex items-center justify-center px-4 py-3 font-semibold text-sm text-white 
                        bg-primary-dark hover:bg-primary-darker break-words transition durations-200
                        rounded-xl"
                      type="submit"
                      onClick={addToCart}
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
                  const { imageUrl, imageAlt, title, totalOrderNumber, categoryName, linkUrl, currency, durations } =
                    product;
                  return (
                    <ProductCard
                      key={linkUrl}
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
        </div>
      </main>
    </>
  );
};
