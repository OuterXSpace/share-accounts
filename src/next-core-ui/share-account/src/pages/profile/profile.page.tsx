import IonIcon from '@reacticons/ionicons';
import { ProfilePageProps } from './profile.type';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { swiperData } from './dummy.mock';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const ProfilePage: React.FC<ProfilePageProps> = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const futureTime = new Date('2024-01-01T23:59:59').getTime();
    const intervalId = setInterval(() => {
      const nowTime = new Date().getTime();
      const newTime = futureTime - nowTime;

      const days = Math.floor(newTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((newTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((newTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((newTime % (1000 * 60)) / 1000);

      if (newTime < 0) {
        clearInterval(intervalId);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      {/* !banner */}
      <div className="banner mt-10 lg:-mt-4 flex items-center justify-center">
        <div className="swiper swiper-js swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
          <Swiper
            navigation
            pagination={{ type: 'bullets', clickable: true }}
            autoplay
            loop
            modules={[Autoplay, Navigation, Pagination]}
            className="swiper-wrapper h-64 lg:h-96 w-full lg:w-5/6 relative"
          >
            {swiperData.map((item) => (
              <SwiperSlide
                key={item.title}
                className="swiper-slide cursor-pointer w-full h-full rounded-xl flex items-center"
                style={{ backgroundImage: `url('${item.avatar}')` }}
              >
                <div className="w-3/4 md:w-1/2 lg:ml-10 p-6 bg-gray-300/50 lg:bg-transparent rounded-xl flex flex-col justify-start items-start gap-2 ml-4">
                  <h3 className="text-red-500 text-lg font-semibold lg:font-bold lg:text-xl">{item.title}</h3>
                  <h1 className="text-gray-800 text-2xl lg:text-4xl font-extrabold">{item.info}</h1>
                  <h4 className="text-gray-500 lg:text-xl lg:mb-4">{item.price}</h4>
                  <button className="font-semibold px-3 py-2 text-xs text-white bg-red-400 rounded-xl" type="button">
                    {item.button}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* ? Products and categories  */}
      <section className="w-full min-h-auto px-8 lg:px-0 lg:w-5/6 mx-auto mt-16 flex gap-8">
        <aside className="sticky top-0 hidden lg:flex flex-col lg:w-1/4 max-h-screen">
          <div className="aside_section overflow-y-auto">
            <div className="categories w-full rounded-xl p-4 bg-white border shadow-lg">
              <h1 className="text-xl font-semibold mb-4">CATEGORY</h1>
              <div className="border-b pb-3 text-lg text-gray-600">
                <details>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Shirt</a>
                    <span>300</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Shorts &amp; Jeans</a>
                    <span>30</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Jacket</a>
                    <span>50</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Dress &amp; Frock</a>
                    <span>120</span>
                  </div>
                  <summary>
                    <div className="flex items-center gap-2">
                      Clothes
                      <img
                        className="w-4 h-4"
                        src="https://azureapis.blob.core.windows.net/share-account/assets/images/icons/dress.svg"
                        alt="productPicture"
                      />
                    </div>
                  </summary>
                </details>
              </div>
              <div className="border-b pb-3 text-lg text-gray-600">
                <details>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Sports</a>
                    <span>300</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Formal</a>
                    <span>30</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Casual</a>
                    <span>50</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Safety Shoes</a>
                    <span>120</span>
                  </div>
                  <summary>
                    <div className="flex items-center gap-2">
                      Footwear
                      <img
                        className="w-4 h-4"
                        src="https://azureapis.blob.core.windows.net/share-account/assets/images/icons/shoes.svg"
                        alt="productPicture"
                      />
                    </div>
                  </summary>
                </details>
              </div>
              <div className="border-b pb-3 text-lg text-gray-600">
                <details>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Earrings</a>
                    <span>300</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Couple Rings</a>
                    <span>30</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Necklace</a>
                    <span>50</span>
                  </div>
                  <summary>
                    <div className="flex items-center gap-2">
                      Jewelry
                      <img
                        className="w-4 h-4"
                        src="https://azureapis.blob.core.windows.net/share-account/assets/images/icons/jewelry.svg"
                        alt="productPicture"
                      />
                    </div>
                  </summary>
                </details>
              </div>
              <div className="border-b pb-3 text-lg text-gray-600">
                <details>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Clothes Perfume</a>
                    <span>300</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Deodorant</a>
                    <span>30</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Jacket</a>
                    <span>50</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Dress &amp; Frock</a>
                    <span>120</span>
                  </div>
                  <summary>
                    <div className="flex items-center gap-2">
                      Perfume
                      <img
                        className="w-4 h-4"
                        src="https://azureapis.blob.core.windows.net/share-account/assets/images/icons/perfume.svg"
                        alt="productPicture"
                      />
                    </div>
                  </summary>
                </details>
              </div>
              <div className="border-b pb-3 text-lg text-gray-600">
                <details>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Shampoo</a>
                    <span>300</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Sunscreen</a>
                    <span>30</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Body Wash</a>
                    <span>50</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Makeup Kit</a>
                    <span>120</span>
                  </div>
                  <summary>
                    <div className="flex items-center gap-2">
                      Cosmetics
                      <img
                        className="w-4 h-4"
                        src="https://azureapis.blob.core.windows.net/share-account/assets/images/icons/cosmetics.svg"
                        alt="productPicture"
                      />
                    </div>
                  </summary>
                </details>
              </div>
              <div className="border-b pb-3 text-lg text-gray-600">
                <details>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Sunglasses</a>
                    <span>23</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Lenses</a>
                    <span>53</span>
                  </div>
                  <summary>
                    <div className="flex items-center gap-2">
                      Glasses
                      <img
                        className="w-4 h-4"
                        src="https://azureapis.blob.core.windows.net/share-account/assets/images/icons/glasses.svg"
                        alt="productPicture"
                      />
                    </div>
                  </summary>
                </details>
              </div>
              <div className="border-b pb-3 text-lg text-gray-600">
                <details>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Wallet</a>
                    <span>300</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Purse</a>
                    <span>30</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Gym Backpack</a>
                    <span>50</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm">
                    <a href="#">Shopping Bag</a>
                    <span>120</span>
                  </div>
                  <summary>
                    <div className="flex items-center gap-2">
                      Bags
                      <img
                        className="w-4 h-4"
                        src="https://azureapis.blob.core.windows.net/share-account/assets/images/icons/bag.svg"
                        alt="productPicture"
                      />
                    </div>
                  </summary>
                </details>
              </div>
            </div>
            <div className="bestsellers 2-72 h-auto mt-10 flex flex-col items-start justify-start gap-4">
              <h2 className="text-lg font-semibold">BEST SELLERS</h2>
              <div className="flex items-center justify-start gap-2">
                <div className="w-20 h-20 p-2 border shadow-lg bg-gray-300/20 rounded-md">
                  <img
                    className="w-full h-full"
                    src="https://azureapis.blob.core.windows.net/share-account/assets/images/products/1.jpg"
                    alt=""
                  />
                </div>
                <div className="text-gray-700">
                  <h4 className="text-gray-900">Baby Fabric Shoes</h4>
                  <div className="stars text-yellow-500">
                    <IonIcon name="star" />
                    <IonIcon name="star" />
                    <IonIcon name="star" />
                    <IonIcon name="star" />
                    <IonIcon name="star-half-outline" />
                  </div>
                  <div className="flex items-center justify-start gap-4">
                    <s className="text-gray-500">$14.00</s> <strong>$7.00</strong>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div className="w-20 h-20 p-2 border shadow-lg bg-gray-300/20 rounded-md">
                  <img
                    className="w-full h-full"
                    src="https://azureapis.blob.core.windows.net/share-account/assets/images/products/2.jpg"
                    alt=""
                  />
                </div>
                <div className="text-gray-700">
                  <h4 className="text-gray-900">Men's Hoodies T-Shirt</h4>
                  <div className="stars text-yellow-500">
                    <IonIcon name="star" />
                    <IonIcon name="star" />
                    <IonIcon name="star" />
                    <IonIcon name="star-half-outline" />
                    <IonIcon name="star-outline" />
                  </div>
                  <div className="flex items-center justify-start gap-4">
                    <s className="text-gray-500">$5.00</s> <strong>$2.00</strong>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div className="w-20 h-20 p-2 border shadow-lg bg-gray-300/20 rounded-md">
                  <img
                    className="w-full h-full"
                    src="https://azureapis.blob.core.windows.net/share-account/assets/images/products/3.jpg"
                    alt=""
                  />
                </div>
                <div className="text-gray-700">
                  <h4 className="text-gray-900">Girls T-Shirt</h4>
                  <div className="stars text-yellow-500">
                    <IonIcon name="star" />
                    <IonIcon name="star" />
                    <IonIcon name="star-half-outline" />
                    <IonIcon name="star-outline" />
                    <IonIcon name="star-outline" />
                  </div>
                  <div className="flex items-center justify-start gap-4">
                    <s className="text-gray-500">$10.00</s> <strong>$5.00</strong>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div className="w-20 h-20 p-2 border shadow-lg bg-gray-300/20 rounded-md">
                  <img
                    className="w-full h-full"
                    src="https://azureapis.blob.core.windows.net/share-account/assets/images/products/4.jpg"
                    alt=""
                  />
                </div>
                <div className="text-gray-700">
                  <h4 className="text-gray-900">Woolen Hat For Men</h4>
                  <div className="stars text-yellow-500">
                    <IonIcon name="star" />
                    <IonIcon name="star" />
                    <IonIcon name="star" />
                    <IonIcon name="star" />
                    <IonIcon name="star-half-outline" />
                  </div>
                  <div className="flex items-center justify-start gap-4">
                    <s className="text-gray-500">$24.00</s> <strong>$17.00</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="products w-full lg:w-3/4 flex flex-col">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="NewArrivals flex flex-col gap-4">
              <h1 className="text-xl font-semibold border-b pb-4">New Arrivals</h1>
              <div className="w-full h-28 bg-white border shadow-sm rounded-lg flex items-center justify-start gap-2 cursor-pointer">
                <div className="w-20 h-20 p-2">
                  <img
                    className="w-full h-full"
                    src="https://azureapis.blob.core.windows.net/share-account/assets/images/products/clothes-1.jpg"
                    alt=""
                  />
                </div>
                <div className="text-gray-700">
                  <h4 className="font-bold text-gray-900 text-sm">Relaxed Short Full...</h4>
                  <h4>Clothes</h4>
                  <div className="flex items-center justify-start gap-4">
                    <strong className="text-red-400">$7.00</strong>
                    <s className="text-gray-500">$14.00</s>
                  </div>
                </div>
              </div>
              <div className="w-full h-28 bg-white border shadow-sm rounded-lg flex items-center justify-start gap-2 cursor-pointer">
                <div className="w-20 h-20 p-2">
                  <img
                    className="w-full h-full"
                    src="https://azureapis.blob.core.windows.net/share-account/assets/images/products/clothes-2.jpg"
                    alt=""
                  />
                </div>
                <div className="text-gray-700">
                  <h4 className="font-bold text-gray-900 text-sm">Girls Pnk Embro Desi...</h4>
                  <h4>Clothes</h4>
                  <div className="flex items-center justify-start gap-4">
                    <strong className="text-red-400">$21.00</strong>
                    <s className="text-gray-500">$24.00</s>
                  </div>
                </div>
              </div>
              <div className="w-full h-28 bg-white border shadow-sm rounded-lg flex items-center justify-start gap-2 cursor-pointer">
                <div className="w-20 h-20 p-2">
                  <img
                    className="w-full h-full"
                    src="https://azureapis.blob.core.windows.net/share-account/assets/images/products/clothes-3.jpg"
                    alt=""
                  />
                </div>
                <div className="text-gray-700">
                  <h4 className="font-bold text-gray-900 text-sm">Black Floral Wrap...</h4>
                  <h4>Clothes</h4>
                  <div className="flex items-center justify-start gap-4">
                    <strong className="text-red-400">$5.00</strong>
                    <s className="text-gray-500">$15.00</s>
                  </div>
                </div>
              </div>
              <div className="w-full h-28 bg-white border shadow-sm rounded-lg flex items-center justify-start gap-2 cursor-pointer">
                <div className="w-20 h-20 p-2">
                  <img
                    className="w-full h-full"
                    src="https://azureapis.blob.core.windows.net/share-account/assets/images/products/shirt-1.jpg"
                    alt=""
                  />
                </div>
                <div className="text-gray-700">
                  <h4 className="font-bold text-gray-900 text-sm">Pure Garment Dye...</h4>
                  <h4>Mens Fashion</h4>
                  <div className="flex items-center justify-start gap-4">
                    <strong className="text-red-400">$30.00</strong>
                    <s className="text-gray-500">$40.00</s>
                  </div>
                </div>
              </div>
            </div>
            <div className="Trending flex flex-col gap-4">
              <h1 className="text-xl font-semibold border-b pb-4">Trending</h1>
              <div className="w-full h-28 bg-white border shadow-sm rounded-lg flex items-center justify-start gap-2 cursor-pointer">
                <div className="w-20 h-20 p-2">
                  <img
                    className="w-full h-full"
                    src="https://azureapis.blob.core.windows.net/share-account/assets/images/products/sports-5.jpg"
                    alt=""
                  />
                </div>
                <div className="text-gray-700">
                  <h4 className="font-bold text-gray-900 text-sm">Running &amp; Trekking...</h4>
                  <h4>Sports</h4>
                  <div className="flex items-center justify-start gap-4">
                    <strong className="text-red-400">$82.00</strong>
                    <s className="text-gray-500">$101.00</s>
                  </div>
                </div>
              </div>
              <div className="w-full h-28 bg-white border shadow-sm rounded-lg flex items-center justify-start gap-2 cursor-pointer">
                <div className="w-20 h-20 p-2">
                  <img
                    className="w-full h-full"
                    src="https://azureapis.blob.core.windows.net/share-account/assets/images/products/sports-2.jpg"
                    alt=""
                  />
                </div>
                <div className="text-gray-700">
                  <h4 className="font-bold text-gray-900 text-sm">Trekking &amp; Running...</h4>
                  <h4>Sports</h4>
                  <div className="flex items-center justify-start gap-4">
                    <strong className="text-red-400">$78.00</strong>
                    <s className="text-gray-500">$93.00</s>
                  </div>
                </div>
              </div>
              <div className="w-full h-28 bg-white border shadow-sm rounded-lg flex items-center justify-start gap-2 cursor-pointer">
                <div className="w-20 h-20 p-2">
                  <img
                    className="w-full h-full"
                    src="https://azureapis.blob.core.windows.net/share-account/assets/images/products/party-wear-1.jpg"
                    alt=""
                  />
                </div>
                <div className="text-gray-700">
                  <h4 className="font-bold text-gray-900 text-sm">Womens Party Wea...</h4>
                  <h4>Party Wear</h4>
                  <div className="flex items-center justify-start gap-4">
                    <strong className="text-red-400">$27.00</strong>
                    <s className="text-gray-500">$32.00</s>
                  </div>
                </div>
              </div>
              <div className="w-full h-28 bg-white border shadow-sm rounded-lg flex items-center justify-start gap-2 cursor-pointer">
                <div className="w-20 h-20 p-2">
                  <img
                    className="w-full h-full"
                    src="https://azureapis.blob.core.windows.net/share-account/assets/images/products/sports-3.jpg"
                    alt=""
                  />
                </div>
                <div className="text-gray-700">
                  <h4 className="font-bold text-gray-900 text-sm">Sports Claw Women...</h4>
                  <h4>Sports</h4>
                  <div className="flex items-center justify-start gap-4">
                    <strong className="text-red-400">$12.00</strong>
                    <s className="text-gray-500">$24.00</s>
                  </div>
                </div>
              </div>
            </div>
            <div className="TopRated flex flex-col gap-4">
              <h1 className="text-xl font-semibold border-b pb-4">Top Rated</h1>
              <div className="w-full h-28 bg-white border shadow-sm rounded-lg flex items-center justify-start gap-2 cursor-pointer">
                <div className="w-20 h-20 p-2">
                  <img
                    className="w-full h-full"
                    src="https://azureapis.blob.core.windows.net/share-account/assets/images/products/watch-3.jpg"
                    alt=""
                  />
                </div>
                <div className="text-gray-700">
                  <h4 className="font-bold text-gray-900 text-sm">Pocket Watch Leather...</h4>
                  <h4>Watches</h4>
                  <div className="flex items-center justify-start gap-4">
                    <strong className="text-red-400">$32.00</strong>
                    <s className="text-gray-500">$53.00</s>
                  </div>
                </div>
              </div>
              <div className="w-full h-28 bg-white border shadow-sm rounded-lg flex items-center justify-start gap-2 cursor-pointer">
                <div className="w-20 h-20 p-2">
                  <img
                    className="w-full h-full"
                    src="https://azureapis.blob.core.windows.net/share-account/assets/images/products/jewellery-3.jpg"
                    alt=""
                  />
                </div>
                <div className="text-gray-700">
                  <h4 className="font-bold text-gray-900 text-sm">Silver Deer Heart Neck...</h4>
                  <h4>Jewellery</h4>
                  <div className="flex items-center justify-start gap-4">
                    <strong className="text-red-400">$12.00</strong>
                    <s className="text-gray-500">$32.00</s>
                  </div>
                </div>
              </div>
              <div className="w-full h-28 bg-white border shadow-sm rounded-lg flex items-center justify-start gap-2 cursor-pointer">
                <div className="w-20 h-20 p-2">
                  <img
                    className="w-full h-full"
                    src="https://azureapis.blob.core.windows.net/share-account/assets/images/products/perfume.jpg"
                    alt=""
                  />
                </div>
                <div className="text-gray-700">
                  <h4 className="font-bold text-gray-900 text-sm">Titan 100 Ml Womens</h4>
                  <h4>Perfume</h4>
                  <div className="flex items-center justify-start gap-4">
                    <strong className="text-red-400">$74.00</strong>
                    <s className="text-gray-500">$104.00</s>
                  </div>
                </div>
              </div>
              <div className="w-full h-28 bg-white border shadow-sm rounded-lg flex items-center justify-start gap-2 cursor-pointer">
                <div className="w-20 h-20 p-2">
                  <img
                    className="w-full h-full"
                    src="https://azureapis.blob.core.windows.net/share-account/assets/images/products/belt.jpg"
                    alt=""
                  />
                </div>
                <div className="text-gray-700">
                  <h4 className="font-bold text-gray-900 text-sm">Men's Leather Rever...</h4>
                  <h4>Belt</h4>
                  <div className="flex items-center justify-start gap-4">
                    <strong className="text-red-400">$17.00</strong>
                    <s className="text-gray-500">$23.00</s>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="day my-10">
            <h1 className="font-semibold text-xl border-b py-4">Deal Of The Day</h1>
            <div className="mt-10 w-full h-auto border rounded-lg flex flex-col lg:flex-row justify-between">
              <img
                className="lg:w-1/2"
                src="https://azureapis.blob.core.windows.net/share-account/assets/images/products/shampoo.jpg"
                alt=""
              />
              <div className="lg:w-1/2 flex flex-col items-start gap-2 p-4">
                <div className="stars text-yellow-500">
                  <IonIcon name="star" />
                  <IonIcon name="star" />
                  <IonIcon name="star" />
                  <IonIcon name="star" />
                  <IonIcon name="star-half-outline" />
                </div>
                <h4 className="font-bold text-lg">SHAMPOO, CONDITIONER &amp; FACEWASH PACKS</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor
                </p>
                <div>
                  <strong className="text-red-400 font-bold text-xl">$150.00</strong>
                  <s className="text-xl text-gray-500">$200.00</s>
                </div>
                <button className="bg-red-500 text-white rounded-xl py-2 px-4 text-md font-semibold">
                  ADD TO CART
                </button>
                <h3 className="mt-4 font-semibold text-sm">HURRY UP! OFFER ENDS IN:</h3>
                <div
                  id="reverseTimer"
                  className="flex justify-between items-center gap-4 font-semibold text-sm text-black"
                >
                  <h1
                    className="flex flex-col items-center justify-center bg-gray-300/20 border shadow-lg p-2 w-12 h-12 rounded-lg"
                    id="days"
                  >
                    {countdown?.days}
                  </h1>
                  <h1
                    className="flex flex-col items-center justify-center bg-gray-300/20 border shadow-lg p-2 w-12 h-12 rounded-lg"
                    id="hour"
                  >
                    {countdown?.hours}
                  </h1>

                  <h1
                    className="flex flex-col items-center justify-center bg-gray-300/20 border shadow-lg p-2 w-12 h-12 rounded-lg"
                    id="minute"
                  >
                    {countdown?.minutes}
                  </h1>

                  <h1
                    className="flex flex-col items-center justify-center bg-gray-300/20 border shadow-lg p-2 w-12 h-12 rounded-lg"
                    id="second"
                  >
                    {countdown?.seconds}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="newProductsContainer">
            <h1 className="font-semibold text-xl border-b py-4">New Products</h1>
            <div id="newProducts" className="newProducts grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" />
          </div>
        </div>
      </section>
      <div className="mt-10 w-full px-8 lg:px-0 lg:w-5/6 mx-auto flex flex-wrap lg:flex-nowrap flex-col lg:flex-row gap-8 mb-20">
        <div className="testimonial w-full lg:w-2/6">
          <h1 className="text-xl font-semibold border-b pb-4 mb-8">Testimonial</h1>
          <div
            style={{ height: '23rem' }}
            className="w-full border rounded-xl flex flex-col items-center justify-center p-4"
          >
            <img
              className="w-20 h-20 rounded-full"
              src="https://azureapis.blob.core.windows.net/share-account/assets/images/testimonial-1.jpg"
              alt="testimonial"
            />
            <h2 className="text-lg font-bold text-gray-600">ALAN DOE</h2>
            <h5 className="text-md">CEO &amp; Founder Invision</h5>
            <img
              className="w-6 h-6 my-4"
              src="https://azureapis.blob.core.windows.net/share-account/assets/images/icons/quotes.svg"
              alt="quotes"
            />
            <p className="text-sm w-4/5 mx-auto text-center">
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.
            </p>
          </div>
        </div>
        <div
          className="w-full lg:w-3/6 rounded-lg flex items-center justify-center"
          style={{
            backgroundImage:
              'url("https://azureapis.blob.core.windows.net/share-account/assets/images/cta-banner.jpg")',
          }}
        >
          <div className="flex flex-col items-center justify-center p-8 gap-4 bg-gray-100/70 rounded-lg w-3/4">
            <button className="bg-gray-900 text-white p-2 rounded-lg">25% DISCOUNT</button>
            <h1 className="w-56 text-4xl font-bold text-center text-gray-800">Summer Collection</h1>
            <h5 className="text-lg font-semibold text-gray-500">Starting @ $10</h5>
            <button className="text-lg font-semibold text-gray-500">SHOP NOW</button>
          </div>
        </div>
        <div className="OurServices w-full lg:w-2/6">
          <h1 className="text-xl font-semibold border-b pb-4 mb-8">Our Services</h1>
          <div
            style={{ height: '23rem' }}
            className="w-full border rounded-xl flex flex-wrap justify-between lg:flex-col items-center lg:justify-center p-4 lg:px-8 lg:gap-8"
          >
            <div className="w-1/2 lg:w-full flex justify-center lg:justify-between items-center gap-2">
              <IonIcon className="text-red-500 text-4xl" name="boat-outline" />
              <div>
                <h3 className="font-semibold text-gray-700">Worldwide Delivery</h3>
                <p className="text-xs text-gray-600">For Order Over $100</p>
              </div>
            </div>
            <div className="w-1/2 lg:w-full flex justify-center lg:justify-between items-center gap-2">
              <IonIcon className="text-red-500 text-4xl" name="rocket-outline" />
              <div>
                <h3 className="font-semibold text-gray-700">Worldwide Delivery</h3>
                <p className="text-xs text-gray-600">For Order Over $100</p>
              </div>
            </div>
            <div className="w-1/2 lg:w-full flex justify-center lg:justify-between items-center gap-2">
              <IonIcon className="text-red-500 text-4xl" name="call-outline" />
              <div>
                <h3 className="font-semibold text-gray-700">Worldwide Delivery</h3>
                <p className="text-xs text-gray-600">For Order Over $100</p>
              </div>
            </div>
            <div className="w-1/2 lg:w-full flex justify-center lg:justify-between items-center gap-2">
              <IonIcon className="text-red-500 text-4xl" name="arrow-undo-outline" />
              <div>
                <h3 className="font-semibold text-gray-700">Worldwide Delivery</h3>
                <p className="text-xs text-gray-600">For Order Over $100</p>
              </div>
            </div>
            <div className="w-1/2 lg:w-full flex justify-center lg:justify-between items-center gap-2">
              <IonIcon className="text-red-500 text-4xl" name="ticket-outline" />
              <div>
                <h3 className="font-semibold text-gray-700">Worldwide Delivery</h3>
                <p className="text-xs text-gray-600">For Order Over $100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto flex my-10">
        <div className="swiper blog_swiper">
          <div className="swiper-wrapper" id="blog_swiper" />
          <div className="swiper-scrollbar" />
        </div>
      </div>
    </main>
  );
};
