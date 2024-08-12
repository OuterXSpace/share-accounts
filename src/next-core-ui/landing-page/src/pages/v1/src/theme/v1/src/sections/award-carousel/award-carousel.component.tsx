import Link from 'next/link';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { IAwardCarouselSectionProps } from './award-carousel.type';

export const AwardCarouselSection: React.FC<IAwardCarouselSectionProps> = (props) => {
  return (
    <div
      className="cmpt__award-carousel background-athens-gray module-first-gray module-last-gray"
      data-js-hook="award-carousel"
    >
      <div className="container">
        <div className="grid-x align-top">
          <div className="cell large-10 large-offset-1 xxlarge-12 xxlarge-offset-0">
            <h2 className="headline2 text-downriver award-carousel-title">Experience an award-winning culture</h2>
            <div className="award-slides-wrapper">
              <span className="slide-nav slide-prev slick-arrow" aria-label="Previous award" />
              <span className="slide-nav slide-next slick-arrow" aria-label="Next award" />
              <div className="award-slides carousel slick-initialized slick-slider" id="slick_abb055">
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 10800,
                      transform: 'translate3d(-1200px, 0px, 0px)',
                    }}
                  >
                    <AwardCarouselSection1 />
                  </div>
                </div>
              </div>
              <span className="slider-countdown countingDown" />
            </div>
            <div className="cta-wrapper">
              <a href="https://www.westmonroe.com/news/results?query=&formatType=Award" className="cta cta-type">
                View All Awards
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AwardCarouselSection1: React.FC<any> = (props) => {
  return (
    <Splide
      options={{
        autoScroll: {
          rewind: true,
          speed: 0,
        },
        type: 'slide',
        perPage: 4,
        arrows: true,
      }}
      // extensions={{ AutoScroll }}
    >
      <SplideSlide>
        <div className="slick-slide slick-cloned" data-slick-index={31} id="" aria-hidden="true" style={{ width: 292 }}>
          <div>
            <div className="award-slide background-white" style={{ width: '100%', display: 'inline-block' }}>
              <Link
                href="https://www.westmonroe.com/awards/best-workplace-list-chicago-by-gptw-fortune-2023"
                target=""
                tabIndex={-1}
              >
                <img
                  src="https://cdn.westmonroe.com/-/media/west-monroe-images/logos/awards/awardlogo_website_chi_430x318.png?mw=500&mh=500&iar=0&as=1&hash=FD2C52C0CB65CEE63B47F80C7A63E596"
                  alt="2023 bptw chicago"
                />
              </Link>
            </div>
          </div>
        </div>
        {/*  */}
      </SplideSlide>
      <SplideSlide>
        <div className="slick-slide slick-cloned" data-slick-index={31} id="" aria-hidden="true" style={{ width: 292 }}>
          <div>
            <div className="award-slide background-white" style={{ width: '100%', display: 'inline-block' }}>
              <Link
                href="https://www.westmonroe.com/awards/best-workplace-list-chicago-by-gptw-fortune-2023"
                target=""
                tabIndex={-1}
              >
                <img
                  src="https://cdn.westmonroe.com/-/media/west-monroe-images/logos/awards/awardlogo_website_chi_430x318.png?mw=500&mh=500&iar=0&as=1&hash=FD2C52C0CB65CEE63B47F80C7A63E596"
                  alt="2023 bptw chicago"
                />
              </Link>
            </div>
          </div>
        </div>
        {/*  */}
      </SplideSlide>
      <SplideSlide>
        <div className="slick-slide slick-cloned" data-slick-index={31} id="" aria-hidden="true" style={{ width: 292 }}>
          <div>
            <div className="award-slide background-white" style={{ width: '100%', display: 'inline-block' }}>
              <Link
                href="https://www.westmonroe.com/awards/best-workplace-list-chicago-by-gptw-fortune-2023"
                target=""
                tabIndex={-1}
              >
                <img
                  src="https://cdn.westmonroe.com/-/media/west-monroe-images/logos/awards/awardlogo_website_chi_430x318.png?mw=500&mh=500&iar=0&as=1&hash=FD2C52C0CB65CEE63B47F80C7A63E596"
                  alt="2023 bptw chicago"
                />
              </Link>
            </div>
          </div>
        </div>
        {/*  */}
      </SplideSlide>
      <SplideSlide>
        <div className="slick-slide slick-cloned" data-slick-index={31} id="" aria-hidden="true" style={{ width: 292 }}>
          <div>
            <div className="award-slide background-white" style={{ width: '100%', display: 'inline-block' }}>
              <Link
                href="https://www.westmonroe.com/awards/best-workplace-list-chicago-by-gptw-fortune-2023"
                target=""
                tabIndex={-1}
              >
                <img
                  src="https://cdn.westmonroe.com/-/media/west-monroe-images/logos/awards/awardlogo_website_chi_430x318.png?mw=500&mh=500&iar=0&as=1&hash=FD2C52C0CB65CEE63B47F80C7A63E596"
                  alt="2023 bptw chicago"
                />
              </Link>
            </div>
          </div>
        </div>
        {/*  */}
      </SplideSlide>
    </Splide>
  );
};
