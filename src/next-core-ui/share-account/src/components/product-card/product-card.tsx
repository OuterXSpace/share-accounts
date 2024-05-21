import IonIcon from '@reacticons/ionicons';
import { IProductCardProps } from './product-card.type';

export const ProductCard: React.FC<IProductCardProps> = (props) => {
  const { img, alt, title, price, quantity, category } = props;
  return (
    <div className="flex gap-2 bg-[#f0f4ff] flex-col rounded-b-xl xl:flex-row  xl:rounded-r-xl">
      <img src={img} alt={alt} className="xl:w-3/6 xl:h-auto rounded-t-xl xl:rounded-l-xl  xl:rounded-tr-none" />
      <div className="py-4 px-4 flex gap-2 flex-col">
        <span className="font-bold">{title}</span>
        <div className="flex justify-between border-b pb-4">
          <span className="border px-1 rounded text-slate-500 border-slate-300">{category}</span>
          <div className="text-slate-500 flex items-center">
            <IonIcon name="bag-handle-outline" className="text-[18px]" />
            {quantity}
          </div>
        </div>
        <div className="flex justify-between items-center pt-4">
          <span className="font-bold">{price},000đ</span>
          <div
            className="w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer"
            style={{
              background: 'linear-gradient(180deg, #61d510 0, #51a814 100%)',
              boxShadow: '0 0 0 4px rgba(91, 192, 20, .24)',
              filter: 'drop-shadow(0 4px 8px rgba(76, 184, 0, .639))',
            }}
          >
            <img src="https://gamikey.com/wp-content/themes/flatsome-child/assets/image/cart.svg" alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
};
