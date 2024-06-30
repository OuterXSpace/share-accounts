import { IUiConfigServerSide } from '../../../../../../../../../../models';
import {
  ContactV4,
  ConvertPriceSectionV4,
  ExchangesSectionV4,
  NewDetailSectionV4ThemeV1,
  NewLetterSectionV4,
  NewsAndTopReadV4,
  NewsV4,
  PriceSectionV4,
  SingleNewsCardV4,
} from '.';
import { StaticSectionV4 } from './static';

export interface IExportSectionShareAccountV1ThemeV1Props {
  systemConfig?: IUiConfigServerSide;
  data?: Record<string, any>;
  className?: string;
  section?: string;
  // section?:
  //   | 'SINGLE_NEWS_CARD'
  //   | 'NEWS'
  //   | 'CONTACT'
  //   | 'STATIC_SECTION'
  //   | 'EXCHANGES_SECTION'
  //   | 'PRICE_SECTION'
  //   | 'CONVERT_PRICE_SECTION'
  //   | 'NEW_LETTER'
}

export const ExportSectionLandingPageV4ThemeV1: React.FC<IExportSectionShareAccountV1ThemeV1Props> = (props) => {
  const { systemConfig, section, data, className } = props;

  switch (section) {
    case 'SINGLE_NEWS_CARD_SECTION':
      return <SingleNewsCardV4 data={data} className={className} />;
    case 'NEWS_SECTION':
      return <NewsV4 data={data} className={className} />;
    case 'NEW_DETAIL_SECTION':
      return <NewDetailSectionV4ThemeV1 data={data} className={className} />;
    case 'NEW_AND_TOP_READ':
      return <NewsAndTopReadV4 data={data} className={className} />;
    case 'CONTACT__SECTION':
      return <ContactV4 data={data} className={className} />;
    case 'STATIC_SECTION':
      return <StaticSectionV4 data={data} className={className} />;
    case 'EXCHANGES_SECTION':
      return <ExchangesSectionV4 data={data} className={className} />;
    case 'PRICE_SECTION':
      return <PriceSectionV4 data={data} className={className} />;
    case 'CONVERT_PRICE_SECTION':
      return <ConvertPriceSectionV4 data={data} className={className} />;
    case 'NEW_LETTER_SECTION':
      return <NewLetterSectionV4 data={data} className={className} />;
    default:
      return <div />;
  }
};
