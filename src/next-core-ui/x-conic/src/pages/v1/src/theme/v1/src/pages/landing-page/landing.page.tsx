import { XConixPageV1ThemeV1Props } from './landing-page.type';
import { HomeSliderXConixStyles } from './home-slider.styles';
import { useXConixPageV1ThemeV1 } from './use-landing-page.page';

export const XConixPageV1ThemeV1: React.FC<XConixPageV1ThemeV1Props> = (props) => {
  const { systemConfig, slugConfigJSON, slugKey } = props;

  const { renderSections, renderMenu, renderFooter, renderDrawCart } = useXConixPageV1ThemeV1({
    systemConfig,
    slugConfigJSON,
    slugKey,
  });

  return (
    <main className="pt-[80px] md:pt-[90px] lg:pt-[120px]">
      <div className="page-content max-w-full w-full">
        {renderMenu}
        {renderSections}
        {renderFooter}
        {renderDrawCart}
        <HomeSliderXConixStyles />
      </div>
    </main>
  );
};
