import React from 'react';

interface Props {
  buttonTitle: number;
  onClick: (e: any) => void;
  classNameAdd: string;
  chosenNumber: number;
}

export const StarButton = ({ buttonTitle, onClick, classNameAdd, chosenNumber }: Props) => {
  const addGlow = buttonTitle === chosenNumber ? 'pi-star-fill' : 'pi-star';
  return (
    <div className="Wrap">
      <button type="button" className={`${classNameAdd} mega-k-star`} onClick={onClick}>
        {buttonTitle} <i className={`pi star-icon-size3 ${addGlow}`} />
      </button>
    </div>
  );
};
