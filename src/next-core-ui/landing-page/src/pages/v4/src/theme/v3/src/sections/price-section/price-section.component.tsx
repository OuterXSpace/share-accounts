import { PriceSectionV4Props } from './price-section.type';

export const PriceSectionV4: React.FC<PriceSectionV4Props> = (props) => {
  const { data, className } = props;

  return (
    <div className="page-content max-w-full w-full">
      <div id="exchanges-list" className="coins-list">
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="text-3.5 font-sans font-normal text-blue-600 ">
            <a href="/" className="b-home" aria-label="Go to home" />
            <i>/</i>
            <a href="#">Giá</a>
          </div>
        </div>
        <div className="header-wrapper">
          <div className="header-wrapper__column">
            <h1 className="uppercase h4 lg:h1">Những đồng tiền điện tử có giá cao nhất</h1>
            <h4 className="my-4 text-blue-600  lg:my-0 h5 lg:h4">12976 Coins</h4>
          </div>
        </div>
        <div className="header-wrapper2">
          <div className="w-full max-w-full mb-4 ml-auto bic-c-search md:w-60">
            <div className="py-2 px-3.5 border border-transparent text-grey-600  flex items-center  focus-within:bg-white focus-within:border-blue-600  bg-grey-100  rounded-md gap-x-2.5 acfo:border-blue-600 ">
              <label htmlFor="bic-search-exchange" className="mb-0">
                <svg
                  className="w-5 h-5"
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
                </svg>
              </label>
              <input
                defaultValue=""
                id="bic-search-exchange"
                data-el="ce-search"
                name="search-exchange"
                type="search"
                placeholder="Tìm kiếm các loại tiền tệ"
                aria-label="Search exchange"
                className="w-full p-0 bg-transparent border-none appearance-none p4 p4--ns placeholder:text-grey-600  peer focus:outline-none focus:border-none focus:ring-0 text-dark-grey-700 "
                googl="true"
              />
              <button
                className="hidden w-5 h-5 peer peer-focus:block hover:block acfo:block"
                type="submit"
                aria-label="Search"
                onclick="if (!window.__cfRLUnblockHandlers) return false; this.previousElementSibling.value='';this.previousElementSibling.focus()"
              >
                <svg
                  className="w-4 h-4"
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
        </div>
        <div className="mb-5 overflow-hidden">
          <div className="relative overflow-x-auto table-wrapper">
            <table id="exch-table" className="relative w-full">
              <thead className="text-grey-600 ">
                <tr className="bg-white  border-y border-grey-200 ">
                  <th
                    className="text-center cursor-pointer whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600  w-10"
                    data-col={2}
                    data-el="sort-by-rank"
                    data-col_name="market_cap_rank"
                  >
                    Thứ hạng
                    <svg
                      className="inline-block w-3.5 transition-transform table-sort-icon"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.634 13.9018C10.3522 14.3899 9.64775 14.3899 9.36595 13.9018L5.43789 7.0982C5.1561 6.61011 5.50834 6 6.07194 6L13.9281 6C14.4917 6 14.8439 6.61011 14.5621 7.0982L10.634 13.9018Z"
                        fill="currentColor"
                      />
                    </svg>
                  </th>
                  <th
                    className="text-left cursor-pointer whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600  w-40 lg:w-auto sticky top-0 left-0 bg-white "
                    data-col={3}
                    data-col_name="name"
                    data-el="sort-by-name"
                  >
                    Tên
                    <svg
                      className="inline-block w-3.5 transition-transform table-sort-icon"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.634 13.9018C10.3522 14.3899 9.64775 14.3899 9.36595 13.9018L5.43789 7.0982C5.1561 6.61011 5.50834 6 6.07194 6L13.9281 6C14.4917 6 14.8439 6.61011 14.5621 7.0982L10.634 13.9018Z"
                        fill="currentColor"
                      />
                    </svg>
                  </th>
                  <th
                    className="text-right cursor-pointer whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600  min-w-10"
                    data-col={4}
                    data-col_name="current_price"
                    data-el="sort-by-price"
                  >
                    Giá
                    <svg
                      className="inline-block w-3.5 transition-transform table-sort-icon"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.634 13.9018C10.3522 14.3899 9.64775 14.3899 9.36595 13.9018L5.43789 7.0982C5.1561 6.61011 5.50834 6 6.07194 6L13.9281 6C14.4917 6 14.8439 6.61011 14.5621 7.0982L10.634 13.9018Z"
                        fill="currentColor"
                      />
                    </svg>
                  </th>
                  <th
                    className="text-right cursor-pointer whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600 "
                    data-col={5}
                    data-col_name="price_change_percentage_24h"
                    data-el="sort-by-hours"
                  >
                    24h%
                    <svg
                      className="inline-block w-3.5 transition-transform table-sort-icon"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.634 13.9018C10.3522 14.3899 9.64775 14.3899 9.36595 13.9018L5.43789 7.0982C5.1561 6.61011 5.50834 6 6.07194 6L13.9281 6C14.4917 6 14.8439 6.61011 14.5621 7.0982L10.634 13.9018Z"
                        fill="currentColor"
                      />
                    </svg>
                  </th>
                  <th
                    className="text-right cursor-pointer whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600 "
                    data-col={6}
                    data-col_name="market_cap"
                    data-el="sort-by-mktcap"
                  >
                    Vốn hóa thị trường
                    <svg
                      className="inline-block w-3.5 transition-transform table-sort-icon"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.634 13.9018C10.3522 14.3899 9.64775 14.3899 9.36595 13.9018L5.43789 7.0982C5.1561 6.61011 5.50834 6 6.07194 6L13.9281 6C14.4917 6 14.8439 6.61011 14.5621 7.0982L10.634 13.9018Z"
                        fill="currentColor"
                      />
                    </svg>
                  </th>
                  <th
                    className="text-right cursor-pointer whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600  "
                    data-col={7}
                    data-col_name="total_volume"
                    data-el="sort-by-total_volume"
                  >
                    Khối lượng
                    <svg
                      className="inline-block w-3.5 transition-transform table-sort-icon"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.634 13.9018C10.3522 14.3899 9.64775 14.3899 9.36595 13.9018L5.43789 7.0982C5.1561 6.61011 5.50834 6 6.07194 6L13.9281 6C14.4917 6 14.8439 6.61011 14.5621 7.0982L10.634 13.9018Z"
                        fill="currentColor"
                      />
                    </svg>
                  </th>
                  <th
                    className="text-right cursor-pointer whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600  "
                    data-col={8}
                    data-col_name="circulating_supply"
                    data-el="sort-by-supply"
                  >
                    Lượng tiền lưu thông
                    <svg
                      className="inline-block w-3.5 transition-transform table-sort-icon"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.634 13.9018C10.3522 14.3899 9.64775 14.3899 9.36595 13.9018L5.43789 7.0982C5.1561 6.61011 5.50834 6 6.07194 6L13.9281 6C14.4917 6 14.8439 6.61011 14.5621 7.0982L10.634 13.9018Z"
                        fill="currentColor"
                      />
                    </svg>
                  </th>
                  <th
                    className="text-right whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600 "
                    data-col={9}
                  >
                    7 ngày qua
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  data-id="bitcoin"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    1
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/bitcoin/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain entered loaded"
                          src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
                          data-src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
                          alt="Bitcoin (BTC)"
                          width={28}
                          height={28}
                          data-ll-status="loaded"
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">Bitcoin</div>
                          <div className="uppercase text-grey-600 p5">BTC</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$69,540.00"
                  >
                    $69,540.00
                    <div>
                      <a
                        href="/price/bitcoin/du-doan-gia/"
                        target="_self"
                        className="inline-flex items-center text-blue-600 capitalize p5 p5--medium  hover:no-underline hover:text-blue-700 "
                      >
                        <svg
                          className="hidden mr-1 md:inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth=".1"
                            d="m21.06 9.77.03-.3a1.99 1.99 0 0 0-3.91-.5l.04.02-.04-.01c-.16.61-.02 1.26.38 1.75l-1.34 1.34-.2-.15a2 2 0 0 0-2.73.58l-1.91-.65V11.7a1.99 1.99 0 0 0-2.53-1.9h.01a1.99 1.99 0 0 0-1.17 2.9l-1.16 1.44a1.99 1.99 0 0 0-2.52 1.6l.05.02c-.09.55.07 1.12.44 1.55l-.04.03c.38.44.93.7 1.51.7h.05v-.02a1.99 1.99 0 0 0 1.45-3.28l1.03-1.27a1.98 1.98 0 0 0 2.49-.58l1.97.68v.02h.05-.05c0 .58.25 1.14.7 1.52l.03-.04-.04.04a1.99 1.99 0 0 0 3.19-2.1l1.65-1.65a1.99 1.99 0 0 0 2.57-1.59Zm0 0H21h.05Zm-1.09-.3v.13a.87.87 0 0 1-.88.75.85.85 0 0 1-.43-.12h-.03a.87.87 0 0 1-.17-1.37c.16-.17.4-.26.63-.26a.88.88 0 0 1 .88.87ZM14.1 13.4a.87.87 0 0 1 1.47-.44.88.88 0 0 1-.18 1.38.87.87 0 0 1-1.31-.76c0-.06 0-.12.02-.18Zm-4.7-2.59a.88.88 0 0 1 .88.88c0 .23-.1.45-.26.61l.03.04-.03-.04a.89.89 0 0 1-.62.26.87.87 0 0 1-.62-1.5.87.87 0 0 1 .62-.25Zm-3.48 4.34h.05c.12 0 .24.03.34.07l.03.02c.05.05.11.08.17.1l.04.03a.87.87 0 0 1-.89 1.47.87.87 0 0 1 .26-1.69Zm-2.86 4.13V4.15a.56.56 0 0 0-1.11 0V20.4H21.5a.56.56 0 1 0 0-1.1H3.05Z"
                          />
                        </svg>
                        XEM DỰ ĐOÁN GIÁ
                      </a>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-green-500 p_percent">
                    +0.34<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$1 370 944 930 207"
                  >
                    <span>$</span>1.37T
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$12 497 421 490"
                  >
                    <span>$</span>12.50B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="BTC 19 710 290"
                  >
                    <span className="crc  text-dark-grey-700">BTC</span>19.71M
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy entered loaded"
                      width={142}
                      height={54}
                      src="https://www.coingecko.com/coins/1/sparkline.svg"
                      data-src="https://www.coingecko.com/coins/1/sparkline.svg"
                      alt="Bitcoin (BTC)"
                      data-ll-status="loaded"
                    />
                  </td>
                </tr>
                <tr
                  data-id="ethereum"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    2
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/ethereum/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain entered loaded"
                          src="https://assets.coingecko.com/coins/images/279/small/ethereum.png"
                          data-src="https://assets.coingecko.com/coins/images/279/small/ethereum.png"
                          alt="Ethereum (ETH)"
                          width={28}
                          height={28}
                          data-ll-status="loaded"
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">Ethereum</div>
                          <div className="uppercase text-grey-600 p5">ETH</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$3,681.14"
                  >
                    $3,681.14
                    <div>
                      <a
                        href="/price/ethereum/du-doan-gia/"
                        target="_self"
                        className="inline-flex items-center text-blue-600 capitalize p5 p5--medium  hover:no-underline hover:text-blue-700 "
                      >
                        <svg
                          className="hidden mr-1 md:inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth=".1"
                            d="m21.06 9.77.03-.3a1.99 1.99 0 0 0-3.91-.5l.04.02-.04-.01c-.16.61-.02 1.26.38 1.75l-1.34 1.34-.2-.15a2 2 0 0 0-2.73.58l-1.91-.65V11.7a1.99 1.99 0 0 0-2.53-1.9h.01a1.99 1.99 0 0 0-1.17 2.9l-1.16 1.44a1.99 1.99 0 0 0-2.52 1.6l.05.02c-.09.55.07 1.12.44 1.55l-.04.03c.38.44.93.7 1.51.7h.05v-.02a1.99 1.99 0 0 0 1.45-3.28l1.03-1.27a1.98 1.98 0 0 0 2.49-.58l1.97.68v.02h.05-.05c0 .58.25 1.14.7 1.52l.03-.04-.04.04a1.99 1.99 0 0 0 3.19-2.1l1.65-1.65a1.99 1.99 0 0 0 2.57-1.59Zm0 0H21h.05Zm-1.09-.3v.13a.87.87 0 0 1-.88.75.85.85 0 0 1-.43-.12h-.03a.87.87 0 0 1-.17-1.37c.16-.17.4-.26.63-.26a.88.88 0 0 1 .88.87ZM14.1 13.4a.87.87 0 0 1 1.47-.44.88.88 0 0 1-.18 1.38.87.87 0 0 1-1.31-.76c0-.06 0-.12.02-.18Zm-4.7-2.59a.88.88 0 0 1 .88.88c0 .23-.1.45-.26.61l.03.04-.03-.04a.89.89 0 0 1-.62.26.87.87 0 0 1-.62-1.5.87.87 0 0 1 .62-.25Zm-3.48 4.34h.05c.12 0 .24.03.34.07l.03.02c.05.05.11.08.17.1l.04.03a.87.87 0 0 1-.89 1.47.87.87 0 0 1 .26-1.69Zm-2.86 4.13V4.15a.56.56 0 0 0-1.11 0V20.4H21.5a.56.56 0 1 0 0-1.1H3.05Z"
                          />
                        </svg>
                        XEM DỰ ĐOÁN GIÁ
                      </a>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-green-500 p_percent">
                    +0.17<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$442 123 108 770"
                  >
                    <span>$</span>442.12B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$6 428 016 857"
                  >
                    <span>$</span>6.43B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="ETH 120 154 168"
                  >
                    <span className="crc  text-dark-grey-700">ETH</span>120.15M
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy entered loaded"
                      width={142}
                      height={54}
                      src="https://www.coingecko.com/coins/279/sparkline.svg"
                      data-src="https://www.coingecko.com/coins/279/sparkline.svg"
                      alt="Ethereum (ETH)"
                      data-ll-status="loaded"
                    />
                  </td>
                </tr>
                <tr
                  data-id="tether"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    3
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/tether/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain entered loaded"
                          src="https://assets.coingecko.com/coins/images/325/small/Tether-logo.png"
                          data-src="https://assets.coingecko.com/coins/images/325/small/Tether-logo.png"
                          alt="Tether (USDT)"
                          width={28}
                          height={28}
                          data-ll-status="loaded"
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">Tether</div>
                          <div className="uppercase text-grey-600 p5">USDT</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$0.999609"
                  >
                    $0.999609
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-red-500 p_percent">
                    -0.06<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$112 477 578 212"
                  >
                    <span>$</span>112.48B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$23 532 724 114"
                  >
                    <span>$</span>23.53B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="USDT 112 480 965 357"
                  >
                    <span className="crc  text-dark-grey-700">USDT</span>112.48B
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy entered loaded"
                      width={142}
                      height={54}
                      src="https://www.coingecko.com/coins/325/sparkline.svg"
                      data-src="https://www.coingecko.com/coins/325/sparkline.svg"
                      alt="Tether (USDT)"
                      data-ll-status="loaded"
                    />
                  </td>
                </tr>
                <tr
                  data-id="binancecoin"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    4
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/binancecoin/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain entered loaded"
                          src="https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png"
                          data-src="https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png"
                          alt="BNB (BNB)"
                          width={28}
                          height={28}
                          data-ll-status="loaded"
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">BNB</div>
                          <div className="uppercase text-grey-600 p5">BNB</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$667.03"
                  >
                    $667.03
                    <div>
                      <a
                        href="/price/binancecoin/du-doan-gia/"
                        target="_self"
                        className="inline-flex items-center text-blue-600 capitalize p5 p5--medium  hover:no-underline hover:text-blue-700 "
                      >
                        <svg
                          className="hidden mr-1 md:inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth=".1"
                            d="m21.06 9.77.03-.3a1.99 1.99 0 0 0-3.91-.5l.04.02-.04-.01c-.16.61-.02 1.26.38 1.75l-1.34 1.34-.2-.15a2 2 0 0 0-2.73.58l-1.91-.65V11.7a1.99 1.99 0 0 0-2.53-1.9h.01a1.99 1.99 0 0 0-1.17 2.9l-1.16 1.44a1.99 1.99 0 0 0-2.52 1.6l.05.02c-.09.55.07 1.12.44 1.55l-.04.03c.38.44.93.7 1.51.7h.05v-.02a1.99 1.99 0 0 0 1.45-3.28l1.03-1.27a1.98 1.98 0 0 0 2.49-.58l1.97.68v.02h.05-.05c0 .58.25 1.14.7 1.52l.03-.04-.04.04a1.99 1.99 0 0 0 3.19-2.1l1.65-1.65a1.99 1.99 0 0 0 2.57-1.59Zm0 0H21h.05Zm-1.09-.3v.13a.87.87 0 0 1-.88.75.85.85 0 0 1-.43-.12h-.03a.87.87 0 0 1-.17-1.37c.16-.17.4-.26.63-.26a.88.88 0 0 1 .88.87ZM14.1 13.4a.87.87 0 0 1 1.47-.44.88.88 0 0 1-.18 1.38.87.87 0 0 1-1.31-.76c0-.06 0-.12.02-.18Zm-4.7-2.59a.88.88 0 0 1 .88.88c0 .23-.1.45-.26.61l.03.04-.03-.04a.89.89 0 0 1-.62.26.87.87 0 0 1-.62-1.5.87.87 0 0 1 .62-.25Zm-3.48 4.34h.05c.12 0 .24.03.34.07l.03.02c.05.05.11.08.17.1l.04.03a.87.87 0 0 1-.89 1.47.87.87 0 0 1 .26-1.69Zm-2.86 4.13V4.15a.56.56 0 0 0-1.11 0V20.4H21.5a.56.56 0 1 0 0-1.1H3.05Z"
                          />
                        </svg>
                        XEM DỰ ĐOÁN GIÁ
                      </a>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-red-500 p_percent">
                    -1.23<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$102 683 481 403"
                  >
                    <span>$</span>102.68B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$783 467 990"
                  >
                    <span>$</span>783.47M
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="BNB 153 856 150"
                  >
                    <span className="crc  text-dark-grey-700">BNB</span>153.86M
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy entered loaded"
                      width={142}
                      height={54}
                      src="https://www.coingecko.com/coins/825/sparkline.svg"
                      data-src="https://www.coingecko.com/coins/825/sparkline.svg"
                      alt="BNB (BNB)"
                      data-ll-status="loaded"
                    />
                  </td>
                </tr>
                <tr
                  data-id="solana"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    5
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/solana/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          data-src="https://assets.coingecko.com/coins/images/4128/small/solana.png"
                          alt="Solana (SOL)"
                          width={28}
                          height={28}
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">Solana</div>
                          <div className="uppercase text-grey-600 p5">SOL</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$159.69"
                  >
                    $159.69
                    <div>
                      <a
                        href="/price/solana/du-doan-gia/"
                        target="_self"
                        className="inline-flex items-center text-blue-600 capitalize p5 p5--medium  hover:no-underline hover:text-blue-700 "
                      >
                        <svg
                          className="hidden mr-1 md:inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth=".1"
                            d="m21.06 9.77.03-.3a1.99 1.99 0 0 0-3.91-.5l.04.02-.04-.01c-.16.61-.02 1.26.38 1.75l-1.34 1.34-.2-.15a2 2 0 0 0-2.73.58l-1.91-.65V11.7a1.99 1.99 0 0 0-2.53-1.9h.01a1.99 1.99 0 0 0-1.17 2.9l-1.16 1.44a1.99 1.99 0 0 0-2.52 1.6l.05.02c-.09.55.07 1.12.44 1.55l-.04.03c.38.44.93.7 1.51.7h.05v-.02a1.99 1.99 0 0 0 1.45-3.28l1.03-1.27a1.98 1.98 0 0 0 2.49-.58l1.97.68v.02h.05-.05c0 .58.25 1.14.7 1.52l.03-.04-.04.04a1.99 1.99 0 0 0 3.19-2.1l1.65-1.65a1.99 1.99 0 0 0 2.57-1.59Zm0 0H21h.05Zm-1.09-.3v.13a.87.87 0 0 1-.88.75.85.85 0 0 1-.43-.12h-.03a.87.87 0 0 1-.17-1.37c.16-.17.4-.26.63-.26a.88.88 0 0 1 .88.87ZM14.1 13.4a.87.87 0 0 1 1.47-.44.88.88 0 0 1-.18 1.38.87.87 0 0 1-1.31-.76c0-.06 0-.12.02-.18Zm-4.7-2.59a.88.88 0 0 1 .88.88c0 .23-.1.45-.26.61l.03.04-.03-.04a.89.89 0 0 1-.62.26.87.87 0 0 1-.62-1.5.87.87 0 0 1 .62-.25Zm-3.48 4.34h.05c.12 0 .24.03.34.07l.03.02c.05.05.11.08.17.1l.04.03a.87.87 0 0 1-.89 1.47.87.87 0 0 1 .26-1.69Zm-2.86 4.13V4.15a.56.56 0 0 0-1.11 0V20.4H21.5a.56.56 0 1 0 0-1.1H3.05Z"
                          />
                        </svg>
                        XEM DỰ ĐOÁN GIÁ
                      </a>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-green-500 p_percent">
                    +0.86<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$73 557 476 947"
                  >
                    <span>$</span>73.56B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$1 299 352 274"
                  >
                    <span>$</span>1.30B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="SOL 460 785 940"
                  >
                    <span className="crc  text-dark-grey-700">SOL</span>460.79M
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy"
                      width={142}
                      height={54}
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-src="https://www.coingecko.com/coins/4128/sparkline.svg"
                      alt="Solana (SOL)"
                    />
                  </td>
                </tr>
                <tr
                  data-id="staked-ether"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    6
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/staked-ether/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          data-src="https://assets.coingecko.com/coins/images/13442/small/steth_logo.png"
                          alt="Lido Staked Ether (STETH)"
                          width={28}
                          height={28}
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">Lido Staked Ether</div>
                          <div className="uppercase text-grey-600 p5">STETH</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$3,678.69"
                  >
                    $3,678.69
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-green-500 p_percent">
                    +0.18<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$35 016 081 620"
                  >
                    <span>$</span>35.02B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$42 888 497"
                  >
                    <span>$</span>42.89M
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="STETH 9 517 715"
                  >
                    <span className="crc  text-dark-grey-700">STETH</span>9.52M
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy"
                      width={142}
                      height={54}
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-src="https://www.coingecko.com/coins/13442/sparkline.svg"
                      alt="Lido Staked Ether (STETH)"
                    />
                  </td>
                </tr>
                <tr
                  data-id="usd-coin"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    7
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/usd-coin/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          data-src="https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png"
                          alt="USDC (USDC)"
                          width={28}
                          height={28}
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">USDC</div>
                          <div className="uppercase text-grey-600 p5">USDC</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$0.999785"
                  >
                    $0.999785
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-red-500 p_percent">
                    -0.04<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$32 187 505 051"
                  >
                    <span>$</span>32.19B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$2 084 747 621"
                  >
                    <span>$</span>2.08B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="USDC 32 195 327 032"
                  >
                    <span className="crc  text-dark-grey-700">USDC</span>32.20B
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy"
                      width={142}
                      height={54}
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-src="https://www.coingecko.com/coins/6319/sparkline.svg"
                      alt="USDC (USDC)"
                    />
                  </td>
                </tr>
                <tr
                  data-id="ripple"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    8
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/ripple/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          data-src="https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png"
                          alt="XRP (XRP)"
                          width={28}
                          height={28}
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">XRP</div>
                          <div className="uppercase text-grey-600 p5">XRP</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$0.499533"
                  >
                    $0.499533
                    <div>
                      <a
                        href="/price/ripple/du-doan-gia/"
                        target="_self"
                        className="inline-flex items-center text-blue-600 capitalize p5 p5--medium  hover:no-underline hover:text-blue-700 "
                      >
                        <svg
                          className="hidden mr-1 md:inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth=".1"
                            d="m21.06 9.77.03-.3a1.99 1.99 0 0 0-3.91-.5l.04.02-.04-.01c-.16.61-.02 1.26.38 1.75l-1.34 1.34-.2-.15a2 2 0 0 0-2.73.58l-1.91-.65V11.7a1.99 1.99 0 0 0-2.53-1.9h.01a1.99 1.99 0 0 0-1.17 2.9l-1.16 1.44a1.99 1.99 0 0 0-2.52 1.6l.05.02c-.09.55.07 1.12.44 1.55l-.04.03c.38.44.93.7 1.51.7h.05v-.02a1.99 1.99 0 0 0 1.45-3.28l1.03-1.27a1.98 1.98 0 0 0 2.49-.58l1.97.68v.02h.05-.05c0 .58.25 1.14.7 1.52l.03-.04-.04.04a1.99 1.99 0 0 0 3.19-2.1l1.65-1.65a1.99 1.99 0 0 0 2.57-1.59Zm0 0H21h.05Zm-1.09-.3v.13a.87.87 0 0 1-.88.75.85.85 0 0 1-.43-.12h-.03a.87.87 0 0 1-.17-1.37c.16-.17.4-.26.63-.26a.88.88 0 0 1 .88.87ZM14.1 13.4a.87.87 0 0 1 1.47-.44.88.88 0 0 1-.18 1.38.87.87 0 0 1-1.31-.76c0-.06 0-.12.02-.18Zm-4.7-2.59a.88.88 0 0 1 .88.88c0 .23-.1.45-.26.61l.03.04-.03-.04a.89.89 0 0 1-.62.26.87.87 0 0 1-.62-1.5.87.87 0 0 1 .62-.25Zm-3.48 4.34h.05c.12 0 .24.03.34.07l.03.02c.05.05.11.08.17.1l.04.03a.87.87 0 0 1-.89 1.47.87.87 0 0 1 .26-1.69Zm-2.86 4.13V4.15a.56.56 0 0 0-1.11 0V20.4H21.5a.56.56 0 1 0 0-1.1H3.05Z"
                          />
                        </svg>
                        XEM DỰ ĐOÁN GIÁ
                      </a>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-green-500 p_percent">
                    +1.3<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$27 770 326 724"
                  >
                    <span>$</span>27.77B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$519 581 276"
                  >
                    <span>$</span>519.58M
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="XRP 55 506 158 411"
                  >
                    <span className="crc  text-dark-grey-700">XRP</span>55.51B
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy"
                      width={142}
                      height={54}
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-src="https://www.coingecko.com/coins/44/sparkline.svg"
                      alt="XRP (XRP)"
                    />
                  </td>
                </tr>
                <tr
                  data-id="dogecoin"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    9
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/dogecoin/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          data-src="https://assets.coingecko.com/coins/images/5/small/dogecoin.png"
                          alt="Dogecoin (DOGE)"
                          width={28}
                          height={28}
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">Dogecoin</div>
                          <div className="uppercase text-grey-600 p5">DOGE</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$0.145678"
                  >
                    $0.145678
                    <div>
                      <a
                        href="/price/dogecoin/du-doan-gia/"
                        target="_self"
                        className="inline-flex items-center text-blue-600 capitalize p5 p5--medium  hover:no-underline hover:text-blue-700 "
                      >
                        <svg
                          className="hidden mr-1 md:inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth=".1"
                            d="m21.06 9.77.03-.3a1.99 1.99 0 0 0-3.91-.5l.04.02-.04-.01c-.16.61-.02 1.26.38 1.75l-1.34 1.34-.2-.15a2 2 0 0 0-2.73.58l-1.91-.65V11.7a1.99 1.99 0 0 0-2.53-1.9h.01a1.99 1.99 0 0 0-1.17 2.9l-1.16 1.44a1.99 1.99 0 0 0-2.52 1.6l.05.02c-.09.55.07 1.12.44 1.55l-.04.03c.38.44.93.7 1.51.7h.05v-.02a1.99 1.99 0 0 0 1.45-3.28l1.03-1.27a1.98 1.98 0 0 0 2.49-.58l1.97.68v.02h.05-.05c0 .58.25 1.14.7 1.52l.03-.04-.04.04a1.99 1.99 0 0 0 3.19-2.1l1.65-1.65a1.99 1.99 0 0 0 2.57-1.59Zm0 0H21h.05Zm-1.09-.3v.13a.87.87 0 0 1-.88.75.85.85 0 0 1-.43-.12h-.03a.87.87 0 0 1-.17-1.37c.16-.17.4-.26.63-.26a.88.88 0 0 1 .88.87ZM14.1 13.4a.87.87 0 0 1 1.47-.44.88.88 0 0 1-.18 1.38.87.87 0 0 1-1.31-.76c0-.06 0-.12.02-.18Zm-4.7-2.59a.88.88 0 0 1 .88.88c0 .23-.1.45-.26.61l.03.04-.03-.04a.89.89 0 0 1-.62.26.87.87 0 0 1-.62-1.5.87.87 0 0 1 .62-.25Zm-3.48 4.34h.05c.12 0 .24.03.34.07l.03.02c.05.05.11.08.17.1l.04.03a.87.87 0 0 1-.89 1.47.87.87 0 0 1 .26-1.69Zm-2.86 4.13V4.15a.56.56 0 0 0-1.11 0V20.4H21.5a.56.56 0 1 0 0-1.1H3.05Z"
                          />
                        </svg>
                        XEM DỰ ĐOÁN GIÁ
                      </a>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-red-500 p_percent">
                    -0.27<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$21 079 196 609"
                  >
                    <span>$</span>21.08B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$599 732 598"
                  >
                    <span>$</span>599.73M
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="DOGE 144 641 396 384"
                  >
                    <span className="crc  text-dark-grey-700">DOGE</span>144.64B
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy"
                      width={142}
                      height={54}
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-src="https://www.coingecko.com/coins/5/sparkline.svg"
                      alt="Dogecoin (DOGE)"
                    />
                  </td>
                </tr>
                <tr
                  data-id="the-open-network"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    10
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/the-open-network/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          data-src="https://assets.coingecko.com/coins/images/17980/small/ton.PNG"
                          alt="Toncoin (TON)"
                          width={28}
                          height={28}
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">Toncoin</div>
                          <div className="uppercase text-grey-600 p5">TON</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$7.12"
                  >
                    $7.12
                    <div>
                      <a
                        href="/price/the-open-network/du-doan-gia/"
                        target="_self"
                        className="inline-flex items-center text-blue-600 capitalize p5 p5--medium  hover:no-underline hover:text-blue-700 "
                      >
                        <svg
                          className="hidden mr-1 md:inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth=".1"
                            d="m21.06 9.77.03-.3a1.99 1.99 0 0 0-3.91-.5l.04.02-.04-.01c-.16.61-.02 1.26.38 1.75l-1.34 1.34-.2-.15a2 2 0 0 0-2.73.58l-1.91-.65V11.7a1.99 1.99 0 0 0-2.53-1.9h.01a1.99 1.99 0 0 0-1.17 2.9l-1.16 1.44a1.99 1.99 0 0 0-2.52 1.6l.05.02c-.09.55.07 1.12.44 1.55l-.04.03c.38.44.93.7 1.51.7h.05v-.02a1.99 1.99 0 0 0 1.45-3.28l1.03-1.27a1.98 1.98 0 0 0 2.49-.58l1.97.68v.02h.05-.05c0 .58.25 1.14.7 1.52l.03-.04-.04.04a1.99 1.99 0 0 0 3.19-2.1l1.65-1.65a1.99 1.99 0 0 0 2.57-1.59Zm0 0H21h.05Zm-1.09-.3v.13a.87.87 0 0 1-.88.75.85.85 0 0 1-.43-.12h-.03a.87.87 0 0 1-.17-1.37c.16-.17.4-.26.63-.26a.88.88 0 0 1 .88.87ZM14.1 13.4a.87.87 0 0 1 1.47-.44.88.88 0 0 1-.18 1.38.87.87 0 0 1-1.31-.76c0-.06 0-.12.02-.18Zm-4.7-2.59a.88.88 0 0 1 .88.88c0 .23-.1.45-.26.61l.03.04-.03-.04a.89.89 0 0 1-.62.26.87.87 0 0 1-.62-1.5.87.87 0 0 1 .62-.25Zm-3.48 4.34h.05c.12 0 .24.03.34.07l.03.02c.05.05.11.08.17.1l.04.03a.87.87 0 0 1-.89 1.47.87.87 0 0 1 .26-1.69Zm-2.86 4.13V4.15a.56.56 0 0 0-1.11 0V20.4H21.5a.56.56 0 1 0 0-1.1H3.05Z"
                          />
                        </svg>
                        XEM DỰ ĐOÁN GIÁ
                      </a>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-green-500 p_percent">
                    +2.53<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$17 294 038 546"
                  >
                    <span>$</span>17.29B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$222 557 990"
                  >
                    <span>$</span>222.56M
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="TON 2 431 685 685"
                  >
                    <span className="crc  text-dark-grey-700">TON</span>2.43B
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy"
                      width={142}
                      height={54}
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-src="https://www.coingecko.com/coins/17980/sparkline.svg"
                      alt="Toncoin (TON)"
                    />
                  </td>
                </tr>
                <tr
                  data-id="cardano"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    11
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/cardano/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          data-src="https://assets.coingecko.com/coins/images/975/small/cardano.png"
                          alt="Cardano (ADA)"
                          width={28}
                          height={28}
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">Cardano</div>
                          <div className="uppercase text-grey-600 p5">ADA</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$0.440957"
                  >
                    $0.440957
                    <div>
                      <a
                        href="/price/cardano/du-doan-gia/"
                        target="_self"
                        className="inline-flex items-center text-blue-600 capitalize p5 p5--medium  hover:no-underline hover:text-blue-700 "
                      >
                        <svg
                          className="hidden mr-1 md:inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth=".1"
                            d="m21.06 9.77.03-.3a1.99 1.99 0 0 0-3.91-.5l.04.02-.04-.01c-.16.61-.02 1.26.38 1.75l-1.34 1.34-.2-.15a2 2 0 0 0-2.73.58l-1.91-.65V11.7a1.99 1.99 0 0 0-2.53-1.9h.01a1.99 1.99 0 0 0-1.17 2.9l-1.16 1.44a1.99 1.99 0 0 0-2.52 1.6l.05.02c-.09.55.07 1.12.44 1.55l-.04.03c.38.44.93.7 1.51.7h.05v-.02a1.99 1.99 0 0 0 1.45-3.28l1.03-1.27a1.98 1.98 0 0 0 2.49-.58l1.97.68v.02h.05-.05c0 .58.25 1.14.7 1.52l.03-.04-.04.04a1.99 1.99 0 0 0 3.19-2.1l1.65-1.65a1.99 1.99 0 0 0 2.57-1.59Zm0 0H21h.05Zm-1.09-.3v.13a.87.87 0 0 1-.88.75.85.85 0 0 1-.43-.12h-.03a.87.87 0 0 1-.17-1.37c.16-.17.4-.26.63-.26a.88.88 0 0 1 .88.87ZM14.1 13.4a.87.87 0 0 1 1.47-.44.88.88 0 0 1-.18 1.38.87.87 0 0 1-1.31-.76c0-.06 0-.12.02-.18Zm-4.7-2.59a.88.88 0 0 1 .88.88c0 .23-.1.45-.26.61l.03.04-.03-.04a.89.89 0 0 1-.62.26.87.87 0 0 1-.62-1.5.87.87 0 0 1 .62-.25Zm-3.48 4.34h.05c.12 0 .24.03.34.07l.03.02c.05.05.11.08.17.1l.04.03a.87.87 0 0 1-.89 1.47.87.87 0 0 1 .26-1.69Zm-2.86 4.13V4.15a.56.56 0 0 0-1.11 0V20.4H21.5a.56.56 0 1 0 0-1.1H3.05Z"
                          />
                        </svg>
                        XEM DỰ ĐOÁN GIÁ
                      </a>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-green-500 p_percent">
                    +1.3<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$15 613 383 732"
                  >
                    <span>$</span>15.61B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$314 576 521"
                  >
                    <span>$</span>314.58M
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="ADA 35 393 534 071"
                  >
                    <span className="crc  text-dark-grey-700">ADA</span>35.39B
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy"
                      width={142}
                      height={54}
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-src="https://www.coingecko.com/coins/975/sparkline.svg"
                      alt="Cardano (ADA)"
                    />
                  </td>
                </tr>
                <tr
                  data-id="shiba-inu"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    12
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/shiba-inu/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          data-src="https://assets.coingecko.com/coins/images/11939/small/shiba.png"
                          alt="Shiba Inu (SHIB)"
                          width={28}
                          height={28}
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">Shiba Inu</div>
                          <div className="uppercase text-grey-600 p5">SHIB</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$0.00002328"
                  >
                    $0.00002328
                    <div>
                      <a
                        href="/price/shiba-inu/du-doan-gia/"
                        target="_self"
                        className="inline-flex items-center text-blue-600 capitalize p5 p5--medium  hover:no-underline hover:text-blue-700 "
                      >
                        <svg
                          className="hidden mr-1 md:inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth=".1"
                            d="m21.06 9.77.03-.3a1.99 1.99 0 0 0-3.91-.5l.04.02-.04-.01c-.16.61-.02 1.26.38 1.75l-1.34 1.34-.2-.15a2 2 0 0 0-2.73.58l-1.91-.65V11.7a1.99 1.99 0 0 0-2.53-1.9h.01a1.99 1.99 0 0 0-1.17 2.9l-1.16 1.44a1.99 1.99 0 0 0-2.52 1.6l.05.02c-.09.55.07 1.12.44 1.55l-.04.03c.38.44.93.7 1.51.7h.05v-.02a1.99 1.99 0 0 0 1.45-3.28l1.03-1.27a1.98 1.98 0 0 0 2.49-.58l1.97.68v.02h.05-.05c0 .58.25 1.14.7 1.52l.03-.04-.04.04a1.99 1.99 0 0 0 3.19-2.1l1.65-1.65a1.99 1.99 0 0 0 2.57-1.59Zm0 0H21h.05Zm-1.09-.3v.13a.87.87 0 0 1-.88.75.85.85 0 0 1-.43-.12h-.03a.87.87 0 0 1-.17-1.37c.16-.17.4-.26.63-.26a.88.88 0 0 1 .88.87ZM14.1 13.4a.87.87 0 0 1 1.47-.44.88.88 0 0 1-.18 1.38.87.87 0 0 1-1.31-.76c0-.06 0-.12.02-.18Zm-4.7-2.59a.88.88 0 0 1 .88.88c0 .23-.1.45-.26.61l.03.04-.03-.04a.89.89 0 0 1-.62.26.87.87 0 0 1-.62-1.5.87.87 0 0 1 .62-.25Zm-3.48 4.34h.05c.12 0 .24.03.34.07l.03.02c.05.05.11.08.17.1l.04.03a.87.87 0 0 1-.89 1.47.87.87 0 0 1 .26-1.69Zm-2.86 4.13V4.15a.56.56 0 0 0-1.11 0V20.4H21.5a.56.56 0 1 0 0-1.1H3.05Z"
                          />
                        </svg>
                        XEM DỰ ĐOÁN GIÁ
                      </a>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-green-500 p_percent">
                    +0.86<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$13 719 638 003"
                  >
                    <span>$</span>13.72B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$418 126 223"
                  >
                    <span>$</span>418.13M
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="SHIB 589 262 884 324 000"
                  >
                    <span className="crc  text-dark-grey-700">SHIB</span>589.26T
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy"
                      width={142}
                      height={54}
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-src="https://www.coingecko.com/coins/11939/sparkline.svg"
                      alt="Shiba Inu (SHIB)"
                    />
                  </td>
                </tr>
                <tr
                  data-id="avalanche-2"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    13
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/avalanche-2/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          data-src="https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png"
                          alt="Avalanche (AVAX)"
                          width={28}
                          height={28}
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">Avalanche</div>
                          <div className="uppercase text-grey-600 p5">AVAX</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$32.93"
                  >
                    $32.93
                    <div>
                      <a
                        href="/price/avalanche-2/du-doan-gia/"
                        target="_self"
                        className="inline-flex items-center text-blue-600 capitalize p5 p5--medium  hover:no-underline hover:text-blue-700 "
                      >
                        <svg
                          className="hidden mr-1 md:inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth=".1"
                            d="m21.06 9.77.03-.3a1.99 1.99 0 0 0-3.91-.5l.04.02-.04-.01c-.16.61-.02 1.26.38 1.75l-1.34 1.34-.2-.15a2 2 0 0 0-2.73.58l-1.91-.65V11.7a1.99 1.99 0 0 0-2.53-1.9h.01a1.99 1.99 0 0 0-1.17 2.9l-1.16 1.44a1.99 1.99 0 0 0-2.52 1.6l.05.02c-.09.55.07 1.12.44 1.55l-.04.03c.38.44.93.7 1.51.7h.05v-.02a1.99 1.99 0 0 0 1.45-3.28l1.03-1.27a1.98 1.98 0 0 0 2.49-.58l1.97.68v.02h.05-.05c0 .58.25 1.14.7 1.52l.03-.04-.04.04a1.99 1.99 0 0 0 3.19-2.1l1.65-1.65a1.99 1.99 0 0 0 2.57-1.59Zm0 0H21h.05Zm-1.09-.3v.13a.87.87 0 0 1-.88.75.85.85 0 0 1-.43-.12h-.03a.87.87 0 0 1-.17-1.37c.16-.17.4-.26.63-.26a.88.88 0 0 1 .88.87ZM14.1 13.4a.87.87 0 0 1 1.47-.44.88.88 0 0 1-.18 1.38.87.87 0 0 1-1.31-.76c0-.06 0-.12.02-.18Zm-4.7-2.59a.88.88 0 0 1 .88.88c0 .23-.1.45-.26.61l.03.04-.03-.04a.89.89 0 0 1-.62.26.87.87 0 0 1-.62-1.5.87.87 0 0 1 .62-.25Zm-3.48 4.34h.05c.12 0 .24.03.34.07l.03.02c.05.05.11.08.17.1l.04.03a.87.87 0 0 1-.89 1.47.87.87 0 0 1 .26-1.69Zm-2.86 4.13V4.15a.56.56 0 0 0-1.11 0V20.4H21.5a.56.56 0 1 0 0-1.1H3.05Z"
                          />
                        </svg>
                        XEM DỰ ĐOÁN GIÁ
                      </a>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-green-500 p_percent">
                    +1.77<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$12 951 355 283"
                  >
                    <span>$</span>12.95B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$229 968 019"
                  >
                    <span>$</span>229.97M
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="AVAX 393 261 759"
                  >
                    <span className="crc  text-dark-grey-700">AVAX</span>393.26M
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy"
                      width={142}
                      height={54}
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-src="https://www.coingecko.com/coins/12559/sparkline.svg"
                      alt="Avalanche (AVAX)"
                    />
                  </td>
                </tr>
                <tr
                  data-id="wrapped-bitcoin"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    14
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/wrapped-bitcoin/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          data-src="https://assets.coingecko.com/coins/images/7598/small/wrapped_bitcoin_wbtc.png"
                          alt="Wrapped Bitcoin (WBTC)"
                          width={28}
                          height={28}
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">Wrapped Bitcoin</div>
                          <div className="uppercase text-grey-600 p5">WBTC</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$69,562.00"
                  >
                    $69,562.00
                    <div>
                      <a
                        href="/price/wrapped-bitcoin/du-doan-gia/"
                        target="_self"
                        className="inline-flex items-center text-blue-600 capitalize p5 p5--medium  hover:no-underline hover:text-blue-700 "
                      >
                        <svg
                          className="hidden mr-1 md:inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth=".1"
                            d="m21.06 9.77.03-.3a1.99 1.99 0 0 0-3.91-.5l.04.02-.04-.01c-.16.61-.02 1.26.38 1.75l-1.34 1.34-.2-.15a2 2 0 0 0-2.73.58l-1.91-.65V11.7a1.99 1.99 0 0 0-2.53-1.9h.01a1.99 1.99 0 0 0-1.17 2.9l-1.16 1.44a1.99 1.99 0 0 0-2.52 1.6l.05.02c-.09.55.07 1.12.44 1.55l-.04.03c.38.44.93.7 1.51.7h.05v-.02a1.99 1.99 0 0 0 1.45-3.28l1.03-1.27a1.98 1.98 0 0 0 2.49-.58l1.97.68v.02h.05-.05c0 .58.25 1.14.7 1.52l.03-.04-.04.04a1.99 1.99 0 0 0 3.19-2.1l1.65-1.65a1.99 1.99 0 0 0 2.57-1.59Zm0 0H21h.05Zm-1.09-.3v.13a.87.87 0 0 1-.88.75.85.85 0 0 1-.43-.12h-.03a.87.87 0 0 1-.17-1.37c.16-.17.4-.26.63-.26a.88.88 0 0 1 .88.87ZM14.1 13.4a.87.87 0 0 1 1.47-.44.88.88 0 0 1-.18 1.38.87.87 0 0 1-1.31-.76c0-.06 0-.12.02-.18Zm-4.7-2.59a.88.88 0 0 1 .88.88c0 .23-.1.45-.26.61l.03.04-.03-.04a.89.89 0 0 1-.62.26.87.87 0 0 1-.62-1.5.87.87 0 0 1 .62-.25Zm-3.48 4.34h.05c.12 0 .24.03.34.07l.03.02c.05.05.11.08.17.1l.04.03a.87.87 0 0 1-.89 1.47.87.87 0 0 1 .26-1.69Zm-2.86 4.13V4.15a.56.56 0 0 0-1.11 0V20.4H21.5a.56.56 0 1 0 0-1.1H3.05Z"
                          />
                        </svg>
                        XEM DỰ ĐOÁN GIÁ
                      </a>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-green-500 p_percent">
                    +0.4<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$10 643 363 841"
                  >
                    <span>$</span>10.64B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$62 069 459"
                  >
                    <span>$</span>62.07M
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="WBTC 153 024"
                  >
                    <span className="crc  text-dark-grey-700">WBTC</span>153.02K
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy"
                      width={142}
                      height={54}
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-src="https://www.coingecko.com/coins/7598/sparkline.svg"
                      alt="Wrapped Bitcoin (WBTC)"
                    />
                  </td>
                </tr>
                <tr
                  data-id="tron"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    15
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/tron/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          data-src="https://assets.coingecko.com/coins/images/1094/small/tron-logo.png"
                          alt="TRON (TRX)"
                          width={28}
                          height={28}
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">TRON</div>
                          <div className="uppercase text-grey-600 p5">TRX</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$0.117054"
                  >
                    $0.117054
                    <div>
                      <a
                        href="/price/tron/du-doan-gia/"
                        target="_self"
                        className="inline-flex items-center text-blue-600 capitalize p5 p5--medium  hover:no-underline hover:text-blue-700 "
                      >
                        <svg
                          className="hidden mr-1 md:inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth=".1"
                            d="m21.06 9.77.03-.3a1.99 1.99 0 0 0-3.91-.5l.04.02-.04-.01c-.16.61-.02 1.26.38 1.75l-1.34 1.34-.2-.15a2 2 0 0 0-2.73.58l-1.91-.65V11.7a1.99 1.99 0 0 0-2.53-1.9h.01a1.99 1.99 0 0 0-1.17 2.9l-1.16 1.44a1.99 1.99 0 0 0-2.52 1.6l.05.02c-.09.55.07 1.12.44 1.55l-.04.03c.38.44.93.7 1.51.7h.05v-.02a1.99 1.99 0 0 0 1.45-3.28l1.03-1.27a1.98 1.98 0 0 0 2.49-.58l1.97.68v.02h.05-.05c0 .58.25 1.14.7 1.52l.03-.04-.04.04a1.99 1.99 0 0 0 3.19-2.1l1.65-1.65a1.99 1.99 0 0 0 2.57-1.59Zm0 0H21h.05Zm-1.09-.3v.13a.87.87 0 0 1-.88.75.85.85 0 0 1-.43-.12h-.03a.87.87 0 0 1-.17-1.37c.16-.17.4-.26.63-.26a.88.88 0 0 1 .88.87ZM14.1 13.4a.87.87 0 0 1 1.47-.44.88.88 0 0 1-.18 1.38.87.87 0 0 1-1.31-.76c0-.06 0-.12.02-.18Zm-4.7-2.59a.88.88 0 0 1 .88.88c0 .23-.1.45-.26.61l.03.04-.03-.04a.89.89 0 0 1-.62.26.87.87 0 0 1-.62-1.5.87.87 0 0 1 .62-.25Zm-3.48 4.34h.05c.12 0 .24.03.34.07l.03.02c.05.05.11.08.17.1l.04.03a.87.87 0 0 1-.89 1.47.87.87 0 0 1 .26-1.69Zm-2.86 4.13V4.15a.56.56 0 0 0-1.11 0V20.4H21.5a.56.56 0 1 0 0-1.1H3.05Z"
                          />
                        </svg>
                        XEM DỰ ĐOÁN GIÁ
                      </a>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-green-500 p_percent">
                    +2.41<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$10 219 208 636"
                  >
                    <span>$</span>10.22B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$318 863 030"
                  >
                    <span>$</span>318.86M
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="TRX 87 320 817 651"
                  >
                    <span className="crc  text-dark-grey-700">TRX</span>87.32B
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy"
                      width={142}
                      height={54}
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-src="https://www.coingecko.com/coins/1094/sparkline.svg"
                      alt="TRON (TRX)"
                    />
                  </td>
                </tr>
                <tr
                  data-id="chainlink"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    16
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/chainlink/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          data-src="https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png"
                          alt="Chainlink (LINK)"
                          width={28}
                          height={28}
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">Chainlink</div>
                          <div className="uppercase text-grey-600 p5">LINK</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$16.13"
                  >
                    $16.13
                    <div>
                      <a
                        href="/price/chainlink/du-doan-gia/"
                        target="_self"
                        className="inline-flex items-center text-blue-600 capitalize p5 p5--medium  hover:no-underline hover:text-blue-700 "
                      >
                        <svg
                          className="hidden mr-1 md:inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth=".1"
                            d="m21.06 9.77.03-.3a1.99 1.99 0 0 0-3.91-.5l.04.02-.04-.01c-.16.61-.02 1.26.38 1.75l-1.34 1.34-.2-.15a2 2 0 0 0-2.73.58l-1.91-.65V11.7a1.99 1.99 0 0 0-2.53-1.9h.01a1.99 1.99 0 0 0-1.17 2.9l-1.16 1.44a1.99 1.99 0 0 0-2.52 1.6l.05.02c-.09.55.07 1.12.44 1.55l-.04.03c.38.44.93.7 1.51.7h.05v-.02a1.99 1.99 0 0 0 1.45-3.28l1.03-1.27a1.98 1.98 0 0 0 2.49-.58l1.97.68v.02h.05-.05c0 .58.25 1.14.7 1.52l.03-.04-.04.04a1.99 1.99 0 0 0 3.19-2.1l1.65-1.65a1.99 1.99 0 0 0 2.57-1.59Zm0 0H21h.05Zm-1.09-.3v.13a.87.87 0 0 1-.88.75.85.85 0 0 1-.43-.12h-.03a.87.87 0 0 1-.17-1.37c.16-.17.4-.26.63-.26a.88.88 0 0 1 .88.87ZM14.1 13.4a.87.87 0 0 1 1.47-.44.88.88 0 0 1-.18 1.38.87.87 0 0 1-1.31-.76c0-.06 0-.12.02-.18Zm-4.7-2.59a.88.88 0 0 1 .88.88c0 .23-.1.45-.26.61l.03.04-.03-.04a.89.89 0 0 1-.62.26.87.87 0 0 1-.62-1.5.87.87 0 0 1 .62-.25Zm-3.48 4.34h.05c.12 0 .24.03.34.07l.03.02c.05.05.11.08.17.1l.04.03a.87.87 0 0 1-.89 1.47.87.87 0 0 1 .26-1.69Zm-2.86 4.13V4.15a.56.56 0 0 0-1.11 0V20.4H21.5a.56.56 0 1 0 0-1.1H3.05Z"
                          />
                        </svg>
                        XEM DỰ ĐOÁN GIÁ
                      </a>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-green-500 p_percent">
                    +0.5<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$9 467 472 859"
                  >
                    <span>$</span>9.47B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$253 307 180"
                  >
                    <span>$</span>253.31M
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="LINK 587 099 971"
                  >
                    <span className="crc  text-dark-grey-700">LINK</span>587.10M
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy"
                      width={142}
                      height={54}
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-src="https://www.coingecko.com/coins/877/sparkline.svg"
                      alt="Chainlink (LINK)"
                    />
                  </td>
                </tr>
                <tr
                  data-id="bitcoin-cash"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    17
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/bitcoin-cash/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          data-src="https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png"
                          alt="Bitcoin Cash (BCH)"
                          width={28}
                          height={28}
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">Bitcoin Cash</div>
                          <div className="uppercase text-grey-600 p5">BCH</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$469.73"
                  >
                    $469.73
                    <div>
                      <a
                        href="/price/bitcoin-cash/du-doan-gia/"
                        target="_self"
                        className="inline-flex items-center text-blue-600 capitalize p5 p5--medium  hover:no-underline hover:text-blue-700 "
                      >
                        <svg
                          className="hidden mr-1 md:inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth=".1"
                            d="m21.06 9.77.03-.3a1.99 1.99 0 0 0-3.91-.5l.04.02-.04-.01c-.16.61-.02 1.26.38 1.75l-1.34 1.34-.2-.15a2 2 0 0 0-2.73.58l-1.91-.65V11.7a1.99 1.99 0 0 0-2.53-1.9h.01a1.99 1.99 0 0 0-1.17 2.9l-1.16 1.44a1.99 1.99 0 0 0-2.52 1.6l.05.02c-.09.55.07 1.12.44 1.55l-.04.03c.38.44.93.7 1.51.7h.05v-.02a1.99 1.99 0 0 0 1.45-3.28l1.03-1.27a1.98 1.98 0 0 0 2.49-.58l1.97.68v.02h.05-.05c0 .58.25 1.14.7 1.52l.03-.04-.04.04a1.99 1.99 0 0 0 3.19-2.1l1.65-1.65a1.99 1.99 0 0 0 2.57-1.59Zm0 0H21h.05Zm-1.09-.3v.13a.87.87 0 0 1-.88.75.85.85 0 0 1-.43-.12h-.03a.87.87 0 0 1-.17-1.37c.16-.17.4-.26.63-.26a.88.88 0 0 1 .88.87ZM14.1 13.4a.87.87 0 0 1 1.47-.44.88.88 0 0 1-.18 1.38.87.87 0 0 1-1.31-.76c0-.06 0-.12.02-.18Zm-4.7-2.59a.88.88 0 0 1 .88.88c0 .23-.1.45-.26.61l.03.04-.03-.04a.89.89 0 0 1-.62.26.87.87 0 0 1-.62-1.5.87.87 0 0 1 .62-.25Zm-3.48 4.34h.05c.12 0 .24.03.34.07l.03.02c.05.05.11.08.17.1l.04.03a.87.87 0 0 1-.89 1.47.87.87 0 0 1 .26-1.69Zm-2.86 4.13V4.15a.56.56 0 0 0-1.11 0V20.4H21.5a.56.56 0 1 0 0-1.1H3.05Z"
                          />
                        </svg>
                        XEM DỰ ĐOÁN GIÁ
                      </a>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-green-500 p_percent">
                    +0.55<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$9 270 480 701"
                  >
                    <span>$</span>9.27B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$194 488 240"
                  >
                    <span>$</span>194.49M
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="BCH 19 717 347"
                  >
                    <span className="crc  text-dark-grey-700">BCH</span>19.72M
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy"
                      width={142}
                      height={54}
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-src="https://www.coingecko.com/coins/780/sparkline.svg"
                      alt="Bitcoin Cash (BCH)"
                    />
                  </td>
                </tr>
                <tr
                  data-id="polkadot"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    18
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/polkadot/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          data-src="https://assets.coingecko.com/coins/images/12171/small/polkadot.png"
                          alt="Polkadot (DOT)"
                          width={28}
                          height={28}
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">Polkadot</div>
                          <div className="uppercase text-grey-600 p5">DOT</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$6.46"
                  >
                    $6.46
                    <div>
                      <a
                        href="/price/polkadot/du-doan-gia/"
                        target="_self"
                        className="inline-flex items-center text-blue-600 capitalize p5 p5--medium  hover:no-underline hover:text-blue-700 "
                      >
                        <svg
                          className="hidden mr-1 md:inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth=".1"
                            d="m21.06 9.77.03-.3a1.99 1.99 0 0 0-3.91-.5l.04.02-.04-.01c-.16.61-.02 1.26.38 1.75l-1.34 1.34-.2-.15a2 2 0 0 0-2.73.58l-1.91-.65V11.7a1.99 1.99 0 0 0-2.53-1.9h.01a1.99 1.99 0 0 0-1.17 2.9l-1.16 1.44a1.99 1.99 0 0 0-2.52 1.6l.05.02c-.09.55.07 1.12.44 1.55l-.04.03c.38.44.93.7 1.51.7h.05v-.02a1.99 1.99 0 0 0 1.45-3.28l1.03-1.27a1.98 1.98 0 0 0 2.49-.58l1.97.68v.02h.05-.05c0 .58.25 1.14.7 1.52l.03-.04-.04.04a1.99 1.99 0 0 0 3.19-2.1l1.65-1.65a1.99 1.99 0 0 0 2.57-1.59Zm0 0H21h.05Zm-1.09-.3v.13a.87.87 0 0 1-.88.75.85.85 0 0 1-.43-.12h-.03a.87.87 0 0 1-.17-1.37c.16-.17.4-.26.63-.26a.88.88 0 0 1 .88.87ZM14.1 13.4a.87.87 0 0 1 1.47-.44.88.88 0 0 1-.18 1.38.87.87 0 0 1-1.31-.76c0-.06 0-.12.02-.18Zm-4.7-2.59a.88.88 0 0 1 .88.88c0 .23-.1.45-.26.61l.03.04-.03-.04a.89.89 0 0 1-.62.26.87.87 0 0 1-.62-1.5.87.87 0 0 1 .62-.25Zm-3.48 4.34h.05c.12 0 .24.03.34.07l.03.02c.05.05.11.08.17.1l.04.03a.87.87 0 0 1-.89 1.47.87.87 0 0 1 .26-1.69Zm-2.86 4.13V4.15a.56.56 0 0 0-1.11 0V20.4H21.5a.56.56 0 1 0 0-1.1H3.05Z"
                          />
                        </svg>
                        XEM DỰ ĐOÁN GIÁ
                      </a>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-green-500 p_percent">
                    +0.27<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$8 870 121 840"
                  >
                    <span>$</span>8.87B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$188 900 395"
                  >
                    <span>$</span>188.90M
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="DOT 1 374 164 082"
                  >
                    <span className="crc  text-dark-grey-700">DOT</span>1.37B
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy"
                      width={142}
                      height={54}
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-src="https://www.coingecko.com/coins/12171/sparkline.svg"
                      alt="Polkadot (DOT)"
                    />
                  </td>
                </tr>
                <tr
                  data-id="uniswap"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    19
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/uniswap/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          data-src="https://assets.coingecko.com/coins/images/12504/small/uniswap-uni.png"
                          alt="Uniswap (UNI)"
                          width={28}
                          height={28}
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">Uniswap</div>
                          <div className="uppercase text-grey-600 p5">UNI</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$9.73"
                  >
                    $9.73
                    <div>
                      <a
                        href="/price/uniswap/du-doan-gia/"
                        target="_self"
                        className="inline-flex items-center text-blue-600 capitalize p5 p5--medium  hover:no-underline hover:text-blue-700 "
                      >
                        <svg
                          className="hidden mr-1 md:inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth=".1"
                            d="m21.06 9.77.03-.3a1.99 1.99 0 0 0-3.91-.5l.04.02-.04-.01c-.16.61-.02 1.26.38 1.75l-1.34 1.34-.2-.15a2 2 0 0 0-2.73.58l-1.91-.65V11.7a1.99 1.99 0 0 0-2.53-1.9h.01a1.99 1.99 0 0 0-1.17 2.9l-1.16 1.44a1.99 1.99 0 0 0-2.52 1.6l.05.02c-.09.55.07 1.12.44 1.55l-.04.03c.38.44.93.7 1.51.7h.05v-.02a1.99 1.99 0 0 0 1.45-3.28l1.03-1.27a1.98 1.98 0 0 0 2.49-.58l1.97.68v.02h.05-.05c0 .58.25 1.14.7 1.52l.03-.04-.04.04a1.99 1.99 0 0 0 3.19-2.1l1.65-1.65a1.99 1.99 0 0 0 2.57-1.59Zm0 0H21h.05Zm-1.09-.3v.13a.87.87 0 0 1-.88.75.85.85 0 0 1-.43-.12h-.03a.87.87 0 0 1-.17-1.37c.16-.17.4-.26.63-.26a.88.88 0 0 1 .88.87ZM14.1 13.4a.87.87 0 0 1 1.47-.44.88.88 0 0 1-.18 1.38.87.87 0 0 1-1.31-.76c0-.06 0-.12.02-.18Zm-4.7-2.59a.88.88 0 0 1 .88.88c0 .23-.1.45-.26.61l.03.04-.03-.04a.89.89 0 0 1-.62.26.87.87 0 0 1-.62-1.5.87.87 0 0 1 .62-.25Zm-3.48 4.34h.05c.12 0 .24.03.34.07l.03.02c.05.05.11.08.17.1l.04.03a.87.87 0 0 1-.89 1.47.87.87 0 0 1 .26-1.69Zm-2.86 4.13V4.15a.56.56 0 0 0-1.11 0V20.4H21.5a.56.56 0 1 0 0-1.1H3.05Z"
                          />
                        </svg>
                        XEM DỰ ĐOÁN GIÁ
                      </a>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-red-500 p_percent">
                    -2.65<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$7 333 875 706"
                  >
                    <span>$</span>7.33B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$187 153 759"
                  >
                    <span>$</span>187.15M
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="UNI 753 766 667"
                  >
                    <span className="crc  text-dark-grey-700">UNI</span>753.77M
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy"
                      width={142}
                      height={54}
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-src="https://www.coingecko.com/coins/12504/sparkline.svg"
                      alt="Uniswap (UNI)"
                    />
                  </td>
                </tr>
                <tr
                  data-id="near"
                  data-el="ce-list-item"
                  className=" bg-white  [&:hover>td]:bg-grey-100  text-dark-grey-700  hover:bg-grey-100  border-b border-grey-200 "
                >
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white "
                    data-el="ce-table-ranking"
                  >
                    20
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky top-0 left-0 bg-white font-medium text-left border-r border-white p5 lg:p4 ">
                    <div className="relative px-2.5 lg:px-4 py-2 lg:py-3.5">
                      <a
                        data-el="bic-cer-coin"
                        className="flex items-center name-wrpapper"
                        href="https://vn.beincrypto.com/price/near/"
                      >
                        <img
                          loading="lazy"
                          className="mr-3 lazy shrink-0 p7 aspect-square w-7 max-w-7 object-contain"
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                          data-src="https://assets.coingecko.com/coins/images/10365/small/near_icon.png"
                          alt="NEAR Protocol (NEAR)"
                          width={28}
                          height={28}
                        />
                        <div className="flex flex-col lg:items-baseline lg:flex-row gap-x-2.5">
                          <div className="whitespace-nowrap s3 s3--medium s3--normal-case">NEAR Protocol</div>
                          <div className="uppercase text-grey-600 p5">NEAR</div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$6.46"
                  >
                    $6.46
                    <div>
                      <a
                        href="/price/near/du-doan-gia/"
                        target="_self"
                        className="inline-flex items-center text-blue-600 capitalize p5 p5--medium  hover:no-underline hover:text-blue-700 "
                      >
                        <svg
                          className="hidden mr-1 md:inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth=".1"
                            d="m21.06 9.77.03-.3a1.99 1.99 0 0 0-3.91-.5l.04.02-.04-.01c-.16.61-.02 1.26.38 1.75l-1.34 1.34-.2-.15a2 2 0 0 0-2.73.58l-1.91-.65V11.7a1.99 1.99 0 0 0-2.53-1.9h.01a1.99 1.99 0 0 0-1.17 2.9l-1.16 1.44a1.99 1.99 0 0 0-2.52 1.6l.05.02c-.09.55.07 1.12.44 1.55l-.04.03c.38.44.93.7 1.51.7h.05v-.02a1.99 1.99 0 0 0 1.45-3.28l1.03-1.27a1.98 1.98 0 0 0 2.49-.58l1.97.68v.02h.05-.05c0 .58.25 1.14.7 1.52l.03-.04-.04.04a1.99 1.99 0 0 0 3.19-2.1l1.65-1.65a1.99 1.99 0 0 0 2.57-1.59Zm0 0H21h.05Zm-1.09-.3v.13a.87.87 0 0 1-.88.75.85.85 0 0 1-.43-.12h-.03a.87.87 0 0 1-.17-1.37c.16-.17.4-.26.63-.26a.88.88 0 0 1 .88.87ZM14.1 13.4a.87.87 0 0 1 1.47-.44.88.88 0 0 1-.18 1.38.87.87 0 0 1-1.31-.76c0-.06 0-.12.02-.18Zm-4.7-2.59a.88.88 0 0 1 .88.88c0 .23-.1.45-.26.61l.03.04-.03-.04a.89.89 0 0 1-.62.26.87.87 0 0 1-.62-1.5.87.87 0 0 1 .62-.25Zm-3.48 4.34h.05c.12 0 .24.03.34.07l.03.02c.05.05.11.08.17.1l.04.03a.87.87 0 0 1-.89 1.47.87.87 0 0 1 .26-1.69Zm-2.86 4.13V4.15a.56.56 0 0 0-1.11 0V20.4H21.5a.56.56 0 1 0 0-1.1H3.05Z"
                          />
                        </svg>
                        XEM DỰ ĐOÁN GIÁ
                      </a>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right text-red-500 p_percent">
                    -2.15<span>%</span>
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$7 010 736 751"
                  >
                    <span>$</span>7.01B
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="$236 168 452"
                  >
                    <span>$</span>236.17M
                  </td>
                  <td
                    className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right"
                    title="NEAR 1 083 976 451"
                  >
                    <span className="crc  text-dark-grey-700">NEAR</span>1.08B
                  </td>
                  <td className="px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-right js-graph js-graph-sparkline_in_7d">
                    <img
                      className="inline-block h-10 img-price-graph lazy"
                      width={142}
                      height={54}
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTQyLjMsMzkuNmM1LjctNC4zLDEzLjktMy4xLDE4LjEsMi43YzQuMyw1LjcsMy4xLDEzLjktMi43LDE4LjFsNC4xLDUuNWM4LjgtNi41LDEwLjYtMTksNC4xLTI3LjcKICBjLTYuNS04LjgtMTktMTAuNi0yNy43LTQuMUw0Mi4zLDM5LjZ6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSItMzYwIDUwIDUwIiAKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgogPHBhdGggZmlsbD0iI2JlYmNiYyIgZD0iTTgyLDM1LjdDNzQuMSwxOCw1My40LDEwLjEsMzUuNywxOFMxMC4xLDQ2LjYsMTgsNjQuM2w3LjYtMy40Yy02LTEzLjUsMC0yOS4zLDEzLjUtMzUuM3MyOS4zLDAsMzUuMywxMy41CiAgTDgyLDM1Ljd6Ij4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gCiAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgCiAgICAgICAgIGF0dHJpYnV0ZVR5cGU9IlhNTCIgCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIycyIgCiAgICAgICAgIGZyb209IjAgNTAgNTAiCiAgICAgICAgIHRvPSIzNjAgNTAgNTAiIAogICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg=="
                      data-src="https://www.coingecko.com/coins/10365/sparkline.svg"
                      alt="NEAR Protocol (NEAR)"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center my-5 table-wrapper-footer">
          <div className="flex items-center">
            <a
              href="https://vn.beincrypto.com/price/"
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
            </a>
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
              <a
                data-el="bic-c-pagination-number"
                data-page={2}
                href="https://vn.beincrypto.com/price/2/"
                className="text-dark-grey-700  hover:no-underline"
                aria-label="Page 2"
              >
                2
              </a>
              <a
                data-el="bic-c-pagination-number"
                data-page={3}
                href="https://vn.beincrypto.com/price/3/"
                className="text-dark-grey-700  hover:no-underline"
                aria-label="Page 3"
              >
                3
              </a>
              <span className="lg:mx-3 text-grey-500">...</span>
              <a
                data-page={649}
                data-el="bic-c-pagination-number"
                data-el_pos="bic-c-pagination-last-page"
                href="https://vn.beincrypto.com/price/649/"
                className="text-dark-grey-700  hover:no-underline bic-c-pagination-last-page"
                aria-label="Page 649"
              >
                649
              </a>
            </div>
            <a
              href="https://vn.beincrypto.com/price/2/"
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
