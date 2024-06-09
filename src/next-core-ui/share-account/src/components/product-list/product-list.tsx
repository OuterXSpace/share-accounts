import { ProductCard } from '../product-card';
import { IProductListProps } from './product-list.type';

export const ProductList: React.FC<IProductListProps> = (props) => {
  const { sacProductData: productData, sacHomeContent } = props;

  const renderContent = (item: Record<string, any>) => {
    const { type = 'V1', id = '', title = '', description = '' } = item;

    switch (type) {
      case 'V1':
        return (
          <div className="col" key={id}>
            <div className="tt-home-page__section-header flex flex-col items-center gap-4">
              <h4 className="tt-home-page__section-heading m-0 pd-0 text-[30px] md:text-[44px] font-bold text-accent">
                {title}
              </h4>
              <div className="tt-home-page__section-subheading md:max-w-[40%] text-lg text-center font-extralight leading-[1.25em] text-white">
                {description}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-9">
              {productData?.products?.data?.map((product) => {
                const {
                  imageUrl = '',
                  imageAlt = '',
                  totalOrderNumber = 0,
                  categoryName = '',
                  linkUrl = '',
                  currency = 'VNĐ',
                  duration,
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
                    originalPrice={duration[0]?.price || 0}
                  />
                );
              })}
            </div>
          </div>
        );
      case 'V2':
        return (
          <div className="col" key={id}>
            <div className="flex flex-col items-center gap-4">
              <h4 className="text-[44px] font-bold text-accent">{title}</h4>
              <div className="text-lg text-center font-extralight leading-[1.25em] text-white">{description}</div>
            </div>

            <div className="section-body">
              <div className="flex flex-col">
                <div className="flex flex-col justify-center gap-2">
                  <h5 className="text-[20px] md:text-[44px] font-bold text-accent">{item?.content?.title}</h5>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="text-lg font-light leading-[1.7em] text-white">{item?.content?.description}</div>
                  <div className="flex items-center justify-center">
                    <img className="w-full h-full" src={item?.content?.imageUrl} alt={item?.content?.title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div />;
    }
  };
  return (
    <div className="container flex flex-col items-center mt-[30px] p-6 bg-[50% 50%]">
      <div className="row">
        {sacHomeContent?.contentBody?.map((item) => {
          return renderContent(item);
        })}
      </div>
    </div>
  );
};
