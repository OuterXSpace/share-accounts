import { NewDetailV4Props } from './new-detail.type';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { AsideLeftV4, AsideRightV4 } from './layout';

export const NewDetailV4: React.FC<NewDetailV4Props> = (props) => {
  const { data, className, systemConfig } = props;

  const router = useRouter();

  const newDetail = useMemo(() => {
    if (!router?.query?.id) return null;

    return systemConfig?.ldpSystemConfigPage?.data?.filter((item) => `${item?.id}` === `${router?.query?.id}`)[0];
  }, [router?.query?.id, systemConfig?.ldpSystemConfigPage?.data]);

  console.log('hack', newDetail);
  return (
    <article className="pt-2 post-122109 post type-post status-publish format-standard has-post-thumbnail hentry category-thi-truong tag-ai tag-core-scientific tag-tin-tuc-tien-dien-tu typeofworks-tin-moi">
      <div className="flex flex-wrap mt-4 -mx-4 lg:mt-0">
        <AsideLeftV4 />
        <AsideRightV4 />
      </div>
    </article>
  );
};
