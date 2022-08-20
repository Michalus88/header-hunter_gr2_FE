import React, { useContext, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';
import { FilterGroup } from './FilterGroup';
import { MegaButton } from '../Elements/MegaButton';
import { HrContext } from '../../providers/HrProvider';
import { Portal } from '../Portal/Portal';
import { useFilter } from '../../hooks/useFilter';

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

  useEffect(() => {
    setPrevFilter(filteringOptions);
  }, []);

  const header = (
    <div className="filter-header">
      <div className="filter-header-text">Filtrowanie</div>
      <MegaButton
        classNameAdd="megak-secondary filter-clear-all megak-paddng"
        buttonTitle="Wyczyść wszystkie"
        onClick={resetAllFilters}
      />
    </div>
  );
  const footer = (
    <div className="fileter-dialog-footer">
      <MegaButton
        classNameAdd="megak-secondary megak-paddng"
        buttonTitle="Anuluj"
        onClick={() => toggleFilterDialog()}
      />
      <MegaButton
        classNameAdd="megak-primary megak-paddng"
        buttonTitle="Pokaż wyniki"
        onClick={() => {
          sendValueFromFilterDialog();
        }}
      />
    </div>
  );

  return (
    <>
      <Toast ref={toast} />
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
    </>
  );
};
