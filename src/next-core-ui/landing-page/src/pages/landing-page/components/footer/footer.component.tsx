import { FooterProps } from './footer.type';

export const Footer: React.FC<FooterProps> = (props) => {
  const { data, className } = props;

  return (
    <section className={`section ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 border-t-2 border-[#f9fdfe] h-[1px] mx-[20px] w-full" />
        </div>
        <div className="row px-[30px] py-[20px]">
          <div className="col-sm-12">
            <div className="flex justify-between items-center flex-col lg:flex-row gap-2">
              <div className="text-[#ffffffbf] text-[16px] leading-1.6 text-center lg:text-start">
                {data?.object?.text}
              </div>
              <div className="text-[#ffffffbf] text-[16px] leading-1.6">icon</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
