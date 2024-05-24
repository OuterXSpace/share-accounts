import { HeaderTheme01 } from '../../next-core-ui';
import { DynamicHeaderProps } from './header.type';

export const DynamicHeader: React.FC<DynamicHeaderProps> = (props) => {
  const { item, systemConfig, slug, wuiHeaderContent } = props;

  switch (item?.type) {
    case 'HEADER_THEME_01':
      return <HeaderTheme01 wuiHeaderContent={wuiHeaderContent} />;
    case 'HEADER_NONE':
      return <div className="hidden" />;
    default:
      return <section className="w-full flex flex-wrap">Header</section>;
  }
};
