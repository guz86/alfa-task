import { BreedListProps } from "../interfaces";

const BreedList = ({ breeds }: BreedListProps) => {
  return (
    <ul>
      {breeds &&
        Object.keys(breeds).map((breedName) => (
          <li key={breedName}>{breedName}</li>
        ))}
    </ul>
  );
};

export default BreedList;
