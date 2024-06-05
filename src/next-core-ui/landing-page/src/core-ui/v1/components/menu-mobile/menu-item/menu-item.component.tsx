import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useCallback } from 'react';
import { ILandingPageMenuItemMobileV1Props } from './menu-item.type';

export const LandingPageMenuItemMobileV1: React.FC<ILandingPageMenuItemMobileV1Props> = (props) => {
  const { item, closeToggle } = props;

  const [hovered, setHovered] = useState<boolean>(false);

  const router = useRouter();

  const handleOpenLink = useCallback(
    (ev) => {
      ev.preventDefault();
      ev.stopPropagation();

      closeToggle();

      router.push(item?.link);
    },
    [closeToggle, item?.link, router],
  );

  return (
    <li className="uppercase text-accent flex py-[10px] md:py-[15px] px-[10px] md:px-[40px]">
      <Link
        onClick={handleOpenLink}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="gap-2 w-full"
        href=""
      >
        <span
          className={`min-w-max text-sm  ${
            item?.link === router?.asPath || hovered ? 'text-accent' : 'text-white'
          } text-opacity-90 uppercase font-semibold`}
        >
          {item?.label}
        </span>
      </Link>
    </li>
  );
};
