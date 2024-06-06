import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { Toast } from 'flowbite-react';
import IonIcon from '@reacticons/ionicons';

type ToastType = 'success' | 'error' | 'info';

interface ToastMessage {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextProps {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useMemo(
    () =>
      (message: string, type: ToastType = 'info') => {
        setToasts([...toasts, { id: Date.now(), message, type }]);
      },
    [toasts],
  );

  const removeToast = (id: number) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  const contextValue = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div className="fixed bottom-0 left-0 p-4 space-y-2">
        {toasts.map((toast) => (
          <Toast key={toast.id} className={`toast-${toast.type}`}>
            <div className="flex">
              <div className="ml-3 text-sm font-normal pr-2">{toast.message}</div>
              <button
                onClick={() => removeToast(toast.id)}
                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <IonIcon className="h-3 w-3" name="close-outline" />
              </button>
            </div>
          </Toast>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
