import IonIcon from '@reacticons/ionicons';
import { ContactProps } from './contact.type';

export const Contact: React.FC<ContactProps> = (props) => {
  const { data, className } = props;

  return (
    <section className={`section-01 ${className}`}>
      <div className="container py-[20px] md:py-[100px] lg:py-[150px] px-[20px]">
        <div className="row">
          <div className="col-12 lg:pr-[50px] pr-0">
            <h1 className="text-[#f9fdfe] text-[2.125rem] lg:text-[5.125rem] font-bold font-montserrat leading-1.4">
              {data?.object?.title}
            </h1>
          </div>
          <div className="lg:col-6 col-12 md:pr-[30px]">
            <p className="pt-[50px] text-[#ffffffbf] text-[16px] leading-1.6">{data?.object?.description}</p>
            <div className="text-[16px] pt-[30px]">
              <ul className="text-[#f9fdfe]">
                <li className="flex pb-[30px]">
                  <IonIcon name="call" className="pr-[15px]" />
                  <span>{data?.object?.phone}</span>
                </li>
                <li className="flex pb-[30px]">
                  <IonIcon name="mail" className="pr-[15px]" />
                  <span>{data?.object?.email}</span>
                </li>
                <li className="flex pb-[30px]">
                  <IonIcon name="location" className="pr-[15px]" />
                  <span>{data?.object?.location}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-6 col-12 lg:pl-[50px] pl-0">
            <div className="mb-[20px] pt-[50px] lg:pl-[50px] px-1">
              <form className="w-full">
                <div className="mb-[30px] relative">
                  <input
                    style={{
                      boxShadow: 'none',
                    }}
                    type="text"
                    className="outline-none shadow-none text-[#666] box-border w-full bg-[#fafafa00] h-[58px] rounded-0 border-[#f9fdfe] border-b-2 border-t-0 border-l-0 border-r-0 focus:border-b-2 focus:border-[#96c583] focus:placeholder-[#96c583]"
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-[30px] relative">
                  <input
                    style={{
                      boxShadow: 'none',
                    }}
                    type="email"
                    className="outline-none shadow-none text-[#666] box-border w-full bg-[#fafafa00] h-[58px] rounded-0 border-[#f9fdfe] border-b-2 border-t-0 border-l-0 border-r-0 focus:border-b-2 focus:border-[#96c583] focus:placeholder-[#96c583]"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mb-[30px] relative">
                  <textarea
                    style={{
                      boxShadow: 'none',
                    }}
                    className="outline-none shadow-none placeholder:indent-[10px] placeholder:text-[16px] text-[#666] placeholder-pl-2 box-border w-full bg-[#fafafa00] h-[120px] rounded-0 border-[#f9fdfe] border-b-2 border-t-0 border-l-0 border-r-0 focus:border-b-2 focus:border-[#96c583] focus:placeholder-[#96c583]"
                    placeholder="Message"
                    defaultValue=""
                  />
                </div>
              </form>
            </div>
            <div className="lg:pl-[50px] transition-[background,border,border-radius,box-shadow,transform] duration-300">
              <button
                type="submit"
                className="border-[0] pt-[15px] pr-[30px] pb-[15px] pl-[30px] text-1 font-montserrat leading-1 border-[#97c584] bg-[#97c584] border-solid border-t-2 border-r-2 border-l-2 border-b-2 font-montserrat font-bold text-16 text-1 leading-1 inline-block text-center transition-all duration-300 fill-[#fff]"
              >
                <span className="flex justify-center">
                  <span className="flex-grow order-10 inline-block">{data?.object?.form?.button?.label}</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
