import React, { useContext, useRef, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { ExpectedContractType, ExpectedTypeWork } from 'types';
import { Toast } from 'primereact/toast';
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

  const toast = useRef<any>(null);

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
      const data = await fetch(
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
      const response = await data.json();
      if (data.status >= 400) {
        toast.current.show({
          severity: 'error',
          summary: 'Błąd',
          detail: `${response.message}`,
          life: 4000,
        });
        return;
      }
    } catch (e: any) {
      toast.current.show({
        severity: 'error',
        summary: 'Błąd',
        detail: `${e.message}`,
        life: 4000,
      });
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
