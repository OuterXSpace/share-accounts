import { ExchangesSectionV4Props } from './exchanges-section.type';

export const ExchangesSectionV4: React.FC<ExchangesSectionV4Props> = (props) => {
  const { data, className } = props;

  return (
    <div className="page-content max-w-full w-full">
      <div id="exchanges-list" className="exchanges-list">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full">
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="text-3.5 font-sans font-normal text-blue-600 ">
                <a href="/" className="b-home" aria-label="Go to home" />
                <i>/</i>
                <a href="#">Sàn</a>
              </div>
            </div>
            <div className="header-wrapper">
              <div className="header-wrapper__column">
                <h1 className="h4 lg:h1">Những sàn giao dịch tiền điện tử tốt nhất</h1>
                <h4 className="mt-2 mb-8 text-blue-600 h4 ">904 sàn</h4>
              </div>
            </div>
            <div className="hidden mb-10 bic-excerpt-readmore lg:block" style={{ display: 'none !important' }}>
              <div className="p3" />
              <a href="#" title="" className="inline-block mt-5 text-blue-600" style={{ display: 'none !important' }} />
            </div>
          </div>
          <div className="w-full flex flex-wrap content-start flex-col-reverse lg:ml-32 lg:max-w-[420px] lg:flex-col">
            <div className="my-6 lg:ml-auto bic-c-search lg:mb-16 lg:mt-0">
              <div className="py-2 px-3.5 border border-transparent text-grey-600  flex items-center  focus-within:bg-white focus-within:border-blue-600  bg-grey-100  rounded-md gap-x-2.5 acfo:border-blue-600 ">
                <label htmlFor="bic-exchange-list-search-control" className="mb-0">
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
                  id="bic-exchange-list-search-control"
                  name="search-exchange"
                  type="search"
                  placeholder="Tìm kiếm sàn giao dịch"
                  className="w-full p-0 bg-transparent border-none appearance-none search-exchange p4 p4--ns placeholder:text-grey-600  peer focus:outline-none focus:border-none focus:ring-0 text-dark-grey-700 "
                  aria-label="Tìm kiếm sàn giao dịch"
                />
                <button
                  className="hidden w-5 h-5 peer peer-focus:block hover:block acfo:block"
                  type="button"
                  onclick="if (!window.__cfRLUnblockHandlers) return false; this.previousElementSibling.value='';this.previousElementSibling.focus()"
                >
                  <svg
                    className="w-4 h-4"
                    width={16}
                    height={16}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.7729 4.32497C17.0779 4.0197 17.0754 3.52724 16.7673 3.22504C16.4593 2.92283 15.9624 2.92532 15.6575 3.23059L10 8.89446L4.34251 3.23059C4.03758 2.92532 3.54069 2.92283 3.23267 3.22504C2.92465 3.52724 2.92214 4.0197 3.22706 4.32497L8.8957 10L3.22706 15.675C2.92214 15.9803 2.92465 16.4728 3.23267 16.775C3.54069 17.0772 4.03758 17.0747 4.34251 16.7694L10 11.1055L15.6575 16.7694C15.9624 17.0747 16.4593 17.0772 16.7673 16.775C17.0754 16.4728 17.0779 15.9803 16.7729 15.675L11.1043 10L16.7729 4.32497Z"
                      fill="currentColor"
                      stroke="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <div className="flex p5">
                <div className="mb-3 mr-14">
                  <div className="mb-1">
                    Bởi{' '}
                    <a
                      href="https://vn.beincrypto.com/author/beincrypto-staff/"
                      className="text-blue-600 no-underline p5 "
                    >
                      Advertorial
                    </a>
                  </div>
                  <time dateTime="2020-03-27T00:50:03+07:00">27 Tháng Ba 2020, 00:50 +07</time>
                </div>
                <div className="mb-3">
                  <div className="mb-1">
                    Cập nhật bởi{' '}
                    <a
                      href="https://vn.beincrypto.com/author/beincrypto-staff/"
                      className="text-blue-600 no-underline p5 "
                    >
                      Advertorial{' '}
                    </a>{' '}
                  </div>
                  <time dateTime="2020-11-01T21:08:40+07:00">1 Tháng Mười Một 2020, 21:08 +07</time>
                </div>
              </div>
              <div className="share-block">
                <a
                  href="https://twitter.com/intent/tweet?url=https://vn.beincrypto.com/exchanges/&text=Nh%E1%BB%AFng+s%C3%A0n+giao+d%E1%BB%8Bch+ti%E1%BB%81n+%C4%91i%E1%BB%87n+t%E1%BB%AD+t%E1%BB%91t+nh%E1%BA%A5t"
                  target="_blank"
                  className="btn-social mr-4"
                  aria-label="Share on twitter"
                >
                  <i className="icon-twitter" />
                </a>
                <a
                  href="mailto:?subject=Nh%E1%BB%AFng+s%C3%A0n+giao+d%E1%BB%8Bch+ti%E1%BB%81n+%C4%91i%E1%BB%87n+t%E1%BB%AD+t%E1%BB%91t+nh%E1%BA%A5t&body=.+https://vn.beincrypto.com/exchanges/"
                  target="_blank"
                  className="btn-social mr-4"
                  aria-label="Share on mail"
                >
                  <i className="icon-mail" />
                </a>
                <a
                  href="https://www.linkedin.com/shareArticle?mini=true&url=https://vn.beincrypto.com/exchanges/&title=Nh%E1%BB%AFng+s%C3%A0n+giao+d%E1%BB%8Bch+ti%E1%BB%81n+%C4%91i%E1%BB%87n+t%E1%BB%AD+t%E1%BB%91t+nh%E1%BA%A5t&summary=&source=https://vn.beincrypto.com"
                  target="_blank"
                  className="btn-social mr-4"
                  aria-label="Share on linkedin"
                >
                  <i className="icon-linkedin" />
                </a>
              </div>
              <div className="block mb-5 bic-excerpt-readmore lg:hidden" style={{ display: 'none !important' }}>
                <div className="p3" />
                <a
                  href="#"
                  title=""
                  className="inline-block mt-3 text-blue-600"
                  style={{ display: 'none !important' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="header-wrapper2">
          <div className="header-wrapper2__column">
            <div className="mb-3 p3--medium filter-button p3">Các bộ lọc</div>
          </div>
        </div>
        <div className="overflow-hidden filter-wrapper-main js-filter-wrapper">
          <div className="flex filter-wrapper">
            <div className="m-0 filter-block-wrapper">
              <button
                className="filter-btn check js-filter mr-2 leading-none px-4 cursor-pointer py-2.75 rounded-md s3 s3--medium s3--normal-case text-dark-grey-700  border border-grey-400  hover:bg-grey-100  acfo:border-blue-600 "
                data-filter="has_low_fees"
                aria-label="Phí thấp"
              >
                Phí thấp
              </button>
            </div>
            <div className="m-0 filter-block-wrapper">
              <button
                className="filter-btn check js-filter mr-2 leading-none px-4 cursor-pointer py-2.75 rounded-md s3 s3--medium s3--normal-case text-dark-grey-700  border border-grey-400  hover:bg-grey-100  acfo:border-blue-600 "
                data-filter="has_deposit_0"
                aria-label="Nạp tiền 0%"
              >
                Nạp tiền 0%
              </button>
            </div>
            <div className="m-0 filter-block-wrapper">
              <button
                className="filter-btn check js-filter mr-2 leading-none px-4 cursor-pointer py-2.75 rounded-md s3 s3--medium s3--normal-case text-dark-grey-700  border border-grey-400  hover:bg-grey-100  acfo:border-blue-600 "
                data-filter="has_withdrawal_0"
                aria-label="Rút tiền 0%"
              >
                Rút tiền 0%
              </button>
            </div>
            <div className="m-0 filter-block-wrapper">
              <button
                className="filter-btn check js-filter mr-2 leading-none px-4 cursor-pointer py-2.75 rounded-md s3 s3--medium s3--normal-case text-dark-grey-700  border border-grey-400  hover:bg-grey-100  acfo:border-blue-600 "
                data-filter="has_fiat_deposit"
                aria-label="Fiat Deposit"
              >
                Fiat Deposit
              </button>
            </div>
            <div className="m-0 filter-block-wrapper">
              <button
                className="filter-btn check js-filter mr-2 leading-none px-4 cursor-pointer py-2.75 rounded-md s3 s3--medium s3--normal-case text-dark-grey-700  border border-grey-400  hover:bg-grey-100  acfo:border-blue-600 "
                data-filter="has_fiat_withdrawal"
                aria-label="Fiat Withdrawal"
              >
                Fiat Withdrawal
              </button>
            </div>
            <div className="m-0 filter-block-wrapper">
              <button
                className="filter-btn check js-filter mr-2 leading-none px-4 cursor-pointer py-2.75 rounded-md s3 s3--medium s3--normal-case text-dark-grey-700  border border-grey-400  hover:bg-grey-100  acfo:border-blue-600 "
                data-filter="has_regulation"
                aria-label="Regulation"
              >
                Regulation
              </button>
            </div>
            <div className="m-0 filter-block-wrapper">
              <button
                className="filter-btn check js-filter mr-2 leading-none px-4 cursor-pointer py-2.75 rounded-md s3 s3--medium s3--normal-case text-dark-grey-700  border border-grey-400  hover:bg-grey-100  acfo:border-blue-600 "
                data-filter="has_24h_support"
                aria-label="Hỗ trợ 24H"
              >
                Hỗ trợ 24H
              </button>
            </div>
            <div className="m-0 filter-block-wrapper">
              <button
                className="filter-btn check js-filter mr-2 leading-none px-4 cursor-pointer py-2.75 rounded-md s3 s3--medium s3--normal-case text-dark-grey-700  border border-grey-400  hover:bg-grey-100  acfo:border-blue-600 "
                data-filter="has_easy_registration"
                aria-label="Đăng ký dễ dàng"
              >
                Đăng ký dễ dàng
              </button>
            </div>
          </div>
        </div>
        <div className="mb-6 overflow-hidden">
          <div className="relative overflow-x-auto table-wrapper">
            <table id="exch-table" className="relative w-full exchange-table">
              <thead className="text-grey-600 ">
                <tr className="bg-white  border-y border-grey-200 ">
                  <th
                    className="relative bg-white  text-center cursor-pointer whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600 "
                    data-col={0}
                    data-col_name="rating"
                  >
                    Thứ hạng{' '}
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
                    className="sticky left-0 top-0 bg-white text-left cursor-pointer whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600  w-40 lg:w-auto"
                    data-col={1}
                    data-col_name="name"
                    data-el="sort-by-name"
                  >
                    Sàn giao dịch
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
                    className="text-left cursor-pointer whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600 exchanges-rating-col"
                    data-col={2}
                    data-col_name="trust_score"
                  >
                    Xếp hạng
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
                    className="text-left cursor-pointer whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600 "
                    data-col={3}
                    data-col_name="24_volume"
                  >
                    Khối lượng 24h
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
                    className="text-left cursor-pointer whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600 "
                    data-col={5}
                    data-col_name="spread"
                  >
                    Chênh lệnh
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
                    className="text-left cursor-pointer whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600 "
                    data-col={8}
                    data-col_name="coins"
                  >
                    #Đồng xu
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
                  <th className="text-center cursor-pointer whitespace-nowrap py-3.5 px-4 s4 s4--ns lg:s3 lg:s3--ns lg:s3--medium lg:s3--normal-case text-grey-600 ">
                    Ứng dụng \ Trang web
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" bg-blue-200  [&_td]:bg-blue-200  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-blue-200  [&_td]:bg-blue-200  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white" />
                  <td className=" bg-blue-200  [&_td]:bg-blue-200  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended">
                      <div className="inline-block py-0.5 rounded capitalize badge p6 p6--ns px-1.5 text-lime-600 bg-dark-grey-700   badge--promo absolute top-0 left-1/2 -translate-y-1/2 label-recommended">
                        <span className="hover:no-underline">Được tài trợ</span>
                      </div>
                    </div>
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/bybit_spot/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/698/small/bybit_spot.png"
                        data-src="https://assets.coingecko.com/markets/images/698/small/bybit_spot.png"
                        width={32}
                        height={32}
                        alt="Bybit"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">Bybit</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">10</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $1.32B
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    0.23%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    495
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href="https://vn.beincrypto.com/1j9w_AFF_VN_RNKG_bybit_mainpromo"
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors "
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      Giao dịch ngay
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
                <tr className=" bg-white  [&:hover>td]:bg-grey-100  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white">
                    11
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended" />
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/binance/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/52/small/binance.jpg"
                        data-src="https://assets.coingecko.com/markets/images/52/small/binance.jpg"
                        width={32}
                        height={32}
                        alt="Binance"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">Binance</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-grey-300"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">9</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $3.18B
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    0.08%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    383
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href=""
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors hidden"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
                <tr className=" bg-white  [&:hover>td]:bg-grey-100  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white">
                    2
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended" />
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/okex/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/96/small/WeChat_Image_20220117220452.png"
                        data-src="https://assets.coingecko.com/markets/images/96/small/WeChat_Image_20220117220452.png"
                        width={32}
                        height={32}
                        alt="OKX"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">OKX</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">10</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $1.02B
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    0.02%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    326
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href=""
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors hidden"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
                <tr className=" bg-white  [&:hover>td]:bg-grey-100  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white">
                    12
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended" />
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/bitget/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/540/small/Bitget_new_logo_2.png"
                        data-src="https://assets.coingecko.com/markets/images/540/small/Bitget_new_logo_2.png"
                        width={32}
                        height={32}
                        alt="Bitget"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">Bitget</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-grey-300"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">9</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $897.05M
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    0.01%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    841
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href=""
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors hidden"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
                <tr className=" bg-white  [&:hover>td]:bg-grey-100  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white">
                    3
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended" />
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/gdax/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/23/small/Coinbase_Coin_Primary.png"
                        data-src="https://assets.coingecko.com/markets/images/23/small/Coinbase_Coin_Primary.png"
                        width={32}
                        height={32}
                        alt="Coinbase Exchange"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">Coinbase Exchange</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">10</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $744.90M
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    0.03%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    249
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href=""
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors hidden"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
                <tr className=" bg-white  [&:hover>td]:bg-grey-100  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white">
                    13
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended" />
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/huobi/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/25/small/Huobi."
                        data-src="https://assets.coingecko.com/markets/images/25/small/Huobi."
                        width={32}
                        height={32}
                        alt="HTX"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">HTX</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-grey-300"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">9</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $738.23M
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    0.53%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    701
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href=""
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors hidden"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
                <tr className=" bg-white  [&:hover>td]:bg-grey-100  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white">
                    14
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended" />
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/mxc/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/409/small/WeChat_Image_20210622160936.png"
                        data-src="https://assets.coingecko.com/markets/images/409/small/WeChat_Image_20210622160936.png"
                        width={32}
                        height={32}
                        alt="MEXC"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">MEXC</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-grey-300"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">9</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $614.60M
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    50.00%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    2366
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href=""
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors hidden"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
                <tr className=" bg-white  [&:hover>td]:bg-grey-100  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white">
                    4
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended" />
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/kucoin/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/61/small/kucoin.png"
                        data-src="https://assets.coingecko.com/markets/images/61/small/kucoin.png"
                        width={32}
                        height={32}
                        alt="KuCoin"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">KuCoin</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">10</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $316.94M
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    0.40%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    828
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href=""
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors hidden"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
                <tr className=" bg-white  [&:hover>td]:bg-grey-100  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white">
                    5
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended" />
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/kraken/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/29/small/kraken.jpg"
                        data-src="https://assets.coingecko.com/markets/images/29/small/kraken.jpg"
                        width={32}
                        height={32}
                        alt="Kraken"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">Kraken</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">10</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $284.05M
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    0.06%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    253
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href=""
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors hidden"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
                <tr className=" bg-white  [&:hover>td]:bg-grey-100  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white">
                    15
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended" />
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/bingx/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/812/small/YtFwQwJr_400x400.jpg"
                        data-src="https://assets.coingecko.com/markets/images/812/small/YtFwQwJr_400x400.jpg"
                        width={32}
                        height={32}
                        alt="BingX"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">BingX</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-grey-300"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">9</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $272.36M
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    0.09%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    810
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href=""
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors hidden"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
                <tr className=" bg-white  [&:hover>td]:bg-grey-100  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white">
                    6
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended" />
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/crypto_com/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/589/small/Crypto.jpg"
                        data-src="https://assets.coingecko.com/markets/images/589/small/Crypto.jpg"
                        width={32}
                        height={32}
                        alt="Crypto.com Exchange"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">Crypto.com Exchange</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">10</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $268.12M
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    0.55%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    359
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href=""
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors hidden"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
                <tr className=" bg-white  [&:hover>td]:bg-grey-100  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white">
                    16
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended" />
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/exmo/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/59/small/new_logo-1.jpg"
                        data-src="https://assets.coingecko.com/markets/images/59/small/new_logo-1.jpg"
                        width={32}
                        height={32}
                        alt="EXMO"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">EXMO</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-grey-300"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">9</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $52.76M
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    3.35%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    45
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href=""
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors hidden"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
                <tr className=" bg-white  [&:hover>td]:bg-grey-100  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white">
                    7
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended" />
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/bitfinex/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/4/small/BItfinex.png"
                        data-src="https://assets.coingecko.com/markets/images/4/small/BItfinex.png"
                        width={32}
                        height={32}
                        alt="Bitfinex"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">Bitfinex</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">10</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $51.32M
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    0.09%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    178
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href=""
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors hidden"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
                <tr className=" bg-white  [&:hover>td]:bg-grey-100  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white">
                    17
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended" />
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/bitstamp/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/9/small/bitstamp.jpg"
                        data-src="https://assets.coingecko.com/markets/images/9/small/bitstamp.jpg"
                        width={32}
                        height={32}
                        alt="Bitstamp"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">Bitstamp</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-grey-300"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">9</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $51.12M
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    0.08%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    91
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href=""
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors hidden"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
                <tr className=" bg-white  [&:hover>td]:bg-grey-100  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white">
                    18
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended" />
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/backpack_exchange/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/1387/small/Backpack_Logo.png"
                        data-src="https://assets.coingecko.com/markets/images/1387/small/Backpack_Logo.png"
                        width={32}
                        height={32}
                        alt="Backpack Exchange"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">Backpack Exchange</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-grey-300"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">9</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $50.75M
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    0.04%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    38
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href=""
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors hidden"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
                <tr className=" bg-white  [&:hover>td]:bg-grey-100  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white">
                    8
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended" />
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/hashkey_exchange/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/1206/small/hashkey.jpeg"
                        data-src="https://assets.coingecko.com/markets/images/1206/small/hashkey.jpeg"
                        width={32}
                        height={32}
                        alt="HashKey Exchange"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">HashKey Exchange</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">10</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $21.79M
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    0.02%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    20
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href=""
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors hidden"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
                <tr className=" bg-white  [&:hover>td]:bg-grey-100  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white">
                    19
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended" />
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/gemini/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/50/small/gemini.png"
                        data-src="https://assets.coingecko.com/markets/images/50/small/gemini.png"
                        width={32}
                        height={32}
                        alt="Gemini"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">Gemini</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-grey-300"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">9</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $14.52M
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    1.09%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    73
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href=""
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors hidden"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
                <tr className=" bg-white  [&:hover>td]:bg-grey-100  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white">
                    20
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended" />
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/coinspro/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/999/small/coinspro.png"
                        data-src="https://assets.coingecko.com/markets/images/999/small/coinspro.png"
                        width={32}
                        height={32}
                        alt="Coins.ph"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">Coins.ph</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-grey-300"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">9</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $9.52M
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    0.03%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    84
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href=""
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors hidden"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
                <tr className=" bg-white  [&:hover>td]:bg-grey-100  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white">
                    9
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended" />
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/wootrade/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/683/small/wootrade.jpg"
                        data-src="https://assets.coingecko.com/markets/images/683/small/wootrade.jpg"
                        width={32}
                        height={32}
                        alt="WOO X"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">WOO X</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">10</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $5.82M
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    0.09%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    135
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href=""
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors hidden"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
                <tr className=" bg-white  [&:hover>td]:bg-grey-100  border-b text-dark-grey-700  hover:bg-grey-100  border-grey-200 [&:hover>td]:bg-grey-100 ">
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  relative px-2.5 lg:px-4 py-2 lg:py-3.5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white">
                    10
                  </td>
                  <td className=" bg-white  [&:hover>td]:bg-grey-100  sticky left-0 top-0 hover:bg-grey-100  px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r-2 border-r-white text-left">
                    <div className="label-recommended" />
                    <a
                      data-el="bic-cer-coin"
                      className="flex items-center name-wrpapper"
                      href="https://vn.beincrypto.com/exchanges/binance_us/"
                    >
                      <img
                        className="mr-3 lazy shrink-0 entered loaded"
                        src="https://assets.coingecko.com/markets/images/469/small/Binance.png"
                        data-src="https://assets.coingecko.com/markets/images/469/small/Binance.png"
                        width={32}
                        height={32}
                        alt="Binance US"
                        data-ll-status="loaded"
                      />
                      <div className="relative name-wrpapper__name">
                        <div className="s3 s3--medium s3--normal-case">Binance US</div>
                      </div>
                    </a>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left exchanges-rating-col">
                    <div className="flex items-center">
                      <div className="rating-line ">
                        <div className="rating-stars flex items-center">
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="mr-2 star">
                            <svg
                              className="text-orange-700"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.20088 17.9853L10 15.3327L14.7991 17.9825C14.8213 17.9947 14.8463 18.0001 14.8713 17.9982C14.8962 17.9963 14.9202 17.9871 14.9405 17.9717C14.9608 17.9563 14.9765 17.9352 14.986 17.9109C14.9956 17.8866 14.9984 17.86 14.9943 17.834L14.0789 12.2206L17.96 8.24601C17.9777 8.2276 17.9902 8.20437 17.9962 8.17892C18.0021 8.15346 18.0011 8.12678 17.9935 8.10185C17.9858 8.07692 17.9717 8.05472 17.9527 8.03773C17.9337 8.02074 17.9106 8.00963 17.8859 8.00563L12.52 7.18554L10.1212 2.07976C10.1101 2.05586 10.0929 2.0357 10.0715 2.02159C10.0501 2.00748 10.0253 2 10 2C9.97471 2 9.94993 2.00748 9.92851 2.02159C9.90708 2.0357 9.88987 2.05586 9.87884 2.07976L7.47996 7.18696L2.11409 8.00705C2.08944 8.01104 2.06632 8.02216 2.04733 8.03915C2.02834 8.05614 2.01422 8.07834 2.00654 8.10327C1.99886 8.1282 1.99792 8.15488 2.00384 8.18033C2.00976 8.20579 2.0223 8.22901 2.04005 8.24742L5.92108 12.222L5.00433 17.8354C5.00023 17.8614 5.0031 17.888 5.01261 17.9123C5.02212 17.9366 5.0379 17.9577 5.05818 17.9731C5.07845 17.9886 5.10242 17.9977 5.12739 17.9996C5.15237 18.0015 5.17735 17.9961 5.19953 17.9839L5.20088 17.9853Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="rating-val">10</span>
                    </div>
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left ">
                    $4.89M
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    0.13%
                  </td>
                  <td className="px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  text-left">
                    157
                  </td>
                  <td className="text-center px-2.5 lg:px-4 py-5 p5 p5--medium lg:p4 lg:p4--medium border-r border-white  cl-9 w-0">
                    <a
                      href=""
                      className="go-to-url-sponsored inline-flex whitespace-nowrap justify-center items-center border hover:no-underline cursor-pointer gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
          disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100    disabled:cursor-not-allowed transition-colors hidden"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      data-analytic="link-exists-group"
                      data-analytic_event="exchange-main__trade-on"
                    >
                      <i className="ml-2">
                        <svg
                          className="rtl:rotate-180"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.77493 1.5675e-06L16 8L7.77493 16L7.14112 15.3833L14.2858 8.43101L-3.30851e-07 8.43101L-3.68837e-07 7.56198L14.2822 7.56198L7.14472 0.613229L7.77493 1.5675e-06Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center my-5 table-wrapper-footer">
          <div className="flex items-center">
            <a
              href="https://vn.beincrypto.com/exchanges/"
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
              data-bic_pagination='{"current_page": 1,"total_pages": 46}'
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
                href="https://vn.beincrypto.com/exchanges/2/"
                className="text-dark-grey-700  hover:no-underline"
                aria-label="Page 2"
              >
                2
              </a>
              <a
                data-el="bic-c-pagination-number"
                data-page={3}
                href="https://vn.beincrypto.com/exchanges/3/"
                className="text-dark-grey-700  hover:no-underline"
                aria-label="Page 3"
              >
                3
              </a>
              <span className="lg:mx-3 text-grey-500">...</span>
              <a
                data-page={46}
                data-el="bic-c-pagination-number"
                data-el_pos="bic-c-pagination-last-page"
                href="https://vn.beincrypto.com/exchanges/46/"
                className="text-dark-grey-700  hover:no-underline bic-c-pagination-last-page"
                aria-label="Page 46"
              >
                46
              </a>
            </div>
            <a
              href="https://vn.beincrypto.com/exchanges/2/"
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
      <style dangerouslySetInnerHTML={{ __html: '\n  \n' }} />
    </div>
  );
};
