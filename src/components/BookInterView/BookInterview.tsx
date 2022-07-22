import React from 'react';
import '../../assets/css/BookInterview.css';
import { Button } from 'primereact/button';
import megaK from '../../assets/img/MegaK.webp';

export const BookInterview = () => {
  return (
    <div className="BookInterview">
      <div className="BookInterview__student">
        //@TODO kontener dla rezerwacji i informacji użytkownika
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
          <p className="BookInterview__student--information"> Michał Testowy</p>
        </div>
        <div className="BookInterview__student--buttons">
          <Button
            className="BookInterview__student--button-show-cv BookInterview-button"
            label="Pokaż CV"
          />
          <Button
            className="BookInterview__student--button-disinterest BookInterview-button"
            label="Brak zainteresowania"
          />
          <Button
            className="BookInterview__student--button-hired BookInterview-button"
            label="Zatrudniony"
          />
        </div>
      </div>
    </div>
  );
};
