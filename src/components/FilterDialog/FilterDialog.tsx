import React, { useContext, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';
import { FilterGroup } from './FilterGroup';
import { MegaButton } from '../Elements/MegaButton';
import { HrContext } from '../../providers/HrProvider';
import { Portal } from '../Portal/Portal';
import { FILTERING_OPTION_INITIAL, useFilter } from '../../hooks/useFilter';

export const FilterDialog = () => {
  const navigate = useNavigate();
  const { filteringOptions, setFilteringOptions } = useContext(HrContext);
  const {
    canTakeApprenticeship,
    expectedTypeWork,
    monthsOfCommercialExp,
    expectedContractType,
    expectedSalaryFrom,
    expectedSalaryTo,
    courseCompletion,
    courseEngagement,
    projectDegree,
    teamProjectDegree,
    resetAllFilters,
    setPrevFilter,
  } = useFilter();
  const close = () => navigate(-1);
  const reset = () => {
    resetAllFilters();
    setFilteringOptions(FILTERING_OPTION_INITIAL);
  };
  useEffect(() => {
    setPrevFilter(filteringOptions);
  }, []);

  const header = (
    <div className="filter-header">
      <div className="filter-header-text">Filtrowanie</div>
      <MegaButton
        classNameAdd="megak-secondary filter-clear-all megak-paddng"
        buttonTitle="Wyczyść wszystkie"
        onClick={reset}
      />
    </div>
  );
  const footer = (
    <div className="fileter-dialog-footer">
      <MegaButton
        classNameAdd="megak-secondary megak-paddng"
        buttonTitle="Anuluj"
        onClick={() => close()}
      />
      <MegaButton
        classNameAdd="megak-primary megak-paddng"
        buttonTitle="Pokaż wyniki"
        onClick={() => {
          setFilteringOptions((prev) => ({
            ...prev,
            canTakeApprenticeship,
            expectedTypeWork,
            monthsOfCommercialExp,
            expectedContractType,
            expectedSalaryFrom,
            expectedSalaryTo,
            courseCompletion,
            courseEngagement,
            projectDegree,
            teamProjectDegree,
          }));
          close();
        }}
      />
    </div>
  );

  return (
    <Portal>
      <Dialog
        className="filter-dialog"
        header={header}
        visible
        resizable={false}
        footer={footer}
        onHide={close}
      >
        <FilterGroup />
      </Dialog>
    </Portal>
  );
};
