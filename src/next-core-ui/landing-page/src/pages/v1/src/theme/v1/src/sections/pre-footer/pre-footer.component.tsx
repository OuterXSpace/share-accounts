import Link from 'next/link';
import { IPreFooterSectionProps } from './pre-footer.type';

export const PreFooterSection: React.FC<IPreFooterSectionProps> = (props) => {
  const { data, className } = props;

  return (
    <div className="bg-gradient-to-br from-[#092b48] via-[#06253c] to-[#041c2c] bg-[length:200%_200%] bg-[position:0_0] p-[145px_30px] text-center relative z-[3]">
      <h2 className="text-white text-[1.875rem] leading-[1.33] tracking-[0] font-normal">
        Ready to get started? Learn more about what we do in your industry.
      </h2>
      <div className="mt-[48px]">
        <div className="inline-block relative">
          <div className="m-[0_38px_0_20px] w-auto min-w-[200px] text-sm cursor-pointer min-h-[60px] relative px-[30px] shadow-[inset_-1px_-1px_0_#fff,_inset_1px_1px_#fff,_inset_1px_-1px_0_#fff,_inset_-1px_1px_0_#fff]">
            <span className="pr-[20px] text-white text-sm mb-[10px] font-medium flex min-h-[60px] items-center relative capitalize">
              Find your industry
            </span>
            <ul className="max-h-0 absolute top-[60px] left-0 transition-[max-height,padding] duration-300 ease-in overflow-hidden z-10 w-full pl-0 ml-0 text-left list-none block text-[1.125rem] leading-[1.3] font-light bg-[#041c2c] background-black-pearl">
              <li className="bg-white text-[#041c2c] px-[30px] py-[18px] cursor-pointer text-xs relative ml-0 list-none block leading-[1.3] font-light text-white">
                <Link href="/industries/consumer-industrial-products" target="">
                  Consumer &amp; Industrial Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
