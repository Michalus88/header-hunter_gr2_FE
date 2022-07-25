import React, { useState } from 'react';
import '../../assets/css/BookInterview.css';
import '../../assets/css/style.css';

export const BookInterview = () => {
  const [details, setDetails] = useState(false);

  const handleClick = () => {
    if (!details) {
      setDetails(true);
    } else {
      setDetails(false);
    }
  };

  // if (details) {
  //   return <>terefere</>;
  // }
  return (
    <div className="BookInterview">
      <div className="BookInterview__container">
        <div className="BookInterview__student">
          <div className="BookInterview__student--all">
            <div className="BookInterview__student--reservation">
              <p className="BookInterview__student--reservation-text">Rezerwacja do</p>
              <p className="BookInterview__student--reservation-date">10.01.2001</p>
            </div>

            <div className="BookInterview__student--information">
              <img
                className="BookInterview__student--information-avatar"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="avatar użytkownika"
              />
              <p className="BookInterview__student--information-name"> Michał Testowy</p>
            </div>
          </div>
          <div className="BookInterview__student--buttons">
            <button className="BookInterview__student--button-show-cv BookInterview-button">
              Pokaż CV
            </button>
            <button className="BookInterview__student--button-disinterest BookInterview-button">
              Brak zainteresowania
            </button>
            <button className="BookInterview__student--button-hired BookInterview-button">
              Zatrudniony
            </button>

            <button
              onClick={handleClick}
              className="BookInterview-button BookInterview__student--button-more "
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <g id="Group_29" data-name="Group 29" transform="translate(-268 -345)">
                  <rect
                    id="Rectangle_13"
                    data-name="Rectangle 13"
                    width="30"
                    height="30"
                    transform="translate(268 345)"
                    fill="#f7f7f7"
                    opacity="0"
                  />
                  <path
                    id="arrow-65"
                    d="M0,14.135l2.24,2.24L9.5,8.982l7.257,7.393L19,14.135,9.5,4.5Z"
                    transform="translate(273 349.563)"
                    fill="#666"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="BookInterview__student--details-container">
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">Ocena przejśćia kursu</div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">5</span>/5
            </div>
          </div>
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">
              Ocena aktywności i zaangażowanie na kursie
            </div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">5</span>/5
            </div>
          </div>
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">
              Ocena kodu w projekcie właśnym
            </div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">5</span>/5
            </div>
          </div>
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">Ocena pracy w zespole scrum</div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">5</span>/5
            </div>
          </div>
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">Preferowane miejsce pracy</div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">Biuro</span>
            </div>
          </div>
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">
              Docelowe miasto, gdzie chce pracować kandydat
            </div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">Warszawa</span>
            </div>
          </div>
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">Oczekiwany typ kontraktu</div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">Umowa o pracę</span>
            </div>
          </div>
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">
              Oczekiwane wynagrodzenie miesięczne netto
            </div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">8000</span>
            </div>
          </div>
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">
              Zgoda na odbycie bezpłatnych praktyk/stażu na początek
            </div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">Tak</span>
            </div>
          </div>
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">
              Komercyjne doświadczenie w programowaniu
            </div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">6 miesięcy</span>
            </div>
          </div>
        </div>
        <div className="BookInterview__student">
          <div className="BookInterview__student--all">
            <div className="BookInterview__student--reservation">
              <p className="BookInterview__student--reservation-text">Rezerwacja do</p>
              <p className="BookInterview__student--reservation-date">10.01.2001</p>
            </div>

            <div className="BookInterview__student--information">
              <img
                className="BookInterview__student--information-avatar"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="avatar użytkownika"
              />
              <p className="BookInterview__student--information-name"> Michał Testowy</p>
            </div>
          </div>
          <div className="BookInterview__student--buttons">
            <button className="BookInterview__student--button-show-cv BookInterview-button">
              Pokaż CV
            </button>
            <button className="BookInterview__student--button-disinterest BookInterview-button">
              Brak zainteresowania
            </button>
            <button className="BookInterview__student--button-hired BookInterview-button">
              Zatrudniony
            </button>

            <button
              onClick={handleClick}
              className="BookInterview-button BookInterview__student--button-more "
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <g id="Group_29" data-name="Group 29" transform="translate(-268 -345)">
                  <rect
                    id="Rectangle_13"
                    data-name="Rectangle 13"
                    width="30"
                    height="30"
                    transform="translate(268 345)"
                    fill="#f7f7f7"
                    opacity="0"
                  />
                  <path
                    id="arrow-65"
                    d="M0,14.135l2.24,2.24L9.5,8.982l7.257,7.393L19,14.135,9.5,4.5Z"
                    transform="translate(273 349.563)"
                    fill="#666"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="BookInterview__student--details-container">
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">Ocena przejśćia kursu</div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">5</span>/5
            </div>
          </div>
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">
              Ocena aktywności i zaangażowanie na kursie
            </div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">5</span>/5
            </div>
          </div>
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">
              Ocena kodu w projekcie właśnym
            </div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">5</span>/5
            </div>
          </div>
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">Ocena pracy w zespole scrum</div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">5</span>/5
            </div>
          </div>
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">Preferowane miejsce pracy</div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">Biuro</span>
            </div>
          </div>
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">
              Docelowe miasto, gdzie chce pracować kandydat
            </div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">Warszawa</span>
            </div>
          </div>
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">Oczekiwany typ kontraktu</div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">Umowa o pracę</span>
            </div>
          </div>
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">
              Oczekiwane wynagrodzenie miesięczne netto
            </div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">8000</span>
            </div>
          </div>
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">
              Zgoda na odbycie bezpłatnych praktyk/stażu na początek
            </div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">Tak</span>
            </div>
          </div>
          <div className="BookInterview__student--details">
            <div className="BookInterview__student--details-name">
              Komercyjne doświadczenie w programowaniu
            </div>
            <div className="BookInterview__student--details-value">
              <span className="BookInterview__student-details-span">6 miesięcy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
