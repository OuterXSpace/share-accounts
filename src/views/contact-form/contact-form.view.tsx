import { ArrowRight } from "@/svg/arrow-right.svg";
import React from "react";

export interface IContactFormProps {
  inContactPage?: boolean;
}

export const ContactForm: React.FC<IContactFormProps> = ({
  inContactPage = false,
}) => {
  return (
    <section
      className={`mt-4 ${
        inContactPage ? "md:mt-10" : "md:mt-20"
      } mb-8 px-4 md:px-[8%] flex flex-wrap justify-between`}
    >
      <div className="w-full md:w-7/12">
        <div className="flex flex-col gap-4 md:gap-16">
          {!inContactPage && (
            <h4 className="text-[26px] md:text-[42px] font-semibold underline">
              ADVISE
            </h4>
          )}

          <form className="flex flex-col gap-2 md:gap-4 w-full md:w-10/12">
            <p className="text-base md:text-[26px]">
              Please fill out the contact information form below to get started
              on transforming your space!
            </p>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-gray-100 text-black border-none py-4 px-8"
            />
            <input
              type="text"
              placeholder="Contact phone number"
              className="w-full bg-gray-100 text-black border-none py-4 px-8"
            />
            <textarea
              placeholder="Consultation content"
              className="w-full min-h-[200px] bg-gray-100 text-black border-none py-4 px-8"
            />
            <button className="flex gap-2 items-center opacity-70 hover:opacity-100">
              <span className="text-[20px] font-bold md:font-regular md:text-[26px]">
                SEND TO US
              </span>
              <ArrowRight />
            </button>
          </form>
        </div>
      </div>
      <div className="w-full md:w-4/12 mt-8 md:mt-0 overflow-hidden max-h-[250px] md:max-h-[650px]">
        <img src="/assets/contact_form.jpg" alt="advise" />
      </div>
    </section>
  );
};
