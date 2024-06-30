import IonIcon from '@reacticons/ionicons';
import { ContactProps, ILandingPageContactFormModel } from './contact.type';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useCallback, useState } from 'react';
import { postGoogleSheetApi } from '../../../../../../../../api/save-google';
import { LoadingMore } from '../../../../../../../../components';
import { LandingPageButtonV1 } from '../../common';
import { toast } from 'react-toastify';

export const Contact: React.FC<ContactProps> = (props) => {
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
    <section className={`section-01 ${className}`}>
      <div className="container pb-[50px] md:pb-[100px] lg:pb-[150px]">
        <form className="row" onSubmit={handleSubmit(onConfirmSubmit)}>
          <div className="col-12 lg:pr-[50px] pr-0">
            <h1 className="text-[#f9fdfe] text-[44px] lg:text-[5.125rem] font-bold font-montserrat leading-1.4">
              {data?.object?.title}
            </h1>
          </div>
          <div className="lg:col-6 col-12 md:pr-[30px]">
            <p className="pt-[50px] text-[#ffffffbf] text-[16px] leading-1.6">{data?.object?.description}</p>
            <div className="text-[16px] pt-[30px]">
              <ul className="text-[#f9fdfe]">
                <li className="flex pb-[30px]">
                  <IonIcon name="call" className="pr-[15px]" />
                  <span>{data?.object?.phone}</span>
                </li>
                <li className="flex pb-[30px]">
                  <IonIcon name="mail" className="pr-[15px]" />
                  <span>{data?.object?.email}</span>
                </li>
                <li className="flex pb-[30px]">
                  <IonIcon name="location" className="pr-[15px]" />
                  <span>{data?.object?.location}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-6 col-12 lg:pl-[50px] pl-0">
            <div className="mb-[20px] pt-[50px] lg:pl-[50px] px-1">
              <div className="w-full">
                <div className="mb-[30px] relative">
                  <input
                    style={{
                      boxShadow: 'none',
                    }}
                    type="text"
                    className="outline-none shadow-none text-[#666] box-border w-full bg-[#fafafa00] h-[58px] rounded-0 border-[#f9fdfe] border-b-2 border-t-0 border-l-0 border-r-0 focus:border-b-2 focus:border-[#96c583] focus:placeholder-[#96c583]"
                    placeholder={data?.object?.form?.input.FULL_NAME?.label}
                    {...register('fullName')}
                    onChange={(e) => {
                      if (!e.target.value) {
                        clearErrors('fullName');
                      }
                    }}
                  />
                  {errors.fullName && (
                    <label className="block font-medium text-sm mb-2 mt-3 text-red-600" htmlFor="fullName">
                      {errors.fullName?.message?.toString()}
                    </label>
                  )}
                </div>
                <div className="mb-[30px] relative">
                  <input
                    style={{
                      boxShadow: 'none',
                    }}
                    type="text"
                    className="outline-none shadow-none text-[#666] box-border w-full bg-[#fafafa00] h-[58px] rounded-0 border-[#f9fdfe] border-b-2 border-t-0 border-l-0 border-r-0 focus:border-b-2 focus:border-[#96c583] focus:placeholder-[#96c583]"
                    placeholder={data?.object?.form?.input.PHONE?.label}
                    {...register('phone')}
                    onChange={(e) => {
                      if (!e.target.value) {
                        clearErrors('phone');
                      }
                    }}
                  />
                  {errors.phone && (
                    <label className="block font-medium text-sm mb-2 mt-3 text-red-600" htmlFor="phone">
                      {errors.phone?.message?.toString()}
                    </label>
                  )}
                </div>
                <div className="mb-[30px] relative">
                  <input
                    style={{
                      boxShadow: 'none',
                    }}
                    type="text"
                    className="outline-none shadow-none text-[#666] box-border w-full bg-[#fafafa00] h-[58px] rounded-0 border-[#f9fdfe] border-b-2 border-t-0 border-l-0 border-r-0 focus:border-b-2 focus:border-[#96c583] focus:placeholder-[#96c583]"
                    placeholder={data?.object?.form?.input.EMAIL?.label}
                    {...register('email')}
                    onChange={(e) => {
                      if (!e.target.value) {
                        clearErrors('email');
                      }
                    }}
                  />
                  {errors.email && (
                    <label className="block font-medium text-sm mb-2 mt-3 text-red-600" htmlFor="email">
                      {errors.email?.message?.toString()}
                    </label>
                  )}
                </div>
                <div className="mb-[30px] relative">
                  <textarea
                    style={{
                      boxShadow: 'none',
                    }}
                    className="outline-none shadow-none placeholder:indent-[10px] indent-[10px] placeholder:text-[16px] text-[#666] placeholder-pl-2 box-border w-full bg-[#fafafa00] h-[120px] rounded-0 border-[#f9fdfe] border-b-2 border-t-0 border-l-0 border-r-0 focus:border-b-2 focus:border-[#96c583] focus:placeholder-[#96c583]"
                    placeholder={data?.object?.form?.input.MESSAGE?.label}
                    {...register('message')}
                    onChange={(e) => {
                      if (!e.target.value) {
                        clearErrors('message');
                      }
                    }}
                    defaultValue=""
                  />
                  {errors.message && (
                    <label className="block font-medium text-sm mb-2 mt-3 text-red-600" htmlFor="message">
                      {errors.message?.message?.toString()}
                    </label>
                  )}
                </div>
              </div>
            </div>
            <div className="lg:pl-[50px] transition-[background,border,border-radius,box-shadow,transform] duration-300">
              <LandingPageButtonV1 type="submit">
                {isLoading ? (
                  <LoadingMore />
                ) : (
                  <span className="flex justify-center">
                    <span className="flex-grow order-10 inline-block">{data?.object?.form?.button?.label}</span>
                  </span>
                )}
              </LandingPageButtonV1>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
