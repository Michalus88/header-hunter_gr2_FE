import React from 'react';

export const setNotification = (
  toast: React.MutableRefObject<any>,
  msg?: null | string,
  severity: 'success' | 'error' = 'error',
) => {
  console.log(severity);
  toast.current.show({
    severity,
    summary: severity,
    detail: msg ?? 'Sorry. Please try later.',
    life: 4000,
  });
};
