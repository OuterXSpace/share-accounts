import { PaymentHistoryProp } from './payment-history.type';

export const PaymentHistory: React.FC<PaymentHistoryProp> = () => {
  return (
    <div className="payment-history pb-5">
      <div className="rounded-t-lg p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
        <div className="w-full mb-1">
          <div className="mb-4">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl  ">Lịch sử giao dịch</h1>
          </div>
          <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100">
            <div className="flex items-center mb-4 sm:mb-0">
              <form className="sm:pr-3" action="#" method="GET">
                <label htmlFor="products-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
                  <input
                    type="text"
                    name="email"
                    id="products-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="Search for products"
                  />
                </div>
              </form>
              <div className="flex items-center w-full sm:justify-end">
                <div className="flex pl-2 space-x-1">
                  <a
                    href="#"
                    className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <button className="font-semibold px-3 py-2 text-xs text-white bg-red-400 rounded-xl" type="button">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* History */}

      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="min-w-full divide-y divide-gray-200 table-fixed">
                <thead className="bg-gray-100">
                  <tr>
                    <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                      Mã giao dịch/ngày
                    </th>
                    <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                      trạng thái
                    </th>
                    <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                      Chi tiết
                    </th>
                    <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                      Số tiền
                    </th>
                    <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-100">
                    <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                      <div className="text-base font-semibold text-gray-900">#194556-</div>
                      <div className="text-sm font-normal text-gray-500">11/10/2024</div>
                    </td>
                    <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2" /> Đang xử lý
                      </div>
                    </td>
                    <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs">
                      Netfli-premium-x01 | Youtube-premium-02
                    </td>
                    <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap">200K</td>
                    <td className="p-4 space-x-2 whitespace-nowrap">
                      <button className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}

      <div className="rounded-b-lg sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <a
            href="#"
            className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <span className="text-sm font-normal text-gray-500">
            Showing <span className="font-semibold text-gray-900">1-20</span> of{' '}
            <span className="font-semibold text-gray-900">2290</span>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <a
            href="#"
            className="inline-flex items-center justify-center flex-1 px-3 py-2 font-semibold px-3 py-2 text-xs text-white bg-red-400 rounded-xl"
          >
            <svg
              className="w-5 h-5 mr-1 -ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Previous
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center flex-1 px-3 py-2 font-semibold px-3 py-2 text-xs text-white bg-red-400 rounded-xl"
          >
            Next
            <svg
              className="w-5 h-5 ml-1 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
