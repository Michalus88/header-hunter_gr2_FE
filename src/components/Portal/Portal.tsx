import { createPortal } from 'react-dom';
import { FC } from 'react';
import { addWrapperForPortal } from '../../helpers/addWrapperPortal';

interface Props {
  children: JSX.Element | JSX.Element[];
  wrapperId?: string;
}

export const Portal: FC<Props> = ({ children, wrapperId = 'root-app' }) => {
  let wrapper = document.getElementById('root-modal');
  if (wrapper === null) wrapper = addWrapperForPortal(wrapperId);

  return createPortal(children, wrapper);
};
