import { BreedListProps } from "../../interfaces";
import BreedCard from "../BreedCard/BreedCard";
import styles from "./BreedList.module.css";
import { useStore } from "../../store/useStore";

const BreedList: React.FC<BreedListProps> = ({
  breeds,
  images,
}: BreedListProps) => {
  const { likedBreeds, filter } = useStore();

  const filteredBreeds =
    filter === "liked"
      ? breeds.filter((breed) => likedBreeds.has(breed))
      : breeds;

  return (
    <div className={styles.breedListContainer}>
      {filteredBreeds &&
        filteredBreeds.map((breedName) => (
          <BreedCard
            key={breedName}
            breedName={breedName}
            imageUrl={images && images[breedName]}
          />
        ))}
    </div>
  );
};

export default BreedList;
