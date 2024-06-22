import { ContactV4Props, ILandingPageContactFormV3Model } from './contact.type';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useCallback, useState } from 'react';
import { postGoogleSheetApi } from '../../../../../../../../../../../api';
import { useToast } from '../../../../../../../../../../../components';

export const ContactV4: React.FC<ContactV4Props> = (props) => {
  const { data, className } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { showToast } = useToast();

  const contactSchema = yup.object().shape({
    fullName: yup.string().required(data?.object?.form?.input.FULL_NAME?.error),
    email: yup.string().required(data?.object?.form?.input.EMAIL?.error),
    phone: yup.string().required(data?.object?.form?.input.PHONE?.error),
    message: yup.string().required(data?.object?.form?.input.MESSAGE?.error),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<ILandingPageContactFormV3Model>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(contactSchema),
    defaultValues: {},
  });

  const onConfirmSubmit = useCallback(
    (values: ILandingPageContactFormV3Model) => {
      setIsLoading(true);
      postGoogleSheetApi(values, data?.object?.apiGoogleSheetUrl)
        .then(() => {
          setIsLoading(false);
          showToast('Data posted successfully!', 'success');
          reset();
        })
        .catch(() => {
          showToast('Data posted successfully!', 'error');
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [data?.object?.apiGoogleSheetUrl, reset, showToast],
  );

  return (
    <section
      id="sales-contact"
      className="relative lg:mb-17.5 bic-f-b2b-contact-has-bg [&_label>span]:text-white rounded-2xl bg-dark-grey-500 md:p-11 md:pb-12 p-6 mx-auto overflow-hidden s-cf"
      data-el="bic-f-b2b-contact"
    >
      <div className="absolute top-0 right-0 z-10 hidden md:block">
        <svg width={630} height={374} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 630 374">
          <g stroke="#C9FD35" strokeMiterlimit={10} strokeWidth="1.541" opacity=".2">
            <path d="M348.513 373c191.926 0 347.511-83.499 347.511-186.5S540.439 0 348.513 0C156.587 0 1 83.499 1 186.5S156.587 373 348.513 373Z" />
            <path d="M348.515 373c149.526 0 270.74-83.499 270.74-186.5S498.041 0 348.515 0 77.773 83.499 77.773 186.5 198.99 373 348.515 373Z" />
            <path d="M348.511 373c107.105 0 193.93-83.499 193.93-186.5S455.616 0 348.511 0 154.58 83.499 154.58 186.5 241.406 373 348.511 373Z" />
            <path d="M348.514 373c64.684 0 117.12-83.499 117.12-186.5S413.198 0 348.514 0 231.392 83.499 231.392 186.5 283.83 373 348.514 373Z" />
            <path d="M348.513 373c22.285 0 40.349-83.499 40.349-186.5S370.798 0 348.513 0c-22.284 0-40.349 83.499-40.349 186.5S326.229 373 348.513 373Z" />
            <path d="M348.513 214.222c191.926 0 347.511-12.41 347.511-27.72 0-15.31-155.585-27.721-347.511-27.721C156.587 158.781 1 171.192 1 186.502s155.587 27.72 347.513 27.72Z" />
            <path d="M348.513 267.161c191.926 0 347.511-36.113 347.511-80.66 0-44.548-155.585-80.661-347.511-80.661C156.587 105.84 1 141.953 1 186.501c0 44.547 155.587 80.66 347.513 80.66Z" />
            <path d="M348.513 320.061c191.926 0 347.511-59.797 347.511-133.561 0-73.764-155.585-133.56-347.511-133.56C156.587 52.94 1 112.735 1 186.5c0 73.764 155.587 133.561 347.513 133.561Z" />
            <path d="M348.513 373c191.926 0 347.511-83.499 347.511-186.5S540.439 0 348.513 0C156.587 0 1 83.499 1 186.5S156.587 373 348.513 373Z" />
          </g>
        </svg>
      </div>
      <div className="relative z-20 md:container">
        <div className="mb-6 md:mb-9">
          <h2 className="s-h1 s-color-white s-text-center text-left h6 md:h4 mb-2 text-white">
            Bạn cần sự giúp đỡ từ chúng tôi?
          </h2>
          <div className="s-subtitle text-left p4 p4--ns text-grey-500 ">
            <p>Hãy để lại yêu cầu, chúng tôi sẽ liên hệ để tư vấn giúp bạn.</p>
          </div>
        </div>
        <div className="s-form-wrapper">
          <div className="wpcf7 js" id="wpcf7-f95992-p95991-o1" lang="vi" dir="ltr">
            <div className="screen-reader-response">
              <p role="status" aria-live="polite" aria-atomic="true" />
              <ul />
            </div>
            <form
              action="/beincrypto-sales/#wpcf7-f95992-p95991-o1"
              method="post"
              className="wpcf7-form resetting"
              aria-label="Contact form"
              data-status="resetting"
            >
              <div style={{ display: 'none' }}>
                <input type="hidden" name="_wpcf7" defaultValue={95992} />
                <input type="hidden" name="_wpcf7_version" defaultValue="5.7.4" />
                <input type="hidden" name="_wpcf7_locale" defaultValue="vi" />
                <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f95992-p95991-o1" />
                <input type="hidden" name="_wpcf7_container_post" defaultValue={95991} />
                <input type="hidden" name="_wpcf7_posted_data_hash" defaultValue="" />
                <input
                  type="hidden"
                  name="_wpcf7_recaptcha_response"
                  defaultValue="HFcWJ2YhtQbTMzYGNDX0hSXgUQCTMgXDV1AQo7ewUPNAc1KjE-LUwUdWZFcjlfei5hIycgFRF0FREGTVx2ZX81dmIMNxcECVNUaC51eWV1VSY5ZnwvE2UgfzAzU0FSWU1UQU9McWk1ZDdbS2VgFG4kFycxIkw9Lhd5N3NUMV8lI1JOUndGalZEZVpoDXNlfkJnAg8nd3E"
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 mb-4 gap-x-3.5 gap-y-4 md:mt-10 mt-8">
                <label className="!mb-0">
                  <span className="block lg:hidden mb-2.5 p2 font-medium">Tên của bạn*</span>
                  <span className="wpcf7-form-control-wrap" data-name="your-name">
                    <input
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required w-full"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Tên*"
                      defaultValue=""
                      type="text"
                      name="your-name"
                    />
                  </span>
                </label>
                <label className="!mb-0">
                  <span className="block lg:hidden mb-2.5 p2 font-medium">Địa chỉ email*</span>
                  <span className="wpcf7-form-control-wrap" data-name="your-email">
                    <input
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email w-full"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Địa chỉ Email*"
                      defaultValue=""
                      type="email"
                      name="your-email"
                    />
                  </span>
                </label>
                <label className="!mb-0">
                  <span className="block lg:hidden mb-2.5 p2 font-medium">Công ty*</span>
                  <span className="wpcf7-form-control-wrap" data-name="your-company-name">
                    <input
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required w-full"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Tên Công Ty*"
                      defaultValue=""
                      type="text"
                      name="your-company-name"
                    />
                  </span>
                </label>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 mb-4 gap-x-3.5 gap-y-4">
                <label className="!mb-0">
                  <span className="block lg:hidden mb-2.5 p2 font-medium">Telegram</span>
                  <span className="wpcf7-form-control-wrap" data-name="text-telegram-username">
                    <input
                      size={40}
                      className="wpcf7-form-control wpcf7-text w-full"
                      aria-invalid="false"
                      placeholder="Telegram: ví dụ @tennguoidung"
                      defaultValue=""
                      type="text"
                      name="text-telegram-username"
                    />
                  </span>
                </label>
                <label className="!mb-0">
                  <span className="block lg:hidden mb-2.5 p2 font-medium">Trang web</span>
                  <span className="wpcf7-form-control-wrap" data-name="your-website">
                    <input
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-url wpcf7-validates-as-url w-full"
                      aria-invalid="false"
                      placeholder="Trang web: ví dụ https://beincrypto.com"
                      defaultValue=""
                      type="url"
                      name="your-website"
                    />
                  </span>
                </label>
                <label className="!mb-0">
                  <span className="block lg:hidden mb-2.5 p2 font-medium">Loại công ty*</span>
                  <span className="wpcf7-form-control-wrap" data-name="yout-type-of-organization">
                    <div className="choices">
                      <div className="choices__inner">
                        <select
                          className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required w-full choices__input"
                          aria-required="true"
                          aria-invalid="false"
                          name="yout-type-of-organization"
                          tabIndex={-1}
                          data-choice="active"
                        >
                          <option value="" data-custom-properties="[object Object]">
                            Chọn loại tổ chức*
                          </option>
                        </select>
                        <div className="choices__list choices__list--single">
                          <div
                            className="choices__item choices__placeholder choices__item--selectable"
                            data-item=""
                            data-id={1}
                            data-value=""
                            data-custom-properties="[object Object]"
                            aria-selected="true"
                          >
                            Chọn loại tổ chức*
                          </div>
                        </div>
                      </div>
                      <div className="choices__list choices__list--dropdown" aria-expanded="false">
                        <div className="choices__list" role="listbox">
                          <div
                            id="choices--yout-type-of-organization-cq-item-choice-13"
                            className="choices__item choices__item--choice choices__item--selectable"
                            data-choice=""
                            data-id={13}
                            data-value="Trò Chơi/Đánh Bạc"
                            data-select-text="Press to select"
                            data-choice-selectable=""
                          >
                            Trò Chơi/Đánh Bạc
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </label>
              </div>
              <div className="mb-6">
                <label className="!mb-0">
                  <span className="block lg:hidden mb-2.5 p2 font-medium">Nhiệm vụ</span>
                  <span className="wpcf7-form-control-wrap" data-name="your-message">
                    <textarea
                      cols={5}
                      rows={5}
                      className="wpcf7-form-control wpcf7-textarea w-full"
                      aria-invalid="false"
                      placeholder="Mô tả nhiệm vụ của bạn"
                      name="your-message"
                      defaultValue=""
                    />
                  </span>{' '}
                </label>
              </div>
              <div className="text-left">
                <button
                  type="submit"
                  className="wpcf7-form-control wpcf7-submit md:max-w-44 w-full bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
                disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 dark:disabled:bg-grey-300 dark:disabled:border-grey-300 dark:disabled:text-grey-100 bic-c-button-primary-lime dark:bg-lime-600 dark:border-lime-600 dark:text-dark-grey-700 dark:hover:bg-lime-700 gap-x-2.5 btn-3 px-4 py-2.5 rounded-md btn-medium"
                >
                  Gửi
                </button>
              </div>
              <div className="wpcf7-response-output" aria-hidden="true" />
            </form>
          </div>
        </div>
      </div>
      <div data-el="bic-f-b2b-contact-msg" className="hidden s-popup closed ">
        <div className="s-popup__overlay s-popup__overlay-js" />
        <div className="s-popup__inner">
          <div className="s-popup__header">
            <div className="s-popup__close s-popup__close-js">
              <span />
              <span />
            </div>
          </div>
          <div className="text-center s-popup__body">
            <h3 className="s-h3__popup text-4">
              <p>
                Cảm ơn bạn đã để lại thông tin. Vui lòng kiểm tra hộp thư đến và thư rác của bạn để xác nhận thông tin.
              </p>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
