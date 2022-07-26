import React from 'react';

interface Props {
  buttonTitle: string;
  onClick: () => void;
  classNameAdd: string;
}

export const MegaButton = ({ buttonTitle, onClick, classNameAdd }: Props) => {
  return (
    <div className="Wrap">
      <button type="button" className={`${classNameAdd} mega-k-button`} onClick={onClick}>
        {buttonTitle}
      </button>
    </div>
  );
};
