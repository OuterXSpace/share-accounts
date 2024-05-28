import { ProductDetailPageProps } from './product-detail.type';

import { Slider } from './slider/slider.component';
import IonIcon from '@reacticons/ionicons';
import { ProductCard } from '../../components/product-card';
import Head from 'next/head';
import { useMemo } from 'react';
import { FormattedCurrency } from '../../../../../components';
import { useRouter } from 'next/router';
import { notFound } from 'next/navigation';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css';

export const ProductDetailPage: React.FC<ProductDetailPageProps> = (props) => {
  const { routerId, wuiWelcomePopup, productData } = props;

  const router = useRouter();

  const productDetail = useMemo(() => {
    if (router?.query?.id) {
      return productData?.products?.data?.filter((item) => `${item?.id}` === `${router?.query?.id}`)[0];
    }
    return productData?.products?.data?.[0];
  }, [productData?.products, router?.query?.id]);

  if (!productDetail) {
    return notFound();
  }

  return (
    <>
      <Head>
        <meta property="og:title" content={productDetail?.title} />
        <meta property="og:url" content={productDetail?.linkUrl} />
        <meta property="og:image" />
        <title>{productDetail?.title}</title>
      </Head>
      <main className="pt-[120px]">
        <div className="container p-12">
          <div className="row">
            <div className="col-sm-6">
              <Slider data={productDetail?.imagesUrls} />
            </div>
            <div className="col-sm-6">
              <div className="flex flex-col gap-4 container">
                <div className="section font-sans text-[32px] font-semibold leading-snug text-accent">
                  {productDetail?.title}
                </div>
                <div className="section font-sans text-[20px] font-semibold leading-snug text-primary">
                  <FormattedCurrency value={productDetail?.price} isColored={false} /> {productDetail?.currency}
                </div>
                <div className="section">
                  <div className="font-sans text-[15px] font-semibold leading-snug text-gray-1">Thời hạn</div>
                  <div className="button-group flex flex-wrap gap-[15px] pt-2">
                    <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                      1 Tháng
                    </button>
                    <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                      2 Tháng
                    </button>
                    <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                      3 Tháng
                    </button>
                    <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                      4 Tháng
                    </button>
                    <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                      5 Tháng
                    </button>
                    <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                      6 Tháng
                    </button>
                    <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                      7 Tháng
                    </button>
                    <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                      8 Tháng
                    </button>
                    <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                      9 Tháng
                    </button>
                    <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                      10 Tháng
                    </button>
                    <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                      11 Tháng
                    </button>
                    <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                      12 Tháng
                    </button>
                  </div>
                </div>

                <div className="section">
                  <div className="font-sans text-[15px] font-semibold leading-snug text-gray-1 pb-2">Email</div>
                  <input
                    className="rounded-md block w-full border border-gray-4 bg-white text-sm px-4 py-2"
                    id="email"
                    type="email"
                    placeholder="Nhập email cần nâng cấp của bạn"
                  />
                </div>

                <div className="section">
                  <div className="button-group flex flex-wrap gap-[15px] pt-2">
                    <button
                      className="inline-flex items-center justify-center px-4 py-3 font-semibold text-sm text-white bg-success rounded-xl"
                      type="button"
                    >
                      <IonIcon className="pr-1 text-base" name="card-outline" />
                      Mua ngay
                    </button>
                    <button
                      className="inline-flex items-center justify-center px-4 py-3 font-semibold text-sm text-white bg-primary-dark rounded-xl"
                      type="button"
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
                {productData?.products?.data?.map((product) => {
                  const { imageUrl, imageAlt, title, price, totalOrderNumber, categoryName, linkUrl, currency } =
                    product;
                  return (
                    <ProductCard
                      key={linkUrl}
                      img={imageUrl}
                      alt={imageAlt}
                      title={title}
                      quantity={totalOrderNumber}
                      category={categoryName}
                      price={price}
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
