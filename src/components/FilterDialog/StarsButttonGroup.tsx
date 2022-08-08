import { useEffect, useState } from 'react';
import { StarButton } from '../Elements/StarButton';

interface Props {
  clearAll: boolean;
}

export const StarButtonGroup = ({ clearAll }: Props) => {
  const [chosenNumber, setChosenNumber] = useState(0);

  useEffect(() => {
    setChosenNumber(0);
  }, [clearAll]);

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
