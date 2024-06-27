import { useState } from 'react';
import { ILandingPageMenuDesktopItemProps } from './menu-item.type';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const LandingPageMenuDesktopItemV1: React.FC<ILandingPageMenuDesktopItemProps> = (props) => {
  const { label, link, submenu } = props;

  const [hovered, setHovered] = useState<boolean>(false);

  const router = useRouter();

  return (
    <li className="menu-item menu-item-type-taxonomy menu-item-object-typeofworks menu-item-has-children menu-item-4383 w-full relative group flex-wrap justify-between lg:justify-start lg:flex-nowrap flex menu-depth-0  px-5 lg:px-0 w-full first:border-t-0 lg:w-auto border-t lg:border-t-0  border-t-grey-200 py-4 lg:py-0  [&.active>:where(div,a)]:text-blue-700 [.dark_&]:[&.active>:where(div,a)]:text-lime-600 [&.active>.bic-dropdown-icon]:rotate-180 [.dark_&]:border-t-dark-grey-500 relative">
      <Link
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        href={link}
        className="hover:no-underline inline-flex items-center [&>svg>path]:fill-currentColor gap-x-3.5   s2 s2--medium "
      >
        <span className="relative before:absolute before:-z-10 before:hidden lg:before:block before:h-2.5 before:w-0 before:-left-1.5 before:top-3.25 before:rounded-sm before:bg-lime-600 hover:before:w-full before:transition-all [.dark_&]:before:bg-blue-700">
          {label}
        </span>
      </Link>
      {submenu && (
        <ul className="hidden mt-3 lg:mt-0 top-full lg:w-auto dropdown-menu flex-wrap lg:group-hover:flex sub-menu lg:absolute w-fit lg:p-4 rounded-lg lg:shadow-menu lg:bg-white [.dark_&]:lg:bg-dark-grey-500 z-50 depth_0">
          {submenu?.map((item) => {
            return (
              <li
                key={item.id}
                className="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-4384 w-full relative group flex-wrap justify-between lg:justify-start lg:flex-nowrap flex menu-depth-1  relative"
              >
                <Link
                  className="hover:no-underline inline-flex items-center [&>svg>path]:fill-currentColor gap-x-3.5  lg:[.dark_&]:hover:bg-dark-grey-700 [.dark_&]:hover:text-lime-600 lg:hover:bg-grey-100 hover:text-blue-600  flex items-center px-0 py-2 lg:p-2.75 rounded-md dropdown-item w-full whitespace-nowrap  s3 s3--medium s3--normal-case lg:s2 lg:s2--medium "
                  href={item?.link}
                >
                  {item?.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};
