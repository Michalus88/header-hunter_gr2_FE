import React from 'react';
import { BooleanLiteral } from 'typescript';

interface Props {
  toggleFilterDialog: boolean;
  visible: BooleanLiteral;
}

export const FilterDialog = (toggleFilterDialog: Props) => {
  return (
    <>
      <Dialog
        header="Header"
        visible={visible}
        style={{ width: '50vw' }}
        footer={renderFooter('displayBasic')}
        onHide={() => onHide('displayBasic')}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </Dialog>{' '}
    </>
  );
};
