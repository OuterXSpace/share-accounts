import Head from 'next/head';
import { IPromotionPageShareAccountTheme02Props } from './promotion.type';

export const PromotionPageShareAccountTheme02: React.FC<IPromotionPageShareAccountTheme02Props> = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Promotion page" />
        <meta property="og:url" content="/promotion" />
        <meta property="og:image" />
        <title>Promotion page</title>
      </Head>
      <main className="promotion">
        <section className="container py-[3rem] pb-[2rem]">
          <div className="row">
            <div className="col-12" />
            {/* <div dangerouslySetInnerHTML={{ __html: sacPromotion?.content }} /> */}
          </div>
        </section>
      </main>
    </>
  );
};
