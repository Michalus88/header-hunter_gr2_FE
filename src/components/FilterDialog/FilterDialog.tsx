import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { FilterGroup } from './FilterGroup';
import { MegaButton } from '../Elements/MegaButton';

interface Props {
  toggleFilterDialog: () => void;
  visible: boolean;
}

export const FilterDialog = ({ visible, toggleFilterDialog }: Props) => {
  const header = (
    <div className="filter-header">
      <div className="filter-header-text">Filtrowanie</div>
      <MegaButton
        classNameAdd="megak-secondary filter-clear-all"
        buttonTitle="Wyczyść wszystkie"
        onClick={() => toggleFilterDialog()}
      />
    </div>
  );
  const footer = (
    <div className="fileter-dialog-footer">
      <MegaButton
        classNameAdd="megak-secondary"
        buttonTitle="Anuluj"
        onClick={() => toggleFilterDialog()}
      />
      <MegaButton
        classNameAdd="megak-primary"
        buttonTitle="Pokaż wyniki"
        onClick={() => toggleFilterDialog()}
      />
    </div>
  );

  return (
    <Dialog
      className="filter-dialog"
      header={header}
      visible={visible}
      resizable={false}
      footer={footer}
      onHide={() => toggleFilterDialog}
      closable={false}
    >
      <FilterGroup />
    </Dialog>
  );
};
