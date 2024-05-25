import React, { useCallback, useEffect, useState } from 'react';
import { ModalService } from './modal.service';
import { IModal, IModalPlaceholder } from './modal.type';

export const ModalComponent: React.FC<IModal> = (props) => {
  const {
    title,
    content,
    type,
    onClose = (): Promise<void> => {
      return Promise.resolve();
    },
    overlayColor,
    placeholderUuid,
    uuid,
    closeOnOverlay,
    /**
     * !     size = 'md',
     * TODO: Handle size for modal Instead of using className
     */
    isLightBox = false,
    image = '',
    fixedTop = true,
    className = 'lg:w-max lg:min-w-[40%]',
  } = props;

  const close = useCallback(() => {
    onClose().then(() => {
      placeholderUuid && uuid && ModalService.removeModal(placeholderUuid, uuid);
    });
  }, [onClose, placeholderUuid, uuid]);

  const overlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (closeOnOverlay) {
      close();
    }
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        close();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div
      className={`toto-modal ${fixedTop ? 'fixed top-0 left-0 z-50' : ''} w-screen h-screen bg-[#000000b3]`}
      style={{ backgroundColor: overlayColor }}
      onClick={overlayClick}
    >
      <div className="flex justify-center items-center h-full">
        <div
          className={`${
            className ?? 'w-full'
          } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md overflow-hidden h-max min-w-1/5 max-h-full flex flex-col justify-between items-center shadow-lg bg-transparent`}
        >
          <button
            className="absolute z-[9999] top-3 right-3 transform scale-120 transition-all duration-300 ease-linear shadow-lg border-none rounded-full w-6 h-6 bg-black text-white"
            onClick={() => close()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-x "
            >
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
          <div className="flex-grow w-full p-4 flex flex-col items-start justify-start max-h-full overflow-hidden">
            {isLightBox ? <img src={image} alt={image} /> : content}
          </div>
        </div>
      </div>

      {/* <Flowbite theme={{ theme: customTheme }}>
        <Modal className="bg-transparent" show={openModal} size="2xl" onClose={() => close()} popup>
          <Modal.Header />
          <Modal.Body>{isLightBox ? <img src={image} alt={image} /> : content}</Modal.Body>
        </Modal>
      </Flowbite> */}
    </div>
  );
};

export const ModalPlaceholder: React.FC<IModalPlaceholder> = (props) => {
  const { uuid } = props;
  const [modal, setModal] = useState<IModal | null>(null);

  useEffect(() => {
    const subscription = ModalService.ModalServiceSubject().subscribe((data) => {
      if (data && uuid && data[uuid]) {
        setModal({ ...data[uuid] });
      } else {
        setModal(null);
      }
    });

    return () => {
      subscription.unsubscribe();

      uuid && ModalService.removeModalPlaceholder(uuid);
    };
  }, []);

  return <div className="toto-modal-placeholder">{modal && <ModalComponent {...modal} />}</div>;
};
