import { ErrorRes } from 'types';

export const setIfErrMsg = async (res: Response) => {
  let errMsg: string | null = null;
  if (!res.ok) {
    const errorRes: ErrorRes | null = await res.json();
    const apiMessage = errorRes?.message ?? 'Sorry. Please try later';

    switch (res.status) {
      case 400:
        errMsg = apiMessage;
        break;
      case 401:
        errMsg = apiMessage;
        break;
      case 403:
        errMsg = apiMessage;
        break;
      default:
        errMsg = 'Sorry. Please try later';
        break;
    }
  }
  return errMsg;
};
