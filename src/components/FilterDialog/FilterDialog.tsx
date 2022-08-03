import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { FilterGroup } from './FilterGroup';
import { MegaButton } from '../Elements/MegaButton';

interface Props {
  toggleFilterDialog: () => void;
  visible: boolean;
}

export const FilterDialog = ({ visible, toggleFilterDialog }: Props) => {
  const [clearAll, setClearAll] = useState(false);

  const toggleClearAll = () => {
    setClearAll(!clearAll);
  };

  const header = (
    <div className="filter-header">
      <div className="filter-header-text">Filtrowanie</div>
      <MegaButton
        classNameAdd="megak-secondary filter-clear-all"
        buttonTitle="Wyczyść wszystkie"
        onClick={toggleClearAll}
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
      <FilterGroup clearAll={clearAll} />
    </Dialog>
  );
};
