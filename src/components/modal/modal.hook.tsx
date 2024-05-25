import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ModalPlaceholder } from './modal.component';
import { ModalService } from './modal.service';
import { IModal } from './modal.type';
import { getUuid } from '../../utils';

export const useModal = (): {
  showModal: (modal: IModal) => void;
  modalPlaceholder: React.ReactElement | null;
} => {
  const [modalPlaceholder, setModalPlaceholder] = useState<React.ReactElement | null>(null);

  const placeholderUuid = useMemo(() => {
    return getUuid();
  }, []);

  useEffect(() => {
    setModalPlaceholder(<ModalPlaceholder uuid={placeholderUuid} />);
  }, []);

  const showModal = useCallback((modal: IModal) => {
    ModalService.showModal(placeholderUuid, modal);
  }, []);

  return { showModal, modalPlaceholder };
};
