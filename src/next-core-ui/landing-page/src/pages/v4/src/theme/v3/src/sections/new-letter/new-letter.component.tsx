import { NewLetterV4Props } from './new-letter.type';

export const NewLetterSectionV4: React.FC<NewLetterV4Props> = (props) => {
  const { data, className } = props;

  return (
    <section className="mb-15 mt-8 lg:mb-30 lg:mt-16" data-el="newsletter-subscription-subscribe-block">
      <div className="flex flex-col mb-10 justify-between lg:flex-row">
        <div className="flex flex-col gap-3 mb-10 lg:mb-0">
          <h1 className="h2 lg:hrt6">Sign up to our newsletter</h1>
          <p className="s1 s1--regular">
            Get all the important information about what's happening in the Web3 world straight to your inbox
          </p>
        </div>
        <div className="self-end w-full lg:w-auto">
          <button
            className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-big gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white
              disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-primary w-full    disabled:cursor-not-allowed "
            data-el="select-all"
            data-status="off"
            data-text-select="Select all newsletters"
            data-text-unselect="Unselect all newsletters"
            type="button"
          >
            <span>Select all newsletters</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:gap-5 lg:flex-row" data-el="subscriptions-block">
        <div
          className="p-5 flex flex-col justify-between rounded-2xl min-h-70 w-full bg-grey-50"
          data-el="subscription-card"
          data-status="off"
        >
          <div>
            <span className="s4 text-blue-500 inline-block mb-2">Every Monday</span>
            <h5 className="mb-2 leading-8.5">Bonus Hunter</h5>
            <p className="p3 mb-2">A curated list of top giveaways, airdrops and special activation offers</p>
          </div>
          <button
            className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-big gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-white hover:bg-blue-100 border-blue-600 disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-secondary w-full disabled:cursor-not-allowed !bg-grey-50 text-blue-600"
            data-el="select-subscription"
            data-text-selected-off="Select"
            data-text-selected-on="Selected"
            type="button"
          >
            <span>Select</span>
          </button>
          <input type="hidden" name="selected[]" defaultValue={0} />
          <input type="hidden" name="webhook_id[]" defaultValue="1125bc35a9918a60" />
        </div>
        <div
          className="p-5 flex flex-col justify-between rounded-2xl min-h-70 w-full bg-grey-50"
          data-el="subscription-card"
          data-status="off"
        >
          <div>
            <span className="s4 text-blue-500 inline-block mb-2">Every weekday</span>
            <h5 className="mb-2 leading-8.5">Daily Crypto Insights</h5>
            <p className="p3 mb-2">Insights, news and analysis of the crypto market straight to your inbox</p>
          </div>
          <button
            className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-big gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-white hover:bg-blue-100 border-blue-600 disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-secondary w-full disabled:cursor-not-allowed !bg-grey-50 text-blue-600"
            data-el="select-subscription"
            data-text-selected-off="Select"
            data-text-selected-on="Selected"
            type="button"
          >
            <span>Select</span>
          </button>
          <input type="hidden" name="selected[]" defaultValue={0} />
          <input type="hidden" name="webhook_id[]" defaultValue="b81e599573f5ee43" />
        </div>
        <div
          className="p-5 flex flex-col justify-between rounded-2xl min-h-70 w-full bg-grey-50"
          data-el="subscription-card"
          data-status="off"
        >
          <div>
            <span className="s4 text-blue-500 inline-block mb-2">Every month</span>
            <h5 className="mb-2 leading-8.5">Crypto Leaders</h5>
            <p className="p3 mb-2">
              Outlook of the industry, market trends and key opinions from leaders within the industry
            </p>
          </div>
          <button
            className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-big gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-white hover:bg-blue-100 border-blue-600 disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-secondary w-full disabled:cursor-not-allowed !bg-grey-50 text-blue-600"
            data-el="select-subscription"
            data-text-selected-off="Select"
            data-text-selected-on="Selected"
            type="button"
          >
            <span>Select</span>
          </button>
          <input type="hidden" name="selected[]" defaultValue={0} />
          <input type="hidden" name="webhook_id[]" defaultValue="cbdab7ca7e712e98" />
        </div>
        <div
          className="p-5 flex flex-col justify-between rounded-2xl min-h-70 w-full bg-blue-100"
          data-el="subscription-card"
          data-status="on"
        >
          <div>
            <span className="s4 text-blue-500 inline-block mb-2">Fortnightly</span>
            <h5 className="mb-2 leading-8.5">Web3 jobs</h5>
            <p className="p3 mb-2">Information, advice and the latest vacancies to help you get into the Web3 world</p>
          </div>
          <button
            className="transition-colors justify-center inline-flex items-center border hover:no-underline cursor-pointer bic-c-btn-big gap-x-2.5 btn-1 px-5 py-3.25 rounded-lg btn-big bg-white hover:bg-blue-100 border-blue-600 disabled:bg-grey-300 disabled:border-grey-300 disabled:text-grey-100 bic-c-button-secondary w-full disabled:cursor-not-allowed !bg-blue-600 text-white"
            data-el="select-subscription"
            data-text-selected-off="Select"
            data-text-selected-on="Selected"
            type="button"
          >
            <span>Selected</span>
          </button>
          <input type="hidden" name="selected[]" defaultValue={1} />
          <input type="hidden" name="webhook_id[]" defaultValue="8052538e3728e4a5" />
        </div>
      </div>
    </section>
  );
};
