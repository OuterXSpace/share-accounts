import { useRouter } from 'next/router';
import { ICheckoutPageShareAccountTheme02Props } from './checkout.type';

export const CheckoutPageShareAccountTheme02: React.FC<ICheckoutPageShareAccountTheme02Props> = () => {
  const router = useRouter();

  const urlPayment = router?.query?.url as string;
  return (
    <main className="h-[1500px]">
      <iframe src={urlPayment} frameBorder="0" className="w-full h-full" title="momo-payment" />
    </main>
  );
};
