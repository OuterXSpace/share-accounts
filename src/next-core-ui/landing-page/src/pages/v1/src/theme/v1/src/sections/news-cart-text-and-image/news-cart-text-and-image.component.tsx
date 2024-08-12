import Link from 'next/link';
import { NewCartTextAndImageProps } from './news-cart-text-and-image.type';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '@splidejs/splide/dist/css/splide.min.css';

export const NewCartTextAndImage: React.FC<NewCartTextAndImageProps> = (props) => {
  const { data, className } = props;

  return (
    <section className={`section ${className}`}>
      <div id="client-stories" className="client-stories border-t border-black-20">
        <div className="overflow-hidden grid-wrapper pt-10 pb-6 lg:pt-14 lg:pb-32 border-animate-horiz border-animate-base after:border-t after:top-0 after:left-0">
          <NewCartTextAndImage1 />
          <NewCartTextAndImage2 />
        </div>
        <NewCartTextAndImage4 />
      </div>
    </section>
  );
};

export const NewCartTextAndImage1: React.FC<any> = (props) => {
  const { data, className } = props;

  return (
    <div className="row mb-24">
      <h2 className="col-3 type-zeta text-wm-black lg:type-paragraph-lg mdxl:type-zeta mb-4 mdxl:mb-0 tex-wm-black">
        CLIENT-CENTRIC
      </h2>
      <div className="col-9">
        <p className="type-eta lg:type-paragraph-lg mdxl:type-eta mb-8 text-wm-black">
          We're helping clients achieve their boldest ambitions. Read more about how our clients are redefining their
          businesses to thrive.
        </p>
        <div className="cmpt__cta">
          <Link className="type-button" target="" href="/client-stories">
            See all client stories
          </Link>
        </div>
      </div>
    </div>
  );
};

