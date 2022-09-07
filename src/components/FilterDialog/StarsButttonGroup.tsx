import { StarButton } from '../Elements/StarButton';

interface Props {
  rating: number | null;
  setRating: (rating: number) => void;
}

export const StarButtonGroup = ({ rating, setRating }: Props) => {
  return (
    <div className="filter-star-butons-group">
      <StarButton buttonValue={1} rating={rating} setRating={() => setRating(1)} />
      <StarButton buttonValue={2} rating={rating} setRating={() => setRating(2)} />
      <StarButton buttonValue={3} rating={rating} setRating={() => setRating(3)} />
      <StarButton buttonValue={4} rating={rating} setRating={() => setRating(4)} />
      <StarButton buttonValue={5} rating={rating} setRating={() => setRating(5)} />
    </div>
  );
};
