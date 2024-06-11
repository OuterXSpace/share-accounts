import { IAsideLeftV4Props } from './aside-left.type';
import { BicAuthorMetaV4, HeaderContentV4, NewContentV4, NewSummaryV4 } from './components';

export const AsideLeftV4: React.FC<IAsideLeftV4Props> = (props) => {
  return (
    <div className="w-full px-4 mb-4 lg:w-7/12" data-el="main-content">
      <div className="flex flex-wrap justify-between lg:max-w-[800px] lg:mb-5">
        <HeaderContentV4 />
        <BicAuthorMetaV4 />
      </div>
      <NewSummaryV4 />
      <NewContentV4 />
    </div>
  );
};