export const NewCartTextAndImage2: React.FC<any> = (props) => {
  const { data, className } = props;

  return (
    <div className="row">
      <div className="mb-20 mdxl:mb-0 col-3 lg:col-3 mdxl:col-2 mdxl:pr-8 mdxl:pl-0">
        <span className="text-wm-gray w-7 lg:w-14 mdxl:w-7 block mb-4" role="presentation">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 23" fill="none">
            <path
              d="M15.4468 23V13.4912C15.4468 4.46996 19.7481 0.650178 27.945 0L29 4.22615C24.0494 5.12014 21.6959 7.63958 22.1017 11.7845H26.2407V23H15.4468ZM0 23V13.4912C0 4.46996 4.30131 0.650178 12.4981 0L13.5532 4.22615C8.60261 5.12014 6.24907 7.63958 6.65485 11.7845H10.7938V23H0Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <p className="mb-4 text-wm-black type-paragraph">
          We knew we couldn't go it alone. A big piece of setting things up for success starts from day one—finding a
          partner that understands value beyond money. West Monroe absolutely understood that and did it in such a way
          that we were prepared and operated as a single team.
        </p>
        <span className="block font-medium text-wm-black type-paragraph-lg">
          Alyssa Steele, Chief Executive Officer
        </span>
        <span className="text-gray-3 block font-medium text-base">Rugs USA</span>
      </div>
      <div className="col-9 row">
        <div className="pr-4 col-6 pb-4 mb-8 mdxl:mb-0 last:mb-0 mdxl:pb-0  border-r border-black-20">
          <div className="w-full">
            <div className="aspect-360/226 mb-6">
              <Link href="https://www.westmonroe.com/client-stories/rugs-usa-exceeds-m-and-a-synergy-targets">
                <img
                  src="https://cdn.westmonroe.com/-/media/west-monroe-images/client-stories-images/rugsusaexceedsma2504x1440herologodark.jpg?cx=0.49&cy=0.49&cw=768&ch=432&hash=A0165E60C7BA2FF93CC2F7BE6A9F45C4"
                  alt=""
                  className="object-cover object-center w-full h-full"
                />
              </Link>
            </div>
          </div>
          <div className="relative lg:shrink-0 lg:w-2/3 mdxl:w-full lg:pl-12 mdxl:pl-0">
            <span className="block type-iota text-wm-black mb-4" />
            <h2 className="type-theta text-wm-black pr-9">
              <Link href="https://www.westmonroe.com/client-stories/rugs-usa-exceeds-m-and-a-synergy-targets">
                Rugs USA exceeds M&amp;A synergy targets by 60%
              </Link>
            </h2>
          </div>
        </div>
        <div className="pl-4 col-6 pb-4 mb-8 mdxl:mb-0 last:mb-0 mdxl:pb-0  border-r border-black-20">
          <div className="w-full">
            <div className="aspect-360/226 mb-6">
              <Link href="https://www.westmonroe.com/client-stories/rugs-usa-exceeds-m-and-a-synergy-targets">
                <img
                  src="https://cdn.westmonroe.com/-/media/west-monroe-images/client-stories-images/rugsusaexceedsma2504x1440herologodark.jpg?cx=0.49&cy=0.49&cw=768&ch=432&hash=A0165E60C7BA2FF93CC2F7BE6A9F45C4"
                  alt=""
                  className="object-cover object-center w-full h-full"
                />
              </Link>
            </div>
          </div>
          <div className="relative lg:shrink-0 lg:w-2/3 mdxl:w-full lg:pl-12 mdxl:pl-0">
            <span className="block type-iota text-wm-black mb-4" />
            <h2 className="type-theta text-wm-black pr-9">
              <Link href="https://www.westmonroe.com/client-stories/rugs-usa-exceeds-m-and-a-synergy-targets">
                Rugs USA exceeds M&amp;A synergy targets by 60%
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NewCartTextAndImage4: React.FC<any> = (props) => {
  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 7,
        autoScroll: {
          pauseOnHover: true,
          pauseOnFocus: true,
          rewind: false,
          speed: 1,
        },
        pagination: false,
        arrows: false,
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide>
        <div className="splide__slide h-15 splide__slide--clone" style={{ marginRight: '4rem', width: '9.5rem' }}>
          <Link target="" href="/client-stories/dominion-energy">
            <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
              <img
                src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/dominion-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=705502FAE811F2C33483AC5B5932B558"
                alt=""
                className="w-38 h-15 object-contain"
              />
            </span>
          </Link>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide__slide h-15 splide__slide--clone" style={{ marginRight: '4rem', width: '9.5rem' }}>
          <Link target="" href="/client-stories/dominion-energy">
            <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
              <LazyLoadImage
                src="https://cdn.westmonroe.com/-/media/west-monroe-images/client-stories-images/rugsusa_logo_5a554d-(1).png?mw=480&mh=480&iar=0&as=1&hash=043C622E7A58B57CDDC6CA0B38B9F1DE"
                alt=""
                className="w-38 h-15 object-contain"
              />
            </span>
          </Link>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide__slide h-15 splide__slide--clone" style={{ marginRight: '4rem', width: '9.5rem' }}>
          <Link target="" href="/client-stories/dominion-energy">
            <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
              <LazyLoadImage
                src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/barclaycard-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=0D15608329F9B5925C5AA0D821178F2B"
                alt=""
                className="w-38 h-15 object-contain"
              />
            </span>
          </Link>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide__slide h-15 splide__slide--clone" style={{ marginRight: '4rem', width: '9.5rem' }}>
          <Link target="" href="/client-stories/dominion-energy">
            <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
              <LazyLoadImage
                src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/ted.png?mw=480&mh=480&iar=0&as=1&hash=E6EFAD90232F4BDA1CB1BA07B946CC49"
                alt=""
                className="w-38 h-15 object-contain"
              />
            </span>
          </Link>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide__slide h-15 splide__slide--clone" style={{ marginRight: '4rem', width: '9.5rem' }}>
          <Link target="" href="/client-stories/dominion-energy">
            <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
              <LazyLoadImage
                src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/farm-credit-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=66A7536CABF9278026FBDDB4AC9D3CE9"
                alt=""
                className="w-38 h-15 object-contain"
              />
            </span>
          </Link>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide__slide h-15 splide__slide--clone" style={{ marginRight: '4rem', width: '9.5rem' }}>
          <Link target="" href="/client-stories/dominion-energy">
            <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
              <LazyLoadImage
                src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/visionworks-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=41FE0656463E5490ABD3BA663F674973"
                alt=""
                className="w-38 h-15 object-contain"
              />
            </span>
          </Link>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide__slide h-15 splide__slide--clone" style={{ marginRight: '4rem', width: '9.5rem' }}>
          <Link target="" href="/client-stories/dominion-energy">
            <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
              <LazyLoadImage
                src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/riverside-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=6E1AB31BF2D6419FBEED86DB5BA5DDC6"
                alt=""
                className="w-38 h-15 object-contain"
              />
            </span>
          </Link>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide__slide h-15 splide__slide--clone" style={{ marginRight: '4rem', width: '9.5rem' }}>
          <Link target="" href="/client-stories/dominion-energy">
            <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
              <LazyLoadImage
                src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/coned-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=E375788C0DDCC21577B3F96A7153E76C"
                alt=""
                className="w-38 h-15 object-contain"
              />
            </span>
          </Link>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide__slide h-15 splide__slide--clone" style={{ marginRight: '4rem', width: '9.5rem' }}>
          <Link target="" href="/client-stories/dominion-energy">
            <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
              <LazyLoadImage
                src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/ventech-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=B86231491287F4F3C4397689B713C853"
                alt=""
                className="w-38 h-15 object-contain"
              />
            </span>
          </Link>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide__slide h-15 splide__slide--clone" style={{ marginRight: '4rem', width: '9.5rem' }}>
          <Link target="" href="/client-stories/dominion-energy">
            <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
              <LazyLoadImage
                src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/allina-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=933E7F64360A3C60D371FE62C0B59820"
                alt=""
                className="w-38 h-15 object-contain"
              />
            </span>
          </Link>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide__slide h-15 splide__slide--clone" style={{ marginRight: '4rem', width: '9.5rem' }}>
          <Link target="" href="/client-stories/dominion-energy">
            <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
              <LazyLoadImage
                src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/dominion-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=705502FAE811F2C33483AC5B5932B558"
                alt=""
                className="w-38 h-15 object-contain"
              />
            </span>
          </Link>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide__slide h-15 splide__slide--clone" style={{ marginRight: '4rem', width: '9.5rem' }}>
          <Link target="" href="/client-stories/dominion-energy">
            <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
              <LazyLoadImage
                src="https://cdn.westmonroe.com/-/media/west-monroe-images/client-stories-images/rugsusa_logo_5a554d-(1).png?mw=480&mh=480&iar=0&as=1&hash=043C622E7A58B57CDDC6CA0B38B9F1DE"
                alt=""
                className="w-38 h-15 object-contain"
              />
            </span>
          </Link>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide__slide h-15 splide__slide--clone" style={{ marginRight: '4rem', width: '9.5rem' }}>
          <Link target="" href="/client-stories/dominion-energy">
            <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
              <LazyLoadImage
                src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/barclaycard-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=0D15608329F9B5925C5AA0D821178F2B"
                alt=""
                className="w-38 h-15 object-contain"
              />
            </span>
          </Link>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide__slide h-15 splide__slide--clone" style={{ marginRight: '4rem', width: '9.5rem' }}>
          <Link target="" href="/client-stories/dominion-energy">
            <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
              <LazyLoadImage
                src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/ted.png?mw=480&mh=480&iar=0&as=1&hash=E6EFAD90232F4BDA1CB1BA07B946CC49"
                alt=""
                className="w-38 h-15 object-contain"
              />
            </span>
          </Link>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide__slide h-15 splide__slide--clone" style={{ marginRight: '4rem', width: '9.5rem' }}>
          <Link target="" href="/client-stories/dominion-energy">
            <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
              <LazyLoadImage
                src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/farm-credit-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=66A7536CABF9278026FBDDB4AC9D3CE9"
                alt=""
                className="w-38 h-15 object-contain"
              />
            </span>
          </Link>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide__slide h-15 splide__slide--clone" style={{ marginRight: '4rem', width: '9.5rem' }}>
          <Link target="" href="/client-stories/dominion-energy">
            <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
              <LazyLoadImage
                src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/visionworks-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=41FE0656463E5490ABD3BA663F674973"
                alt=""
                className="w-38 h-15 object-contain"
              />
            </span>
          </Link>
        </div>
      </SplideSlide>
    </Splide>
  );
};
export const NewCartTextAndImage3: React.FC<any> = (props) => {
  const { data, className } = props;

  return (
    <div className="logo-carousel bleed-wrapper pt-6 pb-14 lg:pb-28">
      <div
        className="splide is-overflow is-initialized splide--loop splide--ltr splide--draggable is-active"
        data-splide='{"type":"slide","arrows":false,"perPage":2,"pagination":false,"focus":0,"fixedWidth":"100%","padding":"2rem","gap":"","mediaQuery":"min","grid":{ "rows": 5, "cols": 2, "gap" : { "row": "3rem", "col": "3rem" }},"autoScroll":false,"breakpoints":{"768":{"type": "loop", "perPage":6,"fixedWidth":"9.5rem","padding":"6rem","gap":"4rem","grid":false,"autoScroll":{"speed":1} }}}'
        data-splide-id="slide_11"
        aria-label="Client Logos"
        id="splide01"
        role="region"
        aria-roledescription="carousel"
      >
        <div
          className="splide__track splide__track--loop splide__track--ltr splide__track--draggable"
          id="splide01-track"
          aria-live="off"
          aria-atomic="true"
          style={{ paddingLeft: '6rem', paddingRight: '6rem' }}
        >
          <div
            className="splide__list"
            id="splide01-list"
            role="presentation"
            style={{ transform: 'translateX(-2838px)' }}
          >
            <div
              className="splide__slide h-15 splide__slide--clone"
              id="splide01-clone01"
              role="group"
              aria-roledescription="slide"
              aria-label="4 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
              aria-hidden="true"
            >
              <Link target="" href="/client-stories/dominion-energy">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/dominion-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=705502FAE811F2C33483AC5B5932B558"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15 splide__slide--clone"
              id="splide01-clone02"
              role="group"
              aria-roledescription="slide"
              aria-label="5 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
              aria-hidden="true"
            >
              <Link target="" href="/client-stories/rugs-usa-exceeds-m-and-a-synergy-targets">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/client-stories-images/rugsusa_logo_5a554d-(1).png?mw=480&mh=480&iar=0&as=1&hash=043C622E7A58B57CDDC6CA0B38B9F1DE"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15 splide__slide--clone"
              id="splide01-clone03"
              role="group"
              aria-roledescription="slide"
              aria-label="6 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
              aria-hidden="true"
            >
              <Link target="" href="/client-stories/barclaycard">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/barclaycard-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=0D15608329F9B5925C5AA0D821178F2B"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15 splide__slide--clone is-active"
              id="splide01-clone04"
              role="group"
              aria-roledescription="slide"
              aria-label="7 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
              aria-hidden="true"
            >
              <Link target="" href="/client-stories/ted-conferences">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/ted.png?mw=480&mh=480&iar=0&as=1&hash=E6EFAD90232F4BDA1CB1BA07B946CC49"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15 splide__slide--clone"
              id="splide01-clone05"
              role="group"
              aria-roledescription="slide"
              aria-label="8 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
              aria-hidden="true"
            >
              <Link target="" href="/client-stories/farm-credit-illinois">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/farm-credit-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=66A7536CABF9278026FBDDB4AC9D3CE9"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15 splide__slide--clone"
              id="splide01-clone06"
              role="group"
              aria-roledescription="slide"
              aria-label="9 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
              aria-hidden="true"
            >
              <Link target="" href="/client-stories/visionworks">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/visionworks-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=41FE0656463E5490ABD3BA663F674973"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15 splide__slide--clone"
              id="splide01-clone07"
              role="group"
              aria-roledescription="slide"
              aria-label="10 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
              aria-hidden="true"
            >
              <Link target="" href="/client-stories/riverside">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/riverside-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=6E1AB31BF2D6419FBEED86DB5BA5DDC6"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15"
              id="splide01-slide01"
              role="group"
              aria-roledescription="slide"
              aria-label="1 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
              aria-hidden="true"
            >
              <Link target="" href="/client-stories/con-edison">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/coned-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=E375788C0DDCC21577B3F96A7153E76C"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15"
              id="splide01-slide02"
              role="group"
              aria-roledescription="slide"
              aria-label="2 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
              aria-hidden="true"
            >
              <Link target="" href="/client-stories/ventech-solutions">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/ventech-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=B86231491287F4F3C4397689B713C853"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15"
              id="splide01-slide03"
              role="group"
              aria-roledescription="slide"
              aria-label="3 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
              aria-hidden="true"
            >
              <Link target="" href="/client-stories/allina-health">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/allina-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=933E7F64360A3C60D371FE62C0B59820"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15"
              id="splide01-slide04"
              role="group"
              aria-roledescription="slide"
              aria-label="4 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
              aria-hidden="true"
            >
              <Link target="" href="/client-stories/dominion-energy">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/dominion-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=705502FAE811F2C33483AC5B5932B558"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15"
              id="splide01-slide05"
              role="group"
              aria-roledescription="slide"
              aria-label="5 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
              aria-hidden="true"
            >
              <Link target="" href="/client-stories/rugs-usa-exceeds-m-and-a-synergy-targets">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/client-stories-images/rugsusa_logo_5a554d-(1).png?mw=480&mh=480&iar=0&as=1&hash=043C622E7A58B57CDDC6CA0B38B9F1DE"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15 is-prev"
              id="splide01-slide06"
              role="group"
              aria-roledescription="slide"
              aria-label="6 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
              aria-hidden="true"
            >
              <Link target="" href="/client-stories/barclaycard">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/barclaycard-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=0D15608329F9B5925C5AA0D821178F2B"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15 is-visible is-active"
              id="splide01-slide07"
              role="group"
              aria-roledescription="slide"
              aria-label="7 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
            >
              <Link target="" href="/client-stories/ted-conferences">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/ted.png?mw=480&mh=480&iar=0&as=1&hash=E6EFAD90232F4BDA1CB1BA07B946CC49"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15 is-visible is-next"
              id="splide01-slide08"
              role="group"
              aria-roledescription="slide"
              aria-label="8 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
            >
              <Link target="" href="/client-stories/farm-credit-illinois">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/farm-credit-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=66A7536CABF9278026FBDDB4AC9D3CE9"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15 is-visible"
              id="splide01-slide09"
              role="group"
              aria-roledescription="slide"
              aria-label="9 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
            >
              <Link target="" href="/client-stories/visionworks">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/visionworks-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=41FE0656463E5490ABD3BA663F674973"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15 is-visible"
              id="splide01-slide10"
              role="group"
              aria-roledescription="slide"
              aria-label="10 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
            >
              <Link target="" href="/client-stories/riverside">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/riverside-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=6E1AB31BF2D6419FBEED86DB5BA5DDC6"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15 splide__slide--clone is-visible"
              id="splide01-clone08"
              role="group"
              aria-roledescription="slide"
              aria-label="1 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
            >
              <Link target="" href="/client-stories/con-edison">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/coned-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=E375788C0DDCC21577B3F96A7153E76C"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15 splide__slide--clone is-visible"
              id="splide01-clone09"
              role="group"
              aria-roledescription="slide"
              aria-label="2 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
            >
              <Link target="" href="/client-stories/ventech-solutions">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/ventech-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=B86231491287F4F3C4397689B713C853"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15 splide__slide--clone"
              id="splide01-clone10"
              role="group"
              aria-roledescription="slide"
              aria-label="3 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
              aria-hidden="true"
            >
              <Link target="" href="/client-stories/allina-health">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/allina-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=933E7F64360A3C60D371FE62C0B59820"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15 splide__slide--clone"
              id="splide01-clone11"
              role="group"
              aria-roledescription="slide"
              aria-label="4 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
              aria-hidden="true"
            >
              <Link target="" href="/client-stories/dominion-energy">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/dominion-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=705502FAE811F2C33483AC5B5932B558"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15 splide__slide--clone"
              id="splide01-clone12"
              role="group"
              aria-roledescription="slide"
              aria-label="5 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
              aria-hidden="true"
            >
              <Link target="" href="/client-stories/rugs-usa-exceeds-m-and-a-synergy-targets">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/client-stories-images/rugsusa_logo_5a554d-(1).png?mw=480&mh=480&iar=0&as=1&hash=043C622E7A58B57CDDC6CA0B38B9F1DE"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15 splide__slide--clone"
              id="splide01-clone13"
              role="group"
              aria-roledescription="slide"
              aria-label="6 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
              aria-hidden="true"
            >
              <Link target="" href="/client-stories/barclaycard">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/barclaycard-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=0D15608329F9B5925C5AA0D821178F2B"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
            <div
              className="splide__slide h-15 splide__slide--clone is-active"
              id="splide01-clone14"
              role="group"
              aria-roledescription="slide"
              aria-label="7 of 10"
              style={{ marginRight: '4rem', width: '9.5rem' }}
              aria-hidden="true"
            >
              <Link target="" href="/client-stories/ted-conferences">
                <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/ted.png?mw=480&mh=480&iar=0&as=1&hash=E6EFAD90232F4BDA1CB1BA07B946CC49"
                    alt=""
                    className="w-38 h-15 object-contain"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
