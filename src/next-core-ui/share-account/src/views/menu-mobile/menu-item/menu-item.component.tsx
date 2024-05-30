import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useCallback, useMemo } from 'react';
import { IMenuItemMobile01Props } from './menu-item.type';
import { isLoginSelector, loginUrlSelector } from '../../../../../../store/store-authentication/selector';
import { logOutAction } from '../../../../../../store/store-authentication/action';

export const MenuItemMobile01: React.FC<IMenuItemMobile01Props> = (props) => {
  const { item, closeToggle, handleOpenCart } = props;

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

      // open cart modal
      if (item?.id === 'CART') {
        handleOpenCart();
        return;
      }

      if (item?.authenRequired && !isLogin) {
        router.push('/login');
      }

      if (item?.id === 'OUT') {
        logOutAction(loginUrl, router);
      }

      router.push(item?.link);
    },
    [closeToggle, handleOpenCart, isLogin, item?.authenRequired, item?.id, item?.link, loginUrl, router],
  );

  return (
    <li
      className={`${
        checkHidden ? 'hidden' : ''
      } uppercase text-accent flex py-[10px] md:py-[15px] px-[10px] md:px-[40px] justify-between items-center border-gray-1 border-b`}
    >
      <Link
        onClick={handleOpenLink}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex justify-center gap-2 items-center w-full"
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
