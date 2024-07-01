import Link from 'next/link';
import { TopReadV4Props } from './top-read.type';

export const TopReadV4: React.FC<TopReadV4Props> = (props) => {
  return (
    <div className="top-read">
      <span className="block mb-6 font-sans font-bold leading-7 text-7">Đọc nhiều nhất</span>
      <div className="pb-4 mb-4 border-b border-b-grey-300 multi-news-card last:border-b-0 last:pb-0 last:mb-0">
        <meta
          itemProp="image"
          content="https://s32697.pcdn.co/wp-content/uploads/2024/04/bic_altcoins_positive_evening_sand_desert_mountains-360x203.jpg.webp"
        />
        <span itemProp="headline" className="block mb-1 font-sans s1 s1--medium">
          <Link
            data-el="most-read-item"
            data-analytics='{"en": "most-read", "ec": "web:desktop:most-read", "el": "single-most-read", "ev": "article-1"}'
            href="https://vn.beincrypto.com/chuyen-gia-mua-altcoin-tiem-nang/"
            className="no-underline text-dark-grey-700 hover:text-dark-grey-700  "
          >
            5 Altcoin tiềm năng cho mùa tăng trưởng lần này
          </Link>
        </span>
        <div className="meta flex items-center text-3.5 font-sans leading-5 font-normal text-grey-700 ">
          <div className="flex items-baseline mr-6 gap-x-1.5">
            <svg
              className="bic-svg-icon w-2.5 h-2.5"
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0C2.69138 0 0 2.69164 0 6C0 9.30862 2.69164 12 6 12C9.30836 12 12 9.30836 12 6C12 2.69138 9.30836 0 6 0ZM6 0.878101C8.83406 0.878101 11.122 3.16612 11.122 6.00005C11.122 8.83411 8.83393 11.122 6 11.122C3.16607 11.122 0.878049 8.83398 0.878049 6.00005C0.878049 3.16599 3.16607 0.878101 6 0.878101ZM6 1.60981C5.75756 1.60981 5.56095 1.80641 5.56095 2.04886V6.00008C5.56095 6.16238 5.64945 6.30366 5.78042 6.3796L8.9495 8.20887C9.15948 8.33014 9.42733 8.25879 9.54861 8.04881C9.66989 7.83883 9.59853 7.57098 9.38855 7.44969L6.43898 5.74842V2.04886C6.43898 1.80642 6.24255 1.60981 6 1.60981Z"
                fill="currentColor"
              />
            </svg>{' '}
            <span className="">4 mins</span>
          </div>
          <time className="ago" dateTime="2024-06-04T07:41:17+07:00">
            4 ngày trước
          </time>
        </div>
      </div>
      <div className="pb-4 mb-4 border-b border-b-grey-300 multi-news-card last:border-b-0 last:pb-0 last:mb-0">
        <meta
          itemProp="image"
          content="https://s32697.pcdn.co/wp-content/uploads/2023/05/bic_sell_negative_banknotes-360x203.jpg.webp"
        />
        <span itemProp="headline" className="block mb-1 font-sans s1 s1--medium">
          <Link
            data-el="most-read-item"
            data-analytics='{"en": "most-read", "ec": "web:desktop:most-read", "el": "single-most-read", "ev": "article-2"}'
            href="https://vn.beincrypto.com/binance-delist-dau-thang-6/"
            className="no-underline text-dark-grey-700 hover:text-dark-grey-700  "
          >
            Thấy gì từ việc hàng loạt Altcoin vừa bị Binance delist đầu tháng 6?
          </Link>
        </span>
        <div className="meta flex items-center text-3.5 font-sans leading-5 font-normal text-grey-700 ">
          <div className="flex items-baseline mr-6 gap-x-1.5">
            <svg
              className="bic-svg-icon w-2.5 h-2.5"
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0C2.69138 0 0 2.69164 0 6C0 9.30862 2.69164 12 6 12C9.30836 12 12 9.30836 12 6C12 2.69138 9.30836 0 6 0ZM6 0.878101C8.83406 0.878101 11.122 3.16612 11.122 6.00005C11.122 8.83411 8.83393 11.122 6 11.122C3.16607 11.122 0.878049 8.83398 0.878049 6.00005C0.878049 3.16599 3.16607 0.878101 6 0.878101ZM6 1.60981C5.75756 1.60981 5.56095 1.80641 5.56095 2.04886V6.00008C5.56095 6.16238 5.64945 6.30366 5.78042 6.3796L8.9495 8.20887C9.15948 8.33014 9.42733 8.25879 9.54861 8.04881C9.66989 7.83883 9.59853 7.57098 9.38855 7.44969L6.43898 5.74842V2.04886C6.43898 1.80642 6.24255 1.60981 6 1.60981Z"
                fill="currentColor"
              />
            </svg>{' '}
            <span className="">3 mins</span>
          </div>
          <time className="ago" dateTime="2024-06-04T19:29:53+07:00">
            4 ngày trước
          </time>
        </div>
      </div>
      <div className="pb-4 mb-4 border-b border-b-grey-300 multi-news-card last:border-b-0 last:pb-0 last:mb-0">
        <meta
          itemProp="image"
          content="https://s32697.pcdn.co/wp-content/uploads/2024/05/bic_ton_toncoin-covers_positive-360x203.png.webp"
        />
        <span itemProp="headline" className="block mb-1 font-sans s1 s1--medium">
          <Link
            data-el="most-read-item"
            data-analytics='{"en": "most-read", "ec": "web:desktop:most-read", "el": "single-most-read", "ev": "article-3"}'
            href="https://vn.beincrypto.com/gia-toncoin-ton-tang-nho-notcoin/"
            className="no-underline text-dark-grey-700 hover:text-dark-grey-700  "
          >
            Giá Toncoin (TON) có thể tiếp tục xu hướng tăng nhờ Notcoin
          </Link>
        </span>
        <div className="meta flex items-center text-3.5 font-sans leading-5 font-normal text-grey-700 ">
          <div className="flex items-baseline mr-6 gap-x-1.5">
            <svg
              className="bic-svg-icon w-2.5 h-2.5"
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0C2.69138 0 0 2.69164 0 6C0 9.30862 2.69164 12 6 12C9.30836 12 12 9.30836 12 6C12 2.69138 9.30836 0 6 0ZM6 0.878101C8.83406 0.878101 11.122 3.16612 11.122 6.00005C11.122 8.83411 8.83393 11.122 6 11.122C3.16607 11.122 0.878049 8.83398 0.878049 6.00005C0.878049 3.16599 3.16607 0.878101 6 0.878101ZM6 1.60981C5.75756 1.60981 5.56095 1.80641 5.56095 2.04886V6.00008C5.56095 6.16238 5.64945 6.30366 5.78042 6.3796L8.9495 8.20887C9.15948 8.33014 9.42733 8.25879 9.54861 8.04881C9.66989 7.83883 9.59853 7.57098 9.38855 7.44969L6.43898 5.74842V2.04886C6.43898 1.80642 6.24255 1.60981 6 1.60981Z"
                fill="currentColor"
              />
            </svg>{' '}
            <span className="">3 mins</span>
          </div>
          <time className="ago" dateTime="2024-06-04T00:57:40+07:00">
            5 ngày trước
          </time>
        </div>
      </div>
      <div className="pb-4 mb-4 border-b border-b-grey-300 multi-news-card last:border-b-0 last:pb-0 last:mb-0">
        <meta
          itemProp="image"
          content="https://s32697.pcdn.co/wp-content/uploads/2024/06/bic_depin-covers_positive__decentralized_physical_infrastructure_networks-360x203.png.webp"
        />
        <span itemProp="headline" className="block mb-1 font-sans s1 s1--medium">
          <Link
            data-el="most-read-item"
            data-analytics='{"en": "most-read", "ec": "web:desktop:most-read", "el": "single-most-read", "ev": "article-4"}'
            href="https://vn.beincrypto.com/dong-coin-depin-tiem-nang/"
            className="no-underline text-dark-grey-700 hover:text-dark-grey-700  "
          >
            Top 5 đồng coin DePIN đáng chú ý trong tháng 6/2024
          </Link>
        </span>
        <div className="meta flex items-center text-3.5 font-sans leading-5 font-normal text-grey-700 ">
          <div className="flex items-baseline mr-6 gap-x-1.5">
            <svg
              className="bic-svg-icon w-2.5 h-2.5"
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0C2.69138 0 0 2.69164 0 6C0 9.30862 2.69164 12 6 12C9.30836 12 12 9.30836 12 6C12 2.69138 9.30836 0 6 0ZM6 0.878101C8.83406 0.878101 11.122 3.16612 11.122 6.00005C11.122 8.83411 8.83393 11.122 6 11.122C3.16607 11.122 0.878049 8.83398 0.878049 6.00005C0.878049 3.16599 3.16607 0.878101 6 0.878101ZM6 1.60981C5.75756 1.60981 5.56095 1.80641 5.56095 2.04886V6.00008C5.56095 6.16238 5.64945 6.30366 5.78042 6.3796L8.9495 8.20887C9.15948 8.33014 9.42733 8.25879 9.54861 8.04881C9.66989 7.83883 9.59853 7.57098 9.38855 7.44969L6.43898 5.74842V2.04886C6.43898 1.80642 6.24255 1.60981 6 1.60981Z"
                fill="currentColor"
              />
            </svg>{' '}
            <span className="">7 mins</span>
          </div>
          <time className="ago" dateTime="2024-06-04T16:48:28+07:00">
            4 ngày trước
          </time>
        </div>
      </div>
      <div className="pb-4 mb-4 border-b border-b-grey-300 multi-news-card last:border-b-0 last:pb-0 last:mb-0">
        <meta
          itemProp="image"
          content="https://s32697.pcdn.co/wp-content/uploads/2024/06/bic_artificial-intelligence_3-covers_neutral-360x203.jpg.webp"
        />
        <span itemProp="headline" className="block mb-1 font-sans s1 s1--medium">
          <Link
            data-el="most-read-item"
            data-analytics='{"en": "most-read", "ec": "web:desktop:most-read", "el": "single-most-read", "ev": "article-5"}'
            href="https://vn.beincrypto.com/top-dong-coin-ai-tiem-nang-dau-tu/"
            className="no-underline text-dark-grey-700 hover:text-dark-grey-700  "
          >
            Top 5 đồng coin AI tiềm năng cho danh mục đầu tư trong tháng 6/2024
          </Link>
        </span>
        <div className="meta flex items-center text-3.5 font-sans leading-5 font-normal text-grey-700 ">
          <div className="flex items-baseline mr-6 gap-x-1.5">
            <svg
              className="bic-svg-icon w-2.5 h-2.5"
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0C2.69138 0 0 2.69164 0 6C0 9.30862 2.69164 12 6 12C9.30836 12 12 9.30836 12 6C12 2.69138 9.30836 0 6 0ZM6 0.878101C8.83406 0.878101 11.122 3.16612 11.122 6.00005C11.122 8.83411 8.83393 11.122 6 11.122C3.16607 11.122 0.878049 8.83398 0.878049 6.00005C0.878049 3.16599 3.16607 0.878101 6 0.878101ZM6 1.60981C5.75756 1.60981 5.56095 1.80641 5.56095 2.04886V6.00008C5.56095 6.16238 5.64945 6.30366 5.78042 6.3796L8.9495 8.20887C9.15948 8.33014 9.42733 8.25879 9.54861 8.04881C9.66989 7.83883 9.59853 7.57098 9.38855 7.44969L6.43898 5.74842V2.04886C6.43898 1.80642 6.24255 1.60981 6 1.60981Z"
                fill="currentColor"
              />
            </svg>{' '}
            <span className="">7 mins</span>
          </div>
          <time className="ago" dateTime="2024-06-05T00:56:12+07:00">
            4 ngày trước
          </time>
        </div>
      </div>
      <div className="pb-4 mb-4 border-b border-b-grey-300 multi-news-card last:border-b-0 last:pb-0 last:mb-0">
        <meta
          itemProp="image"
          content="https://s32697.pcdn.co/wp-content/uploads/2024/04/bic_ETH_Ethereum_Staking-covers_safe-360x203.png.webp"
        />
        <span itemProp="headline" className="block mb-1 font-sans s1 s1--medium">
          <Link
            data-el="most-read-item"
            data-analytics='{"en": "most-read", "ec": "web:desktop:most-read", "el": "single-most-read", "ev": "article-6"}'
            href="https://vn.beincrypto.com/dong-von-sau-khi-ethereum-etf-ra-mat/"
            className="no-underline text-dark-grey-700 hover:text-dark-grey-700  "
          >
            Ethereum ETF có thể thu hút được dòng vốn đến 569 triệu USD hàng tháng
          </Link>
        </span>
        <div className="meta flex items-center text-3.5 font-sans leading-5 font-normal text-grey-700 ">
          <div className="flex items-baseline mr-6 gap-x-1.5">
            <svg
              className="bic-svg-icon w-2.5 h-2.5"
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0C2.69138 0 0 2.69164 0 6C0 9.30862 2.69164 12 6 12C9.30836 12 12 9.30836 12 6C12 2.69138 9.30836 0 6 0ZM6 0.878101C8.83406 0.878101 11.122 3.16612 11.122 6.00005C11.122 8.83411 8.83393 11.122 6 11.122C3.16607 11.122 0.878049 8.83398 0.878049 6.00005C0.878049 3.16599 3.16607 0.878101 6 0.878101ZM6 1.60981C5.75756 1.60981 5.56095 1.80641 5.56095 2.04886V6.00008C5.56095 6.16238 5.64945 6.30366 5.78042 6.3796L8.9495 8.20887C9.15948 8.33014 9.42733 8.25879 9.54861 8.04881C9.66989 7.83883 9.59853 7.57098 9.38855 7.44969L6.43898 5.74842V2.04886C6.43898 1.80642 6.24255 1.60981 6 1.60981Z"
                fill="currentColor"
              />
            </svg>{' '}
            <span className="">3 mins</span>
          </div>
          <time className="ago" dateTime="2024-06-04T13:51:33+07:00">
            4 ngày trước
          </time>
        </div>
      </div>
    </div>
  );
};
