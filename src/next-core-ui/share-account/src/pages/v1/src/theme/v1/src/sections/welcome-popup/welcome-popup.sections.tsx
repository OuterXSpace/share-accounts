import React, { useEffect, useState } from 'react';
import { IWelcomePopupShareAccountTheme01Props } from './welcome-popup.sections.type';
import { Flowbite, Modal } from 'flowbite-react';
import { modalCustomTheme, AnnouncementComponent } from '../../../../../../../../../../../components';

export const WelcomePopupShareAccountTheme01: React.FC<IWelcomePopupShareAccountTheme01Props> = (props) => {
  const { data } = props;

  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    setOpenModal(true);
  }, []);

  return (
    <Flowbite theme={{ theme: modalCustomTheme }}>
      <Modal show={openModal} size="2xl" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          {data?.object?.enableType === 'V2' && (
            <AnnouncementComponent wuiWelcomePopup={data?.object?.data?.V2?.config?.bodyContent} />
          )}
          {data?.object?.enableType === 'V1' && (
            <img
              src={data?.object?.data?.V1?.config?.image}
              className="w-full h-full object-contain object-center"
              alt="well come"
            />
          )}
        </Modal.Body>
      </Modal>
    </Flowbite>
  );
};
