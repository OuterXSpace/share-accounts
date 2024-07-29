import { ContactV2Props, ILandingPageContactFormV2Model } from './contact.type';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { postGoogleSheetApi } from '../../../../../../../../../../../api';
import { ContactStyles } from './contact.style';
import { HoverChangeText } from '../../../../../animation';

export const ContactV2: React.FC<ContactV2Props> = (props) => {
  const { data, className } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);

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
  } = useForm<ILandingPageContactFormV2Model>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(contactSchema),
    defaultValues: {},
  });

  const onConfirmSubmit = useCallback(
    (values: ILandingPageContactFormV2Model) => {
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
    <div className="contact-page pt-[7vw]">
      <ContactStyles />
      <div className="container">
        <div className="h-[67vh] flex gap-x-[16px] gap-y-[16px]">
          <div className="flex flex-col gap-[5vw] h-[67vh] justify-between flex-[2]">
            <HoverChangeText id="text-contact-container">
              <h1 className="text-contact-container relative -left-[0.3vw] text-[7vw] relative -left-[0.3vw] leading-[0.83] font-normal tracking-[-0.5vw]">
                Curious?
              </h1>
            </HoverChangeText>
            <div className="flex justify-between w-full">
              <div className="flex-1 flex flex-col gap-[1.5vw]">
                <img
                  className="min-w-[7vw] max-w-[7vw] mb-[1vw] object-cover inline-block"
                  src="https://assets-global.website-files.com/6618e637b1708fa9ebdf54ae/662c93352e3e9cd2ad5196ac_VISIT-US.svg"
                  loading="lazy"
                  alt=""
                />
                <h3 className="text-[1.7em] tracking-[-0.05vw] leading-[1] font-normal">
                  <div className="overflow-y-hidden whitespace-no-wrap">
                    <div className="overflow-y-hidden whitespace-no-wrap">visit us</div>
                  </div>
                </h3>
                <p className="mt-[1vw] text-base leading-[1.35]">
                  <div className="overflow-y-hidden whitespace-no-wrap">
                    <div className="overflow-y-hidden whitespace-no-wrap">12 Archiepiskopou Makariou </div>
                  </div>
                  <div className="overflow-y-hidden whitespace-no-wrap">
                    <div className="overflow-y-hidden whitespace-no-wrap">Avenue Ill, Office No. 201, ZAVOS </div>
                  </div>
                  <div className="overflow-y-hidden whitespace-no-wrap">
                    <div className="overflow-y-hidden whitespace-no-wrap">KRISTELLINA TOWER, 4000, </div>
                  </div>
                  <div className="overflow-y-hidden whitespace-no-wrap">
                    <div className="overflow-y-hidden whitespace-no-wrap">Mesa Geitonia, Limassol, Cyprus</div>
                  </div>
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-[1.5vw]">
                <img
                  className="min-w-[7vw] max-w-[7vw] mb-[1vw] object-cover inline-block"
                  src="https://assets-global.website-files.com/6618e637b1708fa9ebdf54ae/662c93352e3e9cd2ad5196ac_VISIT-US.svg"
                  loading="lazy"
                  alt=""
                />
                <h3 className="text-[1.7em] tracking-[-0.05vw] leading-[1] font-normal">
                  <div className="overflow-y-hidden whitespace-no-wrap">
                    <div className="overflow-y-hidden whitespace-no-wrap">Chat with Us</div>
                  </div>
                </h3>
                <p className="mt-[1vw] text-base leading-[1.35]">
                  <div className="overflow-y-hidden whitespace-no-wrap">
                    <div className="overflow-y-hidden whitespace-no-wrap">+357 25334567 </div>
                  </div>
                  <div className="overflow-y-hidden whitespace-no-wrap">
                    <div className="overflow-y-hidden whitespace-no-wrap">info@lt-serv.com </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="">
              <div className="my-[0] mb-[15px]">
                <form data-name="Lead from Lot" aria-label="Lead from Lot">
                  <div className="label">
                    <label
                      htmlFor="name"
                      className="font-medium uppercase mb-5 font-bold block text-[1vw] leading-[1.3]"
                    >
                      full name<span>*</span>
                    </label>
                    <input
                      className="box-border outline-none shadow-none bg-transparent border-b-2 border-t-0 border-l-0 border-r-0 border-[#EEE7E7] focus:border-b-2 focus:border-[#96c583]
                     p-0 h-[7vh] text-[1.3vw] text-[#4c3e43] leading-[1.42857] block mb-10 align-middle w-full"
                      maxLength={256}
                      name="name"
                      data-name="Name"
                      placeholder=""
                      type="text"
                      id="name"
                    />
                  </div>
                  <div className="label">
                    <label
                      htmlFor="email"
                      className="font-medium uppercase mb-5 font-bold block text-[1vw] leading-[1.3]"
                    >
                      email adress<span>*</span>
                    </label>
                    <input
                      className="box-border outline-none shadow-none bg-transparent border-b-2 border-t-0 border-l-0 border-r-0 border-[#EEE7E7] focus:border-b-2 focus:border-[#96c583]
                     p-0 h-[7vh] text-[1.3vw] text-[#4c3e43] leading-[1.42857] block mb-10 align-middle w-full"
                      maxLength={256}
                      name="email"
                      data-name="Email"
                      placeholder=""
                      type="email"
                      id="email"
                    />
                  </div>
                  <div className="label">
                    <label htmlFor="Message" className="font-medium uppercase mb-5 font-bold block">
                      message
                    </label>
                    <input
                      className="box-border outline-none shadow-none bg-transparent border-b-2 border-t-0 border-l-0 border-r-0 border-[#EEE7E7] focus:border-b-2 focus:border-[#96c583]
                     p-0 h-[15vh] text-[1.3vw] text-[#4c3e43] leading-[1.42857] block mb-10 align-middle w-full"
                      maxLength={256}
                      name="Message"
                      data-name="Message"
                      placeholder=""
                      type="text"
                      id="Message"
                    />
                  </div>
                  <input type="submit" data-wait="Please wait..." className="submit" defaultValue="SUBMIT FORM" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
