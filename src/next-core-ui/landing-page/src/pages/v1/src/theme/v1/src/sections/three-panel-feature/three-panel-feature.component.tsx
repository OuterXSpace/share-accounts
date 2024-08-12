import { IThreePanelFeatureSectionProps } from './three-panel-feature.type';

export const ThreePanelFeatureSection: React.FC<IThreePanelFeatureSectionProps> = (props) => {
  return (
    <div id="three-panel-feature" className="thinkers-doers-makers overflow-hidden">
      <div className="mdlg:flex relative mdlg:h-[440px] mdxl:h-[586px] overflow-hidden mdxl:w-screen">
        <div className="flex items-stretch h-[250px] md:h-[350px] mdlg:h-auto mdxl:items-end group relative border-animate-base border-animate-horiz border-animate-vert after:border-b after:left-0 after:bottom-0 mdlg:before:border-r mdlg:before:top-0 mdlg:before:border-t mdlg:before:right-0 mdlg:w-1/4 cursor-pointer inview">
          <div className="w-2/3 gradient-magenta-blue mdlg:group-hover:before:z-[1] mdlg:group-hover:after:z-[1] before:opacity-0  after:opacity-0 mdlg:group-hover:before:opacity-100 mdlg:group-hover:after:opacity-100 before:duration-500 after:duration-500 mdlg:group-hover:text-white mdlg:w-full p-4 md:py-8 mdlg:p-8 mdxl:p-12">
            <a href="/services" className="z-10" target="">
              <div className="flex flex-col relative z-10 justify-between mdxl:h-1/2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="mt-0 md:mb-1 mdlg:mb-2 type-iota text-wm-black mdlg:group-hover:text-white">
                      WE ARE
                    </h3>
                    <h2 className="type-delta text-wm-black mdlg:group-hover:text-white mb-0 md:mb-6">Thinkers</h2>
                  </div>
                  <span
                    className="block rounded-full mdlg:group-hover:bg-wm-gradient-yellow flex items-center justify-center w-7 h-7"
                    role="presentation"
                  >
                    <svg viewBox="0 0 18 14" style={{ width: 14, height: 11 }} xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.5.636L17.864 7l-1.06 1.06h-.001L11.5 13.364l-1.06-1.06 4.551-4.555L0 7.75v-1.5l14.991-.001-4.552-4.552L11.5.636z"
                        fill=""
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <p className="text-sm md:type-paragraph-sm text-wm-black mdlg:group-hover:text-white delay-[50ms] duration-100 z-[2]">
                  A strategy that’s custom-built for your business. We meet you where you’re at on your digital journey.
                </p>
              </div>
            </a>
          </div>
          <div className="w-1/3 mdlg:absolute mdlg:right-[-75vw] mdlg:top-0 mdlg:overflow-hidden mdlg:w-[25vw] mdlg:group-hover:block mdlg:h-full">
            {/* https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/thinkers_826x1436.jpg?cx=0.5&amp;cy=0.5&amp;cw=826&amp;ch=1436&amp;hash=A472FF3674C7B35D7161D30B92A3F240 */}
            <img
              className="object-cover h-full w-full object-center"
              src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/thinkers_826x1436.jpg?cx=0.5&cy=0.5&cw=826&ch=1436&hash=A472FF3674C7B35D7161D30B92A3F240"
              alt="woman employee writing on a board in an office"
              width={826}
              height={1436}
            />
          </div>
        </div>
        <div className="flex items-stretch h-[250px] md:h-[350px] mdlg:h-auto mdxl:items-end relative border-animate-base border-animate-horiz border-animate-vert after:border-b after:right-0 after:bottom-0 mdlg:before:border-r mdlg:before:top-0 mdlg:before:border-t mdlg:before:right-0 mdlg:w-1/4 group cursor-pointer inview">
          <div className="w-2/3 gradient-magenta-blue mdlg:group-hover:before:z-[1] mdlg:group-hover:after:z-[1] before:opacity-0  after:opacity-0 mdlg:group-hover:before:opacity-100 mdlg:group-hover:after:opacity-100 before:duration-500 after:duration-500 mdlg:group-hover:text-white mdlg:w-full p-4 md:py-8 mdlg:p-8 mdxl:p-12">
            <a href="/how-we-work" className="z-10" target="">
              <div className="flex flex-col relative z-10 justify-between mdxl:h-1/2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="mt-0 md:mb-1 mdlg:mb-2 type-iota text-wm-black mdlg:group-hover:text-white">
                      WE ARE
                    </h3>
                    <h2 className="type-delta text-wm-black mdlg:group-hover:text-white mb-0 md:mb-6">Doers</h2>
                  </div>
                  <span
                    className="block rounded-full mdlg:group-hover:bg-wm-gradient-yellow flex items-center justify-center w-7 h-7"
                    role="presentation"
                  >
                    <svg viewBox="0 0 18 14" style={{ width: 14, height: 11 }} xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.5.636L17.864 7l-1.06 1.06h-.001L11.5 13.364l-1.06-1.06 4.551-4.555L0 7.75v-1.5l14.991-.001-4.552-4.552L11.5.636z"
                        fill=""
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <p className="text-sm md:type-paragraph-sm text-wm-black mdlg:group-hover:text-white delay-[50ms] duration-100 z-[2]">
                  We’re problem solvers that thrive on sweat equity. We work side-by-side with you to untangle the most
                  complex problems across people, process and technology - fast.
                </p>
              </div>
            </a>
          </div>
          <div className="w-1/3 mdlg:absolute mdlg:right-[-50vw] mdlg:top-0 mdlg:hidden mdlg:overflow-hidden mdlg:w-[25vw] mdlg:group-hover:block mdlg:h-full">
            {/* https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/doers_826x1436.jpg?cx=0.5&amp;cy=0.5&amp;cw=826&amp;ch=1436&amp;hash=76FF6F4924666D575111589F27D68145 */}
            <img
              className="object-cover h-full w-full object-center"
              src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/doers_826x1436.jpg?cx=0.5&cy=0.5&cw=826&ch=1436&hash=76FF6F4924666D575111589F27D68145"
              alt="colleagues sitting on stairs in their office looking at a laptop"
              width={826}
              height={1436}
            />
          </div>
        </div>
        <div className="flex items-stretch h-[250px] md:h-[350px] mdlg:h-auto mdxl:items-end relative border-animate-base border-animate-horiz border-animate-vert after:border-b after:left-0 after:bottom-0 mdlg:before:border-r mdlg:before:top-0 mdlg:before:border-t mdlg:before:right-0 mdlg:w-1/4 group cursor-pointer inview">
          <div className="w-2/3 gradient-magenta-blue mdlg:group-hover:before:z-[1] mdlg:group-hover:after:z-[1] before:opacity-0  after:opacity-0 mdlg:group-hover:before:opacity-100 mdlg:group-hover:after:opacity-100 before:duration-500 after:duration-500 mdlg:group-hover:text-white mdlg:w-full p-4 md:py-8 mdlg:p-8 mdxl:p-12">
            <a href="/services/products-experiences" className="z-10" target="">
              <div className="flex flex-col relative z-10 justify-between mdxl:h-1/2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="mt-0 md:mb-1 mdlg:mb-2 type-iota text-wm-black mdlg:group-hover:text-white">
                      WE ARE
                    </h3>
                    <h2 className="type-delta text-wm-black mdlg:group-hover:text-white mb-0 md:mb-6">Makers</h2>
                  </div>
                  <span
                    className="block rounded-full mdlg:group-hover:bg-wm-gradient-yellow flex items-center justify-center w-7 h-7"
                    role="presentation"
                  >
                    <svg viewBox="0 0 18 14" style={{ width: 14, height: 11 }} xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.5.636L17.864 7l-1.06 1.06h-.001L11.5 13.364l-1.06-1.06 4.551-4.555L0 7.75v-1.5l14.991-.001-4.552-4.552L11.5.636z"
                        fill=""
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <p className="text-sm md:type-paragraph-sm text-wm-black mdlg:group-hover:text-white delay-[50ms] duration-100 z-[2]">
                  We design and build products and experiences that delight users.
                </p>
              </div>
            </a>
          </div>
          <div className="w-1/3 mdlg:absolute mdlg:right-[-25vw] mdlg:top-0 mdlg:hidden mdlg:overflow-hidden mdlg:w-[25vw] mdlg:group-hover:block mdlg:h-full">
            {/* https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/makers_826x1436.jpg?cx=0.5&amp;cy=0.5&amp;cw=826&amp;ch=1436&amp;hash=AD1FCFB325241F7C8D78B55A86A42219 */}
            <img
              className="object-cover h-full w-full object-center"
              src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/makers_826x1436.jpg?cx=0.5&cy=0.5&cw=826&ch=1436&hash=AD1FCFB325241F7C8D78B55A86A42219"
              alt="man putting a sticky note up on a board"
              width={826}
              height={1436}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// export const ThreePanelFeatureSection2: React.FC<IThreePanelFeatureSectionProps> = (props) => {
//   const { data, className } = props;

//   return (
//     <div className="w-1/3 mdlg:absolute mdlg:right-[-75vw] mdlg:top-0 mdlg:overflow-hidden mdlg:w-[25vw] mdlg:group-hover:block mdlg:h-full">
//       <img
//         className="object-cover h-full w-full object-center"
//         src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/thinkers_826x1436.jpg?cx=0.5&cy=0.5&cw=826&ch=1436&hash=A472FF3674C7B35D7161D30B92A3F240"
//         alt="woman employee writing on a board in an office"
//         width="826"
//         height="1436"
//       />
//     </div>
//   );
// };
