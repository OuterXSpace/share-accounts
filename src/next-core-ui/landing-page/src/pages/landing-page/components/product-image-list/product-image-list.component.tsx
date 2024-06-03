import { ProductImageListProps } from './product-image-list.type';

export const ProductImageList: React.FC<ProductImageListProps> = (props) => {
  const { data, className } = props;

  return (
    <section className={`section-01 ${className}`}>
      <div className="container pt-[84px] md:pt-[94px] lg:pt-[100px]">
        <div className="row">
          <div className="col-sm-12 w-full">
            <div className="pb-[80px] flex items-center justify-center">
              <h2 className="leading-1.3 text-[#f9fdfe] text-[32px] lg:text-[3.75rem] font-bold font-montserrat">
                {data?.object?.title}
              </h2>
            </div>
          </div>
          <div className="col-sm-12 container px-[20px]">
            <div className="row">
              {data?.object?.array?.map((item) => {
                const { id, title, description, imageUrl } = item;
                return (
                  <div key={id} className="col-sm-6 xl:col-sm-4 p-[10px]">
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
