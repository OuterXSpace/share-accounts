import Link from 'next/link';
import { ConvertPriceSectionV4Props } from './convert-price-section.type';

export const ConvertPriceSectionV4: React.FC<ConvertPriceSectionV4Props> = (props) => {
  const { data, className } = props;

  return (
    <div className="page-content max-w-full w-full">
      <h1 className="wp-block-heading" style={{ display: 'none' }}>
        Top tỉ lệ chuyển đổi 50 đồng tiền điện tử sang tiền fiat
      </h1>
      <div id="exchanges-list" className="convert-list">
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="text-3.5 font-sans font-normal text-blue-600 ">
            <Link href="/" className="b-home" aria-label="Go to home" />
            <i>/</i>
            <Link href="#">Chuyển đổi</Link>
          </div>
        </div>
        <div className="mb-8 lg:mb-11 lg:w-7/12">
          <h4 className="mb-6 h4 lg:h2">Loại tiền nào bạn muốn chuyển đổi?</h4>
          <div className="@container relative z-30">
            <div
              className="c-bic-conversor w-full max-w-full flex flex-wrap @4xl:flex-nowrap items-center justify-between"
              data-el="c-bic-conversor"
            >
              <div
                className="c-bic-conversor-input-wrap mb-4 @lg:mb-0 @4xl:border @4xl:border-grey-500 w-full @lg:grow @lg:shrink @lg:basis-0 max-w-full flex flex-col @4xl:flex-row items-center gap-2 relative"
                data-el="c-bic-conversor-input-wrap"
              >
                <div
                  className="order-1 flex px-2 items-center rounded-md border border-grey-500 @4xl:border-0 w-full @4xl:w-1/2 max-w-full min-h-[50px]"
                  data-from={1}
                  data-currency_type="crypto"
                  data-el="currency-dropdown-wrap"
                  data-symbol="btc"
                  data-id="bitcoin"
                  data-custom_id="bitcoin"
                >
                  <div className="relative flex items-center py-3 cursor-pointer" data-el="currency-dropdown">
                    <img
                      src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
                      width={24}
                      height={24}
                      alt="btc"
                      data-el="currency-dropdown-logo"
                    />
                    <span
                      className="ml-2 uppercase min-w-20 s3 s3--medium text-dark-grey-700 "
                      data-el="currency-dropdown-symbol"
                    >
                      btc
                    </span>
                    <svg
                      data-el="currency-dropdown-arrow"
                      width={9}
                      height={8}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.134 6.902a.732.732 0 0 1-1.268 0L.804 1.598A.732.732 0 0 1 1.438.5h6.124c.564 0 .916.61.634 1.098L5.134 6.902Z"
                        fill="currentColor"
                      />
                    </svg>
                    <ol
                      className="shadow-menu rounded-lg hidden absolute z-30 top-full -left-2 -ml-px w-fit max-w-full min-w-max bg-white border border-grey-200 max-h-[269px] overflow-auto bic-default-scroll -mb-px "
                      data-el="currency-dropdown-list"
                    >
                      <li className="sticky top-0 border-b border-grey-300" data-el="currency-dropdown-search-wrap">
                        <input
                          className="block py-2 px-3.5 bg-white border rounded-md p3 p3--ns text-grey-700 border-grey-400 focus:outline-none focus-visible:outline-none placeholder:text-dark-grey-700   "
                          type="search"
                          placeholder="Tìm thấy..."
                          data-el="currency-dropdown-search"
                          aria-label="Find Fiat"
                        />
                      </li>
                      <li
                        className="px-2 py-3 -mt-px snap-always snap-start hover:bg-blue-200"
                        data-details='{"name":"BNB","id":"binancecoin","custom_id":"binancecoin","symbol":"bnb","coin_type":"crypto","logo":"https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png"}'
                        data-el="currency-dropdown-list-item"
                      >
                        {' '}
                        <figure className="flex items-center">
                          {' '}
                          <span className="inline-block w-6 text-center">
                            <img
                              loading="lazy"
                              src="https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png"
                              alt="bnb"
                              width={24}
                              height={24}
                              data-el="currency-dropdown-logo"
                            />
                          </span>{' '}
                          <figcaption className="ml-2 p5 p5--ns">BNB</figcaption>
                        </figure>
                      </li>{' '}
                      <li
                        className="px-2 py-3 -mt-px snap-always snap-start hover:bg-blue-200"
                        data-details='{"name":"Bitcoin","id":"bitcoin","custom_id":"bitcoin","symbol":"btc","coin_type":"crypto","logo":"https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png"}'
                        data-el="currency-dropdown-list-item"
                      >
                        {' '}
                        <figure className="flex items-center">
                          {' '}
                          <span className="inline-block w-6 text-center">
                            <img
                              loading="lazy"
                              src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png"
                              alt="btc"
                              width={24}
                              height={24}
                              data-el="currency-dropdown-logo"
                            />
                          </span>{' '}
                          <figcaption className="ml-2 p5 p5--ns">Bitcoin</figcaption>
                        </figure>
                      </li>{' '}
                      <li
                        className="px-2 py-3 -mt-px snap-always snap-start hover:bg-blue-200"
                        data-details='{"name":"Dogecoin","id":"dogecoin","custom_id":"dogecoin","symbol":"doge","coin_type":"crypto","logo":"https://assets.coingecko.com/coins/images/5/thumb/dogecoin.png"}'
                        data-el="currency-dropdown-list-item"
                      >
                        {' '}
                        <figure className="flex items-center">
                          {' '}
                          <span className="inline-block w-6 text-center">
                            <img
                              loading="lazy"
                              src="https://assets.coingecko.com/coins/images/5/thumb/dogecoin.png"
                              alt="doge"
                              width={24}
                              height={24}
                              data-el="currency-dropdown-logo"
                            />
                          </span>{' '}
                          <figcaption className="ml-2 p5 p5--ns">Dogecoin</figcaption>
                        </figure>
                      </li>{' '}
                      <li
                        className="px-2 py-3 -mt-px snap-always snap-start hover:bg-blue-200"
                        data-details='{"name":"Ethereum","id":"ethereum","custom_id":"ethereum","symbol":"eth","coin_type":"crypto","logo":"https://assets.coingecko.com/coins/images/279/thumb/ethereum.png"}'
                        data-el="currency-dropdown-list-item"
                      >
                        {' '}
                        <figure className="flex items-center">
                          {' '}
                          <span className="inline-block w-6 text-center">
                            <img
                              loading="lazy"
                              src="https://assets.coingecko.com/coins/images/279/thumb/ethereum.png"
                              alt="eth"
                              width={24}
                              height={24}
                              data-el="currency-dropdown-logo"
                            />
                          </span>{' '}
                          <figcaption className="ml-2 p5 p5--ns">Ethereum</figcaption>
                        </figure>
                      </li>{' '}
                      <li
                        className="px-2 py-3 -mt-px snap-always snap-start hover:bg-blue-200"
                        data-details='{"name":"Lido Staked Ether","id":"staked-ether","custom_id":"staked-ether","symbol":"steth","coin_type":"crypto","logo":"https://assets.coingecko.com/coins/images/13442/thumb/steth_logo.png"}'
                        data-el="currency-dropdown-list-item"
                      >
                        {' '}
                        <figure className="flex items-center">
                          {' '}
                          <span className="inline-block w-6 text-center">
                            <img
                              loading="lazy"
                              src="https://assets.coingecko.com/coins/images/13442/thumb/steth_logo.png"
                              alt="steth"
                              width={24}
                              height={24}
                              data-el="currency-dropdown-logo"
                            />
                          </span>{' '}
                          <figcaption className="ml-2 p5 p5--ns">Lido Staked Ether</figcaption>
                        </figure>
                      </li>{' '}
                      <li
                        className="px-2 py-3 -mt-px snap-always snap-start hover:bg-blue-200"
                        data-details='{"name":"MMS Cash Token","id":"mms-cash-token","custom_id":"mms-cash-token","symbol":"MCASH","coin_type":"crypto","logo":"https://assets.coingecko.com/coins/images/18689/thumb/mms.png"}'
                        data-el="currency-dropdown-list-item"
                      >
                        {' '}
                        <figure className="flex items-center">
                          {' '}
                          <span className="inline-block w-6 text-center">
                            <img
                              loading="lazy"
                              src="https://assets.coingecko.com/coins/images/18689/thumb/mms.png"
                              alt="MCASH"
                              width={24}
                              height={24}
                              data-el="currency-dropdown-logo"
                            />
                          </span>{' '}
                          <figcaption className="ml-2 p5 p5--ns">MMS Cash Token</figcaption>
                        </figure>
                      </li>{' '}
                      <li
                        className="px-2 py-3 -mt-px snap-always snap-start hover:bg-blue-200"
                        data-details='{"name":"Solana","id":"solana","custom_id":"solana","symbol":"sol","coin_type":"crypto","logo":"https://assets.coingecko.com/coins/images/4128/thumb/solana.png"}'
                        data-el="currency-dropdown-list-item"
                      >
                        {' '}
                        <figure className="flex items-center">
                          {' '}
                          <span className="inline-block w-6 text-center">
                            <img
                              loading="lazy"
                              src="https://assets.coingecko.com/coins/images/4128/thumb/solana.png"
                              alt="sol"
                              width={24}
                              height={24}
                              data-el="currency-dropdown-logo"
                            />
                          </span>{' '}
                          <figcaption className="ml-2 p5 p5--ns">Solana</figcaption>
                        </figure>
                      </li>{' '}
                      <li
                        className="px-2 py-3 -mt-px snap-always snap-start hover:bg-blue-200"
                        data-details='{"name":"Tether","id":"tether","custom_id":"tether","symbol":"usdt","coin_type":"crypto","logo":"https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png"}'
                        data-el="currency-dropdown-list-item"
                      >
                        {' '}
                        <figure className="flex items-center">
                          {' '}
                          <span className="inline-block w-6 text-center">
                            <img
                              loading="lazy"
                              src="https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png"
                              alt="usdt"
                              width={24}
                              height={24}
                              data-el="currency-dropdown-logo"
                            />
                          </span>{' '}
                          <figcaption className="ml-2 p5 p5--ns">Tether</figcaption>
                        </figure>
                      </li>{' '}
                      <li
                        className="px-2 py-3 -mt-px snap-always snap-start hover:bg-blue-200"
                        data-details='{"name":"USDC","id":"usd-coin","custom_id":"usd-coin","symbol":"usdc","coin_type":"crypto","logo":"https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png"}'
                        data-el="currency-dropdown-list-item"
                      >
                        {' '}
                        <figure className="flex items-center">
                          {' '}
                          <span className="inline-block w-6 text-center">
                            <img
                              loading="lazy"
                              src="https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png"
                              alt="usdc"
                              width={24}
                              height={24}
                              data-el="currency-dropdown-logo"
                            />
                          </span>{' '}
                          <figcaption className="ml-2 p5 p5--ns">USDC</figcaption>
                        </figure>
                      </li>{' '}
                      <li
                        className="px-2 py-3 -mt-px snap-always snap-start hover:bg-blue-200"
                        data-details='{"name":"XRP","id":"ripple","custom_id":"ripple","symbol":"xrp","coin_type":"crypto","logo":"https://assets.coingecko.com/coins/images/44/thumb/xrp-symbol-white-128.png"}'
                        data-el="currency-dropdown-list-item"
                      >
                        {' '}
                        <figure className="flex items-center">
                          {' '}
                          <span className="inline-block w-6 text-center">
                            <img
                              loading="lazy"
                              src="https://assets.coingecko.com/coins/images/44/thumb/xrp-symbol-white-128.png"
                              alt="xrp"
                              width={24}
                              height={24}
                              data-el="currency-dropdown-logo"
                            />
                          </span>{' '}
                          <figcaption className="ml-2 p5 p5--ns">XRP</figcaption>
                        </figure>
                      </li>
                    </ol>
                  </div>
                  <hr className="w-px mx-3 h-7 bg-grey-300 text-grey-300" />
                  <input
                    className="w-[calc(100%-169px)] bg-white pr-3 s3 s3--medium s3--normal-case placeholder:text-grey-400  text-dark-grey-700 border-none focus:outline-none focus-visible:outline-none  "
                    type="text"
                    defaultValue={1}
                    data-el="currency-dropdown-field"
                    aria-label="Fiat Field"
                  />
                  <button
                    type="reset"
                    className="pr-3 cursor-pointer"
                    data-el="currency-dropdown-clear"
                    aria-label="Clear"
                  >
                    <svg
                      className="w-3 h-3 transition-all fill-dark-grey-700 "
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.7729 4.32497C17.0779 4.0197 17.0754 3.52724 16.7673 3.22504C16.4593 2.92283 15.9624 2.92532 15.6575 3.23059L10 8.89446L4.34251 3.23059C4.03758 2.92532 3.54069 2.92283 3.23267 3.22504C2.92465 3.52724 2.92214 4.0197 3.22706 4.32497L8.8957 10L3.22706 15.675C2.92214 15.9803 2.92465 16.4728 3.23267 16.775C3.54069 17.0772 4.03758 17.0747 4.34251 16.7694L10 11.1055L15.6575 16.7694C15.9624 17.0747 16.4593 17.0772 16.7673 16.775C17.0754 16.4728 17.0779 15.9803 16.7729 15.675L11.1043 10L16.7729 4.32497Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                <button
                  className="inline-flex justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 p-1.25 rounded-md btn-square bg-white hover:bg-blue-100 border-blue-600 text-blue-600
    disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100
  
     absolute right-1 sm:right-0 top-1/2 translate-x-1/2 -translate-y-1/2    disabled:cursor-not-allowed transition-colors @4xl:border-x-0 @4xl:border-grey-500 @4xl:h-10 @4xl:rotate-90 order-2 @4xl:static @4xl:translate-y-0"
                  type="button"
                  data-el="currency_swap"
                  aria-label="Swap"
                >
                  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.90945 7.90059C9.9691 7.81309 10.0006 7.71029 9.99999 7.60529C9.99899 7.53497 9.98357 7.46555 9.95466 7.40111C9.92574 7.33666 9.8839 7.27847 9.83158 7.22996L6.49607 4L3.16056 7.22996C3.05827 7.3288 3.00051 7.46314 3 7.60342C2.99975 7.67288 3.01356 7.74171 3.04064 7.80597C3.06773 7.87024 3.10755 7.92868 3.15785 7.97797C3.20814 8.02726 3.26792 8.06643 3.33377 8.09324C3.39962 8.12005 3.47025 8.13397 3.54163 8.13421C3.61301 8.13446 3.68374 8.12102 3.74978 8.09467C3.81582 8.06831 3.87588 8.02956 3.92653 7.98062L5.95283 6.01938V15.4714C5.95283 15.6116 6.01007 15.746 6.11194 15.8452C6.21382 15.9443 6.352 16 6.49607 16C6.64015 16 6.77833 15.9443 6.8802 15.8452C6.98208 15.746 7.03932 15.6116 7.03932 15.4714V6.01938L9.07104 7.98062C9.14703 8.05517 9.24411 8.10601 9.3499 8.12667C9.4557 8.14732 9.56542 8.13685 9.66507 8.09658C9.76473 8.05632 9.8498 7.98809 9.90945 7.90059ZM10 12.4011C10.001 12.5419 10.0595 12.6765 10.1626 12.7753L13.5173 16L16.8393 12.77C16.89 12.7211 16.9303 12.6629 16.9579 12.5989C16.9854 12.5348 16.9997 12.466 17 12.3966C17.0002 12.3271 16.9864 12.2583 16.9593 12.194C16.9322 12.1298 16.8924 12.0713 16.842 12.022C16.7917 11.9727 16.7319 11.9336 16.6659 11.9068C16.6 11.88 16.5294 11.866 16.4579 11.8658C16.3865 11.8655 16.3157 11.879 16.2496 11.9053C16.1835 11.9317 16.1234 11.9704 16.0727 12.0194L14.061 13.9859V4.52863C14.061 4.38843 14.0037 4.25397 13.9017 4.15483C13.7998 4.0557 13.6615 4 13.5173 4C13.3731 4 13.2348 4.0557 13.1328 4.15483C13.0309 4.25397 12.9736 4.38843 12.9736 4.52863V13.9859L10.9293 12.0194C10.8261 11.9205 10.6869 11.8656 10.5421 11.8666C10.3973 11.8676 10.2589 11.9244 10.1572 12.0247C10.0555 12.1249 9.99899 12.2603 10 12.4011Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <div
                  className="order-3 flex px-2 items-center border rounded-md border-grey-500 @4xl:border-0 w-full @4xl:w-1/2 max-w-full min-h-[50px]"
                  data-from={0}
                  data-currency_type="fiat"
                  data-el="currency-dropdown-wrap"
                  data-symbol="usd"
                  data-id="usd"
                  data-custom_id="usd"
                >
                  <div className="relative flex items-center py-3 cursor-pointer" data-el="currency-dropdown">
                    <span className="inline-block w-6 text-center" data-el="currency-dropdown-logo">
                      $
                    </span>
                    <span
                      className="ml-2 uppercase min-w-20 s3 s3--medium text-dark-grey-700 "
                      data-el="currency-dropdown-symbol"
                    >
                      usd
                    </span>
                    <svg
                      data-el="currency-dropdown-arrow"
                      width={9}
                      height={8}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.134 6.902a.732.732 0 0 1-1.268 0L.804 1.598A.732.732 0 0 1 1.438.5h6.124c.564 0 .916.61.634 1.098L5.134 6.902Z"
                        fill="currentColor"
                      />
                    </svg>
                    <ol
                      className="shadow-menu rounded-lg hidden absolute z-30 top-full -left-2 -ml-px w-fit max-w-full min-w-max bg-white border border-grey-200 max-h-[269px] overflow-auto bic-default-scroll -mb-px "
                      data-el="currency-dropdown-list"
                    >
                      <li className="sticky top-0 border-b border-grey-300" data-el="currency-dropdown-search-wrap">
                        <input
                          className="block py-2 px-3.5 bg-white border rounded-md p3 p3--ns text-grey-700 border-grey-400 focus-visible:outline-none placeholder:text-dark-grey-700   "
                          type="search"
                          placeholder="Tìm thấy..."
                          data-el="currency-dropdown-search"
                          aria-label="Find Crypto"
                        />
                      </li>
                      <li
                        className="px-2 py-3 -mt-px snap-always snap-start hover:bg-blue-200  "
                        data-details='{"name":"US Dollar","id":"usd","symbol":"USD","coin_type":"fiat", "logo":"$"}'
                        data-el="currency-dropdown-list-item"
                      >
                        <figure className="flex items-center">
                          <span className="inline-block w-6 text-center">$</span>
                          <figcaption className="ml-2 p5 p5--ns">US Dollar</figcaption>
                        </figure>
                      </li>
                      <li
                        className="px-2 py-3 -mt-px snap-always snap-start hover:bg-blue-200  "
                        data-details='{"name":"Vietnamese đồng","id":"vnd","symbol":"VND","coin_type":"fiat", "logo":"₫"}'
                        data-el="currency-dropdown-list-item"
                      >
                        <figure className="flex items-center">
                          <span className="inline-block w-6 text-center">₫</span>
                          <figcaption className="ml-2 p5 p5--ns">Vietnamese đồng</figcaption>
                        </figure>
                      </li>
                      <li
                        className="px-2 py-3 -mt-px snap-always snap-start hover:bg-blue-200  "
                        data-details='{"name":"Euro","id":"eur","symbol":"EUR","coin_type":"fiat", "logo":"€"}'
                        data-el="currency-dropdown-list-item"
                      >
                        <figure className="flex items-center">
                          <span className="inline-block w-6 text-center">€</span>
                          <figcaption className="ml-2 p5 p5--ns">Euro</figcaption>
                        </figure>
                      </li>
                      <li
                        className="px-2 py-3 -mt-px snap-always snap-start hover:bg-blue-200  "
                        data-details='{"name":"Japanese yen","id":"jpy","symbol":"JPY","coin_type":"fiat", "logo":"¥"}'
                        data-el="currency-dropdown-list-item"
                      >
                        <figure className="flex items-center">
                          <span className="inline-block w-6 text-center">¥</span>
                          <figcaption className="ml-2 p5 p5--ns">Japanese yen</figcaption>
                        </figure>
                      </li>
                      <li
                        className="px-2 py-3 -mt-px snap-always snap-start hover:bg-blue-200  "
                        data-details='{"name":"South Korean won","id":"krw","symbol":"KRW","coin_type":"fiat", "logo":"₩"}'
                        data-el="currency-dropdown-list-item"
                      >
                        <figure className="flex items-center">
                          <span className="inline-block w-6 text-center">₩</span>
                          <figcaption className="ml-2 p5 p5--ns">South Korean won</figcaption>
                        </figure>
                      </li>
                    </ol>
                  </div>
                  <hr className="w-px mx-3 h-7 bg-grey-300 text-grey-300" />
                  <input
                    className="w-[calc(100%-169px)] bg-white pr-3 s3 s3--medium s3--normal-case placeholder:text-grey-400  text-dark-grey-700 border-none focus:outline-0 focus-visible:outline-none  "
                    type="text"
                    defaultValue=""
                    data-el="currency-dropdown-field"
                    aria-label="Crypto Field"
                  />
                  <button
                    type="reset"
                    className="pr-3 cursor-pointer"
                    data-el="currency-dropdown-clear"
                    aria-label="Clear"
                  >
                    <svg
                      className="w-3 h-3 transition-all fill-dark-grey-700 "
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.7729 4.32497C17.0779 4.0197 17.0754 3.52724 16.7673 3.22504C16.4593 2.92283 15.9624 2.92532 15.6575 3.23059L10 8.89446L4.34251 3.23059C4.03758 2.92532 3.54069 2.92283 3.23267 3.22504C2.92465 3.52724 2.92214 4.0197 3.22706 4.32497L8.8957 10L3.22706 15.675C2.92214 15.9803 2.92465 16.4728 3.23267 16.775C3.54069 17.0772 4.03758 17.0747 4.34251 16.7694L10 11.1055L15.6575 16.7694C15.9624 17.0747 16.4593 17.0772 16.7673 16.775C17.0754 16.4728 17.0779 15.9803 16.7729 15.675L11.1043 10L16.7729 4.32497Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-grow flex-wrap justify-between @lg:max-w-fit @lg:flex-col @4xl:flex-row @lg:ml-6 @4xl:ml-2 @4xl:gap-2 @4xl:flex-nowrap">
                <Link
                  data-el="currency_convert"
                  className="inline-flex justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
    disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100     disabled:cursor-not-allowed transition-colors w-full @4xl:w-auto"
                  href="/convert/bitcoin-to-usd/"
                  aria-label="Convert"
                >
                  <svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.9066 0.849261C15.5788 0.849261 15.3129 1.11519 15.3129 1.44295V3.80777C14.6826 2.78444 13.8283 1.91299 12.8085 1.25959C11.5226 0.435558 10.0325 0 8.4986 0C6.36232 0 4.35357 0.832062 2.84286 2.34286C1.33206 3.85366 0.5 5.86223 0.5 7.99888C0.5 10.1355 1.33206 12.1442 2.84286 13.6549C4.35366 15.1657 6.36223 15.9978 8.49888 15.9978C10.0025 15.9978 11.468 15.5781 12.7368 14.7838C13.9704 14.0117 14.9709 12.9193 15.6305 11.6241C15.7792 11.332 15.663 10.9745 15.3708 10.8258C15.0786 10.677 14.7212 10.7933 14.5724 11.0855C14.0107 12.1888 13.1578 13.1196 12.1067 13.7774C11.0268 14.4532 9.77914 14.8104 8.49849 14.8104C6.67901 14.8104 4.96854 14.102 3.6821 12.8153C2.39562 11.5288 1.68698 9.81847 1.68698 7.99893C1.68698 6.1794 2.39539 4.46899 3.6821 3.18254C4.96857 1.89607 6.67895 1.18742 8.49849 1.18742C9.80462 1.18742 11.0732 1.55804 12.1676 2.25886C13.1246 2.8722 13.9105 3.71061 14.4586 4.69891H12.0564C11.7286 4.69891 11.4627 4.96485 11.4627 5.2926C11.4627 5.62036 11.7286 5.88628 12.0564 5.88628H15.9063C16.2341 5.88628 16.5 5.62035 16.5 5.2926V1.44297C16.5 1.1152 16.2341 0.849284 15.9063 0.849284L15.9066 0.849261Z"
                      fill="#fff"
                    />
                  </svg>
                  Coin's Details
                </Link>
                <Link
                  target="_blank"
                  id="convert-on-exchange-button"
                  href="https://vn.beincrypto.com/k8ok_AFF_VN_WIDGET_bydfi_signup"
                  className="inline-flex justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-white hover:bg-blue-100 border-blue-600 text-blue-600
    disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100
  
     transition-colors mt-2 @4xl:mt-0 w-full @4xl:w-auto"
                  data-analytic="link-exists"
                  data-analytic_event="convert__convert-on"
                >
                  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.856 1.95 8.404 8.404a.571.571 0 0 1-.808-.808l6.452-6.452H9.714a.571.571 0 1 1 0-1.143h5.713A.572.572 0 0 1 16 .571v5.714a.571.571 0 1 1-1.143 0V1.951Zm-10.285.336H1.713A1.71 1.71 0 0 0 0 3.996V14.29C0 15.233.776 16 1.716 16h10.28a1.714 1.714 0 0 0 1.716-1.716v-2.855a.571.571 0 1 0-1.143 0v2.855a.571.571 0 0 1-.574.573H1.716a.576.576 0 0 1-.573-.567V3.995c0-.313.255-.567.57-.567h2.858a.571.571 0 1 0 0-1.142Z"
                      fill="#1760FA"
                    />
                  </svg>
                  <span>TIẾP TỤC BYDFI</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="table-wrapper">
          <div className="table-header">
            <h3 className="mb-4">Top tỉ lệ chuyển đổi 50 đồng tiền điện tử sang tiền fiat</h3>
            <div className="table-reload-info" />
          </div>
          <div className="mb-4 table-scrollable-wraper">
            <div className="overflow-x-auto">
              <table id="exch-table" className="relative w-full">
                <thead>
                  <tr className="bg-white  text-dark-grey-700 ">
                    <th className="cl-s-2 sticky left-0 top-0 bg-white  w-0 text-left whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600  border-y border-grey-200 ">
                      Crypto
                    </th>
                    <th
                      className="cl-s-2 text-left whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600  border-y border-grey-200 "
                      data-currency="USD"
                    >
                      USD
                    </th>
                    <th
                      className="cl-s-3 text-left whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600  border-y border-grey-200 "
                      data-currency="VND"
                    >
                      VND
                    </th>
                    <th
                      className="cl-s-4 text-left whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600  border-y border-grey-200 "
                      data-currency="EUR"
                    >
                      EUR
                    </th>
                    <th
                      className="cl-s-5 text-left whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600  border-y border-grey-200 "
                      data-currency="JPY"
                    >
                      JPY
                    </th>
                    <th
                      className="cl-s-6 text-left whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600  border-y border-grey-200 "
                      data-currency="KRW"
                    >
                      KRW
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    data-id="bitcoin"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link data-el="bic-cer-coin" className="flex items-center name-wrpapper" href="/price/bitcoin/">
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy entered loaded"
                            src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
                            data-src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
                            alt="Bitcoin (BTC)"
                            data-ll-status="loaded"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">Bitcoin</strong>
                          <small className="flex w-full">BTC</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/bitcoin-to-usd/" className="value-link">
                        $69,710.00
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/bitcoin-to-vnd/" className="value-link">
                        1,771,724,859 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/bitcoin-to-eur/" className="value-link">
                        €64,752.00
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/bitcoin-to-jpy/" className="value-link">
                        ¥10,952,959
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/bitcoin-to-krw/" className="value-link">
                        ₩96,096,128
                      </Link>
                    </td>
                  </tr>
                  <tr
                    data-id="ethereum"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link data-el="bic-cer-coin" className="flex items-center name-wrpapper" href="/price/ethereum/">
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy entered loaded"
                            src="https://assets.coingecko.com/coins/images/279/small/ethereum.png"
                            data-src="https://assets.coingecko.com/coins/images/279/small/ethereum.png"
                            alt="Ethereum (ETH)"
                            data-ll-status="loaded"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">Ethereum</strong>
                          <small className="flex w-full">ETH</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/ethereum-to-usd/" className="value-link">
                        $3,689.85
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/ethereum-to-vnd/" className="value-link">
                        93,779,474 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/ethereum-to-eur/" className="value-link">
                        €3,427.40
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/ethereum-to-jpy/" className="value-link">
                        ¥579,753
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/ethereum-to-krw/" className="value-link">
                        ₩5,086,481
                      </Link>
                    </td>
                  </tr>
                  <tr
                    data-id="tether"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link data-el="bic-cer-coin" className="flex items-center name-wrpapper" href="/price/tether/">
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy"
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                            data-src="https://assets.coingecko.com/coins/images/325/small/Tether-logo.png"
                            alt="Tether (USDT)"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">Tether</strong>
                          <small className="flex w-full">USDT</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/tether-to-usd/" className="value-link">
                        $0.999648
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/tether-to-vnd/" className="value-link">
                        25,407 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/tether-to-eur/" className="value-link">
                        €0.928544
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/tether-to-jpy/" className="value-link">
                        ¥157
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/tether-to-krw/" className="value-link">
                        ₩1,378
                      </Link>
                    </td>
                  </tr>
                  <tr
                    data-id="binancecoin"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="/price/binancecoin/"
                      >
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy"
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                            data-src="https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png"
                            alt="BNB (BNB)"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">BNB</strong>
                          <small className="flex w-full">BNB</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/binancecoin-to-usd/" className="value-link">
                        $671.62
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/binancecoin-to-vnd/" className="value-link">
                        17,069,543 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/binancecoin-to-eur/" className="value-link">
                        €623.85
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/binancecoin-to-jpy/" className="value-link">
                        ¥105,525
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/binancecoin-to-krw/" className="value-link">
                        ₩925,831
                      </Link>
                    </td>
                  </tr>
                  <tr
                    data-id="solana"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link data-el="bic-cer-coin" className="flex items-center name-wrpapper" href="/price/solana/">
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy"
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                            data-src="https://assets.coingecko.com/coins/images/4128/small/solana.png"
                            alt="Solana (SOL)"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">Solana</strong>
                          <small className="flex w-full">SOL</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/solana-to-usd/" className="value-link">
                        $160.52
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/solana-to-vnd/" className="value-link">
                        4,079,814 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/solana-to-eur/" className="value-link">
                        €149.11
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/solana-to-jpy/" className="value-link">
                        ¥25,222
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/solana-to-krw/" className="value-link">
                        ₩221,284
                      </Link>
                    </td>
                  </tr>
                  <tr
                    data-id="staked-ether"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="/price/staked-ether/"
                      >
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy"
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                            data-src="https://assets.coingecko.com/coins/images/13442/small/steth_logo.png"
                            alt="Lido Staked Ether (STETH)"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">Lido Staked Ether</strong>
                          <small className="flex w-full">STETH</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/staked-ether-to-usd/" className="value-link">
                        $3,688.93
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/staked-ether-to-vnd/" className="value-link">
                        93,791,025 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/staked-ether-to-eur/" className="value-link">
                        €3,426.66
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/staked-ether-to-jpy/" className="value-link">
                        ¥579,647
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/staked-ether-to-krw/" className="value-link">
                        ₩5,085,566
                      </Link>
                    </td>
                  </tr>
                  <tr
                    data-id="usd-coin"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link data-el="bic-cer-coin" className="flex items-center name-wrpapper" href="/price/usd-coin/">
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy"
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                            data-src="https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png"
                            alt="USDC (USDC)"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">USDC</strong>
                          <small className="flex w-full">USDC</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/usd-coin-to-usd/" className="value-link">
                        $0.999923
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/usd-coin-to-vnd/" className="value-link">
                        25,423 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/usd-coin-to-eur/" className="value-link">
                        €0.928833
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/usd-coin-to-jpy/" className="value-link">
                        ¥157
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/usd-coin-to-krw/" className="value-link">
                        ₩1,379
                      </Link>
                    </td>
                  </tr>
                  <tr
                    data-id="ripple"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link data-el="bic-cer-coin" className="flex items-center name-wrpapper" href="/price/ripple/">
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy"
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                            data-src="https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png"
                            alt="XRP (XRP)"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">XRP</strong>
                          <small className="flex w-full">XRP</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/ripple-to-usd/" className="value-link">
                        $0.500520
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/ripple-to-vnd/" className="value-link">
                        12,720.97 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/ripple-to-eur/" className="value-link">
                        €0.464919
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/ripple-to-jpy/" className="value-link">
                        ¥78.64
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/ripple-to-krw/" className="value-link">
                        ₩690
                      </Link>
                    </td>
                  </tr>
                  <tr
                    data-id="dogecoin"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link data-el="bic-cer-coin" className="flex items-center name-wrpapper" href="/price/dogecoin/">
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy"
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                            data-src="https://assets.coingecko.com/coins/images/5/small/dogecoin.png"
                            alt="Dogecoin (DOGE)"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">Dogecoin</strong>
                          <small className="flex w-full">DOGE</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/dogecoin-to-usd/" className="value-link">
                        $0.146290
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/dogecoin-to-vnd/" className="value-link">
                        3,719.43 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/dogecoin-to-eur/" className="value-link">
                        €0.135890
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/dogecoin-to-jpy/" className="value-link">
                        ¥22.99
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/dogecoin-to-krw/" className="value-link">
                        ₩202
                      </Link>
                    </td>
                  </tr>
                  <tr
                    data-id="the-open-network"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="/price/the-open-network/"
                      >
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy"
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                            data-src="https://assets.coingecko.com/coins/images/17980/small/ton.PNG"
                            alt="Toncoin (TON)"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">Toncoin</strong>
                          <small className="flex w-full">TON</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/the-open-network-to-usd/" className="value-link">
                        $7.09
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/the-open-network-to-vnd/" className="value-link">
                        180,340 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/the-open-network-to-eur/" className="value-link">
                        €6.59
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/the-open-network-to-jpy/" className="value-link">
                        ¥1,115
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/the-open-network-to-krw/" className="value-link">
                        ₩9,778
                      </Link>
                    </td>
                  </tr>
                  <tr
                    data-id="cardano"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link data-el="bic-cer-coin" className="flex items-center name-wrpapper" href="/price/cardano/">
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy"
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                            data-src="https://assets.coingecko.com/coins/images/975/small/cardano.png"
                            alt="Cardano (ADA)"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">Cardano</strong>
                          <small className="flex w-full">ADA</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/cardano-to-usd/" className="value-link">
                        $0.442246
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/cardano-to-vnd/" className="value-link">
                        11,244.11 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/cardano-to-eur/" className="value-link">
                        €0.410805
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/cardano-to-jpy/" className="value-link">
                        ¥69.49
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/cardano-to-krw/" className="value-link">
                        ₩610
                      </Link>
                    </td>
                  </tr>
                  <tr
                    data-id="shiba-inu"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link data-el="bic-cer-coin" className="flex items-center name-wrpapper" href="/price/shiba-inu/">
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy"
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                            data-src="https://assets.coingecko.com/coins/images/11939/small/shiba.png"
                            alt="Shiba Inu (SHIB)"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">Shiba Inu</strong>
                          <small className="flex w-full">SHIB</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/shiba-inu-to-usd/" className="value-link">
                        $0.00002336
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/shiba-inu-to-vnd/" className="value-link">
                        0.59382500 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/shiba-inu-to-eur/" className="value-link">
                        €0.00002170
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/shiba-inu-to-jpy/" className="value-link">
                        ¥0.00366995
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/shiba-inu-to-krw/" className="value-link">
                        ₩0.03219855
                      </Link>
                    </td>
                  </tr>
                  <tr
                    data-id="avalanche-2"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="/price/avalanche-2/"
                      >
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy"
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                            data-src="https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png"
                            alt="Avalanche (AVAX)"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">Avalanche</strong>
                          <small className="flex w-full">AVAX</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/avalanche-2-to-usd/" className="value-link">
                        $33.17
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/avalanche-2-to-vnd/" className="value-link">
                        843,233 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/avalanche-2-to-eur/" className="value-link">
                        €30.81
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/avalanche-2-to-jpy/" className="value-link">
                        ¥5,211
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/avalanche-2-to-krw/" className="value-link">
                        ₩45,722
                      </Link>
                    </td>
                  </tr>
                  <tr
                    data-id="wrapped-bitcoin"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="/price/wrapped-bitcoin/"
                      >
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy"
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                            data-src="https://assets.coingecko.com/coins/images/7598/small/wrapped_bitcoin_wbtc.png"
                            alt="Wrapped Bitcoin (WBTC)"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">Wrapped Bitcoin</strong>
                          <small className="flex w-full">WBTC</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/wrapped-bitcoin-to-usd/" className="value-link">
                        $69,725.00
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/wrapped-bitcoin-to-vnd/" className="value-link">
                        1,772,089,442 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/wrapped-bitcoin-to-eur/" className="value-link">
                        €64,765.00
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/wrapped-bitcoin-to-jpy/" className="value-link">
                        ¥10,955,213
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/wrapped-bitcoin-to-krw/" className="value-link">
                        ₩96,115,903
                      </Link>
                    </td>
                  </tr>
                  <tr
                    data-id="tron"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link data-el="bic-cer-coin" className="flex items-center name-wrpapper" href="/price/tron/">
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy"
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                            data-src="https://assets.coingecko.com/coins/images/1094/small/tron-logo.png"
                            alt="TRON (TRX)"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">TRON</strong>
                          <small className="flex w-full">TRX</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/tron-to-usd/" className="value-link">
                        $0.116804
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/tron-to-vnd/" className="value-link">
                        2,969.75 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/tron-to-eur/" className="value-link">
                        €0.108500
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/tron-to-jpy/" className="value-link">
                        ¥18.35
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/tron-to-krw/" className="value-link">
                        ₩161
                      </Link>
                    </td>
                  </tr>
                  <tr
                    data-id="chainlink"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link data-el="bic-cer-coin" className="flex items-center name-wrpapper" href="/price/chainlink/">
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy"
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                            data-src="https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png"
                            alt="Chainlink (LINK)"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">Chainlink</strong>
                          <small className="flex w-full">LINK</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/chainlink-to-usd/" className="value-link">
                        $16.15
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/chainlink-to-vnd/" className="value-link">
                        410,605 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/chainlink-to-eur/" className="value-link">
                        €15.00
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/chainlink-to-jpy/" className="value-link">
                        ¥2,538
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/chainlink-to-krw/" className="value-link">
                        ₩22,264
                      </Link>
                    </td>
                  </tr>
                  <tr
                    data-id="bitcoin-cash"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="/price/bitcoin-cash/"
                      >
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy"
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                            data-src="https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png"
                            alt="Bitcoin Cash (BCH)"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">Bitcoin Cash</strong>
                          <small className="flex w-full">BCH</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/bitcoin-cash-to-usd/" className="value-link">
                        $471.07
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/bitcoin-cash-to-vnd/" className="value-link">
                        11,977,020 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/bitcoin-cash-to-eur/" className="value-link">
                        €437.58
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/bitcoin-cash-to-jpy/" className="value-link">
                        ¥74,020
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/bitcoin-cash-to-krw/" className="value-link">
                        ₩649,422
                      </Link>
                    </td>
                  </tr>
                  <tr
                    data-id="polkadot"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link data-el="bic-cer-coin" className="flex items-center name-wrpapper" href="/price/polkadot/">
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy"
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                            data-src="https://assets.coingecko.com/coins/images/12171/small/polkadot.png"
                            alt="Polkadot (DOT)"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">Polkadot</strong>
                          <small className="flex w-full">DOT</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/polkadot-to-usd/" className="value-link">
                        $6.48
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/polkadot-to-vnd/" className="value-link">
                        164,880 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/polkadot-to-eur/" className="value-link">
                        €6.02
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/polkadot-to-jpy/" className="value-link">
                        ¥1,019
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/polkadot-to-krw/" className="value-link">
                        ₩8,940
                      </Link>
                    </td>
                  </tr>
                  <tr
                    data-id="uniswap"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link data-el="bic-cer-coin" className="flex items-center name-wrpapper" href="/price/uniswap/">
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy"
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                            data-src="https://assets.coingecko.com/coins/images/12504/small/uniswap-uni.png"
                            alt="Uniswap (UNI)"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">Uniswap</strong>
                          <small className="flex w-full">UNI</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/uniswap-to-usd/" className="value-link">
                        $9.78
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/uniswap-to-vnd/" className="value-link">
                        248,462 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/uniswap-to-eur/" className="value-link">
                        €9.08
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/uniswap-to-jpy/" className="value-link">
                        ¥1,536
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/uniswap-to-krw/" className="value-link">
                        ₩13,476
                      </Link>
                    </td>
                  </tr>
                  <tr
                    data-id="near"
                    data-el="ce-list-item"
                    className="border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200  [&:hover>td]:bg-grey-100 "
                  >
                    <td className="sticky left-0 top-0 bg-white px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-2">
                      <Link data-el="bic-cer-coin" className="flex items-center name-wrpapper" href="/price/near/">
                        <p className="w-8 mr-2 name-wrpapper__logo">
                          <img
                            className="img-logo lazy"
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                            data-src="https://assets.coingecko.com/coins/images/10365/small/near_icon.png"
                            alt="NEAR Protocol (NEAR)"
                          />
                        </p>
                        <p className="w-full name-wrpapper__name">
                          <strong className="flex w-full lg:whitespace-nowrap">NEAR Protocol</strong>
                          <small className="flex w-full">NEAR</small>
                        </p>
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-3"
                      data-currency="usd"
                    >
                      <Link href="/convert/near-to-usd/" className="value-link">
                        $6.51
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-4"
                      data-currency="vnd"
                    >
                      <Link href="/convert/near-to-vnd/" className="value-link">
                        165,410 VND
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-5"
                      data-currency="eur"
                    >
                      <Link href="/convert/near-to-eur/" className="value-link">
                        €6.04
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-6"
                      data-currency="jpy"
                    >
                      <Link href="/convert/near-to-jpy/" className="value-link">
                        ¥1,022
                      </Link>
                    </td>
                    <td
                      className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-r-white  text-left border-b border-b-grey-200  cl-s-7"
                      data-currency="krw"
                    >
                      <Link href="/convert/near-to-krw/" className="value-link">
                        ₩8,969
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-center my-5 table-wrapper-footer">
            <div className="flex items-center">
              <Link
                href="https://vn.beincrypto.com/convert/"
                target="_self"
                data-el="ce-pagination-prev"
                aria-label="Previous page"
                className="hidden table-pagination-button js-table-prev inline-flex justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-white hover:bg-blue-100 border-blue-600 text-blue-600
                  disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100
  
                    mr-3 sm:mr-5 lg:mr-7 pagination-arrow transition-colors"
              >
                <svg
                  className="rtl:rotate-180"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.1924 3.74447L4.68987 8.54816L18 8.64058L17.9717 10.0571L4.63333 10.0878L9.16455 14.953L8.20168 16L2 9.3487L8.22995 2.66667L9.1924 3.74447Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="hidden lg:inline-block">Trước đó</span>
              </Link>
              <div
                data-bic_pagination='{"current_page": 1,"total_pages": 649}'
                className="inline-flex items-center gap-x-2 sm:gap-x-4 btn-1 pagination-small-buttons"
              >
                <span
                  data-page={1}
                  data-el="bic-c-pagination-number"
                  data-el_pos="bic-c-pagination-first-page"
                  className="pagination-button-active h-12 w-12 flex items-center justify-center p-3.5 rounded-lg bg-blue-600 border-blue-600 text-white"
                >
                  1
                </span>
                <Link
                  data-el="bic-c-pagination-number"
                  data-page={2}
                  href="https://vn.beincrypto.com/convert/2/"
                  className="text-dark-grey-700  hover:no-underline"
                  aria-label="Page 2"
                >
                  2
                </Link>
                <Link
                  data-el="bic-c-pagination-number"
                  data-page={3}
                  href="https://vn.beincrypto.com/convert/3/"
                  className="text-dark-grey-700  hover:no-underline"
                  aria-label="Page 3"
                >
                  3
                </Link>
                <span className="lg:mx-3 text-grey-500">...</span>
                <Link
                  data-page={649}
                  data-el="bic-c-pagination-number"
                  data-el_pos="bic-c-pagination-last-page"
                  href="https://vn.beincrypto.com/convert/649/"
                  className="text-dark-grey-700  hover:no-underline bic-c-pagination-last-page"
                  aria-label="Page 649"
                >
                  649
                </Link>
              </div>
              <Link
                href="https://vn.beincrypto.com/convert/2/"
                target="_self"
                data-el="ce-pagination-next"
                aria-label="Next page"
                className=" table-pagination-button js-table-next inline-flex justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-white hover:bg-blue-100 border-blue-600 text-blue-600
                  disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100
  
                    ml-3 sm:ml-5 lg:ml-7 pagination-arrow transition-colors"
              >
                <span className="hidden lg:inline-block">TIẾP THEO</span>
                <svg
                  className="rtl:rotate-180"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.8076 3.74447L15.3101 8.54816L2 8.64058L2.02828 10.0571L15.3667 10.0878L10.8354 14.953L11.7983 16L18 9.3487L11.77 2.66667L10.8076 3.74447Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
