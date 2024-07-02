import { ITitleSectionProps } from './title-section.type';

export const TitleSection: React.FC<ITitleSectionProps> = (props) => {
  const { title } = props;
  return (
    <div className="section half-margin">
      <div className="flex rounded-[50vw] border border-[0.8px] border-white uppercase justify-center px-[1.5vw] py-[2vw] md:px-[1vw] md:py-[1.2vw] lg:px-[0.8vw] lg:py-[0.3vw] gap-[0.7vw] items-center w-fit h-[1.8vw]">
        <div className="bg-[#A2254B] rounded-[50vw] lg:w-[0.5vw] w-[1.4vw] lg:h-[0.5vw] h-[1.4vw] mr-[1vw] md:mr-[0.5vw] lg:mr-0 select-none">
          <h5>
            <br />‍
          </h5>
        </div>
        <h5 className="text-white tracking-[0.1vw] text-[2.4em] md:text-[1.4em] lg:text-[0.7em] leading-normal">
          {title}
        </h5>
      </div>
    </div>
  );
};
