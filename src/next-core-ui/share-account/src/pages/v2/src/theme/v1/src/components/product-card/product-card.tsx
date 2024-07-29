import IonIcon from '@reacticons/ionicons';
import { IProductCardProps } from './product-card.type';
import Link from 'next/link';
import { FormattedCurrency } from '../../../../../../../../../../../components';

export const ProductCard: React.FC<IProductCardProps> = (props) => {
  const {
    img = '',
    alt = '',
    title = '',
    originalPrice = 0,
    quantity = 0,
    category = '',
    linkUrl = '',
    currency = 'VNĐ',
  } = props;

  return (
    <Link href={linkUrl ?? ''} className="flex bg-white flex-col rounded-b-xl rounded-t-xl xl:flex-row xl:rounded-r-xl">
      <img src={img} alt={alt} className="xl:w-[140px] xl:h-auto rounded-t-xl xl:rounded-l-xl xl:rounded-tr-none" />
      <div className="p-2 flex gap-2 flex-col">
        <span className="font-bold text-xs">{title}</span>
        <div className="flex justify-between border-b pb-2 lg:pb-4">
          <span className="border px-1 rounded text-slate-500 border-slate-200 text-xs">{category}</span>
          <div className="text-slate-500 flex items-center text-xs">
            <IonIcon name="cart-outline" className="pr-1" />
            {quantity}
          </div>
        </div>
        <div className="flex justify-between items-center lg:pt-1 text-sm ">
          <span className="font-bold text-xs">
            <FormattedCurrency value={originalPrice} isColored={false} /> {currency}
          </span>
          <div
            className="p-[5px] rounded-full flex items-center justify-center cursor-pointer"
            style={{
              background: 'linear-gradient(180deg, #61d510 0, #51a814 100%)',
              boxShadow: '0 0 0 4px rgba(91, 192, 20, .24)',
              filter: 'drop-shadow(0 4px 8px rgba(76, 184, 0, .639))',
            }}
          >
            <img
              src="https://gamikey.com/wp-content/themes/flatsome-child/assets/image/cart.svg"
              alt="cart"
              className="w-[15px]"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
