import Image from 'next/image';
import Link from 'next/link';
import IonIcon from '@reacticons/ionicons';
import { FormattedCurrency } from '../../../../../../../components';
import { ICartItemPageProps } from './cart-item.type';

export const CartItem: React.FC<ICartItemPageProps> = (props) => {
  const { item } = props;
  const { originalPrice, quantity, imageUrl, title, imageAlt, linkUrl, durationLabel } = item;
  const currency = 'VNĐ';
  return (
    <div className="flex flex-row gap-2 [&:not(:first-child)]:border-t py-2">
      <div className="min-w-[60px] min-h-[60px]">
        <Image src={imageUrl} alt={imageAlt} width={60} height={60} />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <Link href={linkUrl} className="text-red-500 font-bold text-[16px]">
            {title} - {durationLabel}
          </Link>
          <span className="text-[13px] text-gray-500">
            {quantity} x{' '}
            <strong>
              <FormattedCurrency value={originalPrice} isColored={false} /> {currency}
            </strong>{' '}
          </span>
        </div>
        <button>
          <IonIcon className="text-gray-200 text-[16px] bg-red-500 rounded-full p-1" name="close-outline" />
        </button>
      </div>
    </div>
  );
};
