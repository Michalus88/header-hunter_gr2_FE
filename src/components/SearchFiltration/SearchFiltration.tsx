import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import magnifer from '../../assets/img/magnifier.png';
import { MegaButton } from '../Elements/MegaButton';
import { FilterDialog } from '../FilterDialog/FilterDialog';

interface Props {
  isFilteringAllStudents: boolean;
}

export const SearchFiltration = ({ isFilteringAllStudents }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const [displayFilterDialog, setSisplayFilterDialog] = useState(false);

  const toggleFilterDialog = () => {
    setSisplayFilterDialog(!displayFilterDialog);
  };

  return (
    <div className="search-filtration">
      {/* <p className="input-wrapper">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search"
          />
        </span>
      </p> */}
      <MegaButton
        classNameAdd="megak-secondary megak-small-height megak-paddng"
        buttonTitle="Filter"
        onClick={() => toggleFilterDialog()}
      />
      <FilterDialog visible={displayFilterDialog} toggleFilterDialog={toggleFilterDialog} />
    </div>
  );
};
