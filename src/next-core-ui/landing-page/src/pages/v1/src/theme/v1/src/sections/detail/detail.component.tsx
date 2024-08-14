import { useMemo } from 'react';
import { IDetailSectionProps } from './detailt.type';
import { useRouter } from 'next/router';
import { NotFound } from '../../../../../../../../../../../components';
import { ExportSectionLandingPageV1ThemeV1 } from '../export.section';

export const DetailSection: React.FC<IDetailSectionProps> = (props) => {
  const { data, systemConfig, slugKey, childItem } = props;

  const router = useRouter();

  const renderSections = useMemo(() => {
    if (!childItem) return <NotFound />;

    const detailData = data?.object?.array?.filter(
      (item) => `${item?.id}` === `${router?.query?.id ?? slugKey?.replace('/', '')}`,
    )[0];

    if (!detailData) return <NotFound />;

    return childItem?.array?.map((child) => {
      const { id, section, className, style } = child;

      return (
        <ExportSectionLandingPageV1ThemeV1
          key={id}
          data={detailData?.object?.[section]?.DEFAULT}
          systemConfig={systemConfig}
          section={section}
          className={className}
          slugKey={slugKey}
          childItem={childItem}
          style={style}
        />
      );
    });
  }, [childItem, data, router?.query?.id, systemConfig, slugKey]);

  return renderSections;
};
