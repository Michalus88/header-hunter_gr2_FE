import React, { useEffect, useState } from 'react';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { MegaButton } from '../Elements/MegaButton';
import { StarButtonGroup } from './StarsButttonGroup';

interface Props {
  clearAll: boolean;
}

export const FilterGroup = ({ clearAll }: Props) => {
  const [workRemontely, setWorkRemontely] = useState(false);
  const [workInOffice, setWorkInOffice] = useState(false);
  const [contract, setContract] = useState(false);
  const [B2B, setB2B] = useState(false);
  const [contractOfMandate, setContractOfMandate] = useState(false);
  const [contractWork, setContractWork] = useState(false);
  const [value, setValue] = useState<number | null>(null);
  const [value1, setValue1] = useState<number | null>(null);
  const [value2, setValue2] = useState<number | null>(0);
  const [radioValue1, setRadioValue1] = useState(null);

  useEffect(() => {
    setWorkRemontely(false);
    setWorkInOffice(false);
    setContract(false);
    setB2B(false);
    setContractOfMandate(false);
    setContractWork(false);
    setValue(null);
    setValue1(null);
    setValue2(0);
    setRadioValue1(null);
  }, [clearAll]);

  const toggleWorkRemontely = () => {
    setWorkRemontely(!workRemontely);
  };
  const toggleWorkInOffice = () => {
    setWorkInOffice(!workInOffice);
  };
  const toggleContract = () => {
    setContract(!contract);
  };
  const toggleB2B = () => {
    setB2B(!B2B);
  };
  const toggleContractOfMandate = () => {
    setContractOfMandate(!contractOfMandate);
  };
  const toggleContractWork = () => {
    setContractWork(!contractWork);
  };

  let suffix = '';
  if (value2 === 0) suffix = ' miesięcy';
  if (value2 === 1) suffix = ' miesiąc';
  if (value2 === 2) suffix = ' miesiące';
  if (value2 === 3) suffix = ' miesiące';
  if (value2 === 4) suffix = ' miesiące';
  if (value2 !== null && value2 >= 4) suffix = ' miesięcy';

  return (
    <>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena przejścia kursu</div>
        <StarButtonGroup clearAll={clearAll} />
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena aktywności i zaangażowania na kursie</div>
        <StarButtonGroup clearAll={clearAll} />
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena kodu w projekcie własnym</div>
        <StarButtonGroup clearAll={clearAll} />
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena pracy w zespole Scrum</div>
        <StarButtonGroup clearAll={clearAll} />
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Preferowanie miejsce pracy</div>
        <div className="filter-star-butons-group">
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small ${
              workRemontely && 'megak-glow'
            }`}
            buttonTitle="Praca zdala"
            onClick={toggleWorkRemontely}
          />
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small  ${
              workInOffice && 'megak-glow'
            }`}
            buttonTitle="Praca w biurze"
            onClick={toggleWorkInOffice}
          />
        </div>
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Oczekiwany typ kontraktu</div>
        <div className="filter-star-butons-group">
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small  ${
              contract && 'megak-glow'
            }`}
            buttonTitle="Umowa o pracę"
            onClick={toggleContract}
          />
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small  ${B2B && 'megak-glow'}`}
            buttonTitle="B2B"
            onClick={toggleB2B}
          />
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small  ${
              contractOfMandate && 'megak-glow'
            }`}
            buttonTitle="Umowa zlecenie"
            onClick={toggleContractOfMandate}
          />
          <MegaButton
            classNameAdd={`megak-secondary filter-star-butons-group-small  ${
              contractWork && 'megak-glow'
            }`}
            buttonTitle="Umowa o dzieło"
            onClick={toggleContractWork}
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
              inputId="input1"
              value={value}
              onValueChange={(e) => setValue(e.value)}
              showButtons={false}
              placeholder="np. 1000 zł"
              min={0}
            />
          </div>
          <div className="filter-input-wrap">
            <label htmlFor="input12">Do </label>
            <InputNumber
              size={10}
              inputId="input2"
              value={value1}
              onValueChange={(e) => setValue1(e.value)}
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
              value="Yes"
              onChange={(e) => setRadioValue1(e.value)}
              checked={radioValue1 === 'Yes'}
            />
            <label className="filter-radio-label" htmlFor="yes">
              Tak
            </label>
          </div>
          <div className="filter-radiobutton">
            <RadioButton
              inputId="no"
              name="no"
              value="No"
              onChange={(e) => setRadioValue1(e.value)}
              checked={radioValue1 === 'No'}
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
              value={value2}
              onValueChange={(e) => setValue2(e.value)}
              showButtons
              suffix={suffix}
            />
          </div>
        </div>
      </div>
    </>
  );
};
