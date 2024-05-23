import { ProductCard } from '../product-card';
import { IProductListProps } from './product-list.type';

export const ProductList: React.FC<IProductListProps> = () => {
  return (
    <div className="container flex flex-col items-center mt-[30px] p-6 bg-[50% 50%]">
      <div className="row">
        <div className="col">
          <div className="tt-home-page__section-header flex flex-col items-center gap-4">
            <h4 className="tt-home-page__section-heading m-0 pd-0 text-[44px] font-bold text-accent">
              Sản phẩm bán chạy
            </h4>
            <div className="tt-home-page__section-subheading max-w-[40%] text-lg text-center font-extralight leading-[1.25em] text-white">
              Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 pt-9">
            <ProductCard
              img="https://gamikey.com/wp-content/uploads/2022/03/Netflix-510x510.jpg.webp"
              alt="product"
              title="Mua Tài khoản Netflix Premium "
              quantity={9810}
              category="Giải trí"
              price={149}
            />
            <ProductCard
              img="https://gamikey.com/wp-content/uploads/2022/03/Spotify-2-510x510.png.webp"
              alt="product"
              title="Mua Tài khoản Netflix Premium "
              quantity={9810}
              category="Giải trí"
              price={149}
            />
            <ProductCard
              img="https://gamikey.com/wp-content/uploads/2022/03/Image-product-5-Youtube-510x510.png.webp"
              alt="product"
              title="Mua Tài khoản Netflix Premium "
              quantity={9810}
              category="Giải trí"
              price={149}
            />
            <ProductCard
              img="https://gamikey.com/wp-content/uploads/2024/05/4-1-510x510.png"
              alt="product"
              title="Mua Tài khoản Netflix Premium "
              quantity={9810}
              category="Giải trí"
              price={149}
            />
            <ProductCard
              img="https://gamikey.com/wp-content/uploads/2024/05/tinder-1-min-510x510.png"
              alt="product"
              title="Mua Tài khoản Netflix Premium "
              quantity={9810}
              category="Giải trí"
              price={149}
            />
            <ProductCard
              img="https://gamikey.com/wp-content/uploads/2024/04/Perplexity-Product-510x510.png"
              alt="product"
              title="Mua Tài khoản Netflix Premium "
              quantity={9810}
              category="Giải trí"
              price={149}
            />
            <ProductCard
              img="https://gamikey.com/wp-content/uploads/2023/12/movie-pass-510x510.jpeg"
              alt="product"
              title="Mua Tài khoản Netflix Premium "
              quantity={9810}
              category="Giải trí"
              price={149}
            />
            <ProductCard
              img="https://gamikey.com/wp-content/uploads/2024/04/Finale-2-Pro-510x510.png"
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
              img="https://gamikey.com/wp-content/uploads/2022/03/Spotify-2-510x510.png.webp"
              alt="product"
              title="Mua Tài khoản Netflix Premium "
              quantity={9810}
              category="Giải trí"
              price={149}
            />
            <ProductCard
              img="https://gamikey.com/wp-content/uploads/2022/03/Image-product-5-Youtube-510x510.png.webp"
              alt="product"
              title="Mua Tài khoản Netflix Premium "
              quantity={9810}
              category="Giải trí"
              price={149}
            />
            <ProductCard
              img="https://gamikey.com/wp-content/uploads/2024/05/1-3-510x510.jpg"
              alt="product"
              title="Mua Tài khoản Netflix Premium "
              quantity={9810}
              category="Giải trí"
              price={149}
            />
          </div>

          <div className="flex flex-col items-center gap-4 pt-9">
            <h4 className="tt-home-page__section-heading m-0 pd-0 text-[44px] font-bold text-accent">
              Trải nghiệm ngay
            </h4>
            <div className="max-w-[40%] text-lg text-center font-extralight leading-[1.25em] text-white">
              Bùng nổ deal giá rẻ với shareaccount.com
            </div>
          </div>

          <div className="section-body">
            <div className="grid grid-cols-2">
              <div className="flex flex-col justify-center gap-2">
                <h5 className="text-3xl font-bold text-accent">
                  Mua tài khoản Netflix giá rẻ chính chủ Việt Nam ở đâu?
                </h5>
                <div className="text-lg font-light leading-[1.7em] text-white">
                  Chúng tôi cung cấp duy nhất các tài khoản Netflix premium 4K, Full HD giá rẻ nhất thị trường, chính
                  chủ ở Việt Nam. Giá chỉ từ 49.000đ 1 tháng, giúp bạn tối ưu chi phí.
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="w-full p-10"
                  src="https://muataikhoannetflixvn.com/wp-content/uploads/2024/04/KM-muataikhoannetflixvn.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
