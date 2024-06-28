import IonIcon from '@reacticons/ionicons';
import { IProfilePageShareAccountTheme01Props } from './profile.type';
import { menuProfile } from './dummy.mock';
import { PaymentHistory, ProfileInfo } from './views';
import { useMemo } from 'react';
import Link from 'next/link';
import { TIonIconName } from '../../../../../../../../../../../models';
import { useRouter } from 'next/router';

export const ProfilePageShareAccountTheme01: React.FC<IProfilePageShareAccountTheme01Props> = (props) => {
  const { data } = props;

  const router = useRouter();

  const id = useMemo(() => {
    const str = router?.query?.slug;

    if (!str) return 'HOME';

    return (str[1] ?? str[0])?.toLocaleUpperCase();
  }, [router?.query?.slug]);

  const renderPageBody = useMemo(() => {
    switch (id) {
      case 'PAYMENT-HISTORY':
        return <PaymentHistory />;
      default:
        return <ProfileInfo />;
    }
  }, [id]);

  return (
    <main className="container w-full mt-10">
      <section className="row">
        <aside className="col-3 pr-5">
          <div className="overflow-y-auto w-full rounded-xl p-4 bg-white border shadow-lg">
            <h1 className="text-xl font-semibold mb-4">Thông tin cá nhân</h1>
            <ul className="space-y-2 font-medium text-gray-600">
              {menuProfile?.map((item) => {
                const { title, icon, href } = item;
                return (
                  <li key={item?.id}>
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
        <div className="col-9">{renderPageBody}</div>
      </section>
    </main>
  );
};
