import React from 'react';

interface Props {
  rating: number | null;
  setRating: () => void;
  buttonValue: number;
}

export const StarButton = ({ rating, setRating, buttonValue }: Props) => {
  const addGlow = buttonValue === rating ? 'pi-star-fill' : 'pi-star';
  return (
    <div className="Wrap">
      <button type="button" className="megak-star-secondary mega-k-star" onClick={setRating}>
        {buttonValue} <i className={`pi star-icon-size3 ${addGlow}`} />
      </button>
    </div>
  );
};
