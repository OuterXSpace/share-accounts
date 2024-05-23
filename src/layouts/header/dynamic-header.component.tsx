import { useRef, useEffect } from 'react';
import { useWindowDimensions } from '../../hooks';
import { HeaderTheme02 } from '../../next-core-ui/share-account/src/layouts/header/header.layout';

export interface DynamicHeaderProps {
  item: Record<string, any>;
  systemConfig: Record<string, any>;
  wuiHeaderContent: Record<string, any>;
  slug?: string;
}

export const DynamicHeader: React.FC<DynamicHeaderProps> = (props) => {
  const { item, systemConfig, slug, wuiHeaderContent } = props;

  const initialWidthRef = useRef('100%');

  const initialPaddingRightRef = useRef('5%');

  const { width: widthScreen } = useWindowDimensions();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      initialWidthRef.current = widthScreen > 768 && scrollY <= 792 ? '41.6666666667%' : '100%';
      initialPaddingRightRef.current = scrollY > 792 && widthScreen > 768 ? '8%' : '5%';
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [widthScreen]);

  switch (item?.type) {
    case 'HEADER_THEME_01':
      return <HeaderTheme02 wuiHeaderContent={wuiHeaderContent} />;
    case 'HEADER_NONE':
      return <div className="hidden" />;
    default:
      return <section className="w-full flex flex-wrap">Header</section>;
  }
};
