import { ErrorRes } from 'types';

type IsResErrorMsg = (res: Response) => Promise<string | null>;

export const isResErrorMsg: IsResErrorMsg = async (res: Response) => {
  let errorMsg: null | string = null;

  if (!res.ok) {
    const errorRes: ErrorRes | null = await res.json();
    const apiMessage = errorRes?.message ?? 'Sorry. Please try later';

    switch (res.status) {
      case 400:
        errorMsg = apiMessage;
        break;
      case 401:
        errorMsg = apiMessage;
        break;
      case 403:
        errorMsg = apiMessage;
        break;
      default:
        errorMsg = 'Sorry. Please try later';
        break;
    }
  }
  return errorMsg;
};
