import { FooterProps } from './footer.type';

export const Footer: React.FC<FooterProps> = (props) => {
  const { data, className } = props;

  return (
    <section className={`section ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="border-t-2 border-[#f9fdfe]" />
          </div>
          <div className="col-sm-12">
            <div className="flex justify-between items-center h-[60px]">
              <div className="text-[#ffffffbf] text-[16px] leading-1.6">{data?.object?.text}</div>
              <div className="text-[#ffffffbf] text-[16px] leading-1.6">icon</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
