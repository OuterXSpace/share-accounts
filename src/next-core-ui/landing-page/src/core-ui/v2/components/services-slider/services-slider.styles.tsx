import React from 'react';

export const ServicesSliderStylesV2: React.FC = () => {
  return (
    <style global jsx>{`
            import '@splidejs/react-splide/css';


            .splide__service {
               width: 100%;
            }

            .splide__list {
                display: flex;
                grid-gap: 5vw;
           
            }
            
            .splide__slide {
                width: unset !important;
                margin: unset !important;
            }

    `}</style>
  );
};
