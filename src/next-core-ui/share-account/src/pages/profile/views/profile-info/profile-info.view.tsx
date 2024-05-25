import { ProfileInfoProp } from './profile-info.type';

export const ProfileInfo: React.FC<ProfileInfoProp> = () => {
  return (
    <div className="profile">
      <div className="rounded-t-lg p-4 bg-white block sm:flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl  ">Lịch sử giao dịch</h1>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <div className="p-4 mb-4 bg-white border border-gray-200 rounded-b-lg shadow-sm 2xl:col-span-2 sm:p-6">
                <h3 className="mb-4 text-xl font-semibold">Thông tin chung</h3>
                <form action="#">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                        Tên đăng nhập
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="warjamma"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900">
                        Tên
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="Bonnie"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900">
                        Họ
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="Green"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="user@gmail.com"
                      />
                    </div>
                  </div>
                </form>
                <h3 className="mb-4 text-xl font-semibold">Thông tin bảo mật</h3>
                <form action="#">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="current-password" className="block mb-2 text-sm font-medium text-gray-900">
                        Mật khẩu hiện tại
                      </label>
                      <input
                        type="text"
                        name="current-password"
                        id="current-password"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder=""
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                        Mật khẩu mới
                      </label>
                      <input
                        data-popover-target="popover-password"
                        data-popover-placement="bottom"
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder=""
                      />
                      <div
                        data-popover=""
                        id="popover-password"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-7"
                      >
                        <div className="p-3 space-y-2">
                          <h3 className="font-semibold text-gray-900">Must have at least 6 characters</h3>
                          <div className="grid grid-cols-4 gap-2">
                            <div className="h-1 bg-orange-300" />
                            <div className="h-1 bg-orange-300" />
                            <div className="h-1 bg-gray-200" />
                            <div className="h-1 bg-gray-200" />
                          </div>
                          <p>It’s better to have:</p>
                          <ul>
                            <li className="flex items-center mb-1">
                              <svg
                                className="w-4 h-4 mr-2 text-green-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Upper &amp; lower case letters
                            </li>
                            <li className="flex items-center mb-1">
                              <svg
                                className="w-4 h-4 mr-2 text-gray-300"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              A symbol (#$&amp;)
                            </li>
                            <li className="flex items-center">
                              <svg
                                className="w-4 h-4 mr-2 text-gray-300"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              A longer password (min. 12 chars.)
                            </li>
                          </ul>
                        </div>
                        <div data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">
                        Xác nhận mật khẩu
                      </label>
                      <input
                        type="text"
                        name="confirm-password"
                        id="confirm-password"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder=""
                      />
                    </div>
                    <div className="col-span-6 sm:col-full">
                      <button
                        className="font-semibold px-3 py-2 text-xs text-white bg-red-400 rounded-xl"
                        type="button"
                      >
                        Thay đổi
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
