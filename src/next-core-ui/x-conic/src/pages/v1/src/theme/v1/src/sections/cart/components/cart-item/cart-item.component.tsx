import Image from 'next/image';
import Link from 'next/link';
import IonIcon from '@reacticons/ionicons';
import { ICartItemPageProps } from './cart-item.type';
import { FormattedCurrency } from '../../../../../../../../../../../../../components';
import { useMemo } from 'react';

export const CartItem: React.FC<ICartItemPageProps> = (props) => {
  const { item, removeFromCart } = props;

  const { quantity, price, product, variants } = item;

  const { id, imageUrl, title, imageAlt, linkUrl, durations } = product;

  const duration = useMemo(() => {
    return durations?.filter((i) => i?.id === variants)[0];
  }, [durations, variants]);

  const currency = 'VNĐ';

  return (
    <div className="flex flex-row gap-2 [&:not(:first-child)]:border-t py-2">
      <div className="min-w-[60px] min-h-[60px]">
        <Image src={imageUrl} alt={imageAlt} width={60} height={60} />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <Link href={linkUrl} className="text-red-500 font-bold text-[16px]">
            {title} - {duration?.label}
          </Link>
          <span className="text-[13px] text-gray-500">
            {quantity} x{' '}
            <strong>
              <FormattedCurrency value={quantity * price} isColored={false} /> {currency}
            </strong>{' '}
          </span>
        </div>
        <button className="text-gray-200 text-[16px]" onClick={() => removeFromCart(id)}>
          <IonIcon name="close-outline" className="bg-red-500 p-1 rounded-full" />
        </button>
      </div>
    </div>
  );
};
