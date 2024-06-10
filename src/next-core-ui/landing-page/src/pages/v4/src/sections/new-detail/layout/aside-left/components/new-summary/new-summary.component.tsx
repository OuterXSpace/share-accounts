import { NewSummaryV4Props } from './new-summary.type';

export const NewSummaryV4: React.FC<NewSummaryV4Props> = (props) => {
  return (
    <div data-speechify_ignore="true">
      <h3 className="mb-4 font-semibold text-blue-600 text-5 ">Tóm lại</h3>
      <div className="flex mb-5">
        <ul className="in-brief-block">
          <li className="in-brief-block__row">
            Core Scientific ký thỏa thuận trị giá 3.5 tỷ USD với CoreWeave để đa dạng hóa sang AI và HPC.
          </li>
          <li className="in-brief-block__row">
            Quan hệ đối tác bao gồm nâng cấp cơ sở hạ tầng trị giá 300 triệu USD, tăng cường khả năng AI.
          </li>
          <li className="in-brief-block__row last">
            Giám đốc điều hành Adam Sullivan đặt mục tiêu cân bằng khai thác Bitcoin với lưu trữ AI để tăng trưởng.
          </li>
          <li className="with-promo">
            <span className="text-lime-600 uppercase text-3.5 font-bold py-0.5 px-2 bg-dark-grey-700 rounded-sm border border-grey-500   ">
              promo
            </span>
            <div className="mt-1">
              <p />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
