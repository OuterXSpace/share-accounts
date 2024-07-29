import { ShareAccountPageV1ThemeV2Props } from './landing-page.type';
import { HomeSliderShareAccountStyles } from './home-slider.styles';
import { useShareAccountPageV1ThemeV2 } from './use-landing-page.page';

export const ShareAccountPageV1ThemeV2: React.FC<ShareAccountPageV1ThemeV2Props> = (props) => {
  const { systemConfig, slugConfigJSON, slugKey } = props;

  const { renderSections, renderMenu, renderFooter, renderDrawCart } = useShareAccountPageV1ThemeV2({
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
        <HomeSliderShareAccountStyles />
      </div>
    </main>
  );
};
