import React from 'react';

import { TopPanel } from '../../components/TopPanel/TopPanel';
import { MegaButton } from '../../components/Elements/MegaButton';

import '../../assets/css/NotificationFail.css';

export const NotificationFail = () => {
  return (
    <>
      <TopPanel />
      <div className="Notification">
        <p className="Notification__Fail">Twój formularz został błędnie przesłany</p>
        <div className="Notification__Fail--button">
          <MegaButton
            buttonTitle="Wróć do strony głównej."
            onClick={() => {}}
            classNameAdd="Notification__Fail--button-back"
          />
        </div>
      </div>
    </>
  );
};
