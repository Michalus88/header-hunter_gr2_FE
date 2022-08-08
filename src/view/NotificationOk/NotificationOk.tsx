import React from 'react';

import { TopPanel } from '../../components/TopPanel/TopPanel';
import { MegaButton } from '../../components/Elements/MegaButton';

import '../../assets/css/NotificationOk.css';

export const NotificationOk = () => {
  return (
    <>
      <TopPanel />
      <div className="Notification">
        <p className="Notification__Ok">Twój formularz został wysłany poprawnie.</p>
        <div className="Notification__Ok--button">
          <MegaButton
            buttonTitle="Wróć do strony głównej."
            onClick={() => {}}
            classNameAdd="Notification__Ok--button-back"
          />
        </div>
      </div>
    </>
  );
};
