import { AxiosError } from 'axios';

export type ApiError = AxiosError<{
  statusCode?: number;
  message?: string;
  title?: string;
}>;
