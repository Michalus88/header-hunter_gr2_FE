import React, { useState } from 'react';
import group from '../../assets/img/Group 29.png';

export const AvailableOneStudent = () => {
  const [details, setDetails] = useState(false);

  const handleClick = () => {
    if (!details) {
      setDetails(true);
    } else {
      setDetails(false);
    }
  };

  return (
    <article className="available-One-student">
      <div className="available-student">
        <p>student</p>
        <div className="available-student-right">
          <button className="reservation" type="button">
            Zarezerwuj rozmowę
          </button>
          <button className="expand" type="button" onClick={handleClick}>
            <img className={details ? 'image-off' : 'image-on'} src={group} alt="." />
          </button>
        </div>
      </div>
      <div className={details ? 'student-details-on' : 'student-details-off'}>
        <div className="detail">
          <span className="title">Ocena przejścia kursu</span>
          <span className="description">
            <strong>5</strong> / 5
          </span>
        </div>
        <div className="detail">
          <span className="title">Ocena aktywności zaangażowania na kursie</span>
          <span className="description">
            <strong>3</strong> / 5
          </span>
        </div>
        <div className="detail">
          <span className="title">Ocena kodu w projekcie własnym</span>
          <span className="description">
            <strong>4</strong> / 5
          </span>
        </div>
        <div className="detail">
          <span className="title">Ocena pracy w zespole Scrum</span>
          <span className="description">
            <strong>5</strong> / 5
          </span>
        </div>
        <div className="detail">
          <span className="title">Preferowane miejsce pracy</span>
          <span className="description-text">
            <strong>Biuro</strong>
          </span>
        </div>
        <div className="detail">
          <span className="title">Docelowe miejsce gdzie chce pracować kandydat</span>
          <span className="description-text">
            <strong>Warszawa</strong>
          </span>
        </div>
        <div className="detail">
          <span className="title">Oczekiwany typ kontraktu</span>
          <span className="description-text">
            <strong>Umowa o pracę</strong>
          </span>
        </div>
        <div className="detail">
          <span className="title">Oczekiwane wynagrodzenie miesięczne netto</span>
          <span className="description-text">
            <strong>8 000 zł</strong>
          </span>
        </div>
        <div className="detail">
          <span className="title">Zgoda na odbycie bezpłatnych praktyk/stażu na początek</span>
          <span className="description-text">
            <strong>TAK</strong>
          </span>
        </div>
        <div className="detail">
          <span className="title">Komercyjne doświadczenie w programowaniu</span>
          <span className="description-text">
            <strong>6 miesięcy</strong>
          </span>
        </div>
      </div>
    </article>
  );
};
