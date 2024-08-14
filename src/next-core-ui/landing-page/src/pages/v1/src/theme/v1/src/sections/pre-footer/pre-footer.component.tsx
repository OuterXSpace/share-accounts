import Link from 'next/link';
import { IPreFooterSectionProps } from './pre-footer.type';

export const PreFooterSection: React.FC<IPreFooterSectionProps> = (props) => {
  const { data, className } = props;

  return (
    <div className="cmpt__prefooter-cta background-cover ">
      <h2 className="headline2 text-white position-relative">{data?.object?.title}</h2>
      <h3 className="headline2 text-white margin-top-3">
        <strong />
      </h3>
      <div className="cta-wrapper">
        <Link className="cta" href={data?.object?.button?.link}>
          {data?.object?.button?.label}
        </Link>
      </div>
    </div>
  );
};
