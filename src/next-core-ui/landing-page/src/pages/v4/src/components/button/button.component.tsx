import { ILandingPageButtonV1Props } from './button.type';

export const LandingPageButtonV1: React.FC<ILandingPageButtonV1Props> = (props) => {
  const { title, link, className, target = '_self', disabled, type = 'button', children, ...resButtonProps } = props;

  return link ? (
    <a
      className={` ${className} focus:border-2 focus:bg-transparent focus:text-white hover:border-2 hover:bg-transparent hover:text-white border-[0] pt-[15px] pr-[30px] pb-[15px] pl-[30px] text-1 font-montserrat leading-1 border-[#97c584] bg-[#97c584] border-solid border-t-2 border-r-2 border-l-2 border-b-2 font-montserrat font-bold text-16 text-1 leading-1 inline-block text-center transition-all duration-300 fill-[#fff]`}
      href={link}
      target={target}
    >
      {children}
      {title && <div className="line-clamp-1">{title}</div>}
    </a>
  ) : (
    <button
      type={type}
      className={` ${className} focus:border-2 focus:bg-transparent focus:text-white hover:border-2 hover:bg-transparent hover:text-white border-[0] pt-[15px] pr-[30px] pb-[15px] pl-[30px] text-1 font-montserrat leading-1 border-[#97c584] bg-[#97c584] border-solid border-t-2 border-r-2 border-l-2 border-b-2 font-montserrat font-bold text-16 text-1 leading-1 inline-block text-center transition-all duration-300 fill-[#fff]`}
      disabled={disabled}
      {...resButtonProps}
    >
      {children}
      {title && <div className="line-clamp-1">{title}</div>}
    </button>
  );
};
