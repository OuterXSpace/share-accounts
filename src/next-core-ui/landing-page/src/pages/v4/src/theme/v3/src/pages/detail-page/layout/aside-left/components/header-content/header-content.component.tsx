import { BreadcrumbV4 } from '../breadcrumb';
import { HeaderContentV4Props } from './header-content.type';

export const HeaderContentV4: React.FC<HeaderContentV4Props> = (props) => {
  return (
    <header className="w-full">
      <BreadcrumbV4 />
      <h1 className="h4 lg:h1 mt-3 mb-2 lg:mb-3 w-full">
        Core Scientific ký thỏa thuận trị giá 3.5 tỷ USD để đa dạng hóa thành AI
      </h1>
      <div className="flex items-center mb-6 speechify-ignore ">
        <svg
          className="bic-svg-icon w-4.5 h-4.5"
          width={12}
          height={12}
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 0C2.69138 0 0 2.69164 0 6C0 9.30862 2.69164 12 6 12C9.30836 12 12 9.30836 12 6C12 2.69138 9.30836 0 6 0ZM6 0.878101C8.83406 0.878101 11.122 3.16612 11.122 6.00005C11.122 8.83411 8.83393 11.122 6 11.122C3.16607 11.122 0.878049 8.83398 0.878049 6.00005C0.878049 3.16599 3.16607 0.878101 6 0.878101ZM6 1.60981C5.75756 1.60981 5.56095 1.80641 5.56095 2.04886V6.00008C5.56095 6.16238 5.64945 6.30366 5.78042 6.3796L8.9495 8.20887C9.15948 8.33014 9.42733 8.25879 9.54861 8.04881C9.66989 7.83883 9.59853 7.57098 9.38855 7.44969L6.43898 5.74842V2.04886C6.43898 1.80642 6.24255 1.60981 6 1.60981Z"
            fill="currentColor"
          />
        </svg>
        <span className="text-4.5 pl-2">3 mins</span>
      </div>
    </header>
  );
};
