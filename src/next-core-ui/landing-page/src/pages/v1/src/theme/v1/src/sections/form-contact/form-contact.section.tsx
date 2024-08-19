import Link from 'next/link';
import { IFormContactSectionProps } from './form-contact.type';

export const FormContactSection: React.FC<IFormContactSectionProps> = (props) => {
  const { data, className } = props;

  return (
    <div className="container">
      <div className="grid-x">
        <div className="cell large-8">
          <h2 className="headline2 text-downriver pardot-headline">How can we help?</h2>
          <div className="cmpt__pardot-form is-contact-us" data-js-hook="pardot-form">
            <div style={{ border: 0, height: 1018 }}>
              <form
                acceptCharset="UTF-8"
                method="post"
                action="https://go.westmonroe.com/l/166592/2023-09-13/5kn9p8?formType=InPageModule"
                className="form InPageModule"
                id="pardot-form"
                data-form-id="%%form-name%%"
              >
                <div className="form-field-container  first_name  ">
                  <p className="form-field  first_name pd-text required  ">
                    <input
                      type="text"
                      name="166592_294505pi_166592_294505"
                      id="166592_294505pi_166592_294505"
                      defaultValue=""
                      className="text"
                      size={30}
                      maxLength={40}
                      placeholder="First Name *"
                    />
                  </p>
                  <div id="error_for_166592_294505pi_166592_294505" style={{ display: 'none' }} />
                </div>
                <div className="form-field-container  last_name  ">
                  <p className="form-field  last_name pd-text required  ">
                    <input
                      type="text"
                      name="166592_294508pi_166592_294508"
                      id="166592_294508pi_166592_294508"
                      defaultValue=""
                      className="text"
                      size={30}
                      maxLength={80}
                      placeholder="Last Name *"
                    />
                  </p>
                  <div id="error_for_166592_294508pi_166592_294508" style={{ display: 'none' }} />
                </div>
                <div className="form-field-container  email  ">
                  <p className="form-field  email pd-text required  ">
                    <input
                      type="text"
                      name="166592_294511pi_166592_294511"
                      id="166592_294511pi_166592_294511"
                      defaultValue=""
                      className="text"
                      size={30}
                      maxLength={255}
                      placeholder="Email *"
                    />
                  </p>
                  <div id="error_for_166592_294511pi_166592_294511" style={{ display: 'none' }} />
                </div>
                <div className="form-field-container  phone  ">
                  <p className="form-field  phone pd-text required  ">
                    <input
                      type="text"
                      name="166592_294514pi_166592_294514"
                      id="166592_294514pi_166592_294514"
                      defaultValue=""
                      className="text"
                      size={30}
                      maxLength={40}
                      placeholder="Phone *"
                    />
                  </p>
                  <div id="error_for_166592_294514pi_166592_294514" style={{ display: 'none' }} />
                </div>
                <div className="form-field-container  country  ">
                  <p className="form-field  country pd-select required  ">
                    <select name="166592_294517pi_166592_294517" id="166592_294517pi_166592_294517" className="select">
                      <option value="">Country *</option>
                      <option value={3214237}>United States</option>
                      <option value={3214240}>Canada</option>
                      <option value={3214243}>Afghanistan</option>
                    </select>
                  </p>
                  <div id="error_for_166592_294517pi_166592_294517" style={{ display: 'none' }} />
                </div>
                <div className="form-field-container  city  ">
                  <p className="form-field  city pd-text required  ">
                    <input
                      type="text"
                      name="166592_294520pi_166592_294520"
                      id="166592_294520pi_166592_294520"
                      defaultValue=""
                      className="text"
                      size={30}
                      maxLength={40}
                      placeholder="City *"
                    />
                  </p>
                  <div id="error_for_166592_294520pi_166592_294520" style={{ display: 'none' }} />
                </div>
                <div className="form-field-container  company  ">
                  <p className="form-field  company pd-text required  ">
                    <input
                      type="text"
                      name="166592_294523pi_166592_294523"
                      id="166592_294523pi_166592_294523"
                      defaultValue=""
                      className="text"
                      size={30}
                      maxLength={255}
                      placeholder="Company *"
                    />
                  </p>
                  <div id="error_for_166592_294523pi_166592_294523" style={{ display: 'none' }} />
                </div>
                <div className="form-field-container  job_title  ">
                  <p className="form-field  job_title pd-text required  ">
                    <input
                      type="text"
                      name="166592_294526pi_166592_294526"
                      id="166592_294526pi_166592_294526"
                      defaultValue=""
                      className="text"
                      size={30}
                      maxLength={128}
                      placeholder="Job Title *"
                    />
                  </p>
                  <div id="error_for_166592_294526pi_166592_294526" style={{ display: 'none' }} />
                </div>
                <div className="form-field-container  Contact_Us_Comments  ">
                  <p className="form-field  Contact_Us_Comments pd-textarea required  ">
                    <textarea
                      name="166592_294529pi_166592_294529"
                      id="166592_294529pi_166592_294529"
                      cols={40}
                      rows={10}
                      className="standard"
                      placeholder="Contact Us Comments *"
                      defaultValue=""
                    />
                  </p>
                  <div id="error_for_166592_294529pi_166592_294529" style={{ display: 'none' }} />
                </div>
                <div className="form-field-container  utm_campaign  hidden">
                  <p className="form-field  utm_campaign pd-hidden   ">
                    <input
                      type="hidden"
                      name="166592_294532pi_166592_294532"
                      id="166592_294532pi_166592_294532"
                      defaultValue=""
                    />
                  </p>
                  <div id="error_for_166592_294532pi_166592_294532" style={{ display: 'none' }} />
                </div>
                <div className="form-field-container  utm_source  hidden">
                  <p className="form-field  utm_source pd-hidden   ">
                    <input
                      type="hidden"
                      name="166592_294535pi_166592_294535"
                      id="166592_294535pi_166592_294535"
                      defaultValue=""
                    />
                  </p>
                  <div id="error_for_166592_294535pi_166592_294535" style={{ display: 'none' }} />
                </div>
                <div className="form-field-container  utm_medium  hidden">
                  <p className="form-field  utm_medium pd-hidden   ">
                    <input
                      type="hidden"
                      name="166592_294538pi_166592_294538"
                      id="166592_294538pi_166592_294538"
                      defaultValue=""
                    />
                  </p>
                  <div id="error_for_166592_294538pi_166592_294538" style={{ display: 'none' }} />
                </div>
                <div className="form-field-container  Form_Submission_URL  hidden">
                  <p className="form-field  Form_Submission_URL pd-hidden   ">
                    <input
                      type="hidden"
                      name="166592_294541pi_166592_294541"
                      id="166592_294541pi_166592_294541"
                      defaultValue="https://www.westmonroe.com/contact"
                    />
                  </p>
                  <div id="error_for_166592_294541pi_166592_294541" style={{ display: 'none' }} />
                </div>
                <div className="form-field-container  industry  hidden">
                  <p className="form-field  industry pd-hidden   ">
                    <input
                      type="hidden"
                      name="166592_294544pi_166592_294544"
                      id="166592_294544pi_166592_294544"
                      defaultValue=""
                    />
                  </p>
                  <div id="error_for_166592_294544pi_166592_294544" style={{ display: 'none' }} />
                </div>
                <div className="form-field-container  GCLID  hidden">
                  <p className="form-field  GCLID pd-hidden   ">
                    <input
                      type="hidden"
                      name="166592_294547pi_166592_294547"
                      id="166592_294547pi_166592_294547"
                      defaultValue=""
                    />
                  </p>
                  <div id="error_for_166592_294547pi_166592_294547" style={{ display: 'none' }} />
                </div>
                <div className="form-field-container  fbclid  hidden">
                  <p className="form-field  fbclid pd-hidden   ">
                    <input
                      type="hidden"
                      name="166592_294550pi_166592_294550"
                      id="166592_294550pi_166592_294550"
                      defaultValue=""
                    />
                  </p>
                  <div id="error_for_166592_294550pi_166592_294550" style={{ display: 'none' }} />
                </div>
                <div className="form-field-container  source  hidden">
                  <p className="form-field  source pd-hidden   ">
                    <input
                      type="hidden"
                      name="166592_294553pi_166592_294553"
                      id="166592_294553pi_166592_294553"
                      defaultValue="West Monroe Website"
                    />
                  </p>
                  <div id="error_for_166592_294553pi_166592_294553" style={{ display: 'none' }} />
                </div>
                <div className="form-field-container  Lead_Source_Detail  hidden">
                  <p className="form-field  Lead_Source_Detail pd-hidden   ">
                    <input
                      type="hidden"
                      name="166592_294556pi_166592_294556"
                      id="166592_294556pi_166592_294556"
                      defaultValue=""
                    />
                  </p>
                  <div id="error_for_166592_294556pi_166592_294556" style={{ display: 'none' }} />
                </div>
                <div className="form-field-container  Referrer_Url  hidden">
                  <p className="form-field  Referrer_Url pd-hidden   ">
                    <input
                      type="hidden"
                      name="166592_294559pi_166592_294559"
                      id="166592_294559pi_166592_294559"
                      defaultValue=""
                    />
                  </p>
                  <div id="error_for_166592_294559pi_166592_294559" style={{ display: 'none' }} />
                </div>
                <div className="form-field-container  Referrer_Source  hidden">
                  <p className="form-field  Referrer_Source pd-hidden   ">
                    <input
                      type="hidden"
                      name="166592_294562pi_166592_294562"
                      id="166592_294562pi_166592_294562"
                      defaultValue=""
                    />
                  </p>
                  <div id="error_for_166592_294562pi_166592_294562" style={{ display: 'none' }} />
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
                  <input className="accept-terms hide" id="terms-of-service" name="terms-of-service" type="checkbox" />{' '}
                  <label htmlFor="terms-of-service">
                    By submitting, you consent to our{' '}
                    <a className="text-weight-bold" href="https://www.westmonroe.com/privacy-policy" target="_blank">
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
        <div className="cell large-3 large-offset-1">
          <div className="cmpt__contact-sidebar">
            <h3 className="headline3 text-downriver contact-sidebar-headline">More ways to connect</h3>
            <a
              href="https://outlook.office365.com/book/BusinessMeetingwithWestMonroe@WESTMONROEPARTNERS1.onmicrosoft.com/"
              className="cta cta-type margin-bottom-2"
              target="_blank"
            >
              Book a Meeting
            </a>
            <button
              className="cta cta-type openSubscribe"
              data-open="subscribeModal"
              data-form-type="Contact Page Subscribe"
              aria-controls="subscribeModal"
              aria-haspopup="true"
              tabIndex={0}
            >
              Subscribe
            </button>
            <h4 className="headline5 text-downriver contact-sidebar-subhead">Follow us</h4>
            <ul className="contact-sidebar-social">
              <li>
                <a href="https://www.linkedin.com/company/westmonroe/" target="_blank">
                  {/* ?xml version="1.0" encoding="utf-8"? */}
                  <svg
                    width="17px"
                    height="17px"
                    viewBox="0 0 17 17"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    role="presentation"
                  >
                    <desc>LinkedIn</desc>
                    <path
                      d="M1.937 3.874C3.007 3.874 3.874 3.007 3.874 1.937C3.874 0.867 3.007 0 1.937 0C0.867 0 0 0.867 0 1.937C0 3.007 0.867 3.874 1.937 3.874ZM16.9009 9.9011L16.9009 15.8751C16.9009 16.0221 16.7809 16.1421 16.6339 16.1421L13.5499 16.1421C13.4019 16.1421 13.2819 16.0221 13.2819 15.8751L13.2819 10.3191C13.2819 8.85711 12.7599 7.85811 11.4499 7.85811C10.4499 7.85811 9.85688 8.53111 9.59388 9.18211C9.49888 9.41411 9.47388 9.73711 9.47388 10.0631L9.47388 15.8741C9.47388 16.0221 9.35488 16.1421 9.20688 16.1421L6.12388 16.1421C5.97588 16.1421 5.85588 16.0231 5.85688 15.8741C5.8572 15.7951 5.85759 15.6998 5.85805 15.5899C5.86611 13.6435 5.89312 7.12596 5.86188 5.52911C5.85988 5.37911 5.98088 5.25811 6.12988 5.25811L9.20688 5.25811C9.35488 5.25811 9.47488 5.37811 9.47488 5.5261L9.47488 6.80111C9.46688 6.81311 9.45688 6.82511 9.44988 6.83611L9.47488 6.83611L9.47488 6.80111C9.95488 6.06111 10.8129 5.00311 12.7349 5.00311C15.1159 5.00311 16.9009 6.55911 16.9009 9.9011ZM3.5869 16.1421L0.503901 16.1421C0.356901 16.1421 0.235901 16.0221 0.235901 15.8751L0.235901 5.5261C0.235901 5.3781 0.356901 5.2581 0.503901 5.2581L3.5869 5.2581C3.7339 5.2581 3.8549 5.3781 3.8549 5.5261L3.8549 15.8751C3.8549 16.0221 3.7339 16.1421 3.5869 16.1421Z"
                      fillRule="evenodd"
                      stroke="none"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="http://www.twitter.com/westmonroe" target="_blank">
                  <svg width={17} height={18} viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg">
                    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="http://www.facebook.com/westmonroe" target="_blank">
                  {/* ?xml version="1.0" encoding="utf-8"? */}
                  <svg
                    width="9px"
                    height="20px"
                    viewBox="0 0 9 20"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    role="presentation"
                  >
                    <desc>Facebook</desc>
                    <path
                      d="M1.963 9.666L1.963 18.939C1.963 19.073 2.071 19.181 2.204 19.181L5.649 19.181C5.781 19.181 5.89 19.073 5.89 18.939L5.89 9.515L8.387 9.515C8.512 9.515 8.616 9.419 8.627 9.294L8.867 6.454C8.879 6.313 8.768 6.192 8.626 6.192L5.89 6.192L5.89 4.178C5.89 3.706 6.273 3.323 6.744 3.323L8.669 3.323C8.802 3.323 8.91 3.215 8.91 3.081L8.91 0.242C8.91 0.108 8.802 0 8.669 0L5.418 0C3.51 0 1.963 1.547 1.963 3.455L1.963 6.192L0.241 6.192C0.108 6.192 0 6.3 0 6.434L0 9.273C0 9.407 0.108 9.515 0.241 9.515L1.963 9.515L1.963 9.666Z"
                      stroke="none"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/wearewestmonroe" target="_blank">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Instagram icon</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.glassdoor.com/Overview/Working-at-West-Monroe-Partners-EI_IE118343.11,31.htm"
                  target="_blank"
                >
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Glassdoor icon</title>
                    <path d="M17.144 20.572H3.43C3.43 22.465 4.963 24 6.856 24h10.286c1.893 0 3.428-1.535 3.428-3.428V6.492c0-.07-.054-.125-.124-.125h-3.18c-.067 0-.123.056-.123.126v14.08zm0-20.572c1.892 0 3.427 1.535 3.427 3.43H6.858v14.078c0 .068-.056.125-.125.125H3.554c-.07 0-.125-.057-.125-.125V3.428C3.43 1.536 4.963 0 6.856 0h10.287" />
                  </svg>
                </a>
              </li>
            </ul>
            <Link href="/offices" className="cta cta-text-only cta-text-only-large">
              See where we are
            </Link>
            <h4 className="headline5 text-downriver contact-sidebar-subhead">Call us</h4>
            <p className="text-nevada contact-phone">800.828.6708</p>
          </div>
        </div>
      </div>
    </div>
  );
};
