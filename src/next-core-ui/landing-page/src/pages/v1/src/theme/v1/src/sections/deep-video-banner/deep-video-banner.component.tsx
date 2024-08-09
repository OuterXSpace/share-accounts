import { LandingPageButtonV1 } from '../../common';
import { DeepVideoBannerProps } from './deep-video-banner.type';

/* eslint-disable jsx-a11y/media-has-caption */
export const DeepVideoBanner: React.FC<DeepVideoBannerProps> = (props) => {
  const { data, className } = props;

  return (
    <section
      className={`transition-[background,border,border-radius,box-shadow] duration-300 relative ${className} pt-[250px] pb-[150px]`}
    >
      <div className="w-full transition-opacity duration-1000 pointer-events-none overflow-hidden z-0 direction-ltr">
        <video
          autoPlay
          playsInline
          loop
          muted
          src={data?.object?.video}
          className="w-full h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 leading-1 border-none max-w-full overflow-clip-margin overflow-clip"
          poster="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/homepageimagestatic.jpg"
        >
          <source
            type="video/mp4"
            src="https://player.vimeo.com/progressive_redirect/playback/855211636/rendition/1080p/file.mp4?loc=external&amp;signature=92dd156f8cd52b52bf022f65bd5edde13114e394290532b5e15dae49a4f988b1"
          />
        </video>
        <div className="bg-gradient-deep-video opacity-50 transition-[background,border-radius,opacity] duration-300 h-full w-full top-0 left-0 absolute" />
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
