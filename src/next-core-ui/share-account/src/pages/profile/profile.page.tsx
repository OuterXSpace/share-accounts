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
    <main>
      <section className="w-full min-h-auto px-8 lg:px-0 lg:w-5/6 mx-auto mt-16 flex gap-8">
        <aside className="sticky top-0 hidden lg:flex flex-col lg:w-1/4 max-h-screen">
          <div className="aside_section overflow-y-auto">
            <div className="categories w-full rounded-xl p-4 bg-white border shadow-lg">
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
          </div>
        </aside>
        <div className="products w-full lg:w-3/4 flex flex-col">{renderPageBody}</div>
      </section>
    </main>
  );
};
