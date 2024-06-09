import Link from 'next/link';
import { FooterV2Props } from './footer.type';
import IonIcon from '@reacticons/ionicons';

export const FooterV2: React.FC<FooterV2Props> = (props) => {
  const { data, className } = props;

  return (
    <footer className={`section ${className} pb-5`}>
      <div className="container">
        <div className="border-t-2 border-[#f9fdfe] h-[1px] w-full" />
        <div className="py-[20px]">
          <div className="col-12">
            <div className="flex justify-between items-center flex-col lg:flex-row gap-2">
              <div className="text-[#ffffffbf] text-[16px] leading-1.6 text-center lg:text-start">
                {data?.object?.text}
              </div>
              <div className="text-[#ffffffbf] text-[16px] leading-1.6 flex flex-wrap items-center gap-4">
                {data?.object?.array?.map((item) => {
                  const { id, icon, link } = item;
                  return (
                    <Link key={id} href={link} className="text-white">
                      <IonIcon name={icon} className="text-white text-[25px]" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
