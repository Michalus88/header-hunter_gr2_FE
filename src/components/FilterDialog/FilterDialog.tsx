import React, { useContext, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { ExpectedContractType, ExpectedTypeWork } from 'types';
import { FilterGroup } from './FilterGroup';
import { MegaButton } from '../Elements/MegaButton';
import { HrContext } from '../../providers/HrProvider';

interface Props {
  toggleFilterDialog: () => void;
  visible: boolean;
}

export const FilterDialog = ({ visible, toggleFilterDialog }: Props) => {
  const [clearAll, setClearAll] = useState(false);
  const { filteringOptions, setFilteringOptions } = useContext(HrContext);

  const toggleClearAll = () => {
    setFilteringOptions({
      courseCompletion: null,
      courseEngagement: null,
      projectDegree: null,
      teamProjectDegree: null,
      expectedTypeWork: ExpectedTypeWork.IRRELEVANT,
      expectedContractType: ExpectedContractType.IRRELEVANT,
      expectedSalaryFrom: null,
      expectedSalaryTo: null,
      canTakeApprenticeship: null,
      monthsOfCommercialExp: 0,
    });
    setClearAll(!clearAll);
  };

  const sendValueFromFilterDialog = async () => {
    console.log(`${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_STUDENT_FILTERED}`);

    console.log({ filteringOptions });

    try {
      await fetch(
        `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_STUDENT_FILTERED}`,
        {
          mode: 'cors',
          credentials: 'include',
          method: 'POST',
          body: JSON.stringify(filteringOptions),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
    } catch (e) {
      console.log(`Connection error: ${e}`);
    }
  };

  const header = (
    <div className="filter-header">
      <div className="filter-header-text">Filtrowanie</div>
      <MegaButton
        classNameAdd="megak-secondary filter-clear-all megak-paddng"
        buttonTitle="Wyczyść wszystkie"
        onClick={toggleClearAll}
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
