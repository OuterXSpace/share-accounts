import Link from 'next/link';
import { IPerspectivesGridSectionProps } from './three-panel-feature.type';
import { useState } from 'react';

export const PerspectivesGridSection: React.FC<IPerspectivesGridSectionProps> = (props) => {
  const { data, className } = props;

  const [inview1, setInview1] = useState(false);
  const [inview2, setInview2] = useState(false);
  const [inview3, setInview3] = useState(false);
  const [inview4, setInview4] = useState(false);
  const [inview5, setInview5] = useState(false);
  const [inview6, setInview6] = useState(false);
  const [inview7, setInview7] = useState(false);
  const [inview8, setInview8] = useState(false);

  return (
    <div id="perspectives-grid" className="perspectives">
      <div className="relative bleed-wrapper overflow-hidden">
        <div className="grid-wrapper lg:px-0">
          <div
            className={`grid grid-flow-row grid-cols-4 lg:grid-cols-8 border-animate-horiz border-animate-base after:border-t after:top-0 border-animate-bleed-rtl ${
              inview1 ? 'inview' : ''
            }`}
          >
            <div
              className={`order-1 col-span-4 pt-10 pb-12 mb-8 lg:col-span-3 tex-wm-black lg:py-10 lg:pl-4 grid:pl-0 lg:px-8 lg:m-0 border-animate-base border-animate-vert after:top-0 lg:after:border-t-0 lg:after:border-r after:right-0 before:right-0 ${
                inview2 ? 'inview' : ''
              }`}
              onClick={() => setInview2(true)}
            >
              <div className="relative h-full lg:flex lg:flex-col lg:justify-between lg:items-start lg:pr-4">
                <div>
                  <h2 className="mb-4 type-zeta text-wm-black">Perspectives</h2>
                  <p className="pb-8 type-epsilon text-wm-black">People-led solutions, powered by technology</p>
                </div>
                <Link href="/perspectives" className="type-button" target="">
                  See all Perspectives
                </Link>
              </div>
            </div>
            <div
              className={`order-4 col-span-4 pb-8 mb-8 lg:col-span-2 text-wm-black lg:py-10 lg:order-2 border-animate-horiz border-animate-base after:border-b after:bottom-0 after:left-0 lg:px-8 lg:m-0 ${
                inview3 ? 'inview' : ''
              }`}
              onClick={() => setInview3(true)}
            >
              <div className="story-card relative group">
                <Link
                  href="/perspectives/point-of-view/west-monroes-take-on-crowdstrike-microsoft-outage"
                  className="lg:flex lg:flex-col lg:justify-between lg:items-start lg:h-full"
                >
                  <span
                    className="block rounded-full absolute top-[-2px] right-0 group-hover:bg-wm-gradient-yellow flex items-center justify-center w-7 h-7"
                    role="presentation"
                  >
                    <svg
                      viewBox="0 0 18 14"
                      style={{ width: '14px', height: '11px' }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5.636L17.864 7l-1.06 1.06h-.001L11.5 13.364l-1.06-1.06 4.551-4.555L0 7.75v-1.5l14.991-.001-4.552-4.552L11.5.636z"
                        fill=""
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="block type-iota text-wm-black mb-2">Point of View</span>
                  <div>
                    <time className="type-paragraph-sm text-wm-black font-medium block mb-2">July 2024</time>
                    <h2 className="type-theta underline-offset-4 underline decoration-transparent group-hover:decoration-current transition-colors duration-300 decoration-1 text-wm-black mb-2">
                      West Monroe’s take on the CrowdStrike-Microsoft outage
                    </h2>
                  </div>
                </Link>
              </div>
            </div>
            <div className="order-3 hidden col-span-3 lg:block">
              <div className="h-full w-full min-h-[25rem] relative">
                <div className="lg:absolute grid:-right-[13%] lg:top-0 h-full w-full grid:w-[113%]">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/services-images/cybersecurity/cyber_woman_screens_stock.jpg?cx=0.5&amp;cy=0.5&amp;cw=480&amp;ch=480&amp;hash=050B6C108F111490BA4F915B0AEC4227"
                    alt=""
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div
              className={`order-2 col-span-4 pb-8 mb-8 lg:col-span-3 lg:row-span-2 lg:row-start-2 lg:order-4 lg:p-0 lg:m-0 border-animate-horiz border-animate-base after:border-b after:bottom-0 after:left-0 lg:after:border-0 ${
                inview4 ? 'inview' : ''
              }`}
              onClick={() => setInview4(true)}
            >
              <div className="h-full w-full lg:min-h-[50rem] relative aspect-[360/268] lg:aspect-auto">
                <div className="lg:absolute grid:-left-[13%] lg:top-0 h-full w-full grid:w-[113%]">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/perspective-images/report/hero_2024_trend-to-watch504x1440.png?cx=0.5&amp;cy=0.5&amp;cw=480&amp;ch=480&amp;hash=ADE27ED99F2000C20366C3E5E290869D"
                    alt="https://cdn.westmonroe.com/-/media/west-monroe-images/perspective-images/report/hero_2024_trend-to-watch504x1440.png?cx=0.5&amp;cy=0.5&amp;cw=480&amp;ch=480&amp;hash=ADE27ED99F2000C20366C3E5E290869D"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div
              className={`order-3 col-span-4 pb-8 mb-8 lg:col-span-3 text-wm-black lg:py-10 lg:row-start-3 lg:order-6 lg:px-8 lg:m-0 border-animate-horiz border-animate-vert border-animate-base after:border-b after:bottom-0 after:right-0 lg:after-right-auto lg:after:left-0 ${
                inview5 ? 'inview' : ''
              }`}
              onClick={() => setInview5(true)}
            >
              <div className="story-card relative group">
                <Link
                  href="/perspectives/report/tech-trends"
                  className="lg:flex lg:flex-col lg:justify-between lg:items-start lg:h-full"
                >
                  <span
                    className="block rounded-full absolute top-[-2px] right-0 group-hover:bg-wm-gradient-yellow flex items-center justify-center w-7 h-7"
                    role="presentation"
                  >
                    <svg
                      viewBox="0 0 18 14"
                      style={{ width: '14px', height: '11px' }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5.636L17.864 7l-1.06 1.06h-.001L11.5 13.364l-1.06-1.06 4.551-4.555L0 7.75v-1.5l14.991-.001-4.552-4.552L11.5.636z"
                        fill=""
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="block type-iota text-wm-black mb-2">Report</span>
                  <div>
                    <time className="type-paragraph-sm text-wm-black font-medium block mb-2">July 2024</time>
                    <h2 className="type-theta underline-offset-4 underline decoration-transparent group-hover:decoration-current transition-colors duration-300 decoration-1 text-wm-black mb-2">
                      Tech Trends to Watch in 2024
                    </h2>
                    <p className="type-paragraph">
                      The 5 biggest tech trends and what they mean for your organization—plus actions to take now
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className={`order-7 col-span-4 pb-8 mb-8 lg:col-span-2 text-wm-black lg:py-10 lg:col-start-7 lg:row-start-2 lg:order-6 lg:relative lg:px-8 lg:m-0 border-animate-bleed-ltr border-animate-horiz border-animate-vert border-animate-base after:border-b lg:after:border-l lg:after:h-full after:bottom-0 after:right-0 lg:after:right-auto lg:after:left-0 ${
                inview6 ? 'inview' : ''
              }`}
              onClick={() => setInview6(true)}
            >
              <div className="story-card relative group">
                <Link
                  href="/perspectives/point-of-view/your-workforce-is-using-genai-wrong"
                  className="lg:flex lg:flex-col lg:justify-between lg:items-start lg:h-full"
                >
                  <span
                    className="block rounded-full absolute top-[-2px] right-0 group-hover:bg-wm-gradient-yellow flex items-center justify-center w-7 h-7"
                    role="presentation"
                  >
                    <svg
                      viewBox="0 0 18 14"
                      style={{ width: '14px', height: '11px' }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5.636L17.864 7l-1.06 1.06h-.001L11.5 13.364l-1.06-1.06 4.551-4.555L0 7.75v-1.5l14.991-.001-4.552-4.552L11.5.636z"
                        fill=""
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="block type-iota text-wm-black mb-2">Point of View</span>
                  <div>
                    <time className="type-paragraph-sm text-wm-black font-medium block mb-2">June 2024</time>
                    <h2 className="type-theta underline-offset-4 underline decoration-transparent group-hover:decoration-current transition-colors duration-300 decoration-1 text-wm-black mb-2">
                      Your workforce is using GenAI wrong—here's how to fix it
                    </h2>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className={`col-span-4 lg:col-span-2 text-wm-black lg:py-10 order-8 lg:row-start-3 lg:order-7 pb-8 lg:relative lg:px-8 border-animate-horiz-delay border-animate-vert border-animate-base border-animate-bleed-rtl-delay after:border-b after:bottom-0 after:left-0 lg:after:border-l lg:after:border-b-0 lg:after:border-lmb-8 lg:before:border-b lg:before:bottom-0 lg:before:right-0 grid:before:right-[-13%] lg:m-0 ${
                inview7 ? 'inview' : ''
              } ${inview8 ? 'inview-delay' : ''}`}
            >
              <div className="story-card relative group">
                <Link
                  href="/perspectives/signature-research/the-state-of-manufacturing-from-resilience-to-resurgence"
                  className="lg:flex lg:flex-col lg:justify-between lg:items-start lg:h-full"
                >
                  <span
                    className="block rounded-full absolute top-[-2px] right-0 group-hover:bg-wm-gradient-yellow flex items-center justify-center w-7 h-7"
                    role="presentation"
                  >
                    <svg
                      viewBox="0 0 18 14"
                      style={{ width: '14px', height: '11px' }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5.636L17.864 7l-1.06 1.06h-.001L11.5 13.364l-1.06-1.06 4.551-4.555L0 7.75v-1.5l14.991-.001-4.552-4.552L11.5.636z"
                        fill=""
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="block type-iota text-wm-black mb-2">Signature Research</span>
                  <div>
                    <time className="type-paragraph-sm text-wm-black font-medium block mb-2">June 2024</time>
                    <h2 className="type-theta underline-offset-4 underline decoration-transparent group-hover:decoration-current transition-colors duration-300 decoration-1 text-wm-black mb-2">
                      The State of Manufacturing: From Resilience to Resurgence
                    </h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
