import React from 'react';
import { ExpectedContractType, ExpectedTypeWork } from 'types';
import { ExpectationElement } from './ExpectationElement';
import { contractType, typeWork } from '../../helpers/convertEnumToStrings';

interface Props {
  targetWorkCity: string | undefined;
  expectedTypeWork: ExpectedTypeWork | null;
  expectedContractType: ExpectedContractType | null;
  expectedSalary: string | undefined;
  canTakeApprenticeship: boolean;
  monthsOfCommercialExp: number;
}

export const EmploymentExpectation = ({
  targetWorkCity,
  expectedTypeWork,
  expectedContractType,
  expectedSalary,
  canTakeApprenticeship,
  monthsOfCommercialExp,
}: Props) => {
  return (
    <div className="cv-expectation">
      <h3 className="cv-title">Oczekiwania</h3>
      <div className="cv-expectation__container">
        <ExpectationElement title="Preferowane miejsce pracy" text={typeWork(expectedTypeWork)} />
        <ExpectationElement
          title="Docelowe miasto, gdzie chce pracować kandydat"
          text={targetWorkCity}
        />
        <ExpectationElement
          title="Oczekiwany typ kontraktu"
          text={contractType(expectedContractType)}
        />
        <ExpectationElement
          title="Oczekiwane wynagrodzenie miesięczne netto"
          text={expectedSalary ? `${expectedSalary}zł` : 'zł'}
        />
        <ExpectationElement
          title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
          text={canTakeApprenticeship ? 'TAK' : 'NIE'}
        />
        <ExpectationElement
          title="Komercyjne doświadczenie w programowaniu"
          text={`${monthsOfCommercialExp} miesięcy`}
        />
      </div>
    </div>
  );
};
