import axios from 'axios';
import { PUBLIC_API_ENDPOINT } from '../constants/platform';
import { ApiError } from './Api.type';

const API = axios.create({
  baseURL: `${PUBLIC_API_ENDPOINT}`,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

API.interceptors.request.use(
  (requestConfig) => {
    const serializerConfig = requestConfig;

    // check request Header "clean-request":"no-clean"
    if (serializerConfig.headers && serializerConfig.headers['clean-request']?.toLocaleLowerCase() === 'no-clean') {
      return serializerConfig;
    }

    // clean params for GET method
    serializerConfig.paramsSerializer = (params) => {
      let result = '';
      Object.keys(params).forEach((key) => {
        if (params[key] == null) return;

        const serializerParams = params;
        if (typeof serializerParams[key] === 'string') {
          serializerParams[key] = params[key].trim().replace(/\s+/g, ' ');
          if (!serializerParams[key]) return; // check empty
        }

        result += `${key}=${encodeURIComponent(serializerParams[key])}&`;
      });

      return result.substring(0, result.length - 1);
    };

    // clean body data for post, patch
    try {
      if (serializerConfig.headers) {
        const contentType = serializerConfig.headers['Content-Type'] as string;
        if (contentType?.includes('application/json')) {
          const bodyJsonData = serializerConfig.data;
          if (bodyJsonData) {
            Object.keys(bodyJsonData).forEach((key) => {
              if (typeof bodyJsonData[key] === 'string') {
                bodyJsonData[key] = bodyJsonData[key].trim().replace(/\s+/g, ' ');
              }
            });

            serializerConfig.data = JSON.stringify(bodyJsonData);
          }
        } else if (contentType?.includes('application/x-www-form-urlencoded')) {
          const bodyFormData: URLSearchParams = serializerConfig.data as URLSearchParams;

          bodyFormData?.forEach((value: FormDataEntryValue, key: string) => {
            if (typeof value === 'string') {
              bodyFormData.set(key, value.toString().trim().replace(/\s+/g, ' '));
            }
          });

          serializerConfig.data = bodyFormData;
        }
      }
    } catch (error) {
      // no handle
      // console.error('Axios request error:', error);
    }

    return serializerConfig;
  },
  (error) => {
    throw error;
  },
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: ApiError) => {
    throw error?.response?.data?.title || 1; // 1: default error code
  },
);

const ThrowApiError = (error: ApiError) => {
  if (error.isAxiosError) throw error.response?.data.title;
  throw error;
};

export { API, ThrowApiError };
