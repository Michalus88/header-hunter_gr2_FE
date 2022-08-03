import userEvent from '@testing-library/user-event';
import { useEffect, useState } from 'react';
import { StarButton } from '../Elements/StarButton';

export const StarButtonGroup = () => {
  const [chosenNumber, setChosenNumber] = useState(0);

  // const clicked = (e: number) => {
  //   console.log('Clicked', e);
  //   setChosenNumber(e);
  //   console.log(chosenNumber);
  // };

  useEffect(() => {
    console.log(chosenNumber);
  }, [chosenNumber]);

  return (
    <div className="filter-star-butons-group">
      <StarButton
        classNameAdd="megak-star-secondary"
        buttonTitle={5}
        chosenNumber={chosenNumber}
        onClick={() => setChosenNumber(5)}
      />
      <StarButton
        classNameAdd="megak-star-secondary"
        buttonTitle={4}
        chosenNumber={chosenNumber}
        onClick={() => setChosenNumber(4)}
      />
      <StarButton
        classNameAdd="megak-star-secondary"
        buttonTitle={3}
        chosenNumber={chosenNumber}
        onClick={() => setChosenNumber(3)}
      />
      <StarButton
        classNameAdd="megak-star-secondary"
        buttonTitle={2}
        chosenNumber={chosenNumber}
        onClick={() => setChosenNumber(2)}
      />
      <StarButton
        classNameAdd="megak-star-secondary"
        buttonTitle={1}
        chosenNumber={chosenNumber}
        onClick={() => setChosenNumber(1)}
      />
    </div>
  );
};
