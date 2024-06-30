import React from 'react';
import { IProductListShareAccountTheme01Props } from './product-list.sections.type';
import { ProductCard } from '../../components/product-card';

export const ProductListShareAccountTheme01: React.FC<IProductListShareAccountTheme01Props> = (props) => {
  const { data, products } = props;

  return (
    <div className="container flex flex-col items-center mt-[30px] p-6 bg-[50% 50%]">
      <div className="row">
        <div className="col">
          <div className="tt-home-page__section-header flex flex-col items-center gap-4">
            <h4 className="tt-home-page__section-heading m-0 pd-0 text-[30px] md:text-[44px] font-bold text-accent">
              {data?.object?.title}
            </h4>
            <div className="tt-home-page__section-subheading md:max-w-[40%] text-lg text-center font-extralight leading-[1.25em] text-white">
              {data?.object?.description}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-9">
            {products?.map((product) => {
              const {
                imageUrl = '',
                imageAlt = '',
                totalOrderNumber = 0,
                categoryName = '',
                linkUrl = '',
                currency = 'VNĐ',
                durations,
              } = product;
              return (
                <ProductCard
                  key={product?.id}
                  img={imageUrl}
                  alt={imageAlt}
                  title={product?.title}
                  quantity={totalOrderNumber}
                  category={categoryName}
                  linkUrl={linkUrl}
                  currency={currency}
                  originalPrice={durations?.[0]?.price || 0}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
