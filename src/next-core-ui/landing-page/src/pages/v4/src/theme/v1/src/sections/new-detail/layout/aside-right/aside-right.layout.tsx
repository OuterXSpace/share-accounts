import { IAsideRightV4Props } from './aside-right.type';
import { TopReadV4, WantToKnowMoreBlockV4, WidgetExchangesAffiliateV4 } from './components';

export const AsideRightV4: React.FC<IAsideRightV4Props> = (props) => {
  return (
    <div className="w-full px-4 mb-4 lg:w-4/12 lg:ml-auto">
      <aside className="flex flex-col h-full gap-y-10">
        <div className="bevel-small-tl-br ">
          <div className="px-4 pb-6 bg-white lg:px-8 md:px-4 pt-9 bevel-small-inner-tl-br">
            <WidgetExchangesAffiliateV4 />
            <TopReadV4 />
          </div>
        </div>
        <WantToKnowMoreBlockV4 />
      </aside>
    </div>
  );
};
