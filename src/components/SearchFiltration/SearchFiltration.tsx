import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MegaButton } from '../Elements/MegaButton';
import { FILTERING_OPTION_INITIAL, useFilter } from '../../hooks/useFilter';
import { HrContext } from '../../providers/HrProvider';

export const SearchFiltration = () => {
  const location = useLocation();
  const { resetAllFilters } = useFilter();
  const { setFilteringOptions } = useContext(HrContext);
  const reset = () => {
    resetAllFilters();
    setFilteringOptions(FILTERING_OPTION_INITIAL);
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
        buttonTitle={
          <Link to="/hr/student-filter" state={{ background: location }}>
            Filter
          </Link>
        }
        onClick={() => {}}
      />
      <MegaButton
        classNameAdd="megak-secondary megak-small-height megak-paddng"
        buttonTitle="Reset Filter"
        onClick={reset}
      />
      <FilterDialog visible={displayFilterDialog} toggleFilterDialog={toggleFilterDialog} />
    </div>
  );
};
