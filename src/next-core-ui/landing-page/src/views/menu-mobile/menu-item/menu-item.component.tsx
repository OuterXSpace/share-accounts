import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useCallback, useMemo } from 'react';
import { IMenuItemMobile02Props } from './menu-item.type';
import { isLoginSelector, loginUrlSelector } from '../../../../../../store/store-authentication/selector';
import { logOutAction } from '../../../../../../store/store-authentication/action';

export const MenuItemMobile02: React.FC<IMenuItemMobile02Props> = (props) => {
  const { item, closeToggle } = props;

  const [hovered, setHovered] = useState<boolean>(false);

  const router = useRouter();

  const isLogin = isLoginSelector();

  const loginUrl = loginUrlSelector();

  const checkHidden = useMemo(
    () => (item?.hiddenWhenLogin === 'YES' && isLogin) || (item?.hiddenWhenLogin === 'NO' && !isLogin),
    [isLogin, item?.hiddenWhenLogin],
  );

  const handleOpenLink = useCallback(
    (ev) => {
      ev.preventDefault();
      ev.stopPropagation();

      closeToggle();

      if (item?.authenRequired && !isLogin) {
        router.push('/login');
      }

      if (item?.id === 'OUT') {
        logOutAction(loginUrl, router);
      }
      router.push(item?.link);
    },
    [closeToggle, isLogin, item?.authenRequired, item?.id, item?.link, loginUrl, router],
  );

  return (
    <li
      className={`${
        checkHidden ? 'hidden' : ''
      } uppercase text-accent flex py-[10px] md:py-[15px] px-[10px] md:px-[40px]`}
    >
      <Link
        onClick={handleOpenLink}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="gap-2 w-full"
        href=""
      >
        <span
          className={`min-w-max text-sm  ${
            hovered ? 'text-accent' : 'text-white'
          } text-opacity-90 uppercase font-semibold`}
        >
          {item?.label}
        </span>
      </Link>
    </li>
  );
};
