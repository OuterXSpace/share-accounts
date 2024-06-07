import { LandingPageButtonV1 } from '../../common';
import { NewCartTextV2Props } from './news-cart-text.type';

export const NewCartTextV2: React.FC<NewCartTextV2Props> = (props) => {
  const { data, className } = props;

  return (
    <section className={`section-01 ${className}`}>
      <div className="container pt-[84px] md:pt-[94px] lg:pt-[100px]">
        <div className="row">
          <div className="lg:col-6 col-12 lg:pr-[50px] pr-0">
            <div>
              <h3 className="text-[#f9fdfe] text-[2.125rem] lg:text-[3.25rem] font-bold font-montserrat leading-1.3">
                {data?.object?.title}
              </h3>
            </div>
          </div>
          <div className="lg:col-6 col-12 lg:pl-[50px] pl-0 lg:pb-[20px] pb-0">
            <div className="mb-[20px]">
              <p className="mb-[0.5rem] text-[#ffffffbf] text-[16px] leading-1.6">{data?.object?.description}</p>
            </div>
            <div className="transition-[background,border,border-radius,box-shadow,transform] duration-300">
              <LandingPageButtonV1
                link={data?.object?.button?.link}
                className="border-[0] pt-[15px] pr-[30px] pb-[15px] pl-[30px] text-1 font-montserrat leading-1 border-[#97c584] bg-[#97c584] border-solid border-t-2 border-r-2 border-l-2 border-b-2 font-montserrat font-bold text-16 text-1 leading-1 inline-block text-center transition-all duration-300 fill-[#fff]"
              >
                <span className="flex justify-center">
                  <span className="flex-grow order-10 inline-block"> {data?.object?.button?.label}</span>
                </span>
              </LandingPageButtonV1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
