import React from 'react';

interface Props {
  buttonTitle: string | number;
  onClick: () => void;
  classNameAdd: string;
}

export const StarButton = ({ buttonTitle, onClick, classNameAdd }: Props) => {
  return (
    <div className="Wrap">
      <button type="button" className={`${classNameAdd} mega-k-star`} onClick={onClick}>
        {buttonTitle}
        {Number(buttonTitle) === 1 && <i className="pi pi-star-fill star-icon-size1" />}
        {Number(buttonTitle) === 2 && <i className="pi pi-star-fill star-icon-size2" />}
        {Number(buttonTitle) === 3 && <i className="pi pi-star-fill star-icon-size3" />}
        {Number(buttonTitle) === 4 && <i className="pi pi-star-fill star-icon-size4" />}
        {Number(buttonTitle) === 5 && <i className="pi pi-star-fill star-icon-size5" />}
      </button>
    </div>
  );
};
