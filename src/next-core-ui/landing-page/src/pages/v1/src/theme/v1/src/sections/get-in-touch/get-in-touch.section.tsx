import { IGetInTouchSectionProps, ILandingPageContactFormModel } from './get-in-touch.type';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useCallback, useState } from 'react';
import { postGoogleSheetApi } from '../../../../../../../../../../../api/save-google';
import { toast } from 'react-toastify';
import { useKeyDown } from '../../../../../../../../../../../hooks';
import Link from 'next/link';

export const GetInTouchSection: React.FC<IGetInTouchSectionProps> = (props) => {
  const { data, className } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { tabKey, enterKey } = useKeyDown();

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
  } = useForm<ILandingPageContactFormModel>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(contactSchema),
    defaultValues: {},
  });

  const onConfirmSubmit = useCallback(
    (values: ILandingPageContactFormModel) => {
      setIsLoading(true);
      postGoogleSheetApi(values, data?.object?.apiGoogleSheetUrl)
        .then(() => {
          setIsLoading(false);
          toast.success('Data posted successfully!');
          reset();
        })
        .catch(() => {
          toast.error('Data posted successfully!');
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [data?.object?.apiGoogleSheetUrl, reset],
  );

  return (
    <div
      id="get-in-touch"
      className="bleed-wrapper gradient-magenta-blue relative get-in-touch overflow-hidden z-[1] !pb-0"
    >
      <div className="grid-wrapper">
        <div className="grid grid-cols-4 lg:grid-cols-8">
          <div className="col-span-4 text-white lg:col-span-3">
            <div className="flex flex-wrap content-between h-full lg:py-24 py-10 lg:pr-5">
              <div>
                <h3 className="mb-4 lg:mb-10 type-zeta">GET IN TOUCH</h3>
                <h2 className="type-delta">Let's talk about the future.</h2>
              </div>
              <p className="w-full type-paragraph-lg font-normal mt-28 lg:mt-0">
                Want to join us? See
                <Link className="cta cta-text-only cta-text-only-white" href="/careers" target="">
                  <span className="font-bold text-lg">Job Openings</span>
                </Link>
              </p>
            </div>
          </div>
          <div className="col-span-5 px-1 py-12 lg:py-20 lg:pb-28 contact-form relative after:bg-dark-navy after:absolute after:top-0 after:-left-4 grid:after:left-0 after:h-full after:w-[150%] after:z-0 lg:pt-20 lg:px-10">
            <div className="relative z-10">
              <div className="cmpt__pardot-form" data-js-hook="pardot-form">
                <div
                  className="form-wrapper"
                  data-iframe-url="https://go.westmonroe.com/l/166592/2023-09-13/5kn9n8?Form_Submission_URL=https://www.westmonroe.com/&formName=Get in Touch 2023&formCompleteId=&gclid=&fbclid=&Source=West Monroe Website&ipCountry=VN&formType=contactForm"
                  data-form-name="Get in Touch 2023"
                  data-form-type="contactForm"
                  data-form-submission-url="https://www.westmonroe.com/"
                >
                  <div className="optanon-category-C0001" style={{ border: 0, height: 963 }}>
                    <form
                      acceptCharset="UTF-8"
                      method="post"
                      action="https://go.westmonroe.com/l/166592/2023-09-13/5kn9n8?formType=contactForm"
                      className="form contactForm"
                    >
                      <p className="errors">Please correct the errors below:</p>
                      <div className="form-field-container  first_name error ">
                        <p className="form-field  first_name pd-text required  ">
                          <input
                            type="text"
                            name="166592_294445pi_166592_294445"
                            id="166592_294445pi_166592_294445"
                            defaultValue=""
                            className="text"
                            size={30}
                            maxLength={40}
                            placeholder="First Name *"
                          />
                        </p>
                        <div id="error_for_166592_294445pi_166592_294445" style={{ display: 'none' }} />
                        <p className="error no-label">This field is required.</p>
                      </div>
                      <div className="form-field-container  last_name error ">
                        <p className="form-field  last_name pd-text required  ">
                          <input
                            type="text"
                            name="166592_294448pi_166592_294448"
                            id="166592_294448pi_166592_294448"
                            defaultValue=""
                            className="text"
                            size={30}
                            maxLength={80}
                            placeholder="Last Name *"
                          />
                        </p>
                        <div id="error_for_166592_294448pi_166592_294448" style={{ display: 'none' }} />
                        <p className="error no-label">This field is required.</p>
                      </div>
                      <div className="form-field-container  email error ">
                        <p className="form-field  email pd-text required  ">
                          <input
                            type="text"
                            name="166592_294451pi_166592_294451"
                            id="166592_294451pi_166592_294451"
                            defaultValue=""
                            className="text"
                            size={30}
                            maxLength={255}
                            placeholder="Email *"
                          />
                        </p>
                        <div id="error_for_166592_294451pi_166592_294451" style={{ display: 'none' }} />
                        <p className="error no-label">This field is required.</p>
                      </div>
                      <div className="form-field-container  phone error ">
                        <p className="form-field  phone pd-text required  ">
                          <input
                            type="text"
                            name="166592_294454pi_166592_294454"
                            id="166592_294454pi_166592_294454"
                            defaultValue=""
                            className="text"
                            size={30}
                            maxLength={40}
                            placeholder="Phone *"
                          />
                        </p>
                        <div id="error_for_166592_294454pi_166592_294454" style={{ display: 'none' }} />
                        <p className="error no-label">This field is required</p>
                      </div>
                      <div className="form-field-container  country error ">
                        <p className="form-field  country pd-select required  ">
                          <select
                            name="166592_294457pi_166592_294457"
                            id="166592_294457pi_166592_294457"
                            className="select"
                          >
                            <option value="">Country *</option>
                            <option value={3213511}>United States</option>
                            <option value={3213514}>Canada</option>
                            <option value={3213517}>Afghanistan</option>
                          </select>
                        </p>
                        <div id="error_for_166592_294457pi_166592_294457" style={{ display: 'none' }} />
                        <p className="error no-label">This field is required</p>
                      </div>
                      <div className="form-field-container  city error ">
                        <p className="form-field  city pd-text required  ">
                          <input
                            type="text"
                            name="166592_294460pi_166592_294460"
                            id="166592_294460pi_166592_294460"
                            defaultValue=""
                            className="text"
                            size={30}
                            maxLength={40}
                            placeholder="City *"
                          />
                        </p>
                        <div id="error_for_166592_294460pi_166592_294460" style={{ display: 'none' }} />
                        <p className="error no-label">This field is required</p>
                      </div>
                      <div className="form-field-container  company error ">
                        <p className="form-field  company pd-text required  ">
                          <input
                            type="text"
                            name="166592_294463pi_166592_294463"
                            id="166592_294463pi_166592_294463"
                            defaultValue=""
                            className="text"
                            size={30}
                            maxLength={255}
                            placeholder="Company *"
                          />
                        </p>
                        <div id="error_for_166592_294463pi_166592_294463" style={{ display: 'none' }} />
                        <p className="error no-label">This field is required.</p>
                      </div>
                      <div className="form-field-container  job_title error ">
                        <p className="form-field  job_title pd-text required  ">
                          <input
                            type="text"
                            name="166592_294466pi_166592_294466"
                            id="166592_294466pi_166592_294466"
                            defaultValue=""
                            className="text"
                            size={30}
                            maxLength={128}
                            placeholder="Job Title *"
                          />
                        </p>
                        <div id="error_for_166592_294466pi_166592_294466" style={{ display: 'none' }} />
                        <p className="error no-label">This field is required</p>
                      </div>
                      <div className="form-field-container  Contact_Us_Comments error ">
                        <p className="form-field  Contact_Us_Comments pd-textarea required  ">
                          <textarea
                            name="166592_294469pi_166592_294469"
                            id="166592_294469pi_166592_294469"
                            cols={40}
                            rows={10}
                            className="standard"
                            placeholder="Contact Us Comments *"
                            defaultValue=""
                          />
                        </p>
                        <div id="error_for_166592_294469pi_166592_294469" style={{ display: 'none' }} />
                        <p className="error no-label">This field is required</p>
                      </div>
                      <div className="form-field-container  utm_campaign  hidden">
                        <p className="form-field  utm_campaign pd-hidden   ">
                          <input
                            type="hidden"
                            name="166592_294472pi_166592_294472"
                            id="166592_294472pi_166592_294472"
                            defaultValue=""
                          />
                        </p>
                        <div id="error_for_166592_294472pi_166592_294472" style={{ display: 'none' }} />
                      </div>
                      <div className="form-field-container  utm_source  hidden">
                        <p className="form-field  utm_source pd-hidden   ">
                          <input
                            type="hidden"
                            name="166592_294475pi_166592_294475"
                            id="166592_294475pi_166592_294475"
                            defaultValue=""
                          />
                        </p>
                        <div id="error_for_166592_294475pi_166592_294475" style={{ display: 'none' }} />
                      </div>
                      <div className="form-field-container  utm_medium  hidden">
                        <p className="form-field  utm_medium pd-hidden   ">
                          <input
                            type="hidden"
                            name="166592_294478pi_166592_294478"
                            id="166592_294478pi_166592_294478"
                            defaultValue=""
                          />
                        </p>
                        <div id="error_for_166592_294478pi_166592_294478" style={{ display: 'none' }} />
                      </div>
                      <div className="form-field-container  Form_Submission_URL  hidden">
                        <p className="form-field  Form_Submission_URL pd-hidden   ">
                          <input
                            type="hidden"
                            name="166592_294481pi_166592_294481"
                            id="166592_294481pi_166592_294481"
                            defaultValue="https://www.westmonroe.com/"
                          />
                        </p>
                        <div id="error_for_166592_294481pi_166592_294481" style={{ display: 'none' }} />
                      </div>
                      <div className="form-field-container  industry  hidden">
                        <p className="form-field  industry pd-hidden   ">
                          <input
                            type="hidden"
                            name="166592_294484pi_166592_294484"
                            id="166592_294484pi_166592_294484"
                            defaultValue=""
                          />
                        </p>
                        <div id="error_for_166592_294484pi_166592_294484" style={{ display: 'none' }} />
                      </div>
                      <div className="form-field-container  GCLID  hidden">
                        <p className="form-field  GCLID pd-hidden   ">
                          <input
                            type="hidden"
                            name="166592_294487pi_166592_294487"
                            id="166592_294487pi_166592_294487"
                            defaultValue=""
                          />
                        </p>
                        <div id="error_for_166592_294487pi_166592_294487" style={{ display: 'none' }} />
                      </div>
                      <div className="form-field-container  fbclid  hidden">
                        <p className="form-field  fbclid pd-hidden   ">
                          <input
                            type="hidden"
                            name="166592_294490pi_166592_294490"
                            id="166592_294490pi_166592_294490"
                            defaultValue=""
                          />
                        </p>
                        <div id="error_for_166592_294490pi_166592_294490" style={{ display: 'none' }} />
                      </div>
                      <div className="form-field-container  source  hidden">
                        <p className="form-field  source pd-hidden   ">
                          <input
                            type="hidden"
                            name="166592_294493pi_166592_294493"
                            id="166592_294493pi_166592_294493"
                            defaultValue=""
                          />
                        </p>
                        <div id="error_for_166592_294493pi_166592_294493" style={{ display: 'none' }} />
                      </div>
                      <div className="form-field-container  Lead_Source_Detail  hidden">
                        <p className="form-field  Lead_Source_Detail pd-hidden   ">
                          <input
                            type="hidden"
                            name="166592_294496pi_166592_294496"
                            id="166592_294496pi_166592_294496"
                            defaultValue=""
                          />
                        </p>
                        <div id="error_for_166592_294496pi_166592_294496" style={{ display: 'none' }} />
                      </div>
                      <div className="form-field-container  Referrer_Url  hidden">
                        <p className="form-field  Referrer_Url pd-hidden   ">
                          <input
                            type="hidden"
                            name="166592_294499pi_166592_294499"
                            id="166592_294499pi_166592_294499"
                            defaultValue=""
                          />
                        </p>
                        <div id="error_for_166592_294499pi_166592_294499" style={{ display: 'none' }} />
                      </div>
                      <div className="form-field-container  Referrer_Source  hidden">
                        <p className="form-field  Referrer_Source pd-hidden   ">
                          <input
                            type="hidden"
                            name="166592_294502pi_166592_294502"
                            id="166592_294502pi_166592_294502"
                            defaultValue=""
                          />
                        </p>
                        <div id="error_for_166592_294502pi_166592_294502" style={{ display: 'none' }} />
                      </div>
                      <p
                        style={{
                          position: 'absolute',
                          width: 190,
                          left: '-9999px',
                          top: '-9999px',
                          visibility: 'hidden',
                        }}
                      >
                        <label htmlFor="pi_extra_field">Comments</label>
                        <input type="text" name="pi_extra_field" id="pi_extra_field" />
                      </p>
                      {/* forces IE5-8 to correctly submit UTF8 content  */}
                      <input name="_utf8" type="hidden" defaultValue="☃" />
                      <p className="submit">
                        <input type="submit" defaultValue="Submit" disabled />
                      </p>
                      <div className="terms-of-service">
                        <input
                          className="accept-terms hide"
                          id="terms-of-service"
                          name="terms-of-service"
                          type="checkbox"
                        />{' '}
                        <label htmlFor="terms-of-service">
                          By submitting, you consent to our{' '}
                          <a
                            className="text-weight-bold"
                            href="https://www.westmonroe.com/privacy-policy"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </label>
                      </div>

                      <input type="hidden" name="hiddenDependentFields" id="hiddenDependentFields" defaultValue="" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
