import React, { useContext, useEffect, useState } from 'react';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { ExpectedContractType, ExpectedTypeWork } from 'types';
import { HrContext } from '../../providers/HrProvider';
import { MegaButton } from '../Elements/MegaButton';
import { StarButtonGroup } from './StarsButttonGroup';

interface Props {
  clearAll: boolean;
}

export const FilterGroup = ({ clearAll }: Props) => {
  const [workType, setWorkType] = useState<ExpectedTypeWork | null>(null);
  const [contract, setContract] = useState<ExpectedContractType | null>(null);
  const [salaryFrom, setSalaryFrom] = useState<number | null>(null);
  const [salaryTo, setSalaryTo] = useState<number | null>(null);
  const [workMonth, setWorkMonth] = useState<number | null>(0);
  const [apprenticeship, setApprenticeship] = useState(null);

  const { filteringOptions, setFilteringOptions } = useContext(HrContext);

  useEffect(() => {
    setWorkType(null);
    setContract(null);
    setSalaryFrom(null);
    setSalaryTo(null);
    setWorkMonth(null);
    setApprenticeship(null);
  }, [clearAll]);

  useEffect(() => {
    setFilteringOptions({
      ...filteringOptions,
      monthsOfCommercialExp: workMonth,
    });
  }, [workMonth]);

  useEffect(() => {
    setFilteringOptions({
      ...filteringOptions,
      expectedTypeWork: workType,
    });
  }, [workType]);

  useEffect(() => {
    setFilteringOptions({
      ...filteringOptions,
      expectedContractType: contract,
    });
  }, [contract]);

  useEffect(() => {
    setFilteringOptions({
      ...filteringOptions,
      canTakeApprenticeship: !!apprenticeship,
    });
  }, [apprenticeship]);

  useEffect(() => {
    setFilteringOptions({
      ...filteringOptions,
      expectedSalaryFrom: salaryFrom,
    });
  }, [salaryFrom]);

  useEffect(() => {
    setFilteringOptions({
      ...filteringOptions,
      expectedSalaryTo: salaryTo,
    });
  }, [salaryTo]);

  const toggleWork = (wType: ExpectedTypeWork | null) => {
    setWorkType(wType);
  };

  const toggleContract = (tContract: ExpectedContractType | null) => {
    setContract(tContract);
  };

  let suffix = '';
  if (workMonth === 0) suffix = ' miesięcy';
  if (workMonth === 1) suffix = ' miesiąc';
  if (workMonth === 2) suffix = ' miesiące';
  if (workMonth === 3) suffix = ' miesiące';
  if (workMonth === 4) suffix = ' miesiące';
  if (workMonth !== null && workMonth >= 4) suffix = ' miesięcy';

  return (
    <>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena przejścia kursu</div>
        <StarButtonGroup clearAll={clearAll} rating="courseCompletion" />
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena aktywności i zaangażowania na kursie</div>
        <StarButtonGroup clearAll={clearAll} rating="courseEngagement" />
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena kodu w projekcie własnym</div>
        <StarButtonGroup clearAll={clearAll} rating="projectDegree" />
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena pracy w zespole Scrum</div>
        <StarButtonGroup clearAll={clearAll} rating="teamProjectDegree" />
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Preferowanie miejsce pracy</div>
        <div className="filter-star-butons-group">
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small ${
              workType === ExpectedTypeWork.AT_LOCATION && 'megak-glow'
            }`}
            buttonTitle="Praca na miejscu"
            onClick={() => {
              toggleWork(ExpectedTypeWork.AT_LOCATION);
            }}
          />
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small ${
              workType === ExpectedTypeWork.READY_TO_MOVE && 'megak-glow'
            }`}
            buttonTitle="Gotowy do przeprowadzki"
            onClick={() => {
              toggleWork(ExpectedTypeWork.READY_TO_MOVE);
            }}
          />
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small ${
              workType === ExpectedTypeWork.REMOTE && 'megak-glow'
            }`}
            buttonTitle="Praca zdala"
            onClick={() => {
              toggleWork(ExpectedTypeWork.REMOTE);
            }}
          />

          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small ${
              workType === ExpectedTypeWork.HYBRID && 'megak-glow'
            }`}
            buttonTitle="Hybrydowo"
            onClick={() => {
              toggleWork(ExpectedTypeWork.HYBRID);
            }}
          />
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small ${
              workType === null && 'megak-glow'
            }`}
            buttonTitle="Bez znaczenia"
            onClick={() => {
              toggleWork(null);
            }}
          />
        </div>
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Oczekiwany typ kontraktu</div>
        <div className="filter-star-butons-group">
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small  ${
              contract === ExpectedContractType.EMPLOYMENT_CONTRACT && 'megak-glow'
            }`}
            buttonTitle="Umowa o pracę"
            onClick={() => {
              toggleContract(ExpectedContractType.EMPLOYMENT_CONTRACT);
            }}
          />
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small  ${
              contract === ExpectedContractType.B_TO_B && 'megak-glow'
            }`}
            buttonTitle="B2B"
            onClick={() => {
              toggleContract(ExpectedContractType.B_TO_B);
            }}
          />
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small  ${
              contract === ExpectedContractType.COMMISSION_CONTRACT_OR_SPECIFIC_TASK_CONTRACT &&
              'megak-glow'
            }`}
            buttonTitle="UZ/UoD"
            onClick={() => {
              toggleContract(ExpectedContractType.COMMISSION_CONTRACT_OR_SPECIFIC_TASK_CONTRACT);
            }}
          />
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small  ${
              contract === null && 'megak-glow'
            }`}
            buttonTitle="Brak preferencji"
            onClick={() => {
              toggleContract(null);
            }}
          />
        </div>
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Oczekiwane wynagrodzenie miesięczne netto</div>
        <div className="filter-star-butons-group">
          <div className="filter-input-wrap">
            <label htmlFor="input1">Od </label>
            <InputNumber
              size={10}
              inputId="salaryFrom"
              value={salaryFrom}
              onValueChange={(e) => setSalaryFrom(e.value)}
              showButtons={false}
              placeholder="np. 1000 zł"
              min={0}
            />
          </div>
          <div className="filter-input-wrap">
            <label htmlFor="input12">Do </label>
            <InputNumber
              size={10}
              inputId="salaryTo"
              value={salaryTo}
              onValueChange={(e) => setSalaryTo(e.value)}
              showButtons={false}
              placeholder="np. 100000 zł"
              min={0}
            />
          </div>
        </div>
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">
          Zgoda na odbycie bezpłatnych praktyk/starzu na początek
        </div>
        <div className="filter-radio-butons-group">
          <div className="filter-radiobutton">
            <RadioButton
              inputId="yes"
              name="yes"
              value="1"
              onChange={(e) => setApprenticeship(e.value)}
              checked={apprenticeship === '1'}
            />
            <label className="filter-radio-label" htmlFor="yes">
              Tak
            </label>
          </div>
          <div className="filter-radiobutton">
            <RadioButton
              inputId="no"
              name="no"
              value=""
              onChange={(e) => setApprenticeship(e.value)}
              checked={apprenticeship === ''}
            />
            <label className="filter-radio-label" htmlFor="no">
              Nie
            </label>
          </div>
        </div>
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">
          Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu
        </div>
        <div className="filter-star-butons-group">
          <div className="filter-input-wrap">
            <InputNumber
              size={8}
              min={0}
              inputId="input3"
              value={workMonth}
              onValueChange={(e) => setWorkMonth(e.value)}
              showButtons
              suffix={suffix}
            />
          </div>
        </div>
      </div>
    </>
  );
};
