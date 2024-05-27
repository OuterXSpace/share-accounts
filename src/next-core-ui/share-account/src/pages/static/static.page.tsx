import { useRouter } from 'next/router';
import { useState, useCallback, useEffect } from 'react';
import { IStaticPageProps } from './static.type';
import { Tab, TabPane } from './components';

export const StaticPage: React.FC<IStaticPageProps> = (props) => {
  const { routerId, staticPage } = props;

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
      setDefaultSectionId(staticPage?.data[0]?.id || '');
    }
  }, [router?.query?.slug, routerId, staticPage?.data]);

  return (
    <div className="pt-[120px]">
      <section className="container py-[3rem] pb-[2rem]">
        <div className="row">
          <div className="col-sm-1" />
          <div className="col-sm-10">
            <Tab defaultTab={defaultSectionId} onSelect={(id) => changeUrl(id)}>
              {staticPage?.data?.map((item) => {
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
    </div>
  );
};
