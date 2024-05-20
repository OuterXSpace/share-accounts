import { ProductCard } from '../product-card';
import { IProductListProps } from './product-list.type';

export const ProductList: React.FC<IProductListProps> = () => {
  return (
    <div className="bg-white flex flex-col items-center mt-[30px] p-6 bg-[50% 50%]">
      <h2 className="uppercase text-[30px]">
        <strong>Sản phẩm </strong>
        Bán chạy
      </h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[20px]">
        <ProductCard
          img="https://gamikey.com/wp-content/uploads/2022/03/Netflix-510x510.jpg.webp"
          alt="product"
          title="Mua Tài khoản Netflix Premium "
          quantity={9810}
          category="Giải trí"
          price={149}
        />
        <ProductCard
          img="https://gamikey.com/wp-content/uploads/2022/03/Netflix-510x510.jpg.webp"
          alt="product"
          title="Mua Tài khoản Netflix Premium "
          quantity={9810}
          category="Giải trí"
          price={149}
        />
        <ProductCard
          img="https://gamikey.com/wp-content/uploads/2022/03/Netflix-510x510.jpg.webp"
          alt="product"
          title="Mua Tài khoản Netflix Premium "
          quantity={9810}
          category="Giải trí"
          price={149}
        />
        <ProductCard
          img="https://gamikey.com/wp-content/uploads/2022/03/Netflix-510x510.jpg.webp"
          alt="product"
          title="Mua Tài khoản Netflix Premium "
          quantity={9810}
          category="Giải trí"
          price={149}
        />
      </div>
    </div>
  );
};
