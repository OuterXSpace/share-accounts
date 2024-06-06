import axios from 'axios';

export const postGoogleSheetApi = (data: Record<string, any>, sheetKeyApi: string) => {
  return new Promise<void>((resolve, reject) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    axios
      .post(sheetKeyApi, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        return resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};
