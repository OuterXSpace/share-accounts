import { ContactV2Props, ILandingPageContactFormV2Model } from './contact.type';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useCallback, useState } from 'react';
import { postGoogleSheetApi } from '../../../../../../../../api/save-google';
import { toast } from 'react-toastify';

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
    <main className="p-[5.5vw]">
      <section className={`section-01 mt-[8vw] ${className}`} />
    </main>
  );
};
