import { useRouter } from 'next/router';
import { ICheckoutPageXConixTheme01Props } from './checkout.type';

export const CheckoutPageXConixTheme01: React.FC<ICheckoutPageXConixTheme01Props> = () => {
  const router = useRouter();

  const urlPayment = router?.query?.url as string;
  return (
    <main className="h-[1500px]">
      <iframe src={urlPayment} frameBorder="0" className="w-full h-full" title="momo-payment" />
    </main>
  );
};
