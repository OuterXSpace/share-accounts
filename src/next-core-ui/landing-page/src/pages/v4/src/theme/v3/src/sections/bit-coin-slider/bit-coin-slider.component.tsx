import Link from 'next/link';
import { BitCoinSliderV4Props } from './bit-coin-slider.type';

export const BitCoinSliderV4: React.FC<BitCoinSliderV4Props> = (props) => {
  const { data, className } = props;

  return (
    <div className="overflow-hidden md:overflow-visible relative flex align-middle w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-2 border-grey-200 border-t border-b bg-white [.dark_&]:bg-dark-grey-700 [.dark_&]:border-dark-grey-500">
      <div className="container">
        <div className="w-full">
          <div className="flex justify-between w-full gap-4 bic-c-coins-list sans" data-el="coins-list-widget">
            <template className="hidden" data-el="coin-template" />
            <div className="hidden" data-el="coin-spiner">
              <div className="flex items-center justify-center w-full h-5 lg:h-6">
                <div className="w-4 h-4 -mt-2 lg:w-5 lg:h-5 lg:-mt-1">
                  <svg
                    className="bic-svg-icon inline animate-spin bic-svg-loader w-3 h-3"
                    aria-hidden="true"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      className="fill-grey-100"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      className="fill-grey-300"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative flex items-center w-full overflow-hidden">
              <div
                className="w-full overflow-hidden scroll-hidden swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
                data-el="coins-wrapper-parent"
              >
                <div
                  className="flex items-center w-full h-full gap-4 sw-wrp lg:gap-0"
                  data-el="coins-wrapper"
                  style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                >
                  <Link
                    data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "btc"}'
                    href="/price/bitcoin/"
                    className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline swiper-slide-active"
                    title="Bitcoin"
                    style={{ marginRight: 16 }}
                  >
                    <span className="inline-block min-w-4 lg:min-w-5">
                      <img
                        loading="lazy"
                        className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                        src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
                        alt="Bitcoin"
                        title="Bitcoin"
                        width="20px"
                        height="20px"
                      />
                    </span>
                    <span className="uppercase">btc</span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-red-300 [.dark_&]:bg-red-700">
                      $69950
                      <svg
                        width={6}
                        height={6}
                        viewBox="0 0 6 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1.5 mr-0.5  rotate-180"
                      >
                        <path
                          d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                          className="fill-currentColor"
                        />
                      </svg>
                      1.58%
                    </span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                      Record Not Found
                    </span>
                  </Link>
                  <Link
                    data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "eth"}'
                    href="/price/ethereum/"
                    className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline swiper-slide-next"
                    title="Ethereum"
                    style={{ marginRight: 16 }}
                  >
                    <span className="inline-block min-w-4 lg:min-w-5">
                      <img
                        loading="lazy"
                        className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                        src="https://assets.coingecko.com/coins/images/279/small/ethereum.png"
                        alt="Ethereum"
                        title="Ethereum"
                        width="20px"
                        height="20px"
                      />
                    </span>
                    <span className="uppercase">eth</span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-red-300 [.dark_&]:bg-red-700">
                      $3738.76
                      <svg
                        width={6}
                        height={6}
                        viewBox="0 0 6 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1.5 mr-0.5  rotate-180"
                      >
                        <path
                          d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                          className="fill-currentColor"
                        />
                      </svg>
                      2.4%
                    </span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                      Record Not Found
                    </span>
                  </Link>
                  <Link
                    data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "usdt"}'
                    href="/price/tether/"
                    className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline"
                    title="Tether"
                    style={{ marginRight: 16 }}
                  >
                    <span className="inline-block min-w-4 lg:min-w-5">
                      <img
                        loading="lazy"
                        className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                        src="https://assets.coingecko.com/coins/images/325/small/Tether-logo.png"
                        alt="Tether"
                        title="Tether"
                        width="20px"
                        height="20px"
                      />
                    </span>
                    <span className="uppercase">usdt</span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-red-300 [.dark_&]:bg-red-700">
                      $0.998914
                      <svg
                        width={6}
                        height={6}
                        viewBox="0 0 6 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1.5 mr-0.5  rotate-180"
                      >
                        <path
                          d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                          className="fill-currentColor"
                        />
                      </svg>
                      0.08%
                    </span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                      Record Not Found
                    </span>
                  </Link>
                  <Link
                    data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "bnb"}'
                    href="/price/binancecoin/"
                    className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline"
                    title="BNB"
                    style={{ marginRight: 16 }}
                  >
                    <span className="inline-block min-w-4 lg:min-w-5">
                      <img
                        loading="lazy"
                        className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                        src="https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png"
                        alt="BNB"
                        title="BNB"
                        width="20px"
                        height="20px"
                      />
                    </span>
                    <span className="uppercase">bnb</span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-red-300 [.dark_&]:bg-red-700">
                      $689.64
                      <svg
                        width={6}
                        height={6}
                        viewBox="0 0 6 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1.5 mr-0.5  rotate-180"
                      >
                        <path
                          d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                          className="fill-currentColor"
                        />
                      </svg>
                      2.16%
                    </span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                      Record Not Found
                    </span>
                  </Link>
                  <Link
                    data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "sol"}'
                    href="/price/solana/"
                    className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline"
                    title="Solana"
                    style={{ marginRight: 16 }}
                  >
                    <span className="inline-block min-w-4 lg:min-w-5">
                      <img
                        loading="lazy"
                        className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                        src="https://assets.coingecko.com/coins/images/4128/small/solana.png"
                        alt="Solana"
                        title="Solana"
                        width="20px"
                        height="20px"
                      />
                    </span>
                    <span className="uppercase">sol</span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-red-300 [.dark_&]:bg-red-700">
                      $166.38
                      <svg
                        width={6}
                        height={6}
                        viewBox="0 0 6 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1.5 mr-0.5  rotate-180"
                      >
                        <path
                          d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                          className="fill-currentColor"
                        />
                      </svg>
                      3.11%
                    </span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                      Record Not Found
                    </span>
                  </Link>
                  <Link
                    data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "steth"}'
                    href="/price/staked-ether/"
                    className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline"
                    title="Lido Staked Ether"
                    style={{ marginRight: 16 }}
                  >
                    <span className="inline-block min-w-4 lg:min-w-5">
                      <img
                        loading="lazy"
                        className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                        src="https://assets.coingecko.com/coins/images/13442/small/steth_logo.png"
                        alt="Lido Staked Ether"
                        title="Lido Staked Ether"
                        width="20px"
                        height="20px"
                      />
                    </span>
                    <span className="uppercase">steth</span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-red-300 [.dark_&]:bg-red-700">
                      $3728.53
                      <svg
                        width={6}
                        height={6}
                        viewBox="0 0 6 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1.5 mr-0.5  rotate-180"
                      >
                        <path
                          d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                          className="fill-currentColor"
                        />
                      </svg>
                      2.64%
                    </span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                      Record Not Found
                    </span>
                  </Link>
                  <Link
                    data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "usdc"}'
                    href="/price/usd-coin/"
                    className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline"
                    title="USDC"
                    style={{ marginRight: 16 }}
                  >
                    <span className="inline-block min-w-4 lg:min-w-5">
                      <img
                        loading="lazy"
                        className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                        src="https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png"
                        alt="USDC"
                        title="USDC"
                        width="20px"
                        height="20px"
                      />
                    </span>
                    <span className="uppercase">usdc</span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-red-300 [.dark_&]:bg-red-700">
                      $0.995882
                      <svg
                        width={6}
                        height={6}
                        viewBox="0 0 6 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1.5 mr-0.5  rotate-180"
                      >
                        <path
                          d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                          className="fill-currentColor"
                        />
                      </svg>
                      0.43%
                    </span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                      Record Not Found
                    </span>
                  </Link>
                  <Link
                    data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "xrp"}'
                    href="/price/ripple/"
                    className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline"
                    title="XRP"
                    style={{ marginRight: 16 }}
                  >
                    <span className="inline-block min-w-4 lg:min-w-5">
                      <img
                        loading="lazy"
                        className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                        src="https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png"
                        alt="XRP"
                        title="XRP"
                        width="20px"
                        height="20px"
                      />
                    </span>
                    <span className="uppercase">xrp</span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-red-300 [.dark_&]:bg-red-700">
                      $0.516054
                      <svg
                        width={6}
                        height={6}
                        viewBox="0 0 6 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1.5 mr-0.5  rotate-180"
                      >
                        <path
                          d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                          className="fill-currentColor"
                        />
                      </svg>
                      1.82%
                    </span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                      Record Not Found
                    </span>
                  </Link>
                  <Link
                    data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "doge"}'
                    href="/price/dogecoin/"
                    className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline"
                    title="Dogecoin"
                    style={{ marginRight: 16 }}
                  >
                    <span className="inline-block min-w-4 lg:min-w-5">
                      <img
                        loading="lazy"
                        className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                        src="https://assets.coingecko.com/coins/images/5/small/dogecoin.png"
                        alt="Dogecoin"
                        title="Dogecoin"
                        width="20px"
                        height="20px"
                      />
                    </span>
                    <span className="uppercase">doge</span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-red-300 [.dark_&]:bg-red-700">
                      $0.157675
                      <svg
                        width={6}
                        height={6}
                        viewBox="0 0 6 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1.5 mr-0.5  rotate-180"
                      >
                        <path
                          d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                          className="fill-currentColor"
                        />
                      </svg>
                      2.49%
                    </span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                      Record Not Found
                    </span>
                  </Link>
                  <Link
                    data-analytics='{"en": "coin-slider", "ec": "web:desktop:coin-slider", "el": "main-coin-slider", "ev": "ton"}'
                    href="/price/the-open-network/"
                    className="inline-flex items-center text-3 font-bold leading-4 sw-sl whitespace-nowrap lg:text-3.5 lg:leading-5 hover:no-underline"
                    title="Toncoin"
                    style={{ marginRight: 16 }}
                  >
                    <span className="inline-block min-w-4 lg:min-w-5">
                      <img
                        loading="lazy"
                        className="lazy max-w-4 max-h-4 mr-1 lg:max-w-5 lg:max-h-5"
                        src="https://assets.coingecko.com/coins/images/17980/small/ton.PNG"
                        alt="Toncoin"
                        title="Toncoin"
                        width="20px"
                        height="20px"
                      />
                    </span>
                    <span className="uppercase">ton</span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center lg:text-3 lg:leading-4  bg-lime-300 [.dark_&]:bg-green-700">
                      $7.41
                      <svg
                        width={6}
                        height={6}
                        viewBox="0 0 6 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1.5 mr-0.5 "
                      >
                        <path
                          d="M2.36635 1.0982C2.64814 0.61011 3.35264 0.61011 3.63444 1.0982L5.48404 4.3018C5.76583 4.78989 5.41359 5.4 4.84999 5.4L1.15079 5.4C0.587194 5.4 0.234947 4.78989 0.516745 4.3018L2.36635 1.0982Z"
                          className="fill-currentColor"
                        />
                      </svg>
                      0.3%
                    </span>
                    <span className="inline-flex font-medium ml-1 rounded whitespace-nowrap py-0.5 px-1 items-center bg-red-500  lg:text-3 lg:leading-4 text-white hidden">
                      Record Not Found
                    </span>
                  </Link>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-5 h-full bg-gradient-r-l-white [.dark_&]:bg-gradient-r-l-dark" />
            </div>
            <div className="relative flex gap-4">
              <Link
                href="#"
                className="items-center text-3 leading-4.5 font-normal whitespace-nowrap text-blue-700 [.dark_&]:text-blue-500 hidden lg:inline-flex "
                data-el="coins-dropdown"
              >
                Chỉnh sửa
                <i className="ml-2">
                  <svg
                    className="bic-svg-icon w-4 h-4 fill-blue-700 [.dark_&]:text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 26"
                    width={24}
                    height={26}
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="m12.12 15.604 6.085-6.1a.792.792 0 0 1 1.123 0c.31.31.31.814 0 1.125l-7.208 7.226-7.207-7.226a.797.797 0 0 1 0-1.126.792.792 0 0 1 1.122 0l6.085 6.101Z"
                      clipRule="evenodd"
                    />
                  </svg>{' '}
                </i>
              </Link>
              <Link
                href="/price/"
                className="inline-flex items-center text-3 leading-4.5 font-normal whitespace-nowrap text-blue-700 [.dark_&]:text-blue-500"
              >
                Xem thêm
              </Link>
              <div
                className="absolute z-10 w-56 p-2 overflow-hidden bg-white rounded-lg top-9 shadow-menu -translate-x-1/3 lg:-translate-x-3/4 hidden"
                data-el="dropdown"
              >
                <div className="relative">
                  <i className="absolute left-3 top-2.5 text-grey-600">
                    <svg
                      className="bic-svg-icon w-4 h-4 fill-grey-600"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 17.0724L13.6311 12.7036C14.6972 11.4019 15.2208 9.74121 15.0936 8.06177C14.9665 6.38607 14.2034 4.81885 12.9541 3.69299C11.7085 2.56339 10.0739 1.95744 8.39071 2.00233C6.70749 2.04347 5.10656 2.7317 3.91709 3.92115C2.72762 5.10686 2.04311 6.70774 2.00197 8.39092C1.96082 10.0741 2.56678 11.7049 3.69266 12.9542C4.82229 14.1998 6.38581 14.9665 8.06154 15.0937C9.73728 15.2209 11.4018 14.6972 12.7035 13.6312L17.0724 18L18 17.0724ZM3.3261 8.56298C3.3261 7.17529 3.87969 5.84371 4.85969 4.85999C5.84344 3.87627 7.17505 3.32643 8.56277 3.32643C9.95049 3.32643 11.2821 3.88001 12.2658 4.85999C13.2496 5.84371 13.7994 7.17529 13.7994 8.56298C13.7994 9.95067 13.2458 11.2822 12.2658 12.266C11.2821 13.2497 9.95049 13.7995 8.56277 13.7995C7.17505 13.7995 5.84344 13.246 4.86343 12.2622C3.88343 11.2785 3.32984 9.95441 3.3261 8.56298Z"
                        fill="currentColor"
                      />
                    </svg>{' '}
                  </i>
                  <i className="absolute cursor-pointer right-3 top-3 text-grey-600" data-el="search-clear">
                    <svg
                      className="bic-svg-icon w-3 h-3 fill-grey-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M15.8 5.14a.66.66 0 0 0 0-.95.68.68 0 0 0-.95 0L10 9.06 5.15 4.2a.68.68 0 0 0-.95 0 .66.66 0 0 0 0 .94L9.04 10 4.2 14.86a.66.66 0 0 0 0 .95c.27.26.7.25.96 0L10 10.94l4.85 4.85c.26.26.69.27.95 0a.66.66 0 0 0 0-.94L10.96 10l4.86-4.86Z"
                        clipRule="evenodd"
                      />
                    </svg>{' '}
                  </i>
                  <input
                    className="w-full py-2 pl-10 text-3.5 font-normal leading-5 border rounded-md border-blue-700 pr-11 font-body h-9 outline-0 placeholder-grey-600 text-dark-grey-700"
                    autoComplete="off"
                    type="search"
                    data-el="bic-coins-widget-search"
                    name="bic-coins-widget-search"
                    defaultValue=""
                    placeholder="Tìm kiếm các loại tiền tệ"
                  />
                </div>
                <div>
                  <div
                    className="relative pl-2 my-2 overflow-y-auto h-60 bic-scroll-coins"
                    data-el="dropdown-elem-wraper"
                  >
                    <label
                      data-analytics='{"en": "coin-select-box", "ec": "web:desktop:coin-select-box", "el": "main-header-coin-select-box", "ev": ""}'
                      className="mb-0 py-2.5 pr-2 items-center cursor-pointer hidden"
                      data-el="dropdown-elem-template"
                      data-value=""
                    >
                      <input data-place="coin_id" type="checkbox" name="coin_id" defaultValue="" className="mr-3" />
                      <img
                        loading="lazy"
                        data-place="logo"
                        className="mr-2 max-w-4 max-h-4 min-w-4"
                        src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                        alt="Loading Coin..."
                      />
                      <span
                        data-place="name"
                        className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                      />
                      <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600" />
                    </label>
                    <label
                      data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"btc"}'
                      className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                      data-el="dropdown-elem"
                      data-value='{"id":"bitcoin","custom_id":"bitcoin","name":"Bitcoin","logo":"https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1696501400","symbol":"btc"}'
                      title="Bitcoin"
                      data-issponsored={0}
                    >
                      <input
                        data-place="coin_id"
                        type="checkbox"
                        name="coin_id"
                        defaultValue="bitcoin"
                        className="mr-3"
                      />
                      <img
                        loading="lazy"
                        data-place="logo"
                        className="mr-2 max-w-4 max-h-4 min-w-4"
                        src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1696501400"
                        alt="Bitcoin"
                        title="Bitcoin"
                      />
                      <span
                        data-place="name"
                        className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                      >
                        Bitcoin
                      </span>
                      <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                        btc
                      </span>
                    </label>
                    <label
                      data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"eth"}'
                      className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                      data-el="dropdown-elem"
                      data-value='{"id":"ethereum","custom_id":"ethereum","name":"Ethereum","logo":"https://assets.coingecko.com/coins/images/279/small/ethereum.png?1696501628","symbol":"eth"}'
                      title="Ethereum"
                      data-issponsored={0}
                    >
                      <input
                        data-place="coin_id"
                        type="checkbox"
                        name="coin_id"
                        defaultValue="ethereum"
                        className="mr-3"
                      />
                      <img
                        loading="lazy"
                        data-place="logo"
                        className="mr-2 max-w-4 max-h-4 min-w-4"
                        src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1696501628"
                        alt="Ethereum"
                        title="Ethereum"
                      />
                      <span
                        data-place="name"
                        className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                      >
                        Ethereum
                      </span>
                      <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                        eth
                      </span>
                    </label>
                    <label
                      data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"usdt"}'
                      className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                      data-el="dropdown-elem"
                      data-value='{"id":"tether","custom_id":"tether","name":"Tether","logo":"https://assets.coingecko.com/coins/images/325/small/Tether.png?1696501661","symbol":"usdt"}'
                      title="Tether"
                      data-issponsored={0}
                    >
                      <input
                        data-place="coin_id"
                        type="checkbox"
                        name="coin_id"
                        defaultValue="tether"
                        className="mr-3"
                      />
                      <img
                        loading="lazy"
                        data-place="logo"
                        className="mr-2 max-w-4 max-h-4 min-w-4"
                        src="https://assets.coingecko.com/coins/images/325/small/Tether.png?1696501661"
                        alt="Tether"
                        title="Tether"
                      />
                      <span
                        data-place="name"
                        className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                      >
                        Tether
                      </span>
                      <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                        usdt
                      </span>
                    </label>
                    <label
                      data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"bnb"}'
                      className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                      data-el="dropdown-elem"
                      data-value='{"id":"binancecoin","custom_id":"binancecoin","name":"BNB","logo":"https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png?1696501970","symbol":"bnb"}'
                      title="BNB"
                      data-issponsored={0}
                    >
                      <input
                        data-place="coin_id"
                        type="checkbox"
                        name="coin_id"
                        defaultValue="binancecoin"
                        className="mr-3"
                      />
                      <img
                        loading="lazy"
                        data-place="logo"
                        className="mr-2 max-w-4 max-h-4 min-w-4"
                        src="https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png?1696501970"
                        alt="BNB"
                        title="BNB"
                      />
                      <span
                        data-place="name"
                        className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                      >
                        BNB
                      </span>
                      <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                        bnb
                      </span>
                    </label>
                    <label
                      data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"sol"}'
                      className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                      data-el="dropdown-elem"
                      data-value='{"id":"solana","custom_id":"solana","name":"Solana","logo":"https://assets.coingecko.com/coins/images/4128/small/solana.png?1696504756","symbol":"sol"}'
                      title="Solana"
                      data-issponsored={0}
                    >
                      <input
                        data-place="coin_id"
                        type="checkbox"
                        name="coin_id"
                        defaultValue="solana"
                        className="mr-3"
                      />
                      <img
                        loading="lazy"
                        data-place="logo"
                        className="mr-2 max-w-4 max-h-4 min-w-4"
                        src="https://assets.coingecko.com/coins/images/4128/small/solana.png?1696504756"
                        alt="Solana"
                        title="Solana"
                      />
                      <span
                        data-place="name"
                        className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                      >
                        Solana
                      </span>
                      <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                        sol
                      </span>
                    </label>
                    <label
                      data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"steth"}'
                      className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                      data-el="dropdown-elem"
                      data-value='{"id":"staked-ether","custom_id":"staked-ether","name":"Lido Staked Ether","logo":"https://assets.coingecko.com/coins/images/13442/small/steth_logo.png?1696513206","symbol":"steth"}'
                      title="Lido Staked Ether"
                      data-issponsored={0}
                    >
                      <input
                        data-place="coin_id"
                        type="checkbox"
                        name="coin_id"
                        defaultValue="staked-ether"
                        className="mr-3"
                      />
                      <img
                        loading="lazy"
                        data-place="logo"
                        className="mr-2 max-w-4 max-h-4 min-w-4"
                        src="https://assets.coingecko.com/coins/images/13442/small/steth_logo.png?1696513206"
                        alt="Lido Staked Ether"
                        title="Lido Staked Ether"
                      />
                      <span
                        data-place="name"
                        className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                      >
                        Lido Staked Ether
                      </span>
                      <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                        steth
                      </span>
                    </label>
                    <label
                      data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"usdc"}'
                      className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                      data-el="dropdown-elem"
                      data-value='{"id":"usd-coin","custom_id":"usd-coin","name":"USDC","logo":"https://assets.coingecko.com/coins/images/6319/small/usdc.png?1696506694","symbol":"usdc"}'
                      title="USDC"
                      data-issponsored={0}
                    >
                      <input
                        data-place="coin_id"
                        type="checkbox"
                        name="coin_id"
                        defaultValue="usd-coin"
                        className="mr-3"
                      />
                      <img
                        loading="lazy"
                        data-place="logo"
                        className="mr-2 max-w-4 max-h-4 min-w-4"
                        src="https://assets.coingecko.com/coins/images/6319/small/usdc.png?1696506694"
                        alt="USDC"
                        title="USDC"
                      />
                      <span
                        data-place="name"
                        className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                      >
                        USDC
                      </span>
                      <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                        usdc
                      </span>
                    </label>
                    <label
                      data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"xrp"}'
                      className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                      data-el="dropdown-elem"
                      data-value='{"id":"ripple","custom_id":"ripple","name":"XRP","logo":"https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png?1696501442","symbol":"xrp"}'
                      title="XRP"
                      data-issponsored={0}
                    >
                      <input
                        data-place="coin_id"
                        type="checkbox"
                        name="coin_id"
                        defaultValue="ripple"
                        className="mr-3"
                      />
                      <img
                        loading="lazy"
                        data-place="logo"
                        className="mr-2 max-w-4 max-h-4 min-w-4"
                        src="https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png?1696501442"
                        alt="XRP"
                        title="XRP"
                      />
                      <span
                        data-place="name"
                        className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                      >
                        XRP
                      </span>
                      <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                        xrp
                      </span>
                    </label>
                    <label
                      data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"doge"}'
                      className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                      data-el="dropdown-elem"
                      data-value='{"id":"dogecoin","custom_id":"dogecoin","name":"Dogecoin","logo":"https://assets.coingecko.com/coins/images/5/small/dogecoin.png?1696501409","symbol":"doge"}'
                      title="Dogecoin"
                      data-issponsored={0}
                    >
                      <input
                        data-place="coin_id"
                        type="checkbox"
                        name="coin_id"
                        defaultValue="dogecoin"
                        className="mr-3"
                      />
                      <img
                        loading="lazy"
                        data-place="logo"
                        className="mr-2 max-w-4 max-h-4 min-w-4"
                        src="https://assets.coingecko.com/coins/images/5/small/dogecoin.png?1696501409"
                        alt="Dogecoin"
                        title="Dogecoin"
                      />
                      <span
                        data-place="name"
                        className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                      >
                        Dogecoin
                      </span>
                      <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                        doge
                      </span>
                    </label>
                    <label
                      data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"ton"}'
                      className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                      data-el="dropdown-elem"
                      data-value='{"id":"the-open-network","custom_id":"the-open-network","name":"Toncoin","logo":"https://assets.coingecko.com/coins/images/17980/small/ton_symbol.png?1696517498","symbol":"ton"}'
                      title="Toncoin"
                      data-issponsored={0}
                    >
                      <input
                        data-place="coin_id"
                        type="checkbox"
                        name="coin_id"
                        defaultValue="the-open-network"
                        className="mr-3"
                      />
                      <img
                        loading="lazy"
                        data-place="logo"
                        className="mr-2 max-w-4 max-h-4 min-w-4"
                        src="https://assets.coingecko.com/coins/images/17980/small/ton_symbol.png?1696517498"
                        alt="Toncoin"
                        title="Toncoin"
                      />
                      <span
                        data-place="name"
                        className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                      >
                        Toncoin
                      </span>
                      <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                        ton
                      </span>
                    </label>
                    <label
                      data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"ada"}'
                      className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                      data-el="dropdown-elem"
                      data-value='{"id":"cardano","custom_id":"cardano","name":"Cardano","logo":"https://assets.coingecko.com/coins/images/975/small/cardano.png?1696502090","symbol":"ada"}'
                      title="Cardano"
                      data-issponsored={0}
                    >
                      <input
                        data-place="coin_id"
                        type="checkbox"
                        name="coin_id"
                        defaultValue="cardano"
                        className="mr-3"
                      />
                      <img
                        loading="lazy"
                        data-place="logo"
                        className="mr-2 max-w-4 max-h-4 min-w-4"
                        src="https://assets.coingecko.com/coins/images/975/small/cardano.png?1696502090"
                        alt="Cardano"
                        title="Cardano"
                      />
                      <span
                        data-place="name"
                        className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                      >
                        Cardano
                      </span>
                      <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                        ada
                      </span>
                    </label>
                    <label
                      data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"shib"}'
                      className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                      data-el="dropdown-elem"
                      data-value='{"id":"shiba-inu","custom_id":"shiba-inu","name":"Shiba Inu","logo":"https://assets.coingecko.com/coins/images/11939/small/shiba.png?1696511800","symbol":"shib"}'
                      title="Shiba Inu"
                      data-issponsored={0}
                    >
                      <input
                        data-place="coin_id"
                        type="checkbox"
                        name="coin_id"
                        defaultValue="shiba-inu"
                        className="mr-3"
                      />
                      <img
                        loading="lazy"
                        data-place="logo"
                        className="mr-2 max-w-4 max-h-4 min-w-4"
                        src="https://assets.coingecko.com/coins/images/11939/small/shiba.png?1696511800"
                        alt="Shiba Inu"
                        title="Shiba Inu"
                      />
                      <span
                        data-place="name"
                        className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                      >
                        Shiba Inu
                      </span>
                      <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                        shib
                      </span>
                    </label>
                    <label
                      data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"avax"}'
                      className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                      data-el="dropdown-elem"
                      data-value='{"id":"avalanche-2","custom_id":"avalanche-2","name":"Avalanche","logo":"https://assets.coingecko.com/coins/images/12559/small/Avalanche_Circle_RedWhite_Trans.png?1696512369","symbol":"avax"}'
                      title="Avalanche"
                      data-issponsored={0}
                    >
                      <input
                        data-place="coin_id"
                        type="checkbox"
                        name="coin_id"
                        defaultValue="avalanche-2"
                        className="mr-3"
                      />
                      <img
                        loading="lazy"
                        data-place="logo"
                        className="mr-2 max-w-4 max-h-4 min-w-4"
                        src="https://assets.coingecko.com/coins/images/12559/small/Avalanche_Circle_RedWhite_Trans.png?1696512369"
                        alt="Avalanche"
                        title="Avalanche"
                      />
                      <span
                        data-place="name"
                        className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                      >
                        Avalanche
                      </span>
                      <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                        avax
                      </span>
                    </label>
                    <label
                      data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"wbtc"}'
                      className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                      data-el="dropdown-elem"
                      data-value='{"id":"wrapped-bitcoin","custom_id":"wrapped-bitcoin","name":"Wrapped Bitcoin","logo":"https://assets.coingecko.com/coins/images/7598/small/wrapped_bitcoin_wbtc.png?1696507857","symbol":"wbtc"}'
                      title="Wrapped Bitcoin"
                      data-issponsored={0}
                    >
                      <input
                        data-place="coin_id"
                        type="checkbox"
                        name="coin_id"
                        defaultValue="wrapped-bitcoin"
                        className="mr-3"
                      />
                      <img
                        loading="lazy"
                        data-place="logo"
                        className="mr-2 max-w-4 max-h-4 min-w-4"
                        src="https://assets.coingecko.com/coins/images/7598/small/wrapped_bitcoin_wbtc.png?1696507857"
                        alt="Wrapped Bitcoin"
                        title="Wrapped Bitcoin"
                      />
                      <span
                        data-place="name"
                        className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                      >
                        Wrapped Bitcoin
                      </span>
                      <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                        wbtc
                      </span>
                    </label>
                    <label
                      data-analytics='{"en":"coin-select-box","ec":"web:desktop:coin-select-box","el":"main-header-coin-select-box","ev":"link"}'
                      className="mb-0 py-2.5 pr-2 items-center cursor-pointer flex"
                      data-el="dropdown-elem"
                      data-value='{"id":"chainlink","custom_id":"chainlink","name":"Chainlink","logo":"https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png?1696502009","symbol":"link"}'
                      title="Chainlink"
                      data-issponsored={0}
                    >
                      <input
                        data-place="coin_id"
                        type="checkbox"
                        name="coin_id"
                        defaultValue="chainlink"
                        className="mr-3"
                      />
                      <img
                        loading="lazy"
                        data-place="logo"
                        className="mr-2 max-w-4 max-h-4 min-w-4"
                        src="https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png?1696502009"
                        alt="Chainlink"
                        title="Chainlink"
                      />
                      <span
                        data-place="name"
                        className="mr-1 text-3.5 font-medium leading-5 truncate font-body text-dark-grey-700"
                      >
                        Chainlink
                      </span>
                      <span data-place="symbol" className="font-medium leading-5 uppercase text-3 text-grey-600">
                        link
                      </span>
                    </label>
                  </div>
                  <div
                    data-el="spinner"
                    className="hidden absolute bottom-0 left-0 w-full h-[calc(100%-52px)] items-center justify-center bg-black/30"
                  >
                    <div>
                      <svg
                        className="bic-svg-icon inline animate-spin bic-svg-loader w-5 h-5"
                        aria-hidden="true"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          className="fill-grey-100"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          className="fill-grey-300"
                        />
                      </svg>{' '}
                    </div>
                  </div>
                </div>
                <div className="bg-grey-100 h-9 flex px-4 text-grey-700 items-center -mx-2 -mb-2 text-3 leading-4.5 font-normal">
                  <i className="mr-2">
                    <svg
                      className="bic-svg-icon w-3 h-3 fill-grey-600"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 16C6.6865 16 4 13.3135 4 10C4 6.6865 6.6865 4 10 4C13.3135 4 16 6.6865 16 10C16 13.3135 13.3135 16 10 16ZM9.30668 6.60049V10.1569C9.30668 10.4046 9.43885 10.6334 9.65331 10.7573C9.86785 10.8811 10.1322 10.8811 10.3467 10.7573C10.5612 10.6334 10.6933 10.4044 10.6933 10.1568V6.60041C10.6933 6.35265 10.5612 6.12388 10.3467 6C10.1322 5.8762 9.86783 5.8762 9.65331 6C9.43885 6.12388 9.30668 6.35274 9.30668 6.60049ZM10 11.8334C9.77903 11.8334 9.56699 11.9211 9.41071 12.0774C9.25444 12.2337 9.16662 12.4457 9.16662 12.6667C9.16662 12.8877 9.25443 13.0996 9.41071 13.256C9.56699 13.4123 9.77903 13.5 10 13.5C10.221 13.5 10.433 13.4123 10.5893 13.256C10.7456 13.0996 10.8334 12.8877 10.8334 12.6667C10.8334 12.4457 10.7456 12.2337 10.5893 12.0774C10.433 11.9211 10.221 11.8334 10 11.8334Z"
                        fill="currentColor"
                      />
                    </svg>{' '}
                  </i>
                  Bạn chỉ có thể chọn 10 đồng xu
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
