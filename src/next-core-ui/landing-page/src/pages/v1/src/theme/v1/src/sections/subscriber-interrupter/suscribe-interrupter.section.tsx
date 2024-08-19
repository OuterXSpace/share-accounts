import { ISubscriberInterrupterSectionProps } from './suscribe-interrupter.type';

export const SubscriberInterrupterSection: React.FC<ISubscriberInterrupterSectionProps> = (props) => {
  const { data, className } = props;

  return (
    <div id="suscribe-interrupter" className="subscribe-form bleed-wrapper overflow-hidden px-0 bg-gray-20">
      <div className="max-w-[1503px] mx-auto grid grid-flow-row grid-cols-4 lg:grid-cols-8 border-animate-horiz border-animate-base after:border-t after:top-0 border-animate-bleed-rtl">
        <div className="flex col-span-4 pt-10 pb-12 lg:col-span-6 lg:py-10 lg:pl-4 grid:pl-0 lg:px-8 lg:m-0 text-dark-navy">
          <div className="relative justify-center h-full lg:flex lg:flex-col px-4 grid:pl-0">
            <p className="mb-2 font-medium type-paragraph-lg">Subscribe to our newsletter</p>
            <h3 className="mb-6 type-delta lg:type-theta">Get the latest stories and perspectives</h3>
            <div className="cmpt__pardot-form" data-js-hook="pardot-form">
              <div className="form-wrapper">
                <div className="subscribeInterrupter" style={{ border: 0, height: 131 }}>
                  <form className="form subscribeInterrupter">
                    <p>&nbsp;</p>
                    <div className="form-field-container  email  ">
                      <p className="form-field  email pd-text required  ">
                        <input
                          type="text"
                          name="166592_294565pi_166592_294565"
                          id="166592_294565pi_166592_294565"
                          defaultValue=""
                          className="text"
                          size={30}
                          maxLength={255}
                          placeholder="Email *"
                        />
                      </p>
                      <p style={{ display: 'none' }} id="resubscribeIndicator" className="error no-label">
                        <img
                          style={{ marginLeft: 0 }}
                          src="https://go.westmonroe.com/images/indicator2.gif"
                          alt="indicator"
                        />
                      </p>
                      <div id="error_for_166592_294565pi_166592_294565" style={{ display: 'none' }} />
                    </div>
                    <input name="_utf8" type="hidden" defaultValue="☃" />
                    <p className="submit">
                      <input type="submit" defaultValue="Subscribe" />
                    </p>
                    <div className="terms-of-service">
                      <input
                        className="accept-terms hide"
                        id="terms-of-service"
                        name="terms-of-service"
                        type="checkbox"
                      />{' '}
                      <label htmlFor="terms-of-service">
                        {' '}
                        I have read the{' '}
                        <a
                          className="text-weight-bold"
                          href="https://www.westmonroe.com/privacy-policy"
                          target="_blank"
                        >
                          Privacy Policy
                        </a>
                        , which includes California-specific information{' '}
                        <strong>
                          <a href="https://www.westmonroe.com/privacy-policy#CALI" target="_blank">
                            here
                          </a>
                        </strong>
                        .
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 -mx-4 lg:col-span-2 lg:block lg:m-0">
          <div className="h-full w-full relative aspect-[405/410] grid:w-[119.8%] overflow-hidden border-animate-base border-animate-vert after:top-0 lg:after:border-t-0 lg:after:border-l after:left-[-1px] before:left-[-1px] inview">
            <div className="h-full w-full overflow-hidden">
              <img
                src="https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/subscribe_810x829.jpg?cx=0.41&cy=0.4&cw=1600&ch=1600&hash=41BE3C35BA4FAC6B2E27D9324FD87C20"
                alt="coworkers sitting and standing around having a discussion around a laptop"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
