import React from 'react';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { ExpectedContractType, ExpectedTypeWork } from 'types';
import { MegaButton } from '../Elements/MegaButton';
import { StarButtonGroup } from './StarsButttonGroup';
import { useFilter } from '../../hooks/useFilter';

export const FilterGroup = () => {
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
    setExpectedTypeWork,
    setMonthsOfCommercialExp,
    setCanTakeApprenticeship,
    setExpectedContractType,
    setExpectedSalaryFrom,
    setExpectedSalaryTo,
    setCourseCompletion,
    setCourseEngagement,
    setProjectDegree,
    setTeamProjectDegree,
  } = useFilter();

  let suffix = '';
  if (monthsOfCommercialExp === 0) suffix = ' miesięcy';
  if (monthsOfCommercialExp === 1) suffix = ' miesiąc';
  if (monthsOfCommercialExp === 2) suffix = ' miesiące';
  if (monthsOfCommercialExp === 3) suffix = ' miesiące';
  if (monthsOfCommercialExp === 4) suffix = ' miesiące';
  if (monthsOfCommercialExp !== null && monthsOfCommercialExp >= 4) suffix = ' miesięcy';

  return (
    <>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena przejścia kursu</div>
        <StarButtonGroup setRating={setCourseCompletion} rating={courseCompletion} />
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena aktywności i zaangażowania na kursie</div>
        <StarButtonGroup setRating={setCourseEngagement} rating={courseEngagement} />
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena kodu w projekcie własnym</div>
        <StarButtonGroup setRating={setProjectDegree} rating={projectDegree} />
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena pracy w zespole Scrum</div>
        <StarButtonGroup setRating={setTeamProjectDegree} rating={teamProjectDegree} />
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Preferowanie miejsce pracy</div>
        <div className="filter-star-butons-group">
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small ${
              expectedTypeWork === ExpectedTypeWork.AT_LOCATION && 'megak-glow'
            }`}
            buttonTitle="Praca na miejscu"
            onClick={() => {
              setExpectedTypeWork(ExpectedTypeWork.AT_LOCATION);
            }}
          />
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small ${
              expectedTypeWork === ExpectedTypeWork.READY_TO_MOVE && 'megak-glow'
            }`}
            buttonTitle="Gotowy do przeprowadzki"
            onClick={() => {
              setExpectedTypeWork(ExpectedTypeWork.READY_TO_MOVE);
            }}
          />
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small ${
              expectedTypeWork === ExpectedTypeWork.REMOTE && 'megak-glow'
            }`}
            buttonTitle="Praca zdala"
            onClick={() => {
              setExpectedTypeWork(ExpectedTypeWork.REMOTE);
            }}
          />

          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small ${
              expectedTypeWork === ExpectedTypeWork.HYBRID && 'megak-glow'
            }`}
            buttonTitle="Hybrydowo"
            onClick={() => {
              setExpectedTypeWork(ExpectedTypeWork.HYBRID);
            }}
          />
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small ${
              expectedTypeWork === null && 'megak-glow'
            }`}
            buttonTitle="Bez znaczenia"
            onClick={() => {
              setExpectedTypeWork(null);
            }}
          />
        </div>
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Oczekiwany typ kontraktu</div>
        <div className="filter-star-butons-group">
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small  ${
              expectedContractType === ExpectedContractType.EMPLOYMENT_CONTRACT && 'megak-glow'
            }`}
            buttonTitle="Umowa o pracę"
            onClick={() => {
              setExpectedContractType(ExpectedContractType.EMPLOYMENT_CONTRACT);
            }}
          />
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small  ${
              expectedContractType === ExpectedContractType.B_TO_B && 'megak-glow'
            }`}
            buttonTitle="B2B"
            onClick={() => {
              setExpectedContractType(ExpectedContractType.B_TO_B);
            }}
          />
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small  ${
              expectedContractType ===
                ExpectedContractType.COMMISSION_CONTRACT_OR_SPECIFIC_TASK_CONTRACT && 'megak-glow'
            }`}
            buttonTitle="UZ/UoD"
            onClick={() => {
              setExpectedContractType(
                ExpectedContractType.COMMISSION_CONTRACT_OR_SPECIFIC_TASK_CONTRACT,
              );
            }}
          />
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small  ${
              expectedContractType === null && 'megak-glow'
            }`}
            buttonTitle="Brak preferencji"
            onClick={() => {
              setExpectedContractType(null);
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
              value={expectedSalaryFrom}
              onValueChange={(e) => setExpectedSalaryFrom(e.value)}
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
              value={expectedSalaryTo}
              onValueChange={(e) => setExpectedSalaryTo(e.value)}
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
              value="true"
              onChange={(e) => setCanTakeApprenticeship(e.value)}
              checked={canTakeApprenticeship === 'true'}
            />
            <label className="filter-radio-label" htmlFor="yes">
              Tak
            </label>
          </div>
          <div className="filter-radiobutton">
            <RadioButton
              inputId="no"
              name="no"
              value="false"
              onChange={(e) => setCanTakeApprenticeship(e.value)}
              checked={canTakeApprenticeship === 'false'}
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
              value={monthsOfCommercialExp}
              onValueChange={(e) => setMonthsOfCommercialExp(e.value)}
              showButtons
              suffix={suffix}
            />
          </div>
        </div>
      </div>
    </>
  );
};
