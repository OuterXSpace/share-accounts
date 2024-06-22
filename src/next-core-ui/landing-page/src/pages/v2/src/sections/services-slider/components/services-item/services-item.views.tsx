import Link from 'next/link';
import { IServicesItemProps } from './services-item.type';

export const ServicesItem: React.FC<IServicesItemProps> = (props) => {
  const { number, title, icon } = props;
  return (
    <div className="min-w-[70vw] lg:min-w-[30vw] max-w-[70vw] lg:max-w-[30vw] lg:min-h-[29vw] min-h-[69vw] lg:max-h-[29vw] max-h-[69vw] p-[6vw] lg:p-[3vw] flex flex-col gap-[1vw] relative bg-[url('https://assets-global.website-files.com/6618e637b1708fa9ebdf54ae/661bfa9990f30da22a074cf5_slide-shape.svg')] bg-left-top bg-no-repeat bg-contain flex-none m-[unset]">
      <h6 className="text-[2.5em] uppercase leading-[1.5] tracking-[-0.15vw]">{number}</h6>
      <h3 className="text-[3.5em] md:text-[4.5em] lg:text-[2.4em] leading-[1.5] lg:leading-none font-normal tracking-[-0.15vw]">
        {title[0]}
        <br />
        {title[1]}
      </h3>
      <img
        src={icon}
        loading="lazy"
        alt="icon"
        className="mt-[9vw] lg:mt-[5.3vw] lg:min-w-[5vw] min-w-[15vw] lg:max-w-[5vw] max-w-[15vw]"
      />
      <Link
        href="/"
        className="uppercase px-[1.5vw] py-[1.2vw] lg:py-[0.6vw] rounded-[2vw] text-[2em] lg:text-[0.9em] m-auto absolute bottom-[5vw] lg:bottom-[1.8vw] right-[5vw] lg:right-[2vw]"
        style={{ background: 'linear-gradient(66deg, rgba(169, 45, 76, 1) 24%, rgba(95, 42, 87, 1) 100%)' }}
      >
        EXPLORE
      </Link>
    </div>
  );
};
