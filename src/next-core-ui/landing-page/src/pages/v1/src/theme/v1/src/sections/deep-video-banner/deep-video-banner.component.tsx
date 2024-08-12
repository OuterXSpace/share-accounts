import { DeepVideoBannerProps } from './deep-video-banner.type';

export const DeepVideoBanner: React.FC<DeepVideoBannerProps> = (props) => {
  const { data, className } = props;

  return (
    <div
      className={`${className} home-hero overflow-hidden md:h-full md:aspect-[1650/673] w-full min-h-[390px] md:max-h-[673px] z-0 relative`}
    >
      <div
        className="md:aspect-video overflow-hidden absolute top-0 left-0 h-full w-full z-10"
        x-data={{
          video: data?.object?.video,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-50 z-10 bg-wm-gradient-yellow-blue" />
        <video
          className="object-cover w-full h-full !opacity-100"
          autoPlay
          playsInline
          loop
          muted
          poster={data?.object?.altVideo}
          x-effect="() => video && $el.load()"
        >
          <source src={data?.object?.video} type="video/mp4" />
        </video>
      </div>
      <div className="relative z-20 flex items-center h-full justify-center text-center text-white max-w-[1224px] mx-auto px-[10px] sm:px-10">
        <div className="md:pt-16">
          <h1 className="mb-3 type-alpha"> {data?.object?.text}</h1>
          <h3 className="md:mt-[52px] mt-4 type-paragraph lg:text-2xl lg:leading-8 w-full">
            {data?.object?.description}
          </h3>
          <a href={data?.object?.button?.link} className="relative mt-12 type-button-outline type-button-large">
            {data?.object?.button?.label}
          </a>
        </div>
      </div>
    </div>
  );
};
