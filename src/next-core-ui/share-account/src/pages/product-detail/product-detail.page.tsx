import { ProductDetailPageProps } from './product-detail.type';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Slider } from './slider/slider.component';
import IonIcon from '@reacticons/ionicons';
import { ProductCard } from '../../components/product-card';

export const ProductDetailPage: React.FC<ProductDetailPageProps> = (props) => {
  const { routerId, wuiWelcomePopup } = props;

  const data = [
    {
      id: 1,
      imageUrl: 'https://gamikey.com/wp-content/uploads/2022/03/Spotify-2.png',
      link: '',
    },
    {
      id: 2,
      imageUrl: 'https://gamikey.com/wp-content/uploads/2023/07/68-1024x1024.png',
      link: '',
    },
    {
      id: 3,
      imageUrl: 'https://gamikey.com/wp-content/uploads/2023/07/63-1024x1024.png',
      link: '',
    },
    {
      id: 4,
      imageUrl: 'https://gamikey.com/wp-content/uploads/2023/07/65-1024x1024.png',
      link: '',
    },
    {
      id: 5,
      imageUrl: 'https://gamikey.com/wp-content/uploads/2023/07/68-1024x1024.png',
      link: '',
    },
    {
      id: 6,
      imageUrl: 'https://gamikey.com/wp-content/uploads/2022/03/Spotify-2.png',
      link: '',
    },
    {
      id: 7,
      imageUrl: 'https://gamikey.com/wp-content/uploads/2022/03/Spotify-2.png',
      link: '',
    },
  ];
  return (
    <main className="pt-[120px]">
      <div className="container p-12">
        <div className="row">
          <div className="col-sm-6">
            <Slider data={data} />
          </div>
          <div className="col-sm-6">
            <div className="flex flex-col gap-4">
              <div className="section font-sans text-[32px] font-semibold leading-snug text-accent">
                Mua Tài khoản Youtube Premium chính chủ
              </div>
              <div className="section font-sans text-[20px] font-semibold leading-snug text-primary">
                149,000đ – 1,299,000đ
              </div>
              <div className="section">
                <div className="font-sans text-[15px] font-semibold leading-snug text-gray-1">Thời hạn</div>
                <div className="button-group flex flex-wrap gap-[15px] pt-2">
                  <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                    1 Tháng
                  </button>
                  <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                    2 Tháng
                  </button>
                  <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                    3 Tháng
                  </button>
                  <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                    4 Tháng
                  </button>
                  <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                    5 Tháng
                  </button>
                  <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                    6 Tháng
                  </button>
                  <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                    7 Tháng
                  </button>
                  <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                    8 Tháng
                  </button>
                  <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                    9 Tháng
                  </button>
                  <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                    10 Tháng
                  </button>
                  <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                    11 Tháng
                  </button>
                  <button className="font-semibold px-3 py-2 text-xs text-black bg-white rounded-xl" type="button">
                    12 Tháng
                  </button>
                </div>
              </div>

              <div className="section">
                <div className="font-sans text-[15px] font-semibold leading-snug text-gray-1 pb-2">Email</div>
                <input
                  className="rounded-md block w-full border border-gray-4 bg-white text-sm px-4 py-2"
                  id="email"
                  type="email"
                  placeholder="Nhập email cần nâng cấp của bạn"
                />
              </div>

              <div className="section">
                <div className="button-group flex flex-wrap gap-[15px] pt-2">
                  <button
                    className="inline-flex items-center justify-center px-4 py-3 font-semibold text-sm text-white bg-success rounded-xl"
                    type="button"
                  >
                    <IonIcon className="pr-1 text-base" name="card-outline" />
                    Mua ngay
                  </button>
                  <button
                    className="inline-flex items-center justify-center px-4 py-3 font-semibold text-sm text-white bg-primary-dark rounded-xl"
                    type="button"
                  >
                    <IonIcon className="pr-1 text-base" name="cart-outline" />
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container product-description">
        <div className="row">
          <div className="col">
            <div className="font-sans text-[20px] font-semibold leading-snug text-gray-1">MÔ TẢ SẢN PHẨM</div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 pt-9">
              {/* <div dangerouslySetInnerHTML={{ __html: data?.content || '' }} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container product-suggestion pb-10">
        <div className="row">
          <div className="col">
            <div className="font-sans text-[20px] font-semibold leading-snug text-gray-1">SẢN PHẨM TƯƠNG TỰ</div>
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
