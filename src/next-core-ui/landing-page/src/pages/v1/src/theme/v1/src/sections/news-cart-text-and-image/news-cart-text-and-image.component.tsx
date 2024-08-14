import Link from 'next/link';
import { NewCartTextAndImageProps } from './news-cart-text-and-image.type';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { useDeviceSizes } from '../../../../../../../../../../../hooks';

export const NewCartTextAndImage: React.FC<NewCartTextAndImageProps> = (props) => {
  const { data, className } = props;

  return (
    <div id="client-stories" className="client-stories">
      <div className="overflow-hidden grid-wrapper pt-10 pb-6 lg:pt-14 lg:pb-32 border-animate-horiz border-animate-base after:border-t after:top-0 after:left-0 inview">
        <NewCartTextAndImage1 />
        <NewCartTextAndImage2 />
      </div>
      <NewCartTextAndImage4 />
    </div>
  );
};

export const NewCartTextAndImage1: React.FC<any> = (props) => {
  const { data, className } = props;

  return (
    <div className="grid lg:px-16 mdxl:px-0 grid-cols-4 mdxl:grid-cols-8 mdxl:gap-x-8 mb-24">
      <h2 className="col-span-4 mdxl:col-span-2 type-zeta text-wm-black lg:type-paragraph-lg mdxl:type-zeta mb-4 mdxl:mb-0 tex-wm-black">
        CLIENT-CENTRIC
      </h2>
      <div className="col-span-4 lg:col-span-3 mdxl:col-span-6">
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
    <div className="grid grid-cols-4 mdxl:grid-cols-8 mdxl:gap-8">
      <div className="mb-20 mdxl:mb-0 col-span-4 lg:col-span-3 mdxl:col-span-2 mdxl:pr-8 lg:px-16 mdxl:pl-0">
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
      <div className="col-span-4 mdxl:col-span-3 pb-4 mb-8 mdxl:mb-0 last:mb-0 mdxl:pb-0 border-animate-horiz border-animate-vert border-animate-base after:border-b after:bottom-0 mdxl:after:bottom-auto mdxl:after:border-b-0 mdxl:after:border-r mdxl:after:top-0 mdxl:after:-right-4 lg:flex mdxl:block inview">
        <div className="lg:w-1/3 mdxl:w-full">
          <div className="aspect-360/226 mb-6">
            <Link href="https://www.westmonroe.com/client-stories/rugs-usa-exceeds-m-and-a-synergy-targets">
              <LazyLoadImage
                src="https://cdn.westmonroe.com/-/media/west-monroe-images/client-stories-images/rugsusaexceedsma2504x1440herologodark.jpg?cx=0.49&cy=0.49&cw=768&ch=432&hash=A0165E60C7BA2FF93CC2F7BE6A9F45C4"
                className="object-cover object-center w-full h-full"
                alt="Logo"
                effect="blur"
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
      <div className="col-span-4 mdxl:col-span-3 pb-4 mdxl:mb-0 last:mb-0 mdxl:pb-0 mdxl:mb-0 mdxl:pb-0 lg:flex mdxl:block">
        <div className="lg:w-1/3 mdxl:w-full">
          <div className="aspect-360/226 mb-6">
            <Link href="https://www.westmonroe.com/client-stories/ted-conferences">
              <LazyLoadImage
                src="https://cdn.westmonroe.com/-/media/west-monroe-images/client-stories-images/unlocking-ted-conferences_2504_1440_hero_logo.jpg?cx=0.5&cy=0.5&cw=768&ch=432&hash=AC5A74A190BD1CBA9EF7B9EC35CB9717"
                className="object-cover object-center w-full h-full"
                effect="blur"
              />
            </Link>
          </div>
        </div>
        <div className="relative lg:shrink-0 lg:w-2/3 mdxl:w-full lg:pl-12 mdxl:pl-0">
          <span className="block type-iota text-wm-black mb-4" />
          <h2 className="type-theta text-wm-black pr-9">
            <Link href="https://www.westmonroe.com/client-stories/ted-conferences">
              TED Conferences Uncovers AI As a Way to Spread Ideas 30% Faster
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export const NewCartTextAndImage4: React.FC<any> = (props) => {
  const isDevice = useDeviceSizes();

  const dataSlide = [
    {
      id: '1',
      link: 'client-stories/dominion-energy',
      imgUrl:
        'https://cdn.westmonroe.com/-/media/west-monroe-images/client-stories-images/rugsusaexceedsma2504x1440herologodark.jpg?cx=0.49&cy=0.49&cw=768&ch=432&hash=A0165E60C7BA2FF93CC2F7BE6A9F45C4',
    },
    {
      id: '2',
      link: 'client-stories/dominion-energy',
      imgUrl:
        'https://cdn.westmonroe.com/-/media/west-monroe-images/client-stories-images/unlocking-ted-conferences_2504_1440_hero_logo.jpg?cx=0.5&cy=0.5&cw=768&ch=432&hash=AC5A74A190BD1CBA9EF7B9EC35CB9717',
    },
    {
      id: '3',
      link: 'client-stories/dominion-energy',
      imgUrl:
        'https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/dominion-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=705502FAE811F2C33483AC5B5932B558',
    },
    {
      id: '4',
      link: 'client-stories/dominion-energy',
      imgUrl:
        'https://cdn.westmonroe.com/-/media/west-monroe-images/client-stories-images/rugsusa_logo_5a554d-(1).png?mw=480&mh=480&iar=0&as=1&hash=043C622E7A58B57CDDC6CA0B38B9F1DE',
    },
    {
      id: '5',
      link: 'client-stories/dominion-energy',
      imgUrl:
        'https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/barclaycard-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=0D15608329F9B5925C5AA0D821178F2B',
    },
    {
      id: '6',
      link: 'client-stories/dominion-energy',
      imgUrl:
        'https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/ted.png?mw=480&mh=480&iar=0&as=1&hash=E6EFAD90232F4BDA1CB1BA07B946CC49',
    },
    {
      id: '7',
      link: 'client-stories/dominion-energy',
      imgUrl:
        'https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/farm-credit-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=66A7536CABF9278026FBDDB4AC9D3CE9',
    },
    {
      id: '8',
      link: 'client-stories/dominion-energy',
      imgUrl:
        'https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/visionworks-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=41FE0656463E5490ABD3BA663F674973',
    },
    {
      id: '9',
      link: 'client-stories/dominion-energy',
      imgUrl:
        'https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/riverside-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=6E1AB31BF2D6419FBEED86DB5BA5DDC6',
    },
    {
      id: '10',
      link: 'client-stories/dominion-energy',
      imgUrl:
        'https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/coned-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=E375788C0DDCC21577B3F96A7153E76C',
    },
    {
      id: '11',
      link: 'client-stories/dominion-energy',
      imgUrl:
        'https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/ventech-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=B86231491287F4F3C4397689B713C853',
    },
    {
      id: '12',
      link: 'client-stories/dominion-energy',
      imgUrl:
        'https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/allina-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=933E7F64360A3C60D371FE62C0B59820',
    },
    {
      id: '13',
      link: 'client-stories/dominion-energy',
      imgUrl:
        'https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/dominion-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=705502FAE811F2C33483AC5B5932B558',
    },
    {
      id: '1',
      link: 'client-stories/dominion-energy',
      imgUrl:
        'https://cdn.westmonroe.com/-/media/west-monroe-images/client-stories-images/rugsusa_logo_5a554d-(1).png?mw=480&mh=480&iar=0&as=1&hash=043C622E7A58B57CDDC6CA0B38B9F1DE',
    },
    {
      id: '14',
      link: 'client-stories/dominion-energy',
      imgUrl:
        'https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/barclaycard-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=0D15608329F9B5925C5AA0D821178F2B',
    },
    {
      id: '15',
      link: 'client-stories/dominion-energy',
      imgUrl:
        'https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/ted.png?mw=480&mh=480&iar=0&as=1&hash=E6EFAD90232F4BDA1CB1BA07B946CC49',
    },
    {
      id: '16',
      link: 'client-stories/dominion-energy',
      imgUrl:
        'https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/farm-credit-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=66A7536CABF9278026FBDDB4AC9D3CE9',
    },
    {
      id: '17',
      link: 'client-stories/dominion-energy',
      imgUrl:
        'https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/visionworks-logo-mm.png?mw=480&mh=480&iar=0&as=1&hash=41FE0656463E5490ABD3BA663F674973',
    },
  ];
  return (
    <div className="logo-carousel bleed-wrapper pt-6 pb-14 lg:pb-28">
      <Splide
        options={{
          type: 'slide',
          arrows: false,
          perPage: 2,
          pagination: false,
          focus: 0,
          fixedWidth: '100%',
          padding: '2rem',
          gap: '',
          mediaQuery: 'min',
          grid: { rows: 5, cols: 2, gap: { row: '3rem', col: '3rem' } },
          autoScroll: false,
          breakpoints: {
            '768': {
              type: 'loop',
              perPage: 6,
              fixedWidth: '9.5rem',
              padding: '6rem',
              gap: '4rem',
              grid: false,
              autoScroll: { speed: 1 },
            },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {dataSlide?.map((item) => {
          const { id, link, imgUrl } = item;

          if (isDevice?.isMobile) {
            return (
              <div
                key={id}
                className="splide__slide__row"
                style={{
                  height: 'calc(20% - 2.4rem)',
                  display: 'flex',
                  margin: '0px 0px 3rem',
                  padding: 0,
                }}
              >
                <div
                  className="splide__slide h-15 splide__slide--col"
                  id="splide01-slide01-col01"
                  style={{ width: 'calc(50% - 1.5rem)', marginRight: '3rem' }}
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
                  className="splide__slide h-15 splide__slide--col"
                  id="splide01-slide01-col02"
                  style={{ width: 'calc(50% - 1.5rem)', marginRight: '3rem' }}
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
              </div>
            );
          }
          return (
            <SplideSlide key={id}>
              <div className="splide__slide h-15" style={{ marginRight: '4rem', width: '9.5rem' }}>
                <Link target="" href={link}>
                  <span className="w-full opacity-40 hover:opacity-100 transition-opacity duration-300">
                    <img src={imgUrl} alt="id" className="w-38 h-15 object-contain" />
                  </span>
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};
