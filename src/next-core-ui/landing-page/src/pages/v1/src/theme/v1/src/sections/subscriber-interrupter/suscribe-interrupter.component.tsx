/* eslint-disable jsx-a11y/iframe-has-title */
import { useState, useRef, useEffect } from 'react';
import { ISubscriberInterrupterSectionProps } from './suscribe-interrupter.type';

export const SubscriberInterrupterSection: React.FC<ISubscriberInterrupterSectionProps> = (props) => {
  const { data, className } = props;

  const [inview, setInview] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInview(true);
        }
      },
      {
        root: null,
        threshold: 0.1,
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef?.current);
      }
    };
  }, []);

  return (
    <div id="subscribe-interrupter" className="subscribe-form bleed-wrapper overflow-hidden px-0">
      <div className="max-w-[1503px] mx-auto grid grid-flow-row grid-cols-4 lg:grid-cols-8 border-animate-horiz border-animate-base after:border-t after:top-0 border-animate-bleed-rtl">
        <div className="flex col-span-4 pt-10 pb-12 lg:col-span-6 lg:py-10 lg:pl-4 grid:pl-0 lg:px-8 lg:m-0 text-dark-navy">
          <div className="relative justify-center h-full lg:flex lg:flex-col px-4 grid:pl-0">
            <p className="mb-2 font-medium type-paragraph-lg">Subscribe to our newsletter</p>
            <h3 className="mb-6 type-delta lg:type-theta">Get the latest stories and perspectives</h3>
            <div className="cmpt__pardot-form" data-js-hook="pardot-form">
              <div
                className="form-wrapper"
                data-iframe-url="https://go.westmonroe.com/l/166592/2023-09-13/5knbbg?Form_Submission_URL=https://www.westmonroe.com/&formName=Subscribe Interrupter 2023&formCompleteId=&gclid=&fbclid=&ipCountry=VN&formType=subscribeInterrupter"
                data-form-name="Subscribe Interrupter 2023"
                data-form-type="subscribeInterrupter"
                data-form-submission-url="https://www.westmonroe.com/"
              >
                <iframe
                  name="subscribeInterrupter"
                  width="100%"
                  className="optanon-category-C0001"
                  style={{ border: '0px', height: '131px' }}
                  src="https://go.westmonroe.com/l/166592/2023-09-13/5knbbg?Form_Submission_URL=https://www.westmonroe.com/&formName=Subscribe%20Interrupter%202023&formCompleteId=&gclid=&fbclid=&ipCountry=VN&formType=subscribeInterrupter"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 -mx-4 lg:col-span-2 lg:block lg:m-0">
          <div
            ref={elementRef}
            className={`h-full w-full relative aspect-[405/410] grid:w-[119.8%] overflow-hidden border-animate-base border-animate-vert after:top-0 lg:after:border-t-0 lg:after:border-l after:left-[-1px] before:left-[-1px] ${
              inview ? 'inview' : ''
            }`}
          >
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
