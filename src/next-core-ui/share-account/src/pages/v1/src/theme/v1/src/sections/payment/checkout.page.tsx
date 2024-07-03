import { useRouter } from 'next/router';
import { ICheckoutPageProps } from './checkout.type';

export const CheckoutPage: React.FC<ICheckoutPageProps> = () => {
  const router = useRouter();
  const urlPayment = router?.query?.url as string;
  return (
    <main className="pt-[120px]">
      <section className="checkout-page w-full h-screen mx-auto flex gap-8">
        <div className="row w-full">
          <div className="w-full">
            <iframe src={urlPayment} frameBorder="0" className="w-full h-full" title="momo-payment" />
          </div>
        </div>
      </section>
    </main>
  );
};
