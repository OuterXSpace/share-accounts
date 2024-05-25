import IonIcon from '@reacticons/ionicons';
import { ProfilePageProps } from './profile.type';
import { menuProfile } from './dummy.mock';
import { TIonIconName } from '../../../../../models';
import { PaymentHistory, ProfileInfo } from './views';
import { useMemo } from 'react';
import Link from 'next/link';

export const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { routerId } = props;

  const renderPageBody = useMemo(() => {
    switch (routerId) {
      case 'PAYMENT-HISTORY':
        return <PaymentHistory />;
      default:
        return <ProfileInfo />;
    }
  }, [routerId]);

  return (
    <main className="container pt-[120px] w-full mt-10">
      <section className="row">
        <aside className="col-sm-4 pr-5">
          <div className="overflow-y-auto w-full rounded-xl p-4 bg-white border shadow-lg">
            <h1 className="text-xl font-semibold mb-4">Thông tin cá nhân</h1>
            <ul className="space-y-2 font-medium text-gray-600">
              {menuProfile?.map((item) => {
                const { id, title, icon, href } = item;
                return (
                  <li key={id}>
                    <Link href={href} className="flex items-center p-2 text-gray-900 ">
                      <IonIcon className="w-4 h-4" name={icon as TIonIconName} />
                      <span className="ms-3">{title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
        <div className="col-sm-8">{renderPageBody}</div>
      </section>
    </main>
  );
};
