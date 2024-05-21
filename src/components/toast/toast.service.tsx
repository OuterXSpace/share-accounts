import { toast } from 'react-toastify';

class Toast {
  private static instance: Toast;

  public static getInstance(): Toast {
    if (!Toast.instance) {
      Toast.instance = new Toast();
    }
    return Toast.instance;
  }

  success(text: string) {
    toast.success(text);
  }

  info(text: string) {
    toast.info(text);
  }

  warning(text: string) {
    toast.warning(text);
  }

  dark(text: string) {
    toast.dark(text);
  }

  warn(text: string) {
    toast.warn(text);
  }

  error(text: string) {
    toast.error(text);
  }
}
export const ToastService = Toast.getInstance();
