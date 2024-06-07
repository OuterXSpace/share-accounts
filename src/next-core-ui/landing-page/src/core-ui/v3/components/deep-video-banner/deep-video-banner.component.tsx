import { LandingPageButtonV1 } from '../../common';
import { DeepVideoBannerV3Props } from './deep-video-banner.type';

/* eslint-disable jsx-a11y/media-has-caption */
export const DeepVideoBannerV3: React.FC<DeepVideoBannerV3Props> = (props) => {
  const { data, className } = props;

  return (
    <section
      className={`transition-[background,border,border-radius,box-shadow] duration-300 relative ${className} pt-[250px] pb-[150px]`}
    >
      <div className="w-full transition-opacity duration-1000 pointer-events-none overflow-hidden z-0 direction-ltr">
        <video
          autoPlay
          src={data?.object?.video}
          className="w-full h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 leading-1 border-none max-w-full overflow-clip-margin overflow-clip"
        />
        <div className="bg-black/75 transition-[background,border-radius,opacity] duration-300 h-full w-full top-0 left-0 absolute" />
      </div>
      <div className="container px-[20px]">
        <div className="flex mx-auto relative">
          <div className="relative w-full flex-wrap content-start">
            <div className="mt-0 lg:mt-[50px] pb-[50px]">
              <div className="transition-[background,border,border-radius,box-shadow,transform] duration-300">
                <h1 className="text-[#f9fdfe] leading-[1.4] lg:text-[5.125rem] text-[52px] font-bold font-montserrat">
                  {data?.object?.text}
                </h1>
              </div>
            </div>
            <div className="w-full">
              <div className="transition-[background,border,border-radius,box-shadow,transform] duration-300">
                <LandingPageButtonV1 link={data?.object?.button?.link}>
                  <span className="flex justify-center">
                    <span className="flex-grow order-10 inline-block">{data?.object?.button?.label}</span>
                  </span>
                </LandingPageButtonV1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
