import React from 'react';
import { StarButton } from '../Elements/StarButton';

export const StarButtonGroup = () => {
  const clicked = () => {
    console.log('Clicked');
  };

  return (
    <div className="filter-star-butons-group">
      <StarButton classNameAdd="megak-star-secondary" buttonTitle="5" onClick={() => clicked()} />
      <StarButton classNameAdd="megak-star-secondary" buttonTitle="4" onClick={() => clicked()} />
      <StarButton classNameAdd="megak-star-secondary" buttonTitle="3" onClick={() => clicked()} />
      <StarButton classNameAdd="megak-star-secondary" buttonTitle="2" onClick={() => clicked()} />
      <StarButton classNameAdd="megak-star-secondary" buttonTitle="1" onClick={() => clicked()} />
    </div>
  );
};
