import Head from 'next/head';
import { PromotionPageProps } from './static.type';

export const PromotionPage: React.FC<PromotionPageProps> = (props) => {
  const { sacPromotion } = props;

  return (
    <>
      <Head>
        <meta property="og:title" content="Promotion page" />
        <meta property="og:url" content="/promotion" />
        <meta property="og:image" />
        <title>Promotion page</title>
      </Head>
      <main className="pt-[120px]">
        <section className="container py-[3rem] pb-[2rem]">
          <div className="row">
            <div className="col-12" />
            <div dangerouslySetInnerHTML={{ __html: sacPromotion?.content }} />
          </div>
        </section>
      </main>
    </>
  );
};
