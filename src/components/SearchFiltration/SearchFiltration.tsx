import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import magnifer from '../../assets/img/magnifier.png';
import { MegaButton } from '../Elements/MegaButton';
import { FilterDialog } from '../FilterDialog/FilterDialog';

export const SearchFiltration = () => {
  const [searchValue, setSearchValue] = useState('');
  const [displayFilterDialog, setSisplayFilterDialog] = useState(false);

  const toggleFilterDialog = () => {
    setSisplayFilterDialog(!displayFilterDialog);
  };

  //   const clickSearch = () => {
  //     console.log(`Szukam ${search}`);
  //   };

  return (
    <div className="search-filtration">
      <p className="input-wrapper">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search"
          />
        </span>

        {/* <button className="search-btn" type="button" onClick={clickSearch}>
          <img src={magnifer} alt="" />
        </button>

        <input
          type="text"
          value={search}
          placeholder="Szukaj"
          onChange={(e) => setSearch(e.target.value)}
        /> */}
      </p>
      <MegaButton
        classNameAdd="megak-secondary megak-small-height megak-paddng"
        buttonTitle="Filter"
        onClick={() => toggleFilterDialog()}
      />
      <FilterDialog visible={displayFilterDialog} toggleFilterDialog={toggleFilterDialog} />
    </div>
  );
};
