import { useRouter } from 'next/router';
import { useState, useCallback, useEffect } from 'react';
import { IStaticPageProps } from './static.type';
import { Tab, TabPane } from './components';
import Head from 'next/head';

export const StaticPage: React.FC<IStaticPageProps> = (props) => {
  const { routerId, sacStaticPage } = props;

  const router = useRouter();

  const [defaultSectionId, setDefaultSectionId] = useState<string>('');

  const changeUrl = useCallback(
    (id: string) => {
      router.replace(`/pages/${id}`);
    },
    [router],
  );

  useEffect(() => {
    if (router?.query?.slug?.[1]) {
      setDefaultSectionId(router?.query?.slug?.[1]);
    } else {
      setDefaultSectionId(sacStaticPage?.data[0]?.id || '');
    }
  }, [router?.query?.slug, routerId, sacStaticPage?.data]);

  return (
    <>
      <Head>
        <meta property="og:title" content="Đăng ký" />
        <meta property="og:url" content="/register" />
        <meta property="og:image" />
        <title>Đăng ký</title>
      </Head>
      <main className="pt-[120px]">
        <section className="container py-[3rem] pb-[2rem]">
          <div className="row">
            <div className="col-1" />
            <div className="col-10">
              <Tab defaultTab={defaultSectionId} onSelect={(id) => changeUrl(id)}>
                {sacStaticPage?.data?.map((item) => {
                  return (
                    <TabPane name={item.title} key={item.id}>
                      <div className="border-2 border-primary rounded-[10px] p-[25px]">
                        <div dangerouslySetInnerHTML={{ __html: item?.content }} />
                      </div>
                    </TabPane>
                  );
                })}
              </Tab>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
