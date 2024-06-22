import { useState } from 'react';
import { ILandingPageMenuDesktopItemProps } from './menu-item.type';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const LandingPageMenuDesktopItemV1: React.FC<ILandingPageMenuDesktopItemProps> = (props) => {
  const { label, link } = props;

  const [hovered, setHovered] = useState<boolean>(false);

  const router = useRouter();

  return (
    <li className="menu">
      <Link
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        href={link}
        className={`${
          link === router?.asPath || hovered ? 'text-accent' : 'text-[#f9fdfe]'
        } text-[0.9375rem] text-no-underline px-[1em] inline-block transition-all duration-200 ease-linear`}
      >
        <span className="">{label}</span>
      </Link>
    </li>
  );
};
