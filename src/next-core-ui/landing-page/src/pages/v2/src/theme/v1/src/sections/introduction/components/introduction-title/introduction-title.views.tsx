import { HoverChangeText } from '../../../../../../../animation';
import { IIntroductionTitleProps } from './introduction-title.type';

export const IntroductionTitle: React.FC<IIntroductionTitleProps> = (props) => {
  return (
    <div className="flex justify-between items-end absolute left-[5.5vw] right-[5.5vw] bottom-[5.5vw] text-xs">
      <div>
        <h4 className="md:text-[2em] leading-[1.35] mb-[1.5vw] font-medium tracking-[-0.09vw] visible">
          Lot Technologies®
        </h4>
        <HoverChangeText id="text-container">
          <h1 className="text-container text-[3em] leading-[0.83] font-normal tracking-[-0.5vw]  md:ml-[-0.4vw] md:text-[7.5em]">
            {' '}
            Define.{' '}
          </h1>
          <h1 className="text-container text-[3em] leading-[0.83] font-normal tracking-[-0.5vw]  md:ml-[-0.4vw] md:text-[7.5em]">
            {' '}
            Innovate.{' '}
          </h1>
          <h1 className="text-container text-[3em] leading-[0.83] font-normal tracking-[-0.5vw]  md:ml-[-0.4vw] md:text-[7.5em]">
            {' '}
            Lead.{' '}
          </h1>
        </HoverChangeText>
      </div>
      <div className="hero-scroll-down">
        <img
          src="https://assets-global.website-files.com/6618e637b1708fa9ebdf54ae/6618e87c8d44b830337ba646_scroll-down.svg"
          loading="lazy"
          alt="scroll down"
          className="min-w-[5vw] max-w-[5vw]"
        />
      </div>
    </div>
  );
};
