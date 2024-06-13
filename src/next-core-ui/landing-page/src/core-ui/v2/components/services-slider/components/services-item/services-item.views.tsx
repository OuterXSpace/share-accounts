import { IServicesItemProps } from './services-item.type';

export const ServicesItem: React.FC<IServicesItemProps> = (props) => {
  const { number, title } = props;
  return (
    <div className="splide">
      <div className="splide__track">
        <div className="splide__list">
          <div className="splide__slide">
            <h6>{number}</h6>
            <h3>
              CRM
              <br />
              SOLUTIONS
            </h3>
            <img
              src="https://assets-global.website-files.com/6618e637b1708fa9ebdf54ae/661ccedb08c2ecf9da97ec02_CRM%20SOLUTIONS%20ICON.svg"
              loading="lazy"
              alt="icon"
              className="slide-icon"
            />
            <a href="/" className="explore-btn">
              EXPLORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
