import { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { Portal } from '../Portal/Portal';

export const useNotification = () => {
  const toast = useRef<any>(null);
  const Notification = (
    <Portal>
      <Toast ref={toast} />
    </Portal>
  );
  return { Notification, toast };
};
