/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { IFooterTheme02Props } from './footer.type';
import IonIcon from '@reacticons/ionicons';

export const FooterTheme02: React.FC<IFooterTheme02Props> = () => {
  return (
    <footer className="footer bg-[#212121]">
      <div className="brands flex flex-col justify-start items-start gap-4 px-6 py-8 md:px-8 md:py-10 lg:px-16 lg:py-12">
        <h3 className="text-red-400 font-semibold text-md lg:text-lg">BRAND DIRECTORY</h3>
        <div className="fashion flex flex-wrap gap-2 mr-4 text-sm lg:text-md">
          <h4 className="font-semibold text-[darkgray]">FASHION:</h4>
          <a className="text-gray-500" href="#">
            T-Shirt |
          </a>
          <a className="text-gray-500" href="#">
            Shirts |
          </a>
          <a className="text-gray-500" href="#">
            Jacket |
          </a>
          <a className="text-gray-500" href="#">
            Dress &amp; Frock |
          </a>
          <a className="text-gray-500" href="#">
            Innerwear |
          </a>
          <a className="text-gray-500" href="#">
            Hosiery
          </a>
        </div>
        <div className="footwear flex flex-wrap gap-2 mr-4 text-sm lg:text-md">
          <h4 className="font-semibold text-[darkgray]">FOOTWEAR :</h4>
          <a className="text-gray-500" href="#">
            Sports |
          </a>
          <a className="text-gray-500" href="#">
            Formal |
          </a>
          <a className="text-gray-500" href="#">
            Boots |
          </a>
          <a className="text-gray-500" href="#">
            Casua |
          </a>
          <a className="text-gray-500" href="#">
            Cowboy Shoes |
          </a>
          <a className="text-gray-500" href="#">
            Party Wear Shoes |
          </a>
          <a className="text-gray-500" href="#">
            Branded |
          </a>
          <a className="text-gray-500" href="#">
            Firstcopy |
          </a>
          <a className="text-gray-500" href="#">
            Long Shoes
          </a>
        </div>
        <div className="jewellery flex flex-wrap gap-2 mr-4 text-sm lg:text-md">
          <h4 className="font-semibold text-[darkgray]">JEWELLERY :</h4>
          <a className="text-gray-500" href="#">
            Necklace |
          </a>
          <a className="text-gray-500" href="#">
            Earrings |
          </a>
          <a className="text-gray-500" href="#">
            Couple Rings |
          </a>
          <a className="text-gray-500" href="#">
            Pendants |
          </a>
          <a className="text-gray-500" href="#">
            Crystal |
          </a>
          <a className="text-gray-500" href="#">
            Bangles |
          </a>
          <a className="text-gray-500" href="#">
            Bracelets |
          </a>
          <a className="text-gray-500" href="#">
            Nosepin |
          </a>
          <a className="text-gray-500" href="#">
            Chain |
          </a>
          <a className="text-gray-500" href="#">
            Earrings |
          </a>
          <a className="text-gray-500" href="#">
            Couple Rings
          </a>
        </div>
        <div className="cosmetics flex flex-wrap gap-2 mr-4 text-sm lg:text-md">
          <h4 className="font-semibold text-[darkgray]">COSMETICS :</h4>
          <a className="text-gray-500" href="#">
            Shampoo |
          </a>
          <a className="text-gray-500" href="#">
            Bodywash |
          </a>
          <a className="text-gray-500" href="#">
            Facewash |
          </a>
          <a className="text-gray-500" href="#">
            Makeup Kit |
          </a>
          <a className="text-gray-500" href="#">
            Liner |
          </a>
          <a className="text-gray-500" href="#">
            Lipstick |
          </a>
          <a className="text-gray-500" href="#">
            Prefume |
          </a>
          <a className="text-gray-500" href="#">
            Body Soap |
          </a>
          <a className="text-gray-500" href="#">
            Scrub |
          </a>
          <a className="text-gray-500" href="#">
            Hair Gel |
          </a>
          <a className="text-gray-500" href="#">
            Hair Colors |
          </a>
          <a className="text-gray-500" href="#">
            Hair Dye |
          </a>
          <a className="text-gray-500" href="#">
            Sunscreen |
          </a>
          <a className="text-gray-500" href="#">
            Skin Loson |
          </a>
          <a className="text-gray-500" href="#">
            Liner |
          </a>
          <a className="text-gray-500" href="#">
            Lipstick
          </a>
        </div>
      </div>
      <hr />
      <div className="px-6 py-8 md:px-8 md:py-10 lg:px-16 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h2 className="font-bold text-md text-white">POPULAR CATEGORIES</h2>
            <hr className="title w-16 mb-4 mt-2" />
            <ul className="flex flex-col justify-start text-gray-500 gap-2">
              <li>
                <a href="#">Fashion</a>
              </li>
              <li>
                <a href="#">Electronic</a>
              </li>
              <li>
                <a href="#">Cosmetic</a>
              </li>
              <li>
                <a href="#">Health</a>
              </li>
              <li>
                <a href="#">Watches</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-md text-white">PRODUCTS</h2>
            <hr className="title w-16 mb-4 mt-2" />
            <ul className="flex flex-col justify-start text-gray-500 gap-2">
              <li>
                <a href="#">Prices Drop</a>
              </li>
              <li>
                <a href="#">New Products</a>
              </li>
              <li>
                <a href="#">Best Sales</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-md text-white">OUR COMPANY</h2>
            <hr className="title w-16 mb-4 mt-2" />
            <ul className="flex flex-col justify-start text-gray-500 gap-2">
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="#">Legal Notice</a>
              </li>
              <li>
                <a href="#">Terms And Conditions</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Secure Payment</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-md text-white">SERVICES</h2>
            <hr className="title w-16 mb-4 mt-2" />
            <ul className="flex flex-col justify-start text-gray-500 gap-2">
              <li>
                <a href="#">Prices Drop</a>
              </li>
              <li>
                <a href="#">New Products</a>
              </li>
              <li>
                <a href="#">Best Sales</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-md text-white">CONTACT</h2>
            <hr className="title w-16 mb-4 mt-2" />
            <ul className="flex flex-col justify-start text-gray-500 gap-2">
              <li>
                <IonIcon className="text-lg" name="location-outline" />
                <a href="#">419 State 414 Rte Beaver Dams, New York(NY), 14812, USA</a>
              </li>
              <li>
                <IonIcon className="text-lg" name="call-outline" />
                <a href="#">(607) 936-8058</a>
              </li>
              <li>
                <IonIcon className="text-lg" name="mail-outline" />
                <a href="#">Example@Gmail.Com</a>
              </li>
            </ul>
          </div>
          <div className="lg:hidden">
            <h2 className="font-bold text-md text-white">FOLLOW US</h2>
            <hr className="title w-16 mb-4 mt-2" />
            <ul className="flex justify-start text-gray-500 gap-2 text-lg">
              <li>
                <a href="#">
                  <IonIcon name="logo-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <IonIcon name="logo-github" />
                </a>
              </li>
              <li>
                <a href="#">
                  <IonIcon name="logo-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="mx-auto flex items-center justify-center flex-col gap-4 py-10 pb-20 lg:pb-10">
        <img
          className="w-80"
          src="https://azureapis.blob.core.windows.net/share-account/assets/images/payment.png"
          alt="payment"
        />
        <h4 className="text-gray-500 text-md lg:text-lg font-semibold">Copyright © Anon All Rights Reserved.</h4>
      </div>
    </footer>
  );
};
