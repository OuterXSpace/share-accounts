import { CartPageProps } from './cart.type';

export const CartPage: React.FC<CartPageProps> = () => {
  return (
    <div className="cart-page w-full min-h-auto px-8 pb-8 lg:px-0 lg:w-5/6 mx-auto mt-16 flex gap-8">
      <section className="w-full rounded-[10px] mb-[50px] shadow-custom">
        {/* Cart data */}
        <h1 className="pl-3 pt-3 mb-4 font-semibold text-xl">Cart</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow">
                <table className="min-w-full divide-y divide-gray-200 table-fixed">
                  <thead className="bg-gray-100">
                    <tr>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all"
                            aria-describedby="checkbox-1"
                            type="checkbox"
                            className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label htmlFor="checkbox-all" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                        Loại
                      </th>

                      <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                        Số lượng
                      </th>
                      <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                        Giá tiền
                      </th>
                      <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-100">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-1"
                            aria-describedby="checkbox-1"
                            type="checkbox"
                            className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label htmlFor="checkbox-1" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                        <img
                          className="w-10 h-10 rounded-full"
                          src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png"
                          alt="Neil Sims avatar"
                        />
                        <div className="text-sm font-normal text-gray-500 ">
                          <div className="text-base font-semibold text-gray-900 ">Mua Tài khoản Netflix Premium</div>
                          <div className="text-sm font-normal text-gray-500 ">1 ngày</div>
                        </div>
                      </td>

                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                        <div className="text-sm font-normal text-gray-500">1</div>
                      </td>
                      <td className="p-4 text-base font-semibold text-gray-900 whitespace-nowrap">200,000,000 VNĐ</td>
                      <td className="p-4 space-x-2 whitespace-nowrap">
                        <button className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clip-rule="evenodd"
                            />
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
        <hr className="h-[1px] border-0" style={{ backgroundColor: '#d7e1ea' }} />
        <div className="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <button className="inline-flex items-center justify-center flex-1 px-3 py-3 font-semibold text-xs text-white bg-red-400 rounded-xl">
              Thanh toán ngay
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <div className="cart-total-wrapper text-right text-[12px] leading-[1.5] text-[var(--ui-2-greys-grey-2)]">
              <div className="flex items-center">
                <div className="">Tạm tính</div>
                <div className="cart-total text-[18px] font-semibold leading-[1.56] text-[var(--ui-1-color-fill-color-1)] ml-[6px]">
                  200,000,000đ
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
