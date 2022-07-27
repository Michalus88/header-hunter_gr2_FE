import React from 'react';
import { ExpectationElement } from './ExpectationElement';

export const EmploymentExpectation = () => {
  return (
    <div className="cv-expectation">
      <h3 className="cv-title">Oczekiwania</h3>
      <div className="cv-expectation__container">
        <ExpectationElement title="Preferowane miejsce pracy" text="Biuro" />
        <ExpectationElement title="Docelowe miasto, gdzie chce pracować kandydat" text="Warszawa" />
        <ExpectationElement title="Oczekiwany typ kontraktu" text="Umowa o pracę" />
        <ExpectationElement title="Oczekiwane wynagrodzenie miesięczne netto" text="8 000 zł" />
        <ExpectationElement
          title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
          text="TAK"
        />
        <ExpectationElement title="Komercyjne doświadczenie w programowaniu" text="6 miesięcy" />
      </div>
    </div>
  );
};
