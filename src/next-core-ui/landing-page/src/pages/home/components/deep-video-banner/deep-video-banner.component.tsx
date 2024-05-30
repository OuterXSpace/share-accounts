import { DeepVideoBannerProps } from './deep-video-banner.type';

/* eslint-disable jsx-a11y/media-has-caption */
export const DeepVideoBanner: React.FC<DeepVideoBannerProps> = () => {
  return (
    <section className=" mb-[150px] transition-[background,border,border-radius,box-shadow] duration-300 py-[250px] pb-[150px] relative">
      <div className="w-full h-[100vh] transition-opacity duration-1000 pointer-events-none top-0 left-0 absolute overflow-hidden z-0 direction-ltr">
        <video
          autoPlay
          src="https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/Pexels-Ron-Lach-8100336-compress.mp4"
          className="w-full h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 leading-1 border-none max-w-full overflow-clip-margin overflow-clip"
        />
        <div className="bg-black/75 transition-[background,border-radius,opacity] duration-300 h-full w-full top-0 left-0 absolute" />
      </div>
      <div className="container">
        <div className="flex mx-auto relative">
          <div className="relative w-full flex-wrap align-content-start">
            <div className="mt-[50px] pb-[50px]">
              <div className="transition-[background,border,border-radius,box-shadow,transform] duration-300">
                <h1 className="text-[#f9fdfe] leading-[1.4] lg:text-[5.125rem] text-[2.125rem] font-bold font-montserrat">
                  Turning Videos to a Cinematic Masterpiece
                </h1>
              </div>
            </div>
            <div className="w-full">
              <div className="transition-[background,border,border-radius,box-shadow,transform] duration-300">
                <a
                  href=""
                  className="border-[0] pt-[15px] pr-[30px] pb-[15px] pl-[30px] text-1 font-montserrat font-bold leading-1 border-[#97c584] bg-[#97c584] border-solid border-t-2 border-r-2 border-l-2 border-b-2 font-montserrat font-bold text-16 text-1 leading-1 inline-block text-center transition-all duration-300 fill-[#fff]"
                >
                  <span className="flex justify-center">
                    <span className="flex-grow order-10 inline-block">Contact Me</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
