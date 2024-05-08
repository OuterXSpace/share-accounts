import React from "react";
import { IPaginationTripFooterProps } from "./pagination-trip-footer.type";
// import { LIMIT_USER } from "@/pages/secret-url-dashboard";

export const PaginationTripFooter: React.FC<IPaginationTripFooterProps> = (
  props
) => {
  const { activePage, setPageNumber, count } = props;

  const pageCount: number = 0;

  return (
    <div className="flex justify-between items-end mt-4">
      <div className="relative flex flex-col gap-1">
        <label
          htmlFor="pageSize"
          className="absolute -top-6 block text-sm font-medium text-gray-500 light:text-gray-400"
        >
          Page size
        </label>
        <select
          id="pageSize"
          className="w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
          defaultValue={`100`}
          onChange={(e) => {
            e.preventDefault();

            // const newParam = {
            //   ...paramGetTrip,
            //   pageSize: parseInt(e.target.value),
            // };

            // return CoreTripStore.updateParamGetTripAction(newParam);
          }}
        >
          {/* <option value="10">10</option>
          <option value="20">20</option> */}
          {/* <option value="50">50</option> */}
          <option value="100">100</option>
          {/* <option value="200">200</option> */}
        </select>
      </div>
      <div className="flex gap-2 items-center justify-between mt-6">
        <div
          className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 light:bg-gray-900 light:text-gray-200 light:border-gray-700 light:hover:bg-gray-800"
          onClick={() => {
            if (activePage === 1) return;
            return setPageNumber(activePage - 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 rtl:-scale-x-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <span>Previous</span>
        </div>
        <div className="items-center hidden md:flex gap-x-3">
          {pageCount < 16
            ? [...Array(pageCount)].map((item, index) => {
                return (
                  <div
                    className={`px-2 py-1 text-sm text-gray-500 rounded-md ${
                      index + 1 === activePage
                        ? "bg-white"
                        : "light:hover:bg-gray-800 light:text-gray-300 hover:bg-gray-100"
                    }`}
                    key={index}
                    onClick={() => setPageNumber(index + 1)}
                  >
                    {index + 1}
                  </div>
                );
              })
            : [...Array(pageCount)].map((item, index) => {
                if (index + 1 >= activePage && index + 1 <= activePage + 3) {
                  return (
                    <div
                      className={`px-2 py-1 text-sm text-gray-500 rounded-md ${
                        index + 1 === activePage
                          ? "bg-white"
                          : "light:hover:bg-gray-800 light:text-gray-300 hover:bg-gray-100"
                      }`}
                      key={index}
                      onClick={() => setPageNumber(index + 1)}
                    >
                      {index + 1}
                    </div>
                  );
                }

                if (index + 1 === activePage + 4) {
                  return (
                    <div
                      key={index}
                      className="px-2 py-1 text-sm text-gray-500 rounded-md light:hover:bg-gray-800 light:text-gray-300 hover:bg-gray-100"
                      onClick={() => setPageNumber(index + 1)}
                    >
                      ...
                    </div>
                  );
                }

                if (index + 1 >= pageCount - 3 && index + 1 <= pageCount) {
                  return (
                    <div
                      className={`px-2 py-1 text-sm text-gray-500 rounded-md ${
                        index + 1 === activePage
                          ? "bg-white"
                          : "light:hover:bg-gray-800 light:text-gray-300 hover:bg-gray-100"
                      }`}
                      key={index}
                      onClick={() => setPageNumber(index + 1)}
                    >
                      {index + 1}
                    </div>
                  );
                }

                return null;
              })}
        </div>
        <div
          className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 light:bg-gray-900 light:text-gray-200 light:border-gray-700 light:hover:bg-gray-800"
          onClick={() => {
            if (activePage === pageCount) return;
            return setPageNumber(activePage + 1);
          }}
        >
          <span>Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 rtl:-scale-x-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
