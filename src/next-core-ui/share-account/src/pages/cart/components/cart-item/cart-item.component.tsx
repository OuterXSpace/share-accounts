import Image from 'next/image';
import { CartItemPageProps } from './cart-item.type';
import Link from 'next/link';
import IonIcon from '@reacticons/ionicons';
import { FormattedCurrency } from '../../../../../../../components';

export const CartItem: React.FC<CartItemPageProps> = (props) => {
  const { item } = props;
  const { price, quantity, imageUrl, title, imageAlt, linkUrl, timeExpired } = item;
  const currency = 'VNĐ';
  return (
    <div className="flex flex-row gap-2 [&:not(:first-child)]:border-t py-2">
      <div className="min-w-[60px] min-h-[60px]">
        <Image src={imageUrl} alt={imageAlt} width={60} height={60} />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <Link href={linkUrl} className="text-red-500 font-bold text-[16px]">
            {title} - {timeExpired}
          </Link>
          <span className="text-[13px] text-gray-500">
            {quantity} x{' '}
            <strong>
              <FormattedCurrency value={price} isColored={false} /> {currency}
            </strong>{' '}
          </span>
        </div>
        <button>
          <IonIcon className="text-gray-200 text-[24px]" name="close-circle-outline" />
        </button>
      </div>
    </div>
  );
};
