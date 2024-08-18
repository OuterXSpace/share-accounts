import { useState } from 'react';
import { ILandingPageMenuDesktopItemProps } from './menu-item.type';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const LandingPageMenuDesktopItemV1: React.FC<ILandingPageMenuDesktopItemProps> = (props) => {
  const { label, link = '', className } = props;

  const [hovered, setHovered] = useState<boolean>(false);

  const router = useRouter();

  return (
    <li className="menu">
      <Link
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        href={link ?? ''}
        className={`${
          link === router?.asPath || hovered ? 'text-accent' : 'text-[#f9fdfe]'
        } block font-medium text-[0.875rem] leading-4 pt-3 pb-2.5 font-sans text-no-underline px-[1em] transition-all duration-200 ease-linear ${className}`}
      >
        <span className="font-san">{label}</span>
      </Link>
    </li>
  );
};
