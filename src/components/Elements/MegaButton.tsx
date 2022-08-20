import React from 'react';

interface Props {
  buttonTitle: string | JSX.Element;
  classNameAdd: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
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
