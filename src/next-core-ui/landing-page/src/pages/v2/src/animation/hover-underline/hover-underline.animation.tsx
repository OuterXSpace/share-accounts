import { IHoverUnderlineProp } from './hover-underline.type';

export const HoverUnderlineAnimation: React.FC<IHoverUnderlineProp> = (props) => {
  const { children } = props;
  return (
    <div className="hover:after:scale-x-100 hover:after:origin-[0%_50%] after:block after:content-[''] after:border-b after:border-b-[1px] after:border-[#fff] after:pb-[0.2vw] after:m-auto after:text-left after:origin-[100%_0%] after:transform after:scale-x-0 after:ease-in-out after:transition-transform after:duration-300">
      {children}
    </div>
  );
}