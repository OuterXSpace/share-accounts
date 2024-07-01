import { IUiConfigServerSide } from '../../../../../../../../../../models';
import { SingleNewsCardV4 } from '.';

export interface IExportSectionShareAccountV1ThemeV3Props {
  systemConfig?: IUiConfigServerSide;
  data?: Record<string, any>;
  className?: string;
  section?: string;
  // section?:
  //   | 'SINGLE_NEWS_CARD'
}

export const ExportSectionLandingPageV4ThemeV2: React.FC<IExportSectionShareAccountV1ThemeV3Props> = (props) => {
  const { systemConfig, section, data, className } = props;

  switch (section) {
    case 'SINGLE_NEWS_CARD':
      return <SingleNewsCardV4 data={data} className={className} />;

    default:
      return <div />;
  }
};
