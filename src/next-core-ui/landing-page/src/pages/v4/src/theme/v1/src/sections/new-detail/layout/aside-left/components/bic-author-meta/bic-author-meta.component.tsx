import Link from 'next/link';
import { BicAuthorMetaV4Props } from './bic-author-meta.type';

export const BicAuthorMetaV4: React.FC<BicAuthorMetaV4Props> = (props) => {
  return (
    <>
      <div data-el="bic-author-meta" className="mb-3 row align-items-center lg:mb-0" data-speechify_ignore="true">
        <div className="flex gap-x-3 gap-y-3 items-start lg:gap-x-8  text-3">
          <div className="flex items-center gap-x-2">
            <div className="hidden md:block">
              <div className="relative inline-block rounded-full aspect-square w-fit hidden md:block bg-grey-100 text-grey-900">
                <Link href="https://beincrypto.com/author/harsh-notariya/" target="_self">
                  <img
                    loading="lazy"
                    src="https://beincrypto.com/wp-content/uploads/2022/10/Frame-2264-1.png"
                    data-src="https://beincrypto.com/wp-content/uploads/2022/10/Frame-2264-1.png"
                    className="rounded-full lazy object-cover aspect-square w-8 h-8 text-3 entered loaded"
                    alt="Frame-2264-1.png"
                    data-ll-status="loaded"
                  />
                </Link>{' '}
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <div>
                Bởi{' '}
                <Link
                  href="https://beincrypto.com/author/harsh-notariya/"
                  className="text-blue-700 no-underline text-3 "
                >
                  {' '}
                  <span className="text-blue-700 no-underline text-3 ">Harsh Notariya</span>{' '}
                </Link>{' '}
              </div>
              <time dateTime="2024-06-04T05:30:07+00:00">4 Tháng Sáu 2024, 12:30 +07</time>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="hidden md:block">
              <div className="relative inline-block rounded-full aspect-square w-fit hidden md:block bg-grey-100 text-grey-900">
                <Link href="https://vn.beincrypto.com/author/builink/" target="_self">
                  <img
                    loading="lazy"
                    src="https://s32697.pcdn.co/wp-content/uploads/2021/09/builink-vietnamese-cryptocurrency-content-writer-and-editor.jpg.webp"
                    data-src="https://s32697.pcdn.co/wp-content/uploads/2021/09/builink-vietnamese-cryptocurrency-content-writer-and-editor.jpg.webp"
                    className="rounded-full lazy object-cover aspect-square w-8 h-8 text-3 entered loaded"
                    alt="builink-vietnamese-cryptocurrency-content-writer-and-editor.jpg"
                    data-ll-status="loaded"
                  />
                </Link>{' '}
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <div className="flex flex-wrap lg:flex-nowrap">
                Đã dịch
                <Link
                  href="https://vn.beincrypto.com/author/builink/"
                  className="text-blue-700 no-underline ml-1 text-3 "
                >
                  Bùi Linh{' '}
                </Link>
              </div>
              <time dateTime="2024-06-04T14:09:07+07:00">4 Tháng Sáu 2024, 14:09 +07</time>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:items-center" data-speechify_ignore="true">
        <div data-el="bic-c-social-share" className="flex items-start share-block gap-x-2 mb-2 md:mb-0">
          <Link
            href="https://twitter.com/intent/tweet?url=https://vn.beincrypto.com/core-scientific-3-5-ty-usd-ai/&text=Core+Scientific+k%C3%BD+th%E1%BB%8Fa+thu%E1%BA%ADn+tr%E1%BB%8B+gi%C3%A1+3.5+t%E1%BB%B7+USD+%C4%91%E1%BB%83+%C4%91a+d%E1%BA%A1ng+h%C3%B3a+th%C3%A0nh+AI"
            target="_blank"
            data-analytics='{"en": "social", "ec": "web:desktop:social", "el": "share-twitter", "ev": "share-on-twitter"}'
            aria-label="Share on Twitter"
            className="inline-flex items-center justify-center w-7.5 h-7.5 p-1 border rounded-full transition-colors border-dark-grey-700  text-dark-grey-700  "
          >
            <svg
              className="bic-svg-icon"
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              style={{
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                strokeLinejoin: 'round',
                strokeMiterlimit: 2,
              }}
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M14.601 3h2.453l-5.36 5.93L18 17h-4.937l-3.867-4.894L4.771 17H2.316l5.733-6.343L2 3h5.063l3.495 4.474L14.601 3Zm-.861 12.579h1.359L6.324 4.347H4.865l8.875 11.232Z"
                style={{ fillRule: 'nonzero' }}
              />
            </svg>
            <span className="sr-only">Share on Twitter</span>
          </Link>
          <Link
            href="mailto:?subject=Core+Scientific+k%C3%BD+th%E1%BB%8Fa+thu%E1%BA%ADn+tr%E1%BB%8B+gi%C3%A1+3.5+t%E1%BB%B7+USD+%C4%91%E1%BB%83+%C4%91a+d%E1%BA%A1ng+h%C3%B3a+th%C3%A0nh+AI&body=Core+Scientific+h%E1%BB%A3p+t%C3%A1c+v%E1%BB%9Bi+CoreWeave+trong+m%E1%BB%99t+th%E1%BB%8Fa+thu%E1%BA%ADn+tr%E1%BB%8B+gi%C3%A1+3.5+t%E1%BB%B7+USD+%C4%91%E1%BB%83+%C4%91a+d%E1%BA%A1ng+h%C3%B3a+sang+AI%2C+t%C4%83ng+c%C6%B0%E1%BB%9Dng+c%C6%A1+s%E1%BB%9F+h%E1%BA%A1+t%E1%BA%A7ng+cho+%C4%91i%E1%BB%87n+to%C3%A1n+hi%E1%BB%87u+su%E1%BA%A5t+cao..+https://vn.beincrypto.com/core-scientific-3-5-ty-usd-ai/"
            target="_blank"
            data-analytics='{"en": "social", "ec": "web:desktop:social", "el": "share-email", "ev": "share-on-email"}'
            aria-label="Share on Email"
            className="inline-flex items-center justify-center w-7.5 h-7.5 p-1 border rounded-full transition-colors border-dark-grey-700  text-dark-grey-700  "
          >
            <svg
              className="bic-svg-icon"
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M16.4 4H3.6c-.88 0-1.592.675-1.592 1.5L2 14.5c0 .825.72 1.5 1.6 1.5h12.8c.88 0 1.6-.675 1.6-1.5v-9c0-.825-.72-1.5-1.6-1.5Zm-.32 3.188-5.656 3.314a.855.855 0 0 1-.848 0L3.92 7.188a.67.67 0 0 1-.206-.167.622.622 0 0 1-.133-.486.613.613 0 0 1 .095-.24.657.657 0 0 1 .189-.186.704.704 0 0 1 .524-.101c.09.017.175.051.251.1L10 9.25l5.36-3.143a.704.704 0 0 1 .524-.1c.09.018.176.052.251.101.076.05.14.113.189.186a.614.614 0 0 1 .082.496.62.62 0 0 1-.12.23.67.67 0 0 1-.206.168Z"
              />
            </svg>
            <span className="sr-only">Share on Email</span>
          </Link>
          <Link
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://vn.beincrypto.com/core-scientific-3-5-ty-usd-ai/&title=Core+Scientific+k%C3%BD+th%E1%BB%8Fa+thu%E1%BA%ADn+tr%E1%BB%8B+gi%C3%A1+3.5+t%E1%BB%B7+USD+%C4%91%E1%BB%83+%C4%91a+d%E1%BA%A1ng+h%C3%B3a+th%C3%A0nh+AI&summary=Core+Scientific+h%E1%BB%A3p+t%C3%A1c+v%E1%BB%9Bi+CoreWeave+trong+m%E1%BB%99t+th%E1%BB%8Fa+thu%E1%BA%ADn+tr%E1%BB%8B+gi%C3%A1+3.5+t%E1%BB%B7+USD+%C4%91%E1%BB%83+%C4%91a+d%E1%BA%A1ng+h%C3%B3a+sang+AI%2C+t%C4%83ng+c%C6%B0%E1%BB%9Dng+c%C6%A1+s%E1%BB%9F+h%E1%BA%A1+t%E1%BA%A7ng+cho+%C4%91i%E1%BB%87n+to%C3%A1n+hi%E1%BB%87u+su%E1%BA%A5t+cao.&source=https://vn.beincrypto.com"
            target="_blank"
            data-analytics='{"en": "social", "ec": "web:desktop:social", "el": "share-linkedin", "ev": "share-on-linkedin"}'
            aria-label="Share on Linkedin"
            className="inline-flex items-center justify-center w-7.5 h-7.5 p-1 border rounded-full transition-colors border-dark-grey-700  text-dark-grey-700  "
          >
            <svg
              className="bic-svg-icon"
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M6.679 16V7.973H4.187V16H6.68Zm-1.26-9.1c.804 0 1.447-.672 1.447-1.477C6.866 4.644 6.223 4 5.42 4A1.43 1.43 0 0 0 4 5.423c0 .805.643 1.476 1.42 1.476ZM16 16v-4.403c0-2.147-.482-3.812-3-3.812-1.205 0-2.009.671-2.357 1.289h-.027v-1.1H8.232V16h2.491v-3.973c0-1.047.188-2.04 1.473-2.04 1.286 0 1.313 1.18 1.313 2.12V16H16Z"
              />
            </svg>
            <span className="sr-only">Share on Linkedin</span>
          </Link>
        </div>
      </div>
    </>
  );
};
