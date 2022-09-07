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
    </div>
  );
};
