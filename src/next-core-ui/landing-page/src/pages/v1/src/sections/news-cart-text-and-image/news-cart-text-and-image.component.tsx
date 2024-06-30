import { NewCartTextAndImageProps } from './news-cart-text-and-image.type';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const NewCartTextAndImage: React.FC<NewCartTextAndImageProps> = (props) => {
  const { data, className } = props;

  return (
    <section className={`section ${className}`}>
      <div className="container">
        <div className="row flex flex-col xl:flex-row md:px-0 pt-[84px] md:pt-[94px] lg:pt-[100px]">
          <div className="xl:col-6">
            <div className="pt-[50px]">
              <LazyLoadImage
                src={data?.object?.imageUrl}
                className="w-full md:max-w-[676px] lg:max-w-[550px]"
                alt="marker"
                effect="blur"
              />
            </div>
          </div>
          <div className="xl:col-6 pt-[50px]">
            {data?.object?.array?.map((item) => {
              const { id, title, description } = item;
              return (
                <div key={id} className="mb-[70px]">
                  <div className="text-[#f9fdfe] text-1.125 leading-1.25 font-bold font-montserrat uppercase">
                    <h6 className="pb-[10px]">{title}</h6>
                  </div>
                  <p className="mb-[0.5rem] text-[#ffffffbf] text-[16px] leading-1.6">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
