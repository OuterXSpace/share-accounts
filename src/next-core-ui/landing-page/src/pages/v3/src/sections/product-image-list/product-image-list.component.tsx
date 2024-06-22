import { ProductImageListV3Props } from './product-image-list.type';

export const ProductImageListV3: React.FC<ProductImageListV3Props> = (props) => {
  const { data, className } = props;

  return (
    <section className={`section-01 ${className}`}>
      <div className="container pt-0 md:pt-[94px] lg:pt-[100px]">
        <div className="row">
          <div className="col-12">
            <div className="pb-[80px] flex items-center justify-center">
              <h2 className="leading-1.3 text-[#f9fdfe] text-[44px] lg:text-[3.75rem] font-bold font-montserrat">
                {data?.object?.title}
              </h2>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              {data?.object?.array?.map((item) => {
                const { id, title, description, imageUrl } = item;
                return (
                  <div key={id} className="col-12 lg:col-4 md:lg:col-6 pr-[10px] last:pr-0">
                    <div className="video mb-[20px]">
                      <img width="100%" height="219" src={imageUrl} alt={title} />
                    </div>
                    <div className="content">
                      <div className="mb-[70px]">
                        <div className="text-[#f9fdfe] text-[1.875rem] leading-1.25 font-bold font-montserrat uppercase">
                          <h6 className="pb-[10px]">{title}</h6>
                        </div>
                        <p className="mb-[0.5rem] text-[#ffffffbf] text-[16px] leading-1.6">{description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
