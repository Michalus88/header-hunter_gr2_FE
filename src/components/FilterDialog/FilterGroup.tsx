import React, { useState } from 'react';
import { RadioButton } from 'primereact/radiobutton';
import { InputText } from 'primereact/inputtext';
import { MegaButton } from '../Elements/MegaButton';
import { StarButton } from '../Elements/StarButton';

export const FilterGroup = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [radioValue1, setRadioValue1] = useState(null);

  const clicked = () => {
    console.log('Clicked');
  };
  return (
    <>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena przejścia kursu</div>
        <div className="filter-star-butons-group">
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="5"
            onClick={() => clicked()}
          />
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="4"
            onClick={() => clicked()}
          />
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="3"
            onClick={() => clicked()}
          />
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="2"
            onClick={() => clicked()}
          />
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="1"
            onClick={() => clicked()}
          />
        </div>
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena aktywności i zaangażowania na kursie</div>
        <div className="filter-star-butons-group">
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="5"
            onClick={() => clicked()}
          />
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="4"
            onClick={() => clicked()}
          />
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="3"
            onClick={() => clicked()}
          />
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="2"
            onClick={() => clicked()}
          />
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="1"
            onClick={() => clicked()}
          />
        </div>
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena kodu w projekcie własnym</div>
        <div className="filter-star-butons-group">
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="5"
            onClick={() => clicked()}
          />
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="4"
            onClick={() => clicked()}
          />
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="3"
            onClick={() => clicked()}
          />
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="2"
            onClick={() => clicked()}
          />
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="1"
            onClick={() => clicked()}
          />
        </div>
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena pracy w zespole Scrum</div>
        <div className="filter-star-butons-group">
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="5"
            onClick={() => clicked()}
          />
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="4"
            onClick={() => clicked()}
          />
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="3"
            onClick={() => clicked()}
          />
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="2"
            onClick={() => clicked()}
          />
          <StarButton
            classNameAdd="megak-star-secondary"
            buttonTitle="1"
            onClick={() => clicked()}
          />
        </div>
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Preferowanie miejsce pracy</div>
        <div className="filter-star-butons-group">
          <MegaButton
            classNameAdd="megak-secondary filter-star-butons-group-small"
            buttonTitle="Praca zdala"
            onClick={() => clicked()}
          />
          <MegaButton
            classNameAdd="megak-secondary filter-star-butons-group-small"
            buttonTitle="Praca w biurze"
            onClick={() => clicked()}
          />
        </div>
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Oczekiwany typ kontraktu</div>
        <div className="filter-star-butons-group">
          <MegaButton
            classNameAdd="megak-secondary filter-star-butons-group-small"
            buttonTitle="Umowa o pracę"
            onClick={() => clicked()}
          />
          <MegaButton
            classNameAdd="megak-secondary filter-star-butons-group-small"
            buttonTitle="B2B"
            onClick={() => clicked()}
          />
          <MegaButton
            classNameAdd="megak-secondary filter-star-butons-group-small"
            buttonTitle="Umowa zlecenie"
            onClick={() => clicked()}
          />
          <MegaButton
            classNameAdd="megak-secondary filter-star-butons-group-small"
            buttonTitle="Umowa o dzieło"
            onClick={() => clicked()}
          />
        </div>
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Oczekiwane wynagrodzenie miesięczne netto</div>
        <div className="filter-star-butons-group">
          Od
          <div className="filter-input-wrap">
            <span className="p-float-label">
              <InputText
                className="filter-input"
                id="minsalary"
                size={10}
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
              />
              <label className="filter-input-label" htmlFor="minsalary">
                np. 1000 zł
              </label>
            </span>
          </div>
          Do
          <div className="filter-input-wrap">
            <span className="p-float-label">
              <InputText
                className="filter-input"
                id="maxsalary"
                size={10}
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
              />
              <label className="filter-input-label" htmlFor="maxsalary">
                np. 1000 zł
              </label>
            </span>
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
              Tak - XD
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
        <div className="filter-star-butons-tile">Oczekiwane wynagrodzenie miesięczne netto</div>
        <div className="filter-star-butons-group">
          <MegaButton
            classNameAdd="megak-secondary filter-star-butons-group-small"
            buttonTitle="0 miesięcy"
            onClick={() => clicked()}
          />
        </div>
      </div>
    </>
  );
};
